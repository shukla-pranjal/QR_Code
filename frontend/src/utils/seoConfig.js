export const seoConfig = {
    defaultMeta: {
        siteName: 'QR Generator',
        description: 'Free online QR code generator with customization options. Create, scan, and download QR codes instantly for URLs, text, and more.',
        keywords: 'qr code, qr generator, qr code generator, free qr code, create qr code, custom qr code, qr scanner',
        author: 'QR Generator',
        twitterHandle: '@qrgenerator'
    },

    pages: {
        home: {
            title: 'Free QR Code Generator',
            description: 'Create custom QR codes for free. Generate, customize, and download QR codes for URLs, text, WiFi, and more with our easy-to-use online tool.',
            keywords: 'free qr code generator, create qr code, custom qr code, online qr generator',
            url: '/'
        },
        about: {
            title: 'About Us',
            description: 'Learn about QR Generator - your trusted free online QR code creation tool. Discover our mission to make QR code generation simple and accessible.',
            keywords: 'about qr generator, qr code tool, free qr service',
            url: '/about'
        },
        contact: {
            title: 'Contact Us',
            description: 'Get in touch with the QR Generator team. We\'re here to help with your questions, feedback, and support needs.',
            keywords: 'contact qr generator, qr support, qr help',
            url: '/contact'
        },
        feedback: {
            title: 'Send Feedback',
            description: 'Share your thoughts and help us improve QR Generator. Your feedback helps us create a better experience for everyone.',
            keywords: 'qr feedback, suggest features, qr improvement',
            url: '/feedback'
        },
        privacy: {
            title: 'Privacy Policy',
            description: 'Read our privacy policy to understand how QR Generator collects, uses, and protects your data.',
            keywords: 'privacy policy, data protection, qr privacy',
            url: '/privacy-policy'
        },
        terms: {
            title: 'Terms of Service',
            description: 'View the terms of service for using QR Generator. Understand your rights and responsibilities.',
            keywords: 'terms of service, qr terms, usage terms',
            url: '/terms-of-service'
        },
        blog: {
            title: 'QR Code Blog & Resources',
            description: 'Learn everything about QR codes - from technical guides to best practices, use cases, and security tips.',
            keywords: 'qr code blog, qr resources, qr tutorials, qr guides',
            url: '/blog'
        }
    },

    articles: {
        howQRCodesWork: {
            title: 'How QR Codes Work: A Complete Technical Guide',
            description: 'Understand the technology behind QR codes - encoding, error correction, versions, and technical specifications explained.',
            keywords: 'how qr codes work, qr technology, qr encoding, qr error correction',
            url: '/blog/how-qr-codes-work'
        },
        bestPractices: {
            title: 'QR Code Design Best Practices for Maximum Scannability',
            description: 'Master QR code design with our comprehensive guide on size, colors, contrast, logo placement, and testing.',
            keywords: 'qr code design, qr best practices, qr scannability, qr code tips',
            url: '/blog/qr-code-best-practices'
        },
        businessUseCases: {
            title: '10 Powerful QR Code Use Cases for Business Growth',
            description: 'Discover how businesses use QR codes for marketing, payments, events, customer engagement, and more.',
            keywords: 'qr business uses, qr marketing, qr code applications, business qr codes',
            url: '/blog/qr-code-business-use-cases'
        },
        security: {
            title: 'QR Code Security: Protecting Yourself from Scams',
            description: 'Learn how to stay safe when scanning QR codes. Identify scams, verify codes, and follow security best practices.',
            keywords: 'qr security, qr scams, safe qr scanning, qr code safety',
            url: '/blog/qr-code-security'
        },
        history: {
            title: 'The Evolution of QR Codes: From Automotive to Everywhere',
            description: 'Explore the fascinating history of QR codes from their invention in 1994 to their global adoption today.',
            keywords: 'qr code history, qr evolution, qr invention, qr future',
            url: '/blog/qr-code-history'
        }
    },

    structuredData: {
        organization: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'QR Generator',
            url: window.location.origin,
            logo: `${window.location.origin}/logo.png`,
            description: 'Free online QR code generator with customization options.',
            sameAs: []
        },

        website: {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'QR Generator',
            url: window.location.origin,
            description: 'Free online QR code generator with customization options.'
        }
    }
};
