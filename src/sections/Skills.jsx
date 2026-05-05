import './Skills.css';

const skills = [
  { name: 'React', icon: 'fa-brands fa-react', level: 85 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: 80 },
  { name: 'Tailwind CSS', icon: 'fa-brands fa-css3-alt', level: 88 },
  { name: 'Node.js', icon: 'fa-brands fa-node-js', level: 65 },
  { name: 'Photoshop', icon: 'fa-solid fa-pen-nib', level: 78 },
  { name: 'Wordpress', icon: 'fa-brands fa-wordpress', level: 83 },
  { name: 'HTML/CSS', icon: 'fa-brands fa-html5', level: 90 },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', level: 85 },
  { name: 'Github', icon: 'fa-brands fa-github', level: 83 },
];

export default function Skills() {
  return (
    <section className="skills section-gap" id="skills">
      <div className="container">
        <div className="skills__header reveal">
          <span className="section-tag">What I Know</span>
          <h2 className="section-heading">Skills &amp; <em>Tools</em></h2>
        </div>

        <div className="skills__grid">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="skill-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__top">
                <div className="skill-card__left">
                  <div className="skill-card__icon">
                    <i className={s.icon} />
                  </div>
                  <div className="skill-card__info">
                    <h3>{s.name}</h3>
                    <span className="skill-card__pct">{s.level}% proficiency</span>
                  </div>
                </div>
              </div>
              <div className="skill-card__bar">
                <div
                  className="skill-card__fill"
                  style={{ '--fill': `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
