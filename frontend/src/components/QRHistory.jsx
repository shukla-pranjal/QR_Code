import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function QRHistory({ onLoadCode }) {
    const [history, setHistory] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const savedHistory = localStorage.getItem('qr_history');
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    const clearHistory = () => {
        localStorage.removeItem('qr_history');
        setHistory([]);
        toast.success('History cleared');
    };

    const deleteItem = (index) => {
        const newHistory = history.filter((_, i) => i !== index);
        localStorage.setItem('qr_history', JSON.stringify(newHistory));
        setHistory(newHistory);
        toast.success('Item deleted');
    };

    if (history.length === 0) {
        return null;
    }

    return (
        <div className="card" id="history">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Recent QR Codes</h3>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="btn-ghost text-xs px-2 py-1"
                    >
                        {isExpanded ? 'Show Less' : 'Show All'}
                    </button>
                    <button
                        onClick={clearHistory}
                        className="text-xs text-slate-500 hover:text-red-600 transition-colors"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <div className={`grid gap-2 ${isExpanded ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
                {(isExpanded ? history : history.slice(0, 3)).map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-slate-200 rounded-md hover:border-slate-300 transition-colors group"
                    >
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <img
                                src={item.image}
                                alt="QR Code"
                                className="w-12 h-12 rounded border border-slate-200"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-900 truncate">
                                    {item.text.substring(0, 50)}
                                    {item.text.length > 50 ? '...' : ''}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {new Date(item.timestamp).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => onLoadCode(item)}
                                className="p-1.5 hover:bg-slate-100 rounded text-slate-600"
                                title="Load"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                            <button
                                onClick={() => deleteItem(index)}
                                className="p-1.5 hover:bg-red-50 rounded text-red-600"
                                title="Delete"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function saveToHistory(qrData) {
    const history = JSON.parse(localStorage.getItem('qr_history') || '[]');
    const newItem = {
        ...qrData,
        timestamp: Date.now()
    };

    // Keep only last 50 items
    const updatedHistory = [newItem, ...history].slice(0, 50);
    localStorage.setItem('qr_history', JSON.stringify(updatedHistory));
}
