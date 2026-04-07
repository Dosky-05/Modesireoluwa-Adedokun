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
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          AM<span>_</span>
        </button>

        <div className="nav__status">
          <span className="status-dot" />
          available for work
        </div>

        {/* Desktop */}
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

        {/* Hamburger */}
        <button
          className={`nav__ham ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown — slides down below the bar */}
      <div className={`nav__dropdown ${menuOpen ? 'open' : ''}`}>
        {links.map((l, i) => (
          <button
            key={l}
            className="nav__dropdown-link"
            onClick={() => handleNav(l)}
          >
            <span className="dd-num">0{i + 1}</span>
            {l}
          </button>
        ))}
        <a
          href="mailto:adedokunmodesireoluwa@gmail.com"
          className="nav__dropdown-cta"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
