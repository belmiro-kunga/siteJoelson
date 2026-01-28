
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Sustainability from './pages/Sustainability';
import BusinessAreas from './pages/BusinessAreas';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Governance from './pages/Governance';
import Contacts from './pages/Contacts';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen transition-colors duration-300">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos/historia" element={<History />} />
            <Route path="/sustentabilidade" element={<Sustainability />} />
            <Route path="/areas-de-negocio" element={<BusinessAreas />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:id" element={<NewsDetail />} />
            <Route path="/governanca" element={<Governance />} />
            <Route path="/contactos" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
