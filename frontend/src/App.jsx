import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Feedback from './pages/Feedback';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';

// Blog Articles
import HowQRCodesWork from './pages/articles/HowQRCodesWork';
import QRCodeBestPractices from './pages/articles/QRCodeBestPractices';
import BusinessUseCases from './pages/articles/BusinessUseCases';
import QRCodeSecurity from './pages/articles/QRCodeSecurity';
import QRCodeHistory from './pages/articles/QRCodeHistory';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />

          <ScrollToTop />
          <Header />

          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/how-qr-codes-work" element={<HowQRCodesWork />} />
            <Route path="/blog/qr-code-best-practices" element={<QRCodeBestPractices />} />
            <Route path="/blog/qr-code-business-use-cases" element={<BusinessUseCases />} />
            <Route path="/blog/qr-code-security" element={<QRCodeSecurity />} />
            <Route path="/blog/qr-code-history" element={<QRCodeHistory />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

