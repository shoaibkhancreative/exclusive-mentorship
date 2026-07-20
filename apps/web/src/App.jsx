import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';

// HomePage loads eagerly (it's the first thing almost every visitor sees —
// no reason to add a network round-trip before it can render). Everything
// else loads on demand, so a visitor browsing the homepage never downloads
// the Checkout flow, the legal pages, or any other route they haven't
// clicked into yet.
const ChapterPage = lazy(() => import('./pages/ChapterPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage'));
const AddonPage = lazy(() => import('./pages/AddonPage'));
const CurriculumPage = lazy(() => import('./pages/CurriculumPage'));
const TierComparisonPage = lazy(() => import('./pages/TierComparisonPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));

function RouteFallback() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-brand" />
        </div>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
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
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
            <Toaster />
        </Router>
    );
}

export default App;
