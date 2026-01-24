import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';

export default function PrivacyPolicy() {
    const lastUpdated = 'January 19, 2026';

    return (
        <>
            <SEO {...seoConfig.pages.privacy} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-slate-600">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-slate max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Welcome to QR Generator. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy explains how we handle your information when you use our QR code generation service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Collection</h2>
                            <h3 className="text-xl font-semibold text-slate-800 mb-3">What We Collect</h3>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                QR Generator is designed with privacy in mind. We collect minimal data:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                <li><strong>QR Code Generation Data:</strong> All QR code generation happens locally in your browser. We do not store or transmit the content you encode in QR codes.</li>
                                <li><strong>Contact Form Data:</strong> If you contact us, we collect your name, email, and message content to respond to your inquiry.</li>
                                <li><strong>Analytics Data:</strong> We may collect anonymized usage data (page views, session duration) to improve our service.</li>
                                <li><strong>Browser Data:</strong> Standard web server logs including IP address, browser type, and referring pages.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Data</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                We use the collected information for the following purposes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>To provide and maintain our QR code generation service</li>
                                <li>To respond to your inquiries and support requests</li>
                                <li>To improve and optimize our website and services</li>
                                <li>To analyze usage patterns and enhance user experience</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                <strong>Local Processing:</strong> QR code generation is performed entirely in your browser using JavaScript.
                                Your QR code data never leaves your device unless you explicitly choose to download or share it.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                <strong>Browser Storage:</strong> We use browser local storage to save your QR code history on your device.
                                This data remains on your device and can be cleared at any time through your browser settings.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                <strong>Security Measures:</strong> We implement industry-standard security measures to protect any data we collect,
                                including SSL encryption for data transmission and secure server configurations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                We use essential cookies to ensure the proper functioning of our website. These may include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                                <li><strong>Analytics Cookies:</strong> To understand how visitors use our site (anonymized)</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mt-3">
                                You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                We may use third-party services for analytics and website hosting. These services have their own
                                privacy policies:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>Analytics providers (e.g., Google Analytics) for website usage statistics</li>
                                <li>Hosting providers for website infrastructure</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights (GDPR)</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                If you are in the European Economic Area (EEA), you have certain data protection rights:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li><strong>Access:</strong> Request copies of your personal data</li>
                                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                                <li><strong>Restriction:</strong> Request restriction of processing your data</li>
                                <li><strong>Objection:</strong> Object to our processing of your data</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Our service is not directed to children under 13. We do not knowingly collect personal information
                                from children. If you believe a child has provided us with personal data, please contact us immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
                            <p className="text-slate-700 leading-relaxed">
                                We retain personal data only as long as necessary for the purposes outlined in this policy.
                                Contact form submissions are retained for up to 2 years. Your QR code history stored in your browser
                                remains until you clear it manually.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
                            <p className="text-slate-700 leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any changes by posting
                                the new policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                If you have any questions about this privacy policy or our data practices, please contact us:
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-slate-700">
                                    Email: <a href="mailto:privacy@qrgenerator.com" className="text-blue-600 hover:underline">privacy@qrgenerator.com</a>
                                </p>
                            </div>
                        </section>

                        <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                            <p className="text-sm text-slate-700">
                                <strong>Summary:</strong> QR Generator processes your QR codes locally in your browser. We don't store your QR code content.
                                We only collect minimal data necessary to provide and improve our service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
