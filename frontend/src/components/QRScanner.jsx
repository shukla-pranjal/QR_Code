import React, { useState, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import toast from 'react-hot-toast';

export default function QRScanner() {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [mode, setMode] = useState('camera'); // 'camera' or 'file'
    const scannerRef = useRef(null);
    const html5QrCodeRef = useRef(null);

    const startCameraScanning = async () => {
        try {
            const html5QrCode = new Html5Qrcode("qr-reader");
            html5QrCodeRef.current = html5QrCode;

            await html5QrCode.start(
                { facingMode: "environment" },
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 }
                },
                (decodedText) => {
                    setResult(decodedText);
                    toast.success('QR Code scanned successfully!');
                    stopScanning();
                },
                (errorMessage) => {
                    // Ignore scan errors (happens continuously while scanning)
                }
            );

            setScanning(true);
        } catch (err) {
            console.error('Camera scan error:', err);
            toast.error('Failed to access camera. Please check permissions.');
        }
    };

    const stopScanning = async () => {
        if (html5QrCodeRef.current) {
            try {
                await html5QrCodeRef.current.stop();
                html5QrCodeRef.current = null;
            } catch (err) {
                console.error('Error stopping scanner:', err);
            }
        }
        setScanning(false);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const html5QrCode = new Html5Qrcode("qr-reader-file");
            const decodedText = await html5QrCode.scanFile(file, true);
            setResult(decodedText);
            toast.success('QR Code decoded successfully!');
        } catch (err) {
            console.error('File scan error:', err);
            toast.error('Failed to decode QR code from image');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(result);
        toast.success('Copied to clipboard!');
    };

    return (
        <div className="card" id="scanner">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Scan QR Code</h3>

            {/* Mode Selector */}
            <div className="flex border-b border-slate-200 mb-4">
                <button
                    onClick={() => setMode('camera')}
                    className={`tab ${mode === 'camera' ? 'tab-active' : ''}`}
                >
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Camera
                </button>
                <button
                    onClick={() => setMode('file')}
                    className={`tab ${mode === 'file' ? 'tab-active' : ''}`}
                >
                    <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Upload Image
                </button>
            </div>

            {mode === 'camera' ? (
                <div className="space-y-4">
                    <div id="qr-reader" ref={scannerRef} className="w-full rounded-md overflow-hidden border border-slate-200"></div>

                    {!scanning ? (
                        <button onClick={startCameraScanning} className="btn btn-primary w-full">
                            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                            </svg>
                            Start Camera Scanner
                        </button>
                    ) : (
                        <button onClick={stopScanning} className="btn btn-secondary w-full">
                            Stop Scanning
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <div id="qr-reader-file" className="hidden"></div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="qr-file-upload"
                    />
                    <label
                        htmlFor="qr-file-upload"
                        className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-md cursor-pointer hover:border-slate-400 hover:bg-slate-50 transition-colors"
                    >
                        <svg className="w-12 h-12 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-sm text-slate-600">Click to upload QR code image</p>
                        <p className="text-xs text-slate-500 mt-1">PNG, JPG, or any image format</p>
                    </label>
                </div>
            )}

            {/* Result Display */}
            {result && (
                <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-md fade-in">
                    <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm font-semibold text-slate-900">Scanned Content:</h4>
                        <button
                            onClick={copyToClipboard}
                            className="text-xs text-slate-600 hover:text-slate-900 flex items-center"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy
                        </button>
                    </div>
                    <p className="text-sm text-slate-700 break-all">{result}</p>
                </div>
            )}
        </div>
    );
}
