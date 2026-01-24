import React from 'react';

const templates = [
    {
        id: 'url',
        name: 'URL',
        icon: '🔗',
        description: 'Website link',
        fields: ['url']
    },
    {
        id: 'text',
        name: 'Text',
        icon: '📝',
        description: 'Plain text',
        fields: ['text']
    },
    {
        id: 'wifi',
        name: 'WiFi',
        icon: '📶',
        description: 'Network credentials',
        fields: ['ssid', 'password', 'encryption']
    },
    {
        id: 'vcard',
        name: 'vCard',
        icon: '👤',
        description: 'Contact details',
        fields: ['name', 'phone', 'email', 'organization']
    },
    {
        id: 'email',
        name: 'Email',
        icon: '📧',
        description: 'Email address',
        fields: ['email', 'subject', 'body']
    },
    {
        id: 'sms',
        name: 'SMS',
        icon: '💬',
        description: 'Text message',
        fields: ['phone', 'message']
    },
    {
        id: 'phone',
        name: 'Phone',
        icon: '📞',
        description: 'Phone number',
        fields: ['phone']
    },
    {
        id: 'whatsapp',
        name: 'WhatsApp',
        icon: '💚',
        description: 'WhatsApp chat',
        fields: ['phone', 'message']
    }
];

export default function QRTemplates({ selectedTemplate, onSelectTemplate }) {
    return (
        <div className="space-y-3">
            <label className="label">QR Code Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {templates.map(template => (
                    <button
                        key={template.id}
                        onClick={() => onSelectTemplate(template)}
                        className={`template-card text-left ${selectedTemplate?.id === template.id ? 'template-card-active' : ''
                            }`}
                    >
                        <div className="text-2xl mb-1">{template.icon}</div>
                        <div className="text-sm font-semibold text-slate-900">{template.name}</div>
                        <div className="text-xs text-slate-500">{template.description}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export { templates };
