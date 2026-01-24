import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';

export default function Blog() {
    const articles = [
        {
            slug: 'how-qr-codes-work',
            title: 'How QR Codes Work: A Complete Technical Guide',
            description: 'Understand the technology behind QR codes - encoding, error correction, versions, and technical specifications explained.',
            category: 'Technical',
            readTime: '8 min read',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            )
        },
        {
            slug: 'qr-code-best-practices',
            title: 'QR Code Design Best Practices for Maximum Scannability',
            description: 'Master QR code design with our comprehensive guide on size, colors, contrast, logo placement, and testing.',
            category: 'Design',
            readTime: '6 min read',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            slug: 'qr-code-business-use-cases',
            title: '10 Powerful QR Code Use Cases for Business Growth',
            description: 'Discover how businesses use QR codes for marketing, payments, events, customer engagement, and more.',
            category: 'Business',
            readTime: '7 min read',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            slug: 'qr-code-security',
            title: 'QR Code Security: Protecting Yourself from Scams',
            description: 'Learn how to stay safe when scanning QR codes. Identify scams, verify codes, and follow security best practices.',
            category: 'Security',
            readTime: '5 min read',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            slug: 'qr-code-history',
            title: 'The Evolution of QR Codes: From Automotive to Everywhere',
            description: 'Explore the fascinating history of QR codes from their invention in 1994 to their global adoption today.',
            category: 'History',
            readTime: '6 min read',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <SEO {...seoConfig.pages.blog} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            QR Code Blog & Resources
                        </h1>
                        <p className="text-xl text-slate-600">
                            Learn everything about QR codes - from technical guides to best practices
                        </p>
                    </div>

                    {/* Featured Article */}
                    <div className="mb-12">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                            <div className="p-8 md:p-12 text-white">
                                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                                    Featured Article
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                    {articles[0].title}
                                </h2>
                                <p className="text-lg text-slate-200 mb-6 max-w-2xl">
                                    {articles[0].description}
                                </p>
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="text-sm text-slate-300">{articles[0].category}</span>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-sm text-slate-300">{articles[0].readTime}</span>
                                </div>
                                <Link
                                    to={`/blog/${articles[0].slug}`}
                                    className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                                >
                                    Read Article
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {articles.slice(1).map((article) => (
                            <Link
                                key={article.slug}
                                to={`/blog/${article.slug}`}
                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                        {article.icon}
                                    </div>
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-slate-500">
                                        <span>{article.readTime}</span>
                                        <span className="text-blue-600 group-hover:translate-x-2 transition-transform inline-flex items-center">
                                            Read more
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Ready to Create Your QR Code?
                        </h2>
                        <p className="text-lg text-slate-700 mb-6">
                            Put your knowledge into practice with our free QR code generator
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                        >
                            Start Generating
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
