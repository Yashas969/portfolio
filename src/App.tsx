import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpotlightBackground } from './components/common/SpotlightBackground';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandMenu } from './components/common/CommandMenu';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useSearch } from './hooks/useSearch';

export const AppContent: React.FC = () => {
  const { isOpen, openSearch, closeSearch } = useSearch();

  return (
    <div className="relative min-h-screen bg-[#03120E] text-slate-100 selection:bg-[#8AB0AB]/30 selection:text-white">
      <SpotlightBackground />
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
