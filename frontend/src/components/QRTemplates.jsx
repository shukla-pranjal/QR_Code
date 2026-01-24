import React from 'react';

const templates = [
    // Basic
    {
        id: 'url',
        category: 'basic',
        name: 'URL',
        icon: '🔗',
        description: 'Website link',
        fields: ['url'],
        placeholder: { url: 'https://example.com' }
    },
    {
        id: 'text',
        category: 'basic',
        name: 'Text',
        icon: '📝',
        description: 'Plain text',
        fields: ['text'],
        placeholder: { text: 'Your text here' }
    },

    // Contact & Messaging
    {
        id: 'whatsapp',
        category: 'contact',
        name: 'WhatsApp',
        icon: '💬',
        description: 'WhatsApp chat',
        fields: ['phone', 'message'],
        placeholder: { phone: '1234567890', message: 'Hello!' },
        generateUrl: (data) => `https://wa.me/${data.phone}${data.message ? `?text=${encodeURIComponent(data.message)}` : ''}`
    },
    {
        id: 'telegram',
        category: 'contact',
        name: 'Telegram',
        icon: '✈️',
        description: 'Telegram chat',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://t.me/${data.username}`
    },
    {
        id: 'discord',
        category: 'contact',
        name: 'Discord',
        icon: '🎮',
        description: 'Discord server',
        fields: ['inviteCode'],
        placeholder: { inviteCode: 'invitecode' },
        generateUrl: (data) => `https://discord.gg/${data.inviteCode}`
    },
    {
        id: 'sms',
        category: 'contact',
        name: 'SMS',
        icon: '📱',
        description: 'Text message',
        fields: ['phone', 'message'],
        placeholder: { phone: '1234567890', message: 'Your message' },
        generateUrl: (data) => `sms:${data.phone}${data.message ? `?body=${encodeURIComponent(data.message)}` : ''}`
    },
    {
        id: 'email',
        category: 'contact',
        name: 'Email',
        icon: '📧',
        description: 'Email address',
        fields: ['email', 'subject', 'body'],
        placeholder: { email: 'email@example.com', subject: 'Subject', body: 'Message' },
        generateUrl: (data) => `mailto:${data.email}?subject=${encodeURIComponent(data.subject || '')}&body=${encodeURIComponent(data.body || '')}`
    },
    {
        id: 'phone',
        category: 'contact',
        name: 'Phone',
        icon: '📞',
        description: 'Phone number',
        fields: ['phone'],
        placeholder: { phone: '1234567890' },
        generateUrl: (data) => `tel:${data.phone}`
    },

    // Social Media
    {
        id: 'instagram',
        category: 'social',
        name: 'Instagram',
        icon: '📸',
        description: 'Instagram profile',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://instagram.com/${data.username}`
    },
    {
        id: 'facebook',
        category: 'social',
        name: 'Facebook',
        icon: '👥',
        description: 'Facebook page',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://facebook.com/${data.username}`
    },
    {
        id: 'linkedin',
        category: 'social',
        name: 'LinkedIn',
        icon: '💼',
        description: 'LinkedIn profile',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://linkedin.com/in/${data.username}`
    },
    {
        id: 'twitter',
        category: 'social',
        name: 'Twitter/X',
        icon: '🐦',
        description: 'Twitter profile',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://twitter.com/${data.username}`
    },
    {
        id: 'snapchat',
        category: 'social',
        name: 'Snapchat',
        icon: '👻',
        description: 'Snapchat profile',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://snapchat.com/add/${data.username}`
    },
    {
        id: 'tiktok',
        category: 'social',
        name: 'TikTok',
        icon: '🎵',
        description: 'TikTok profile',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://tiktok.com/@${data.username}`
    },

    // Media & Streaming
    {
        id: 'youtube',
        category: 'media',
        name: 'YouTube',
        icon: '▶️',
        description: 'YouTube channel',
        fields: ['channelId'],
        placeholder: { channelId: 'channel-id' },
        generateUrl: (data) => `https://youtube.com/${data.channelId}`
    },
    {
        id: 'spotify',
        category: 'media',
        name: 'Spotify',
        icon: '🎧',
        description: 'Spotify profile',
        fields: ['uri'],
        placeholder: { uri: 'user/username' },
        generateUrl: (data) => `https://open.spotify.com/${data.uri}`
    },

    // Apps & Stores
    {
        id: 'appstore',
        category: 'apps',
        name: 'App Store',
        icon: '🍎',
        description: 'iOS App Store',
        fields: ['appId'],
        placeholder: { appId: '1234567890' },
        generateUrl: (data) => `https://apps.apple.com/app/id${data.appId}`
    },
    {
        id: 'playstore',
        category: 'apps',
        name: 'Play Store',
        icon: '🤖',
        description: 'Google Play Store',
        fields: ['packageName'],
        placeholder: { packageName: 'com.example.app' },
        generateUrl: (data) => `https://play.google.com/store/apps/details?id=${data.packageName}`
    },

    // Forms & Scheduling
    {
        id: 'googleforms',
        category: 'forms',
        name: 'Google Forms',
        icon: '📋',
        description: 'Google Form',
        fields: ['formUrl'],
        placeholder: { formUrl: 'https://forms.gle/...' }
    },
    {
        id: 'calendly',
        category: 'forms',
        name: 'Calendly',
        icon: '📅',
        description: 'Calendly booking',
        fields: ['username'],
        placeholder: { username: 'username' },
        generateUrl: (data) => `https://calendly.com/${data.username}`
    },

    // Reviews
    {
        id: 'googlereview',
        category: 'reviews',
        name: 'Google Review',
        icon: '⭐',
        description: 'Google Business',
        fields: ['placeId'],
        placeholder: { placeId: 'Place ID' },
        generateUrl: (data) => `https://search.google.com/local/writereview?placeid=${data.placeId}`
    },

    // Advanced
    {
        id: 'wifi',
        category: 'advanced',
        name: 'WiFi',
        icon: '📶',
        description: 'Network credentials',
        fields: ['ssid', 'password', 'encryption'],
        placeholder: { ssid: 'NetworkName', password: 'password', encryption: 'WPA' },
        generateUrl: (data) => `WIFI:T:${data.encryption || 'WPA'};S:${data.ssid};P:${data.password};;`
    },
    {
        id: 'vcard',
        category: 'advanced',
        name: 'vCard',
        icon: '👤',
        description: 'Contact card',
        fields: ['name', 'phone', 'email', 'organization'],
        placeholder: { name: 'John Doe', phone: '1234567890', email: 'john@example.com', organization: 'Company' }
    }
];

