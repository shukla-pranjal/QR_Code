import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Pricing() {
    const features = [
        { name: "Unlimited Static QR Codes", included: true },
        { name: "Full Customization (Colors, Logos)", included: true },
        { name: "High-Resolution Downloads", included: true },
        { name: "Watermark-Free QR Codes", included: true },
        { name: "Quick Link Templates", included: true },
        { name: "Multi-URL Support", included: true },
        { name: "App Store Link Generator", included: true },
        { name: "Commercial Use Allowed", included: true },
        { name: "No Expiration", included: true },
        { name: "No Ads", included: true },
        { name: "Privacy Focused", included: true },
        { name: "24/7 Access", included: true }
    ];

    return (
        <>
            <SEO
                title="Pricing - QR Generator"
                description="100% Free QR code generator with unlimited features. No hidden costs, no subscriptions. Create professional QR codes forever."
                keywords="free QR code, QR code pricing, unlimited QR codes, free QR generator"
            />

            <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-xl text-slate-600">
                            Everything you need, completely free. Forever.
                        </p>
                    </div>

                    {/* Pricing Card */}
                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-blue-500 relative overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-semibold">
                                RECOMMENDED
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">Free Forever</h2>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-6xl font-bold text-slate-900">₹0</span>
                                </div>
                                <p className="text-slate-600 text-lg">No credit card required</p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-slate-700 text-lg">{feature.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <Link
                                to="/"
                                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                Start Creating QR Codes Free
                            </Link>
                        </div>
                    </div>

                    {/* Why Free Section */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-16">
                        <h2 className="text-3xl font-bold mb-6 text-center">Why is it Free?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">💡</span>
                                </div>
                                <h3 className="font-semibold mb-2">Open Source Spirit</h3>
                                <p className="text-slate-300 text-sm">
                                    Built to give back to the community and make QR codes accessible to everyone.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🚀</span>
                                </div>
                                <h3 className="font-semibold mb-2">No Hidden Agenda</h3>
                                <p className="text-slate-300 text-sm">
                                    No data tracking, no upsells. Just a powerful tool that does what it promises.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">❤️</span>
                                </div>
                                <h3 className="font-semibold mb-2">Optional Support</h3>
                                <p className="text-slate-300 text-sm">
                                    If you find this useful, you can support development through donations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Pricing FAQs
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    Is there really no catch?
                                </h3>
                                <p className="text-slate-700">
                                    Nope! All features are completely free with no limitations. No trial period, no credit card required, no premium tiers.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    Will it always be free?
                                </h3>
                                <p className="text-slate-700">
                                    Yes! QR Generator will always offer full functionality for free. If we add premium features in the future, the current features will remain free.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    How many QR codes can I create?
                                </h3>
                                <p className="text-slate-700">
                                    Unlimited! Create as many QR codes as you need for personal or commercial use.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    Can I use this for my business?
                                </h3>
                                <p className="text-slate-700">
                                    Absolutely! Use QR codes for marketing, product packaging, business cards, or any commercial purpose.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
                                <h3 className="font-semibold text-slate-900 mb-2">
                                    How can I support this project?
                                </h3>
                                <p className="text-slate-700">
                                    If you find QR Generator useful, you can support development through our{' '}
                                    <Link to="/donate" className="text-blue-600 hover:underline font-semibold">
                                        donation page
                                    </Link>
                                    . Your support helps keep this tool free for everyone!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="text-center mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            Ready to Get Started?
                        </h3>
                        <p className="text-slate-700 mb-6">
                            Join thousands of users creating professional QR codes for free
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/"
                                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                            >
                                Create Your First QR Code
                            </Link>
                            <Link
                                to="/faq"
                                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors border-2 border-slate-300"
                            >
                                View FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
