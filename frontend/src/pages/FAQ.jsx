import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const useCases = [
        {
            title: "Packaging",
            icon: "📦",
            description: "Add QR Codes to product boxes, labels, or inserts. Use it to share manuals, how-to videos, or warranty details to help customers access useful content right after purchase without extra steps."
        },
        {
            title: "Posters and Flyers",
            icon: "📄",
            description: "Place QR Codes on marketing materials to drive sign-ups, event registrations, or website visits. Turn offline interest into instant online engagement."
        },
        {
            title: "Business Cards",
            icon: "💼",
            description: "Share all your contact details with a single scan—website, phone, LinkedIn, or calendar link. Ideal for networking events or remote introductions."
        },
        {
            title: "Storefronts and Signage",
            icon: "🏪",
            description: "Place QR Codes on windows, entryways, or tables to help passersby explore menus, leave reviews, or check out new arrivals. They work 24/7, even when your store is closed."
        },
        {
            title: "Email Signatures",
            icon: "✉️",
            description: "Add a QR Code to your email footer so recipients can book meetings, save your contact, follow your socials, or visit your website quickly and easily."
        },
        {
            title: "Tables and Counters",
            icon: "🪑",
            description: "Place QR Codes where customers wait or dine to show menus, collect tips, or request feedback. It's a smart way to enhance the in-person experience."
        }
    ];

    const faqs = [
        {
            question: "How many QR Codes can I create?",
            answer: "You can create unlimited QR codes! There are no restrictions on the number of static QR codes you can generate. All features are completely free."
        },
        {
            question: "Is The QR Code Generator really free?",
            answer: "Yes! All features are 100% free forever. No hidden costs, no subscriptions, no premium tiers. Create unlimited QR codes with full customization options."
        },
        {
            question: "Do static QR Codes expire?",
            answer: "No, static QR codes never expire. Once generated, they work forever as long as the destination URL or content remains valid."
        },
        {
            question: "Can I customize my QR codes?",
            answer: "Absolutely! You can customize colors, add your logo, adjust size, change error correction levels, and optionally add or remove watermarks."
        },
        {
            question: "Can I use QR codes for commercial purposes?",
            answer: "Yes! You're free to use the QR codes you generate for any purpose, including commercial use, marketing campaigns, business cards, and product packaging."
        },
        {
            question: "What formats can I download QR codes in?",
            answer: "Currently, QR codes are available in PNG format with high resolution suitable for both digital and print use."
        },
        {
            question: "Do you track my QR code scans?",
            answer: "No, we don't track scans or store any analytics. Your QR codes are generated client-side in your browser for maximum privacy."
        },
        {
            question: "Can I edit a QR code after creating it?",
            answer: "Static QR codes cannot be edited once created. If you need to change the content, you'll need to generate a new QR code. However, you can save your settings and quickly recreate similar codes."
        },
        {
            question: "What's the difference between static and dynamic QR codes?",
            answer: "Static QR codes contain the actual data (URL, text) embedded in them and cannot be changed. Our service currently focuses on static QR codes, which are perfect for permanent use cases."
        },
        {
            question: "How do I remove the watermark from my QR code?",
            answer: "Simply toggle off the watermark option in the QR code generator settings before downloading. Watermark-free codes are available for free!"
        }
    ];

    return (
        <>
            <SEO
                title="FAQ - QR Code Generator"
                description="Frequently asked questions about QR code generation, customization, and best practices. Learn where and how to use QR codes effectively."
                keywords="QR code FAQ, QR code help, QR code questions, QR code placement"
            />

            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-slate-600">
                            Everything you need to know about creating and using QR codes
                        </p>
                    </div>

                    {/* Where to Place QR Codes */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Where to Place Your QR Code to Improve Scans
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {useCases.map((useCase, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200"
                                >
                                    <div className="text-5xl mb-4">{useCase.icon}</div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Accordion */}
                    <section>
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Common Questions
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="font-semibold text-slate-900 pr-4">
                                            {faq.question}
                                        </span>
                                        <svg
                                            className={`w-5 h-5 text-slate-600 transform transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-4 text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                            Still Have Questions?
                        </h3>
                        <p className="text-slate-700 mb-6">
                            Feel free to reach out to us or start creating your QR code now!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Contact Us
                            </a>
                            <a
                                href="/"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Create QR Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