const categories = {
    basic: { name: 'Basic', icon: '📌' },
    contact: { name: 'Contact & Messaging', icon: '💬' },
    social: { name: 'Social Media', icon: '📱' },
    media: { name: 'Media & Streaming', icon: '🎬' },
    apps: { name: 'App Stores', icon: '📲' },
    forms: { name: 'Forms & Scheduling', icon: '📝' },
    reviews: { name: 'Reviews', icon: '⭐' },
    advanced: { name: 'Advanced', icon: '⚙️' }
};

export default function QRTemplates({ selectedTemplate, onSelectTemplate, onCategoryChange, selectedCategory = 'all' }) {
    const filteredTemplates = selectedCategory === 'all'
        ? templates
        : templates.filter(t => t.category === selectedCategory);

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Quick Links</label>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <button
                        onClick={() => onCategoryChange?.('all')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedCategory === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                    >
                        All
                    </button>
                    {Object.entries(categories).map(([key, cat]) => (
                        <button
                            key={key}
                            onClick={() => onCategoryChange?.(key)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedCategory === key
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            <span className="mr-1">{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {filteredTemplates.map(template => (
                    <button
                        key={template.id}
                        onClick={() => onSelectTemplate(template)}
                        className={`p-3 rounded-lg border-2 transition-all hover:shadow-md ${selectedTemplate?.id === template.id
                                ? 'border-blue-600 bg-blue-50 shadow-md'
                                : 'border-slate-200 bg-white hover:border-blue-400'
                            }`}
                    >
                        <div className="text-3xl mb-2">{template.icon}</div>
                        <div className="text-xs font-semibold text-slate-900">{template.name}</div>
                        <div className="text-xs text-slate-500 mt-1">{template.description}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export { templates, categories };
