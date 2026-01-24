import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { seoConfig } from '../../utils/seoConfig';

export default function QRCodeSecurity() {
    return (
        <>
            <SEO {...seoConfig.articles.security} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>

                    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Security
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            QR Code Security: Protecting Yourself from Scams
                        </h1>

                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
                            <span>5 min read</span>
                            <span>•</span>
                            <span>Security Guide</span>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                While QR codes are incredibly convenient, they can also be exploited by cybercriminals. Learn how to scan safely and protect yourself from QR code scams and malicious attacks.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Common QR Code Threats</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Understanding the risks is the first step to staying safe:
                            </p>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Quishing (QR Phishing)</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Attackers create malicious QR codes that redirect to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Fake Websites:</strong> Copies of legitimate sites designed to steal login credentials</li>
                                <li><strong>Credential Harvesting:</strong> Pages requesting sensitive personal information</li>
                                <li><strong>Banking Scams:</strong> Fraudulent payment portals mimicking real banks</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Malware Distribution</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                QR codes can link to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Automatic app downloads containing malware</li>
                                <li>Websites with drive-by download exploits</li>
                                <li>Trojans disguised as legitimate software</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Payment Fraud</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Scammers replace legitimate payment QR codes with their own:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Stickers over genuine codes at parking meters or restaurants</li>
                                <li>Fake charity donation codes</li>
                                <li>Fraudulent invoice payment codes</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Location Tracking</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Some QR codes are designed to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Collect your location data without consent</li>
                                <li>Track your digital footprint across websites</li>
                                <li>Build profiles for targeted attacks</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Scan QR Codes Safely</h2>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">Before Scanning</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Verify the Source:</strong> Only scan QR codes from trusted, legitimate sources</li>
                                <li><strong>Check for Tampering:</strong> Look for stickers or overlays on printed codes</li>
                                <li><strong>Context Matters:</strong> Be suspicious of random QR codes in public places</li>
                                <li><strong>Official Channels:</strong> When possible, use QR codes from official websites or apps</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">During Scanning</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Preview URLs:</strong> Always check the destination URL before opening</li>
                                <li><strong>Look for HTTPS:</strong> Ensure the URL starts with "https://"</li>
                                <li><strong>Verify Domain:</strong> Check that the domain matches the expected organization</li>
                                <li><strong>Watch for Typos:</strong> Scammers use similar-looking domains (e.g., "paypa1.com" instead of "paypal.com")</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">After Scanning</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Don't Auto-Open:</strong> Review the link before visiting</li>
                                <li><strong>No Credentials:</strong> Never enter passwords from a QR code link unless absolutely verified</li>
                                <li><strong>Payment Verification:</strong> Double-check payment recipient details</li>
                                <li><strong>Report Suspicious Codes:</strong> Alert authorities or the organization being impersonated</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Red Flags to Watch For</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Be especially cautious when you encounter:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Unsolicited QR Codes:</strong> Codes sent via email, text, or social media from unknown sources</li>
                                <li><strong>Too Good to Be True:</strong> Promises of free products, large discounts, or prize winnings</li>
                                <li><strong>Urgency Tactics:</strong> "Act now" or "Limited time" pressure to scan immediately</li>
                                <li><strong>Unusual Locations:</strong> Random QR codes on parked cars, street poles, or public bathrooms</li>
                                <li><strong>Mismatched Context:</strong> Government agencies or banks asking for QR code payments</li>
                                <li><strong>Shortened URLs:</strong> Links that hide the actual destination (bit.ly, tinyurl, etc.)</li>
                                <li><strong>Login Requests:</strong> Any QR code asking you to log in to an account</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Best Practices for Safe Scanning</h2>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Use a Secure QR Scanner App</h3>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Choose a reputable scanner that:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Shows URL preview before opening</li>
                                <li>Checks links against security databases</li>
                                <li>Offers security warnings for suspicious links</li>
                                <li>Doesn't auto-redirect without confirmation</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">2. Keep Your Device Secure</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Keep your operating system and apps updated</li>
                                <li>Use antivirus software on your phone</li>
                                <li>Enable automatic security updates</li>
                                <li>Review app permissions regularly</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">3. Verify Before Taking Action</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Payment Codes:</strong> Confirm recipient name and amount before sending money</li>
                                <li><strong>Downloads:</strong> Only download from official app stores</li>
                                <li><strong>Login Pages:</strong> Navigate directly to the site instead of using the QR link</li>
                                <li><strong>Personal Info:</strong> Never provide sensitive data through QR-linked forms</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-slate-800 mb-3">4. Educate Yourself and Others</h3>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Stay informed about latest QR code scams</li>
                                <li>Teach family members, especially elderly, about risks</li>
                                <li>Share security tips with your community</li>
                                <li>Report scams to relevant authorities</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">For Businesses: Creating Secure QR Codes</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you create QR codes for your business, protect your customers:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Use Your Domain:</strong> Link to your official domain, not shortened URLs</li>
                                <li><strong>HTTPS Only:</strong> Always use secure HTTPS connections</li>
                                <li><strong>Tamper-Proof Placement:</strong> Print codes on surfaces that can't easily be covered</li>
                                <li><strong>Regular Monitoring:</strong> Check physical QR codes regularly for tampering</li>
                                <li><strong>Clear Branding:</strong> Include your logo and company name near the code</li>
                                <li><strong>Educate Customers:</strong> Tell customers where to expect your QR codes</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What to Do If You've Been Scammed</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you suspect you've scanned a malicious QR code:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Disconnect:</strong> Turn off WiFi and mobile data immediately</li>
                                <li><strong>Don't Enter Info:</strong> Stop if you haven't submitted sensitive data yet</li>
                                <li><strong>Change Passwords:</strong> Update passwords for any accounts you accessed</li>
                                <li><strong>Monitor Accounts:</strong> Watch for unauthorized transactions</li>
                                <li><strong>Scan for Malware:</strong> Run a complete antivirus scan</li>
                                <li><strong>Report It:</strong> Contact your bank, credit card company, or local authorities</li>
                                <li><strong>Document Everything:</strong> Take screenshots and save evidence</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conclusion</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                QR codes are safe when used responsibly. The key is to stay vigilant, verify before you trust, and never rush when scanning. With these precautions, you can enjoy the convenience of QR codes while protecting yourself from scams.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Remember: When in doubt, don't scan. It's always safer to manually type a URL or use official apps than to risk scanning a potentially malicious QR code.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200 bg-red-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">⚠️ Stay Safe</h3>
                            <p className="text-slate-700 mb-4">
                                Always preview URLs before opening, verify payment recipients, and never scan codes from untrusted sources.
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-slate-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Create Secure QR Codes
                            </Link>
                        </div>
                    </article>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link to="/blog/qr-code-best-practices" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">QR Code Best Practices</h4>
                                <p className="text-sm text-slate-600">Create scannable, reliable QR codes</p>
                            </Link>
                            <Link to="/blog/qr-code-business-use-cases" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">Business Use Cases</h4>
                                <p className="text-sm text-slate-600">Leverage QR codes for business growth</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
