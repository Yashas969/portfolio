import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandMenu } from './components/common/CommandMenu';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useSearch } from './hooks/useSearch';

export const AppContent: React.FC = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();

  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#171A18] selection:bg-[#123524]/20 selection:text-[#123524]">
      <Navbar onOpenSearch={openSearch} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
      <CommandMenu isOpen={isOpen} onClose={closeSearch} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
