import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="w-full py-4 px-6 bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/logo.png" alt="QR Generator" className="w-10 h-10 object-contain" />
                    <h1 className="text-lg font-semibold text-slate-900">QR Generator</h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    <Link
                        to="/"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${isActive('/')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        Generate
                    </Link>
                    <Link
                        to="/blog"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${location.pathname.startsWith('/blog')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${isActive('/about')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${isActive('/contact')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/feedback"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${isActive('/feedback')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        Feedback
                    </Link>
                    <Link
                        to="/donate"
                        className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${isActive('/donate')
                            ? 'text-slate-900 bg-slate-100'
                            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                    >
                        Donate ❤️
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-slate-100 rounded"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
                    <nav className="flex flex-col space-y-2">
                        <Link
                            to="/"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isActive('/')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Generate
                        </Link>
                        <Link
                            to="/blog"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${location.pathname.startsWith('/blog')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/about"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isActive('/about')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isActive('/contact')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/feedback"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isActive('/feedback')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Feedback
                        </Link>
                        <Link
                            to="/donate"
                            className={`px-3 py-2 text-sm font-medium rounded transition-colors ${isActive('/donate')
                                ? 'text-slate-900 bg-slate-100'
                                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Donate ❤️
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
