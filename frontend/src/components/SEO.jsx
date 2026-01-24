import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    keywords,
    url,
    image,
    type = 'website',
    author = 'QR Generator'
}) {
    const siteName = 'QR Generator';
    const defaultDescription = 'Free online QR code generator with customization options. Create, scan, and download QR codes instantly for URLs, text, and more.';
    const defaultImage = '/og-image.jpg';
    const baseUrl = window.location.origin;

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const metaDescription = description || defaultDescription;
    const metaUrl = url ? `${baseUrl}${url}` : baseUrl;
    const metaImage = image ? `${baseUrl}${image}` : `${baseUrl}${defaultImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* Canonical URL */}
            <link rel="canonical" href={metaUrl} />
        </Helmet>
    );
}
