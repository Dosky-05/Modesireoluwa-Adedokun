import './Hero.css';

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const codeLines = [
  { num: 1, parts: [{ cls: 'c-comment', text: '// Adedokun Modesireoluwa' }] },
  { num: 2, parts: [] },
  { num: 3, parts: [{ cls: 'c-keyword', text: 'const' }, { cls: '', text: ' ' }, { cls: 'c-var', text: 'developer' }, { cls: 'c-bracket', text: ' = {' }] },
  { num: 4, parts: [{ cls: 'c-prop', text: '  name' }, { cls: '', text: ': ' }, { cls: 'c-string', text: '"Modesireoluwa",' }] },
  { num: 5, parts: [{ cls: 'c-prop', text: '  role' }, { cls: '', text: ': ' }, { cls: 'c-string', text: '"Frontend Dev",' }] },
  { num: 6, parts: [{ cls: 'c-prop', text: '  stack' }, { cls: '', text: ': ' }, { cls: 'c-bracket', text: '[' }] },
  { num: 7, parts: [{ cls: 'c-string', text: '    "React",' }] },
  { num: 8, parts: [{ cls: 'c-string', text: '    "JavaScript",' }] },
  { num: 9, parts: [{ cls: 'c-string', text: '    "Node.js",' }] },
  { num: 10, parts: [{ cls: 'c-bracket', text: '  ],' }] },
  { num: 11, parts: [{ cls: 'c-prop', text: '  available' }, { cls: '', text: ': ' }, { cls: 'c-cyan', text: 'true' }] },
  { num: 12, parts: [{ cls: 'c-bracket', text: '};' }] },
  { num: 13, parts: [] },
  { num: 14, parts: [{ cls: 'c-fn', text: 'buildAmazingThings' }, { cls: 'c-bracket', text: '(' }, { cls: 'c-var', text: 'developer' }, { cls: 'c-bracket', text: ');' }] },
];

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__inner">

        {/* Left */}
        <div className="hero__left">
          <span className="hero__label">Frontend Developer &amp; Graphic Designer</span>

          <h1 className="hero__name">
            Adedokun
            <em>Modesireoluwa</em>
          </h1>

          <p className="hero__role">Based in Nigeria · Open to Remote Jobs</p>

          <p className="hero__bio">
            I am a software engineering student with a strong passion for building reliable, efficient and visually refined solutions, supported by a commitment to continuous learning and delivering high-quality results.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('projects')}>
              View Work
            </button>
            <button className="hero__btn hero__btn--ghost" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
            <a
              href="/Modesireoluwa_Adedokun_CV1.pdf"
              download="Modesireoluwa_Adedokun_CV1.pdf"
              className="hero__btn hero__btn--cv"
            >
              <i className="fa fa-download" /> Download CV
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/Dosky-05" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/modesireoluwa-adedokun-373b9b352" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a href="mailto:adedokunmodesireoluwa@gmail.com" aria-label="Email">
              <i className="fa fa-envelope" />
            </a>
          </div>
        </div>

        {/* Right – animated code card */}
        <div className="hero__right">
          <div className="hero__code-card">
            <div className="code-card__bar">
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__dot" />
              <span className="code-card__title">developer.js</span>
            </div>
            <div className="code-card__body">
              {codeLines.map(line => (
                <div className="code-line" key={line.num}>
                  <span className="code-num">{line.num}</span>
                  <span>
                    {line.parts.map((p, i) => (
                      <span key={i} className={p.cls}>{p.text}</span>
                    ))}
                    &nbsp;
                  </span>
                </div>
              ))}
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <strong>3+</strong>
                <span>Projects</span>
              </div>
              <div className="hero__stat">
                <strong>2+</strong>
                <span>Yrs Learning</span>
              </div>
              <div className="hero__stat">
                <strong>5</strong>
                <span>Core Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" onClick={() => scrollTo('about')}>
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
