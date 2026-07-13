import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import CheckoutPage from './pages/CheckoutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chapter/:slug" element={<ChapterPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;
