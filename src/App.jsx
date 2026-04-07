import { useEffect } from 'react';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Hero     from './sections/Hero';
import About    from './sections/About';
import Skills   from './sections/Skills';
import Projects from './sections/Projects';
import Contact  from './sections/Contact';

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
