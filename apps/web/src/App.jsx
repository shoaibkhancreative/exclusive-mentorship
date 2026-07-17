import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import ProgramPage from './pages/ProgramPage';
import AddonPage from './pages/AddonPage';
import CurriculumPage from './pages/CurriculumPage';
import TierComparisonPage from './pages/TierComparisonPage';
import FAQPage from './pages/FAQPage';
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
                <Route path="/programs/:slug" element={<ProgramPage />} />
                <Route path="/addons/:slug" element={<AddonPage />} />
                <Route path="/curriculum" element={<CurriculumPage />} />
                <Route path="/compare-tiers" element={<TierComparisonPage />} />
                <Route path="/faq" element={<FAQPage />} />
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
