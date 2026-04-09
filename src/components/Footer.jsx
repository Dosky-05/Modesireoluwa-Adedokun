import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">AM<em>.</em></span>
          <p>Adedokun Modesireoluwa — Frontend Developer &amp; Graphic Designer</p>
        </div>
        <div className="footer__links">
          <a href="https://github.com/Dosky-05" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/modesireoluwa-adedokun-373b9b352" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href="mailto:adedokunmodesireoluwa@gmail.com">
            <i className="fa fa-envelope" />
          </a>
          <a
            href="/Modesireoluwa_Adedokun_CV.pdf"
            download="Modesireoluwa_Adedokun_CV.pdf"
            aria-label="Download CV"
            title="Download CV"
          >
            <i className="fa fa-file-arrow-down" />
          </a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {year} Modesireoluwa Adedokun. All rights reserved.</p>
      </div>
    </footer>
  );
}
