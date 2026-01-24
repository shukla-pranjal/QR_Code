import React from 'react';
import SEO from '../components/SEO';
import QRGenerator from '../components/QRGenerator';
import { seoConfig } from '../utils/seoConfig';

export default function Home() {
    return (
        <>
            <SEO {...seoConfig.pages.home} />
            <main className="flex-1" id="generator">
                <QRGenerator />
            </main>
        </>
    );
}
