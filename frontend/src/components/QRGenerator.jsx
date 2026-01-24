import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import QRTemplates, { templates } from './QRTemplates';
import LogoUploader from './LogoUploader';
import QRHistory, { saveToHistory } from './QRHistory';
import QRScanner from './QRScanner';

export default function QRGenerator() {
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
    const [formData, setFormData] = useState({
        text: '',
        size: 300,
        fgColor: '#000000',
        bgColor: '#ffffff',
        errorCorrection: 'M',
        logo: null,
    });

    const [qrCode, setQrCode] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('generate'); // 'generate' or 'scan'

    // Template-specific form fields
    const [templateFields, setTemplateFields] = useState({
        // URL
        url: '',
        // Text
        text: '',
        // WiFi
        ssid: '',
        password: '',
        encryption: 'WPA',
        // vCard
        name: '',
        phone: '',
        email: '',
        organization: '',
        // Email
        emailSubject: '',
        emailBody: '',
        // SMS/WhatsApp
        message: '',
    });

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        setQrCode(null); // Clear previous QR code
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTemplateFieldChange = (e) => {
        const { name, value } = e.target;
        setTemplateFields(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogoChange = (logoData) => {
        setFormData(prev => ({
            ...prev,
            logo: logoData
        }));
    };

    const generateTextFromTemplate = () => {
        switch (selectedTemplate.id) {
            case 'url':
                return templateFields.url;
            case 'text':
                return templateFields.text;
            case 'wifi':
                return `WIFI:T:${templateFields.encryption};S:${templateFields.ssid};P:${templateFields.password};;`;
            case 'vcard':
                return `BEGIN:VCARD\nVERSION:3.0\nFN:${templateFields.name}\nTEL:${templateFields.phone}\nEMAIL:${templateFields.email}\nORG:${templateFields.organization}\nEND:VCARD`;
            case 'email':
                return `mailto:${templateFields.email}?subject=${encodeURIComponent(templateFields.emailSubject)}&body=${encodeURIComponent(templateFields.emailBody)}`;
            case 'sms':
                return `sms:${templateFields.phone}?body=${encodeURIComponent(templateFields.message)}`;
            case 'phone':
                return `tel:${templateFields.phone}`;
            case 'whatsapp':
                return `https://wa.me/${templateFields.phone}?text=${encodeURIComponent(templateFields.message)}`;
            default:
                return '';
        }
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
                setQrCode(response.data.image);

                // Save to history
                saveToHistory({
                    text: textToEncode,
                    image: response.data.image,
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

    const downloadQRCode = (format = 'png') => {
        if (!qrCode) {
            toast.error('Please generate a QR code first');
            return;
        }

        const link = document.createElement('a');
        link.href = qrCode;
        link.download = `qrcode-${Date.now()}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success(`Downloaded as ${format.toUpperCase()}!`);
    };

    const loadHistoryItem = (item) => {
        setFormData(prev => ({
            ...prev,
            text: item.text,
            size: item.size || 300,
        }));
        setQrCode(item.image);

        // Find and set template
        const template = templates.find(t => t.id === item.template) || templates[0];
        setSelectedTemplate(template);

        toast.success('Loaded from history');
    };

    const renderTemplateFields = () => {
        switch (selectedTemplate.id) {
            case 'url':
                return (
                    <div>
                        <label htmlFor="url" className="label">Website URL</label>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            value={templateFields.url}
                            onChange={handleTemplateFieldChange}
                            placeholder="https://example.com"
                            className="input-field"
                        />
                    </div>
                );

            case 'text':
                return (
                    <div>
                        <label htmlFor="text" className="label">Text Content</label>
                        <textarea
                            id="text"
                            name="text"
                            value={templateFields.text}
                            onChange={handleTemplateFieldChange}
                            placeholder="Enter any text..."
                            className="input-field resize-none"
                            rows="4"
                        />
                    </div>
                );

            case 'wifi':
                return (
                    <>
                        <div>
                            <label htmlFor="ssid" className="label">Network Name (SSID)</label>
                            <input
                                type="text"
                                id="ssid"
                                name="ssid"
                                value={templateFields.ssid}
                                onChange={handleTemplateFieldChange}
                                placeholder="MyWiFi"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="label">Password</label>
                            <input
                                type="text"
                                id="password"
                                name="password"
                                value={templateFields.password}
                                onChange={handleTemplateFieldChange}
                                placeholder="Enter password"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="encryption" className="label">Security Type</label>
                            <select
                                id="encryption"
                                name="encryption"
                                value={templateFields.encryption}
                                onChange={handleTemplateFieldChange}
                                className="input-field"
                            >
                                <option value="WPA">WPA/WPA2</option>
                                <option value="WEP">WEP</option>
                                <option value="nopass">Open (No password)</option>
                            </select>
                        </div>
                    </>
                );

            case 'vcard':
                return (
                    <>
                        <div>
                            <label htmlFor="name" className="label">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={templateFields.name}
                                onChange={handleTemplateFieldChange}
                                placeholder="John Doe"
                                className="input-field"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="phone" className="label">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={templateFields.phone}
                                    onChange={handleTemplateFieldChange}
                                    placeholder="+1234567890"
                                    className="input-field"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={templateFields.email}
                                    onChange={handleTemplateFieldChange}
                                    placeholder="john@example.com"
                                    className="input-field"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="organization" className="label">Organization (Optional)</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={templateFields.organization}
                                onChange={handleTemplateFieldChange}
                                placeholder="Company Name"
                                className="input-field"
                            />
                        </div>
                    </>
                );

            case 'email':
                return (
                    <>
                        <div>
                            <label htmlFor="email" className="label">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={templateFields.email}
                                onChange={handleTemplateFieldChange}
                                placeholder="recipient@example.com"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="emailSubject" className="label">Subject (Optional)</label>
                            <input
                                type="text"
                                id="emailSubject"
                                name="emailSubject"
                                value={templateFields.emailSubject}
                                onChange={handleTemplateFieldChange}
                                placeholder="Email subject"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="emailBody" className="label">Message (Optional)</label>
                            <textarea
                                id="emailBody"
                                name="emailBody"
                                value={templateFields.emailBody}
                                onChange={handleTemplateFieldChange}
                                placeholder="Email message"
                                className="input-field resize-none"
                                rows="3"
                            />
                        </div>
                    </>
                );

            case 'sms':
            case 'whatsapp':
                return (
                    <>
                        <div>
                            <label htmlFor="phone" className="label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={templateFields.phone}
                                onChange={handleTemplateFieldChange}
                                placeholder="+1234567890"
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="label">Message (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={templateFields.message}
                                onChange={handleTemplateFieldChange}
                                placeholder="Your message"
                                className="input-field resize-none"
                                rows="3"
                            />
                        </div>
                    </>
                );

            case 'phone':
                return (
                    <div>
                        <label htmlFor="phone" className="label">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={templateFields.phone}
                            onChange={handleTemplateFieldChange}
                            placeholder="+1234567890"
                            className="input-field"
                        />
                    </div>
                );

            default:
                return null;
        }
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
                                <h3 className="text-lg font-semibold text-slate-900 mb-4">Configuration</h3>

                                {/* Template Selection */}
                                <QRTemplates
                                    selectedTemplate={selectedTemplate}
                                    onSelectTemplate={handleTemplateSelect}
                                />

                                <div className="divider"></div>

                                {/* Template-specific fields */}
                                <div className="space-y-3">
                                    {renderTemplateFields()}
                                </div>
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
                                        <p className="text-xs mt-1">Configure and generate your code</p>
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
