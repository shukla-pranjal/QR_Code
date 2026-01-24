import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { seoConfig } from '../../utils/seoConfig';

export default function HowQRCodesWork() {
    return (
        <>
            <SEO {...seoConfig.articles.howQRCodesWork} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link to="/blog" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                Technical
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            How QR Codes Work: A Complete Technical Guide
                        </h1>

                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
                            <span>8 min read</span>
                            <span>•</span>
                            <span>Technical Guide</span>
                        </div>

                        {/* Article Content */}
                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                QR (Quick Response) codes have become ubiquitous in our digital world, appearing on everything from restaurant menus to product packaging. But have you ever wondered how these black-and-white squares actually work? Let's dive deep into the technology behind QR codes.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What is a QR Code?</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                A QR code is a two-dimensional barcode that can store significantly more information than traditional one-dimensional barcodes. While a standard barcode can only hold about 20 digits, a QR code can store up to 7,089 numeric characters or 4,296 alphanumeric characters.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Anatomy of a QR Code</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Every QR code consists of several key components:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Position Markers (Finder Patterns):</strong> The three large squares in the corners help scanners identify and orient the QR code.</li>
                                <li><strong>Alignment Markers:</strong> Smaller squares that help with precise scanning, especially for larger codes.</li>
                                <li><strong>Timing Pattern:</strong> Alternating black and white modules that help determine the size and version of the QR code.</li>
                                <li><strong>Format Information:</strong> Contains details about error correction level and mask pattern.</li>
                                <li><strong>Version Information:</strong> Present in larger QR codes (version 7 and above).</li>
                                <li><strong>Data and Error Correction:</strong> The actual encoded information along with error correction codes.</li>
                                <li><strong>Quiet Zone:</strong> The empty border around the QR code that helps scanners distinguish it from its background.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">QR Code Versions and Capacity</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                QR codes come in 40 different versions, ranging from Version 1 (21×21 modules) to Version 40 (177×177 modules). Each version up adds 4 modules per side. The version you need depends on:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>Amount of data to encode</li>
                                <li>Type of data (numeric, alphanumeric, binary, or Kanji)</li>
                                <li>Error correction level chosen</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Error Correction: The Secret Superpower</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                One of the most impressive features of QR codes is their built-in error correction capability using Reed-Solomon error correction. This means a QR code can still be read even if part of it is damaged or obscured.
                            </p>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                There are four levels of error correction:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Level L:</strong> ~7% of codewords can be restored</li>
                                <li><strong>Level M:</strong> ~15% of codewords can be restored</li>
                                <li><strong>Level Q:</strong> ~25% of codewords can be restored</li>
                                <li><strong>Level H:</strong> ~30% of codewords can be restored</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                This is why you can often add logos to QR codes without breaking them—the error correction compensates for the obscured area.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How Data is Encoded</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                The encoding process involves several steps:
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-slate-700 mb-6 ml-4">
                                <li><strong>Data Analysis:</strong> The input is analyzed to determine the most efficient encoding mode (numeric, alphanumeric, byte, or Kanji).</li>
                                <li><strong>Mode Indicator:</strong> A 4-bit mode indicator is added to specify the encoding type.</li>
                                <li><strong>Character Count:</strong> The number of characters is encoded.</li>
                                <li><strong>Data Encoding:</strong> The actual data is converted to binary using the selected mode.</li>
                                <li><strong>Terminator and Padding:</strong> A terminator pattern (0000) and padding bytes are added if needed.</li>
                                <li><strong>Error Correction:</strong> Error correction codewords are generated using Reed-Solomon algorithm.</li>
                                <li><strong>Module Placement:</strong> The final bit sequence is placed into the QR matrix following specific rules.</li>
                                <li><strong>Masking:</strong> One of eight mask patterns is applied to ensure optimal scannability.</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Scanning Process</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                When you scan a QR code, here's what happens:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li>The scanner locates the QR code using the three position markers</li>
                                <li>It determines the code's orientation and size</li>
                                <li>The timing patterns help calculate the exact grid size</li>
                                <li>The format information reveals the error correction level and mask pattern</li>
                                <li>The mask is removed to reveal the actual data</li>
                                <li>Error correction is applied if needed</li>
                                <li>The data is decoded according to the mode indicator</li>
                                <li>The result is presented to the user</li>
                            </ol>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why QR Codes are So Reliable</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Several factors contribute to QR code reliability:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Redundancy:</strong> Error correction provides significant redundancy</li>
                                <li><strong>Orientation Freedom:</strong> Can be scanned from any angle</li>
                                <li><strong>High Contrast:</strong> Black and white provides maximum contrast</li>
                                <li><strong>Smart Masking:</strong> Mask patterns prevent problematic configurations</li>
                                <li><strong>Defined Quiet Zone:</strong> Ensures clear boundaries</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Modern Applications and Extensions</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Today's QR codes have evolved beyond basic black and white squares:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4">
                                <li><strong>Colored QR Codes:</strong> Using different colors while maintaining sufficient contrast</li>
                                <li><strong>Design QR Codes:</strong> Incorporating logos, images, and custom designs</li>
                                <li><strong>Dynamic QR Codes:</strong> Short URLs that redirect to changeable destinations</li>
                                <li><strong>Micro QR Codes:</strong> Smaller versions for limited space</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conclusion</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                QR codes represent an elegant solution to the challenge of encoding large amounts of data in a compact, scannable format. Their robust error correction, flexible capacity, and ease of use have made them an essential technology in our increasingly digital world.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Understanding how QR codes work helps you create better, more reliable codes for your applications. Whether you're using them for marketing, payments, or information sharing, knowing the technical details ensures you're using this technology to its full potential.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Create Your Own QR Code?</h3>
                            <Link
                                to="/"
                                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Try Our QR Generator
                            </Link>
                        </div>
                    </article>

                    {/* Related Articles */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link to="/blog/qr-code-best-practices" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">QR Code Design Best Practices</h4>
                                <p className="text-sm text-slate-600">Learn how to design QR codes for maximum scannability</p>
                            </Link>
                            <Link to="/blog/qr-code-security" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                                <h4 className="font-semibold text-slate-900 mb-2">QR Code Security Tips</h4>
                                <p className="text-sm text-slate-600">Stay safe while scanning QR codes</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
