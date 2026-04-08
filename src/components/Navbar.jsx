import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = id => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">

        {/* Logo — left */}
        <button className="nav__logo" onClick={() => handleNav('hero')}>
          AM<span>_</span>
        </button>

        {/* Status — center */}
        <div className="nav__status">
          <span className="status-dot" />
          available for work
        </div>

        {/* Links — right */}
        <nav className="nav__links">
          {links.map((l, i) => (
            <button key={l} className="nav__link" data-idx={`0${i + 1}`} onClick={() => handleNav(l)}>
              {l}
            </button>
          ))}
          <a href="mailto:adedokunmodesireoluwa@gmail.com" className="nav__cta">
            Hire Me
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className={`nav__ham ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__overlay ${menuOpen ? 'open' : ''}`}>
        {links.map((l, i) => (
          <button
            key={l}
            className="nav__overlay-link"
            style={{ animationDelay: menuOpen ? `${i * 0.07 + 0.05}s` : '0s' }}
            onClick={() => handleNav(l)}
          >
            {l}
          </button>
        ))}
        <a
          href="mailto:adedokunmodesireoluwa@gmail.com"
          className="nav__overlay-cta"
          style={{ animationDelay: menuOpen ? `${links.length * 0.07 + 0.05}s` : '0s' }}
          onClick={() => setMenuOpen(false)}
        > Hire Me
        </a>
      </div>
    </header>
  );
}
