import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, LanguageProvider, NotificationProvider } from './contexts';
import { useLanguage } from './contexts/LanguageContext';
import RootLayout from './components/layout/RootLayout';
import {
  HomePage,
  AboutPage,
  NewsPage,
  ContactPage,
  LoginPage,
  SignupPage,
  JobsPage,
  JobDetailsPage,
  JobApplicationPage,
  TendersPage,
  TenderSubmissionPage,
  AuctionsPage,
  AuctionDetailsPage,
  ResultsPage,
  ProjectsPage,
  ProjectDetailsPage,
  DashboardPage
} from './pages';

const AppContent: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div dir={dir}>
      <Toaster
        position={dir === 'rtl' ? 'top-left' : 'top-right'}
        toastOptions={{
          duration: 3000,
          style: {
            direction: dir,
          },
        }}
      />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="/jobs/:id/apply" element={<JobApplicationPage />} />
          <Route path="/tenders" element={<TendersPage />} />
          <Route path="/tenders/:id/submit" element={<TenderSubmissionPage />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/auctions/:id" element={<AuctionDetailsPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        </Route>
        
        {/* Auth pages without header/footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Dashboard with its own layout */}
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <AuthProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </AuthProvider>
      </Router>
    </LanguageProvider>
  );
};

export default App;