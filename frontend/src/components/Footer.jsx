import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-12 px-6 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">QR Generator</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Free online QR code generator. Create, customize, and download QR codes instantly.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/donate" className="text-slate-400 hover:text-white transition-colors">
                                    Donate ❤️
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/blog/how-qr-codes-work" className="text-slate-400 hover:text-white transition-colors">
                                    How QR Codes Work
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Author & Connect */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect</h3>
                        <p className="text-sm text-slate-400 mb-3">
                            Built by <span className="text-white font-semibold">Pranjal Kumar Shukla</span>
                        </p>
                        <p className="text-xs text-slate-500 mb-3">Backend & ML Developer</p>
                        <div className="flex space-x-3 mb-3">
                            <a
                                href="https://github.com/PranjalKumar09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/pranjalkumar09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://leetcode.com/u/coderkumarshukla"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label="LeetCode"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.66-7.872.374l-4.278 4.126c-.55.527-.974 1.182-1.253 1.898-.28.717-.422 1.48-.42 2.25.002.77.145 1.533.428 2.25.282.717.708 1.371 1.26 1.896l4.277 4.193c2.966 2.923 7.676 2.923 10.642 0l2.397-2.392c1.018-1.018 1.018-2.67 0-3.688-1.018-1.018-2.67-1.018-3.688 0l-2.397 2.392c-1.293 1.293-3.346 1.293-4.639 0l-4.277-4.193a3.182 3.182 0 0 1-.679-1.022 3.306 3.306 0 0 1-.247-1.264c-.006-.417.06-.834.197-1.229.137-.395.343-.76.61-1.073l4.278-4.126c1.293-1.293 3.346-1.293 4.639 0l3.501 2.831c1.149.93 2.823.753 3.753-.395.93-1.149.753-2.823-.395-3.753l-3.501-2.831c-2.475-2.002-6.047-1.975-8.483.083l-.019-.019L5.116.876A1.374 1.374 0 0 0 3.73.876a1.374 1.374 0 0 0 0 1.951l4.986 4.916L13.483 12.5l4.733-4.657 5.013-4.936a1.374 1.374 0 0 0 0-1.951A1.374 1.374 0 0 0 22.268.876a1.374 1.374 0 0 0-.961.438l-4.277 4.213-4.547 4.473z" />
                                </svg>
                            </a>
                        </div>
                        <a
                            href="mailto:coderkumarshukla@gmail.com"
                            className="text-xs text-slate-400 hover:text-white transition-colors"
                        >
                            coderkumarshukla@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} QR Generator by Pranjal Kumar Shukla. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm">
                        Made with ❤️ for the community
                    </p>
                </div>
            </div>
        </footer>
    );
}
