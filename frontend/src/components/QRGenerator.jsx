import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import QRTemplates, { templates } from './QRTemplates';
import LogoUploader from './LogoUploader';
import QRHistory, { saveToHistory } from './QRHistory';
import QRScanner from './QRScanner';

export default function QRGenerator() {
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [formData, setFormData] = useState({
        size: 300,
        fgColor: '#000000',
        bgColor: '#ffffff',
        errorCorrection: 'M',
        logo: null,
        watermark: false,
    });

    const [qrCode, setQrCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('generate');

    // Dynamic template fields based on selected template
    const [templateData, setTemplateData] = useState({});

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        setTemplateData({});
        setQrCode(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleTemplateDataChange = (field, value) => {
        setTemplateData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleLogoChange = (logoData) => {
        setFormData(prev => ({
            ...prev,
            logo: logoData
        }));
    };

    const generateTextFromTemplate = () => {
        // If template has a generateUrl function, use it
        if (selectedTemplate.generateUrl) {
            return selectedTemplate.generateUrl(templateData);
        }

        // Handle special cases
        if (selectedTemplate.id === 'vcard') {
            return `BEGIN:VCARD\nVERSION:3.0\nFN:${templateData.name || ''}\nTEL:${templateData.phone || ''}\nEMAIL:${templateData.email || ''}\nORG:${templateData.organization || ''}\nEND:VCARD`;
        }

        if (selectedTemplate.id === 'wifi') {
            return selectedTemplate.generateUrl(templateData);
        }

        // For templates without generateUrl, return the first field value
        const firstField = selectedTemplate.fields?.[0];
        return templateData[firstField] || '';
    };

    const generateQRCode = async () => {
        const textToEncode = generateTextFromTemplate();

        if (!textToEncode.trim()) {
            toast.error('Please fill in the required fields');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('/api/generate', {
                text: textToEncode,
                size: parseInt(formData.size),
                fg_color: formData.fgColor,
                bg_color: formData.bgColor,
                error_correction: formData.errorCorrection,
                logo: formData.logo,
            });

            if (response.data.success) {
                let qrImage = response.data.image;

                // Add watermark if enabled
                if (formData.watermark) {
                    qrImage = await addWatermarkToImage(qrImage);
                }

                setQrCode(qrImage);

                saveToHistory({
                    text: textToEncode,
                    image: qrImage,
                    template: selectedTemplate.id,
                    size: formData.size,
                });

                toast.success('QR code generated!');
            }
        } catch (error) {
            console.error('Error generating QR code:', error);
            const errorMessage = error.response?.data?.error || 'Failed to generate QR code';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const addWatermarkToImage = async (base64Image) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                canvas.width = img.width;
                canvas.height = img.height;

                // Draw original image
                ctx.drawImage(img, 0, 0);

                // Add watermark text
                const fontSize = Math.max(10, img.width * 0.03);
                ctx.font = `${fontSize}px Arial`;
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.textAlign = 'center';

                const text = 'QRGenerator.com';
                const textWidth = ctx.measureText(text).width;
                const x = canvas.width / 2;
                const y = canvas.height - fontSize * 0.5;

                // Add background for better visibility
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.fillRect(x - textWidth / 2 - 5, y - fontSize, textWidth + 10, fontSize + 5);

                // Draw text
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.fillText(text, x, y);

                resolve(canvas.toDataURL('image/png'));
            };
            img.src = base64Image;
        });
    };

    const downloadQRCode = (format = 'png') => {
        if (!qrCode) {
            toast.error('Please generate a QR code first');
            return;
        }

        const link = document.createElement('a');
        link.href = qrCode;
        link.download = `qrcode-${selectedTemplate.id}-${Date.now()}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(`Downloaded as ${format.toUpperCase()}!`);
    };

    const loadHistoryItem = (item) => {
        setQrCode(item.image);
        const template = templates.find(t => t.id === item.template) || templates[0];
        setSelectedTemplate(template);
        toast.success('Loaded from history');
    };

    const renderDynamicFields = () => {
        if (!selectedTemplate.fields || selectedTemplate.fields.length === 0) {
            return null;
        }

        return (
            <div className="space-y-3">
                {selectedTemplate.fields.map((field) => {
                    const placeholder = selectedTemplate.placeholder?.[field] || '';
                    const fieldLabel = field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1');

                    // Special handling for certain field types
                    if (field === 'message' || field === 'body') {
                        return (
                            <div key={field}>
                                <label className="label">{fieldLabel}</label>
                                <textarea
                                    value={templateData[field] || ''}
                                    onChange={(e) => handleTemplateDataChange(field, e.target.value)}
                                    placeholder={placeholder}
                                    className="input-field resize-none"
                                    rows="3"
                                />
                            </div>
                        );
                    }

                    if (field === 'encryption') {
                        return (
                            <div key={field}>
                                <label className="label">{fieldLabel}</label>
                                <select
                                    value={templateData[field] || 'WPA'}
                                    onChange={(e) => handleTemplateDataChange(field, e.target.value)}
                                    className="input-field"
                                >
                                    <option value="WPA">WPA/WPA2</option>
                                    <option value="WEP">WEP</option>
                                    <option value="nopass">Open (No password)</option>
                                </select>
                            </div>
                        );
                    }

                    // Default text input
                    const inputType = field.includes('email') ? 'email'
                        : field.includes('phone') ? 'tel'
                            : field.includes('url') || field.includes('Url') ? 'url'
                                : 'text';

                    return (
                        <div key={field}>
                            <label className="label">{fieldLabel}</label>
                            <input
                                type={inputType}
                                value={templateData[field] || ''}
                                onChange={(e) => handleTemplateDataChange(field, e.target.value)}
                                placeholder={placeholder}
                                className="input-field"
                            />
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Main Tabs */}
            <div className="flex border-b border-slate-200 mb-6">
                <button
                    onClick={() => setActiveTab('generate')}
                    className={`tab ${activeTab === 'generate' ? 'tab-active' : ''}`}
                >
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Generate QR Code
                </button>
                <button
                    onClick={() => setActiveTab('scan')}
                    className={`tab ${activeTab === 'scan' ? 'tab-active' : ''}`}
                >
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    Scan QR Code
                </button>
            </div>

            {activeTab === 'generate' ? (
                <div className="space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Left Side - Configuration */}
                        <div className="space-y-6">
                            <div className="card">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Link Templates</h3>

                                {/* Template Selection */}
                                <QRTemplates
                                    selectedTemplate={selectedTemplate}
                                    onSelectTemplate={handleTemplateSelect}
                                    selectedCategory={selectedCategory}
                                    onCategoryChange={handleCategoryChange}
                                />

                                {selectedTemplate && (
                                    <>
                                        <div className="divider"></div>

                                        {/* Dynamic Template Fields */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-700 mb-3">
                                                {selectedTemplate.name} Details
                                            </h4>
                                            {renderDynamicFields()}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Customization Options */}
                            <div className="card">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Customization</h3>

                                {/* Logo Upload */}
                                <LogoUploader
                                    onLogoChange={handleLogoChange}
                                    currentLogo={formData.logo?.image}
                                />

                                <div className="divider"></div>

                                {/* Watermark Toggle */}
                                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                    <div>
                                        <label className="font-medium text-slate-900 text-sm">Add Watermark</label>
                                        <p className="text-xs text-slate-600 mt-0.5">Small "QRGenerator.com" text at bottom</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="watermark"
                                            checked={formData.watermark}
                                            onChange={handleInputChange}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>

                                <div className="divider"></div>

                                {/* Colors */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label htmlFor="fgColor" className="label">QR Color</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="color"
                                                id="fgColor"
                                                name="fgColor"
                                                value={formData.fgColor}
                                                onChange={handleInputChange}
                                                className="h-10 w-16 rounded border border-slate-300 cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={formData.fgColor}
                                                onChange={(e) => setFormData(prev => ({ ...prev, fgColor: e.target.value }))}
                                                className="input-field flex-1"
                                                placeholder="#000000"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="bgColor" className="label">Background</label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="color"
                                                id="bgColor"
                                                name="bgColor"
                                                value={formData.bgColor}
                                                onChange={handleInputChange}
                                                className="h-10 w-16 rounded border border-slate-300 cursor-pointer"
                                            />
                                            <input
                                                type="text"
                                                value={formData.bgColor}
                                                onChange={(e) => setFormData(prev => ({ ...prev, bgColor: e.target.value }))}
                                                className="input-field flex-1"
                                                placeholder="#ffffff"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                {/* Size */}
                                <div>
                                    <label htmlFor="size" className="label">Size: {formData.size}px</label>
                                    <input
                                        type="range"
                                        id="size"
                                        name="size"
                                        min="150"
                                        max="800"
                                        step="50"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                                    />
                                </div>

                                {/* Error Correction */}
                                <div>
                                    <label htmlFor="errorCorrection" className="label">Error Correction</label>
                                    <select
                                        id="errorCorrection"
                                        name="errorCorrection"
                                        value={formData.errorCorrection}
                                        onChange={handleInputChange}
                                        className="input-field"
                                    >
                                        <option value="L">Low (7%)</option>
                                        <option value="M">Medium (15%)</option>
                                        <option value="Q">Quartile (25%)</option>
                                        <option value="H">High (30%)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <button
                                onClick={generateQRCode}
                                disabled={loading}
                                className="btn btn-primary w-full"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generating...
                                    </span>
                                ) : (
                                    'Generate QR Code'
                                )}
                            </button>
                        </div>

                        {/* Right Side - Preview */}
                        <div className="space-y-6">
                            <div className="card min-h-[400px] flex flex-col items-center justify-center">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4 self-start">Preview</h3>

                                {qrCode ? (
                                    <div className="flex flex-col items-center space-y-4 w-full">
                                        <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                                            <img
                                                src={qrCode}
                                                alt="Generated QR Code"
                                                className="max-w-full h-auto"
                                                style={{ width: `${Math.min(formData.size, 400)}px`, height: `${Math.min(formData.size, 400)}px` }}
                                            />
                                        </div>

                                        {/* Download Options */}
                                        <div className="w-full space-y-2">
                                            <button
                                                onClick={() => downloadQRCode('png')}
                                                className="btn btn-primary w-full"
                                            >
                                                <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Download PNG
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center text-slate-400 flex-1 flex flex-col items-center justify-center">
                                        <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                                        </svg>
                                        <p className="text-sm font-medium">Your QR code will appear here</p>
                                        <p className="text-xs mt-1">Select a template and configure your code</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* History Section */}
                    <QRHistory onLoadCode={loadHistoryItem} />
                </div>
            ) : (
                <QRScanner />
            )}
        </div>
    );
}
