import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <>
            <SEO
                title="404 - Page Not Found"
                description="The page you're looking for doesn't exist."
            />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6">
                <div className="text-center max-w-2xl">
                    {/* 404 Illustration */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-slate-900 mb-4">404</h1>
                        <div className="w-32 h-32 mx-auto bg-slate-900 rounded-2xl flex items-center justify-center transform rotate-6">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Error Message */}
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Go Home
                        </Link>
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 border-2 border-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Read Our Blog
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <p className="text-sm text-slate-600 mb-4">Quick Links</p>
                        <div className="flex flex-wrap gap-4 justify-center text-sm">
                            <Link to="/about" className="text-slate-700 hover:text-slate-900 underline">About Us</Link>
                            <Link to="/contact" className="text-slate-700 hover:text-slate-900 underline">Contact</Link>
                            <Link to="/feedback" className="text-slate-700 hover:text-slate-900 underline">Feedback</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
