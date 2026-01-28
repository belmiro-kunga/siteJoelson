
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'História', path: '/sobre-nos/historia' },
    { name: 'Áreas de Negócio', path: '/areas-de-negocio' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Sustentabilidade', path: '/sustentabilidade' },
    { name: 'Governança', path: '/governanca' },
    { name: 'Notícias', path: '/noticias' },
    { name: 'Contactos', path: '/contactos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-white/90 py-4'} backdrop-blur-md border-b border-gray-100`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-black">
              <span className="material-symbols-outlined text-2xl font-bold">bolt</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 uppercase">Bragalux</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-gray-700'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <button className="bg-primary hover:bg-primary-hover text-black px-5 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-sm">
              Pedir Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-primary text-black px-6 py-3 rounded-lg text-base font-bold transition-all">
            Pedir Orçamento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
