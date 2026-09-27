import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen);
  }, [navOpen]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setNavOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleNav = () => setNavOpen(prev => !prev);
  const closeNav = () => setNavOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} data-header>
      <a className="brand" href="#home" aria-label="Prabath Jayasuriya home">
        <img className="brand-photo" src="/images/profile-nav.png" alt="Prabath Jayasuriya" width="40" height="40" />
        <span className="brand-text">Prabath Jayasuriya</span>
      </a>

      <Navigation isOpen={navOpen} onLinkClick={closeNav} />

      <div className="header-actions">
        <ThemeToggle />
        <button
          className="icon-button nav-toggle"
          id="nav-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={toggleNav}
        >
          <i className={navOpen ? 'fas fa-xmark' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  );
}
