import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { seoConfig } from '../../utils/seoConfig';

export default function QRCodeBestPractices() {
    return (
        <>
            <SEO {...seoConfig.articles.bestPractices} />
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
                            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                Design
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            QR Code Design Best Practices for Maximum Scannability
                        </h1>

                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
                            <span>6 min read</span>
                            <span>•</span>
                            <span>Design Guide</span>
                        </div>

                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Creating a QR code is easy, but creating one that scans reliably every time requires attention to design details. Follow these best practices to ensure your QR codes work flawlessly.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Size Matters</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The minimum recommended size for a QR code depends on the scanning distance and amount of data:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Print:</strong> Minimum 2 x 2 cm (0.8 x 0.8 inches) for close-up scanning</li>
                                <li><strong>Posters:</strong> At least 10 x 10 cm for scanning from 1 meter away</li>
                                <li><strong>Billboards:</strong> Scale proportionally to viewing distance (1:10 ratio)</li>
                                <li><strong>Business Cards:</strong> 2-3 cm recommended</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                <strong>Rule of Thumb:</strong> The scanning distance should be about 10 times the size of the QR code. A 5cm QR code can be scanned from 50cm away.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Contrast is Crucial</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                High contrast between the foreground (dark modules) and background (light area) is essential:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Best:</strong> Black on white (traditional QR code colors)</li>
                                <li><strong>Good:</strong> Dark blue on light yellow, dark green on white</li>
                                <li><strong>Avoid:</strong> Light colors on dark backgrounds, similar color combinations</li>
                                <li><strong>Never:</strong> Inverted colors (white on black) – many scanners can't read these</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. The Quiet Zone (White Border)</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The quiet zone is the empty space around your QR code. It's not optional – it's essential:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Minimum:</strong> 4 modules wide (4 times the width of a single square)</li>
                                <li><strong>Recommended:</strong> 6-8 modules for print materials</li>
                                <li><strong>Purpose:</strong> Helps scanners distinguish the QR code from surrounding content</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Adding Logos and Branding</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                You can add logos to QR codes thanks to error correction, but follow these guidelines:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Use High Error Correction:</strong> Set to Level H (30% correction capability)</li>
                                <li><strong>Size Limit:</strong> Logo should cover no more than 20% of the code</li>
                                <li><strong>Central Placement:</strong> Place logos in the center, away from position markers</li>
                                <li><strong>Test Thoroughly:</strong> Test on multiple devices and scanning apps</li>
                                <li><strong>Keep it Simple:</strong> Use simple, high-contrast logos</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Color Selection Best Practices</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                While black and white is safest, you can use colors if you follow these rules:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Dark on Light:</strong> Always use dark foreground on light background</li>
                                <li><strong>Contrast Ratio:</strong> Aim for at least 3:1 contrast ratio</li>
                                <li><strong>Avoid Gradients:</strong> In the data area – solid colors only</li>
                                <li><strong>Brand Colors:</strong> Use brand colors in backgrounds or frames, not in the code itself</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Data Optimization</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Less data means a simpler, more scannable QR code:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Shorten URLs:</strong> Use URL shorteners to reduce character count</li>
                                <li><strong>Remove Unnecessary Data:</strong> Eliminate tracking parameters when possible</li>
                                <li><strong>Simple is Better:</strong> A QR code with less data has larger modules and scans more easily</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Print Quality Considerations</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                For printed QR codes, quality matters:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Resolution:</strong> Use vector formats (SVG, PDF, EPS) when possible</li>
                                <li><strong>Raster Images:</strong> Minimum 300 DPI for print</li>
                                <li><strong>Sharp Edges:</strong> Ensure modules have crisp, clean edges</li>
                                <li><strong>Paper Quality:</strong> Use non-glossy, matte finishes to avoid glare</li>
                                <li><strong>Test Prints:</strong> Always test a printed sample before mass production</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Placement and Context</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Where and how you display your QR code affects scannability:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Eye Level:</strong> Place codes at comfortable viewing height</li>
                                <li><strong>Flat Surfaces:</strong> Avoid curved or wrinkled surfaces when possible</li>
                                <li><strong>Good Lighting:</strong> Ensure adequate lighting for scanning</li>
                                <li><strong>Accessibility:</strong> Make sure users can get close enough to scan</li>
                                <li><strong>Clear Instructions:</strong> Add a brief call-to-action ("Scan to visit website")</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Error Correction Level Selection</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Choose the right error correction level for your use case:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Level L (7%):</strong> Clean environments, digital displays</li>
                                <li><strong>Level M (15%):</strong> General purpose, recommended for most uses</li>
                                <li><strong>Level Q (25%):</strong> Outdoor use, potential for minor damage</li>
                                <li><strong>Level H (30%):</strong> When adding logos, harsh environments</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Testing Before Deployment</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Never deploy a QR code without thorough testing:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Multiple Devices:</strong> Test on various smartphones (iOS and Android)</li>
                                <li><strong>Different Apps:</strong> Try native camera apps and dedicated QR scanners</li>
                                <li><strong>Various Conditions:</strong> Test in different lighting and distances</li>
                                <li><strong>Verify Destination:</strong> Ensure the link or data is correct</li>
                                <li><strong>Track Performance:</strong> Monitor scan rates and adjust if needed</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Making QR codes too small</li>
                                <li>Using low contrast colors</li>
                                <li>Ignoring the quiet zone</li>
                                <li>Placing codes on curved or textured surfaces</li>
                                <li>Not testing before printing thousands of copies</li>
                                <li>Using expired or broken links</li>
                                <li>Overcomplicating the design</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conclusion</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Creating scannable QR codes is about balancing aesthetics with functionality. Follow these best practices, test thoroughly, and you'll create QR codes that work reliably for all users. Remember: a beautiful QR code that doesn't scan is useless, but a scannable QR code that also looks good is perfect.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Perfect QR Code</h3>
                            <Link
                                to="/"
                                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Try Our Generator
                            </Link>
                        </div>
                    </article>

                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link to="/blog/how-qr-codes-work" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">How QR Codes Work</h4>
                                <p className="text-sm text-slate-600">Understanding the technology behind QR codes</p>
                            </Link>
                            <Link to="/blog/qr-code-business-use-cases" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">Business Use Cases</h4>
                                <p className="text-sm text-slate-600">How to use QR codes for business growth</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
