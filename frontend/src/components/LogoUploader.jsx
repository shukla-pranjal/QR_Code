import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export default function LogoUploader({ onLogoChange, currentLogo }) {
    const [preview, setPreview] = useState(currentLogo || null);
    const [logoSize, setLogoSize] = useState(20); // percentage of QR code
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            toast.error('Image size should be less than 2MB');
            return;
        }

        // Check file type
        if (!file.type.startsWith('image/')) {
            toast.error('Please upload an image file');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
            onLogoChange({ image: reader.result, size: logoSize });
            toast.success('Logo uploaded');
        };
        reader.readAsDataURL(file);
    };

    const handleSizeChange = (newSize) => {
        setLogoSize(newSize);
        if (preview) {
            onLogoChange({ image: preview, size: newSize });
        }
    };

    const removeLogo = () => {
        setPreview(null);
        onLogoChange(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        toast.success('Logo removed');
    };

    return (
        <div className="space-y-3">
            <label className="label">Logo (Optional)</label>

            {preview ? (
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-16 h-16 border border-slate-300 rounded flex items-center justify-center bg-slate-50">
                            <img src={preview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-slate-600 mb-1">Logo size: {logoSize}%</p>
                            <input
                                type="range"
                                min="10"
                                max="30"
                                value={logoSize}
                                onChange={(e) => handleSizeChange(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                            />
                        </div>
                        <button
                            onClick={removeLogo}
                            className="btn-ghost p-2"
                            title="Remove logo"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="logo-upload"
                    />
                    <label
                        htmlFor="logo-upload"
                        className="flex items-center justify-center px-4 py-3 border border-dashed border-slate-300 rounded-md cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition-colors"
                    >
                        <svg className="w-5 h-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="text-sm text-slate-600">Upload logo image</span>
                    </label>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 2MB</p>
                </div>
            )}
        </div>
    );
}
