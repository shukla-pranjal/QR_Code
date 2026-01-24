import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';

export default function TermsOfService() {
    const lastUpdated = 'January 19, 2026';

    return (
        <>
            <SEO {...seoConfig.pages.terms} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-slate-600">
                            Last Updated: {lastUpdated}
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-slate max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                            <p className="text-slate-700 leading-relaxed">
                                By accessing and using QR Generator ("the Service"), you agree to be bound by these Terms of Service.
                                If you disagree with any part of these terms, you may not access the Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Description of Service</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                QR Generator provides a free online tool for creating, customizing, and downloading QR codes.
                                The Service includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>QR code generation for various content types (URLs, text, etc.)</li>
                                <li>QR code customization options (colors, logos, sizes)</li>
                                <li>QR code scanning capabilities</li>
                                <li>Local storage of QR code history</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">User Responsibilities</h2>
                            <h3 className="text-xl font-semibold text-slate-800 mb-3">Acceptable Use</h3>
                            <p className="text-slate-700 leading-relaxed mb-3">You agree to use the Service only for lawful purposes. You agree not to:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-4">
                                <li>Create QR codes containing illegal, harmful, or malicious content</li>
                                <li>Use QR codes to deceive, defraud, or harm others</li>
                                <li>Create QR codes that violate intellectual property rights</li>
                                <li>Generate QR codes for phishing, malware distribution, or other malicious activities</li>
                                <li>Attempt to interfere with or disrupt the Service</li>
                                <li>Use automated systems to access the Service excessively</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">Content Responsibility</h3>
                            <p className="text-slate-700 leading-relaxed">
                                You are solely responsible for the content you encode in QR codes. You warrant that you have all
                                necessary rights to use and distribute such content.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property</h2>
                            <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Content</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The Service, including its design, code, and documentation, is owned by QR Generator and is protected
                                by copyright, trademark, and other intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">Your Generated QR Codes</h3>
                            <p className="text-slate-700 leading-relaxed">
                                You retain all rights to the QR codes you generate. We claim no ownership over your generated QR codes.
                                You are free to use, modify, and distribute them as you see fit, subject to these terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                                WE DO NOT WARRANT THAT:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>The Service will be uninterrupted, secure, or error-free</li>
                                <li>Generated QR codes will be scannable by all devices or applications</li>
                                <li>The Service will meet your specific requirements</li>
                                <li>Any errors or defects will be corrected</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, QR GENERATOR SHALL NOT BE LIABLE FOR:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700">
                                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                                <li>Loss of profits, data, use, or goodwill</li>
                                <li>Service interruptions or errors</li>
                                <li>Damages resulting from use or inability to use the Service</li>
                                <li>Issues with QR code scannability or functionality</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
                            <p className="text-slate-700 leading-relaxed">
                                You agree to indemnify and hold harmless QR Generator from any claims, damages, losses, or expenses
                                (including legal fees) arising from your use of the Service, violation of these terms, or infringement
                                of any third-party rights.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Availability</h2>
                            <p className="text-slate-700 leading-relaxed">
                                We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time
                                without notice. We shall not be liable to you or any third party for any modification, suspension, or
                                discontinuation of the Service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
                            <p className="text-slate-700 leading-relaxed">
                                The Service may contain links to third-party websites or QR codes may direct to third-party content.
                                We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Termination</h2>
                            <p className="text-slate-700 leading-relaxed">
                                We may terminate or suspend your access to the Service immediately, without prior notice or liability,
                                for any reason, including breach of these Terms. Upon termination, your right to use the Service will
                                immediately cease.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to Terms</h2>
                            <p className="text-slate-700 leading-relaxed">
                                We reserve the right to modify these terms at any time. We will notify users of any material changes
                                by updating the "Last Updated" date. Your continued use of the Service after such modifications
                                constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
                            <p className="text-slate-700 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with applicable laws, without regard
                                to conflict of law provisions.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
                            <p className="text-slate-700 leading-relaxed mb-3">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-slate-700">
                                    Email: <a href="mailto:legal@qrgenerator.com" className="text-blue-600 hover:underline">legal@qrgenerator.com</a>
                                </p>
                            </div>
                        </section>

                        <div className="mt-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-600">
                            <p className="text-sm text-slate-700">
                                <strong>Important:</strong> By using QR Generator, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
