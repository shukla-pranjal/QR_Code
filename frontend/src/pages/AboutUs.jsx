import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';

export default function AboutUs() {
    return (
        <>
            <SEO {...seoConfig.pages.about} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            About QR Generator
                        </h1>
                        <p className="text-xl text-slate-600">
                            Making QR code generation simple, free, and accessible for everyone
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-4">
                            QR Generator was created with a simple goal: to provide a free, easy-to-use tool for creating
                            custom QR codes without limitations. We believe that QR code technology should be accessible
                            to everyone, from small businesses to individual users.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Whether you need a QR code for your business card, website, product packaging, or marketing
                            campaign, our tool makes it quick and simple to create professional QR codes with
                            customization options.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Us</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                                <p className="text-slate-600">
                                    Generate QR codes instantly with our optimized tool. No waiting, no delays.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">100% Secure</h3>
                                <p className="text-slate-600">
                                    Your data is processed locally in your browser. We don't store or track your QR codes.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Fully Customizable</h3>
                                <p className="text-slate-600">
                                    Choose colors, add logos, adjust sizes, and create QR codes that match your brand.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Always Free</h3>
                                <p className="text-slate-600">
                                    No hidden costs, no subscriptions. All features available to everyone, forever.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Developer Section */}
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-lg p-8 text-white mb-12">
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-3">Meet the Developer</h2>
                                <p className="text-xl text-slate-200 mb-2">Pranjal Kumar Shukla</p>
                                <p className="text-slate-300 mb-4">Backend & Machine Learning Developer</p>
                                <p className="text-slate-200 leading-relaxed mb-4">
                                    I'm a passionate developer focused on building scalable backend systems and AI-driven solutions.
                                    QR Generator is a free tool I created to give back to the developer community.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/PranjalKumar09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-slate-200 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/pranjalkumar09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-slate-200 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://leetcode.com/u/coderkumarshukla"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-slate-200 hover:text-white transition-colors"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.66-7.872.374l-4.278 4.126c-.55.527-.974 1.182-1.253 1.898-.28.717-.422 1.48-.42 2.25.002.77.145 1.533.428 2.25.282.717.708 1.371 1.26 1.896l4.277 4.193c2.966 2.923 7.676 2.923 10.642 0l2.397-2.392c1.018-1.018 1.018-2.67 0-3.688-1.018-1.018-2.67-1.018-3.688 0l-2.397 2.392c-1.293 1.293-3.346 1.293-4.639 0l-4.277-4.193a3.182 3.182 0 0 1-.679-1.022 3.306 3.306 0 0 1-.247-1.264c-.006-.417.06-.834.197-1.229.137-.395.343-.76.61-1.073l4.278-4.126c1.293-1.293 3.346-1.293 4.639 0l3.501 2.831c1.149.93 2.823.753 3.753-.395.93-1.149.753-2.823-.395-3.753l-3.501-2.831c-2.475-2.002-6.047-1.975-8.483.083l-.019-.019L5.116.876A1.374 1.374 0 0 0 3.73.876a1.374 1.374 0 0 0 0 1.951l4.986 4.916L13.483 12.5l4.733-4.657 5.013-4.936a1.374 1.374 0 0 0 0-1.951A1.374 1.374 0 0 0 22.268.876a1.374 1.374 0 0 0-.961.438l-4.277 4.213-4.547 4.473z" />
                                        </svg>
                                        LeetCode
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <h3 className="font-semibold mb-2">Spring Boot</h3>
                                <p className="text-sm text-slate-300">Microservices & REST APIs</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <h3 className="font-semibold mb-2">Machine Learning</h3>
                                <p className="text-sm text-slate-300">Python, Scikit-learn, CNN</p>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                                <p className="text-sm text-slate-300">Docker, Kubernetes, AWS</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-center bg-blue-50 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Ready to Create Your QR Code?
                            </h2>
                            <p className="text-slate-700 mb-6">
                                Start generating professional QR codes in seconds
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Get Started Free
                            </Link>
                        </div>
                        <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                Support This Project ❤️
                            </h2>
                            <p className="text-slate-700 mb-6">
                                Help keep this tool free and continuously improving
                            </p>
                            <Link
                                to="/donate"
                                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
