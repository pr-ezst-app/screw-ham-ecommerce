import { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import MoreToolsPage from './pages/MoreToolsPage';

type Page = 'home' | 'product' | 'about' | 'more';

const navLinks: { page: Page; label: string }[] = [
  { page: 'home', label: 'Home' },
  { page: 'product', label: 'The Screwham' },
  { page: 'more', label: 'More Tools' },
  { page: 'about', label: 'About' },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-body">
      <Nav currentPage={currentPage} navigate={navigate} />
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'product' && <ProductPage />}
      {currentPage === 'about' && <AboutPage navigate={navigate} />}
      {currentPage === 'more' && <MoreToolsPage />}
    </div>
  );
}

function Nav({ currentPage, navigate }: { currentPage: Page; navigate: (p: Page) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate('home')}
          className="font-condensed font-black text-2xl tracking-wider text-white hover:text-orange transition-colors"
        >
          SCREWHAM<span className="text-orange">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ page, label }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`font-condensed font-semibold text-sm tracking-widest uppercase transition-colors ${
                currentPage === page ? 'text-orange' : 'text-white/70 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => navigate('product')}
            className="bg-orange text-white font-condensed font-bold text-sm tracking-widest uppercase px-5 py-2 hover:bg-orange-light transition-colors"
          >
            Shop Now
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-charcoal-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ page, label }) => (
            <button
              key={page}
              onClick={() => { navigate(page); setMobileOpen(false); }}
              className={`font-condensed font-semibold text-base tracking-widest uppercase text-left transition-colors ${
                currentPage === page ? 'text-orange' : 'text-white/70'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { navigate('product'); setMobileOpen(false); }}
            className="bg-orange text-white font-condensed font-bold text-sm tracking-widest uppercase px-5 py-2 w-fit hover:bg-orange-light transition-colors"
          >
            Shop Now
          </button>
        </div>
      )}
    </header>
  );
}
