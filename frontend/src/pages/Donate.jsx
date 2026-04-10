import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

export default function Donate() {
    const [upiQRCode1, setUpiQRCode1] = useState('');
    const [upiQRCode2, setUpiQRCode2] = useState('');

    const upiId1 = 'officalakumar@ybl';
    const upiId2 = 'pranjalmss2005@okhdfcbank';
    const buyMeCoffeeUrl = 'https://buymeacoffee.com/shukla_pranjal';

    useEffect(() => {
        // Generate QR codes for UPI IDs
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        // Generate QR for UPI 1
        fetch(`${apiUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `upi://pay?pa=${upiId1}&pn=Pranjal Kumar Shukla&cu=INR`,
                size: 300,
                fg_color: '#000000',
                bg_color: '#ffffff',
                error_correction: 'H'
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) setUpiQRCode1(data.image);
            })
            .catch(err => console.error('Failed to generate UPI QR 1:', err));

        // Generate QR for UPI 2
        fetch(`${apiUrl}/api/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `upi://pay?pa=${upiId2}&pn=Pranjal Kumar Shukla&cu=INR`,
                size: 300,
                fg_color: '#000000',
                bg_color: '#ffffff',
                error_correction: 'H'
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) setUpiQRCode2(data.image);
            })
            .catch(err => console.error('Failed to generate UPI QR 2:', err));
    }, []);

    return (
        <>
            <SEO
                title="Support & Donate - QR Generator"
                description="Support the development of QR Generator. Your contributions help keep this tool free and continuously improving."
                keywords="donate, support, UPI payment, buy me a coffee"
            />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Support Our Work ❤️
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            QR Generator is a free tool built with passion. Your support helps keep it running and continuously improving!
                        </p>
                    </div>

                    {/* Buy Me a Coffee */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-slate-200 hover:shadow-2xl transition-shadow">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-3xl">☕</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Buy Me a Coffee</h2>
                            <p className="text-slate-600 text-center mb-6">
                                Support via Buy Me a Coffee - Quick and easy!
                            </p>
                            <a
                                href={buyMeCoffeeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.613-.336.069-.474.365-.446.695l.668 6.374.333 3.199c.05.469.092.945.19 1.407.222 1.041.858 1.689 1.902 1.977.525.145 1.07.187 1.609.245.986.106 1.987.068 2.976.037 1.026-.032 2.076-.088 3.01-.565.942-.48 1.38-1.35 1.533-2.338.033-.221.05-.443.077-.664l1.034-10.006a.482.482 0 01.531-.448l.993.09a1.999 1.999 0 001.997-1.534l.032-.186.093-.538.015-.087.011-.062.021-.123c.02-.116.04-.232.06-.347l.04-.235.255-1.49z" />
                                </svg>
                                Buy Me a Coffee
                            </a>
                        </div>
                    </div>

                    {/* UPI Payment Options */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💳</span>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">UPI Payment (India)</h2>
                            <p className="text-slate-600">
                                Scan QR code or use UPI ID for instant payment
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* UPI Option 1 */}
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">UPI Option 1</h3>
                                {upiQRCode1 ? (
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={upiQRCode1}
                                            alt="UPI QR Code 1"
                                            className="w-48 h-48 mb-4 border border-slate-200 rounded-lg"
                                        />
                                        <div className="bg-slate-100 px-4 py-2 rounded-lg w-full">
                                            <p className="text-sm text-slate-600 text-center">UPI ID</p>
                                            <p className="text-sm font-mono font-semibold text-slate-900 text-center break-all">
                                                {upiId1}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-48">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
                                    </div>
                                )}
                            </div>

                            {/* UPI Option 2 */}
                            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                                <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">UPI Option 2</h3>
                                {upiQRCode2 ? (
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={upiQRCode2}
                                            alt="UPI QR Code 2"
                                            className="w-48 h-48 mb-4 border border-slate-200 rounded-lg"
                                        />
                                        <div className="bg-slate-100 px-4 py-2 rounded-lg w-full">
                                            <p className="text-sm text-slate-600 text-center">UPI ID</p>
                                            <p className="text-sm font-mono font-semibold text-slate-900 text-center break-all">
                                                {upiId2}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center h-48">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Thank You Message */}
                    <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank You! 🙏</h3>
                        <p className="text-slate-700 max-w-xl mx-auto">
                            Every contribution, no matter how small, helps keep this project alive and motivates continued development.
                            Your support is deeply appreciated!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
