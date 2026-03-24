import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
      style={{
        backgroundColor: isScrolled || menuOpen ? '#ebebeb' : 'transparent',
        boxShadow: isScrolled ? '0 2px 8px rgba(20, 20, 20, 0.05)' : 'none',
        transition: 'background-color 0.3s, box-shadow 0.3s',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="transition-opacity hover:opacity-70"
          aria-label="DCC Home"
        >
          <img
            src="/dcc-logo.png"
            alt="Design Consulting Club"
            className="h-10"
          />
        </Link>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden relative w-11 h-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className="absolute left-2.5 w-6 rounded"
            style={{
              height: '2px',
              backgroundColor: '#141414',
              top: menuOpen ? '50%' : 'calc(50% - 8px)',
              transform: menuOpen ? 'rotate(45deg)' : 'none',
              transition: 'top 0.2s, transform 0.2s',
            }}
          />
          <span
            className="absolute left-2.5 w-6 rounded"
            style={{
              height: '2px',
              backgroundColor: '#141414',
              top: '50%',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.2s',
            }}
          />
          <span
            className="absolute left-2.5 w-6 rounded"
            style={{
              height: '2px',
              backgroundColor: '#141414',
              top: menuOpen ? '50%' : 'calc(50% + 8px)',
              transform: menuOpen ? 'rotate(-45deg)' : 'none',
              transition: 'top 0.2s, transform 0.2s',
            }}
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks isHome={isHome} scrollToSection={scrollToSection} />
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="md:hidden pt-4 pb-2 flex flex-col gap-4 items-end">
          <NavLinks isHome={isHome} scrollToSection={scrollToSection} />
        </div>
      )}
    </nav>
  );
}

function NavLinks({
  isHome,
  scrollToSection,
}: {
  isHome: boolean;
  scrollToSection: (id: string) => void;
}) {
  return (
    <>
      {isHome ? (
        <>
          <button
            onClick={() => scrollToSection('about')}
            className="transition-opacity hover:opacity-70 py-2 md:py-0"
            style={{ color: '#141414', fontWeight: 500 }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('values')}
            className="transition-opacity hover:opacity-70 py-2 md:py-0"
            style={{ color: '#141414', fontWeight: 500 }}
          >
            Values
          </button>
          <button
            onClick={() => scrollToSection('partner')}
            className="transition-opacity hover:opacity-70 py-2 md:py-0"
            style={{ color: '#141414', fontWeight: 500 }}
          >
            Partner
          </button>
        </>
      ) : (
        <Link
          to="/"
          className="transition-opacity hover:opacity-70 py-2 md:py-0"
          style={{ color: '#141414', fontWeight: 500 }}
        >
          Home
        </Link>
      )}
      <Link
        to="/team"
        className="transition-opacity hover:opacity-70 py-2 md:py-0"
        style={{ color: '#141414', fontWeight: 500 }}
      >
        Team
      </Link>
      <Link
        to="/apply"
        className="px-6 py-2 rounded-lg hover:opacity-90"
        style={{
          backgroundColor: '#141414',
          color: '#ebebeb',
          fontWeight: 600,
          transition: 'opacity 0.2s',
        }}
      >
        Apply
      </Link>
    </>
  );
}
