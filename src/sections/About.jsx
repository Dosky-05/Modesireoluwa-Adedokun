import './About.css';

export default function About() {
  return (
    <section className="about section-gap" id="about">
      <div className="container">
        <div className="about__grid">

          <div className="about__left reveal">
            <span className="section-tag">About Me</span>
            <h2 className="section-heading">
              Building things<br />
              <em>people love to use.</em>
            </h2>
            <div className="about__divider" />
            <div className="about__tags">
              <span className="about__tag">React</span>
              <span className="about__tag">JavaScript</span>
              <span className="about__tag">Node.js</span>
              <span className="about__tag">UI Design</span>
              <span className="about__tag">Photoshop</span>
            </div>

            <div className="about__terminal" style={{ marginTop: 32 }}>
              <div className="terminal__bar">
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__dot" />
                <span className="terminal__label">~/about</span>
              </div>
              <div className="terminal__body">
                <div><span className="prompt">$ </span><span className="cmd">whoami</span></div>
                <div><span className="output">→ </span><span className="cyan">Modesireoluwa Adedokun</span></div>
                <div><span className="prompt">$ </span><span className="cmd">cat status.txt</span></div>
                <div><span className="output">→ Available for hire</span></div>
                <div><span className="prompt">$ </span><span className="cmd">echo $PASSION</span></div>
                <div><span className="output">→ Building great software</span></div>
                <div><span className="prompt">$ </span><span className="blink" /></div>
              </div>
            </div>
          </div>

          <div className="about__right reveal" style={{ transitionDelay: '0.15s' }}>
            <p>
              I'm <strong>Modesireoluwa Adedokun</strong>, a frontend developer and graphic designer
              with a consistent passion for crafting digital experiences that feel as good as they look.
            </p>
            <p>
              As an enthusiastic student, I approach every project with curiosity and a drive to
              deliver reliable, well-engineered solutions, from full e-commerce storefronts to
              AI-powered study tools and many more.
            </p>
            <p>
              When I'm not writing code, I'm sharpening my eye for design, blending the technical
              and visuals to create work that stands out.
            </p>
            <div className="about__links">
              <a
                href="https://github.com/Dosky-05"
                target="_blank"
                rel="noreferrer"
                className="about__link"
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/modesireoluwa-adedokun-373b9b352"
                target="_blank"
                rel="noreferrer"
                className="about__link"
              >
                <i className="fa-brands fa-linkedin-in" /> LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
