import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';
import { seoConfig } from '../utils/seoConfig';

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedbackType: 'general',
        rating: 5,
        message: '',
        featureRequest: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        toast.success('Thank you for your feedback! We appreciate your input.');

        // Reset form
        setFormData({
            name: '',
            email: '',
            feedbackType: 'general',
            rating: 5,
            message: '',
            featureRequest: ''
        });
    };

    return (
        <>
            <SEO {...seoConfig.pages.feedback} />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-slate-900 mb-4">
                            We Value Your Feedback
                        </h1>
                        <p className="text-xl text-slate-600">
                            Help us improve QR Generator with your suggestions and ideas
                        </p>
                    </div>

                    {/* Feedback Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                        Name (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="feedbackType" className="block text-sm font-medium text-slate-700 mb-2">
                                    Feedback Type
                                </label>
                                <select
                                    id="feedbackType"
                                    name="feedbackType"
                                    value={formData.feedbackType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition"
                                >
                                    <option value="general">General Feedback</option>
                                    <option value="bug">Bug Report</option>
                                    <option value="feature">Feature Request</option>
                                    <option value="improvement">Improvement Suggestion</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-3">
                                    How would you rate your experience?
                                </label>
                                <div className="flex items-center space-x-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <svg
                                                className={`w-10 h-10 ${star <= formData.rating ? 'text-yellow-400' : 'text-slate-300'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </button>
                                    ))}
                                    <span className="ml-4 text-lg font-medium text-slate-700">
                                        {formData.rating} / 5
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                    Your Feedback *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    placeholder="Tell us what you think, what we can improve, or any issues you've encountered..."
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition resize-none"
                                    required
                                ></textarea>
                            </div>

                            {formData.feedbackType === 'feature' && (
                                <div>
                                    <label htmlFor="featureRequest" className="block text-sm font-medium text-slate-700 mb-2">
                                        Describe Your Feature Request
                                    </label>
                                    <textarea
                                        id="featureRequest"
                                        name="featureRequest"
                                        value={formData.featureRequest}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="What feature would you like to see? How would it help you?"
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition resize-none"
                                    ></textarea>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
                            >
                                Submit Feedback
                            </button>
                        </form>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            Thank you for helping us improve!
                        </h3>
                        <p className="text-slate-700">
                            Your feedback helps us build a better QR Generator for everyone. We read every submission
                            and use your suggestions to prioritize new features and improvements.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
