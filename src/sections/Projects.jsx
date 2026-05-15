import './Projects.css';

const projects = [
  {
    name: 'Hibi Splash',
    desc: 'An outstanding Zobo brand that leaves you thirsting for more. Built with a focus on bold visuals and smooth UX.',
    tags: ['React.js', 'CSS', 'Vite'],
    live: 'https://hibi-splash.vercel.app/',
    github: 'https://github.com/Dosky-05',
    headline: ['Refreshing', 'Every Sip'],
    color: '#ff6b35',
    iconImg: '/images/Hibilogo.png',
    headlineImg: '/images/Hibisplash.png',
  },
  {
    name: 'Cara Store',
    desc: 'A full-featured clothing brand e-commerce site with product pages, cart functionality, and a polished multi-page layout.',
    tags: ['React.js', 'React Router', 'CSS', '+1'],
    live: 'https://cara-store-pi.vercel.app/',
    github: 'https://github.com/Dosky-05',
    headline: ['Shop the', 'New Collection'],
    color: '#bd93f9',
    iconImg: '/images/caralogo.png',
    headlineImg: '/images/cara.png',
  },
  {
    name: 'StudyForge',
    desc: 'An AI-powered study assistant that helps students learn smarter, generating study plans, quizzes and summaries.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', '+4'],
    live: 'https://study-forge-chi.vercel.app/',
    github: 'https://github.com/Dosky-05',
    icon: 'fa-solid fa-brain',
    headline: ['Learn Smarter,', 'Not Harder'],
    color: '#00d4ff',
    headlineImg: '/images/Studyforge.png',
  },
  {
    name: 'Oasis',
    desc: 'A Website Created for a Digital Tech agency, who offers various tech services.',
    tags: ['next.js', 'Tailwind CSS', 'Node.js', '+4'],
    live: 'https://oasis-delta-wheat.vercel.app/',
    github: 'https://github.com/Dosky-05',
    iconImg: '/images/Oasislogo.png',
    headline: ['Digital Vision,', 'Meets Execution'],
    color: '#00d4ff',
    headlineImg: '/images/Oasis.png',
  },
   {
    name: 'Abbiescrib',
    desc: 'A website created for a brand that deals in exquisite branded gift items, Built with a focus on bold visuals and smooth UX.',
    tags: ['React.js', 'Tailwind CSS', 'React Router', '+1'],
    live: 'https://abbiescrib.vercel.app/',
    github: 'https://github.com/Dosky-05',
    iconImg: '/images/Abbiescriblogo.png',
    headline: ['Your Gift,', 'Our Craft'],
    color: '#eb2096',
    headlineImg: '/images/Abbiescrib.png',
  },
];

function CardMockup({ project }) {
  return (
    <div className="project-card__mockup">
      <div className="mockup__left">
        <div className="mockup__headline">
          {project.headline[0]}
          <em style={{ color: project.color }}>{project.headline[1]}</em>
        </div>
        <p className="mockup__sub">
          Delivering seamless digital experiences with modern web tech.
        </p>
        <div className="mockup__btn">
          <i className="fa fa-arrow-up-right-from-square" style={{ fontSize: 7 }} />
          Open Web App
        </div>
        <div className="mockup__logo" style={{ color: project.color, borderColor: `${project.color}33` }}>
          {project.iconImg
            ? <img src={project.iconImg} alt={project.name + ' logo'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            : <i className={project.icon} />
          }
        </div>
      </div>
      <div className="mockup__right">
        {project.headlineImg ? (
          <img
            src={project.headlineImg}
            alt={project.name + ' preview'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }}
          />
        ) : (
          <>
            <div className="mockup__right-header">Today</div>
            {['Morning Standup', 'Review Q3 Roadmap', 'Client Call'].map(item => (
              <div className="mockup__item" key={item}>
                <span className="mockup__item-title">{item}</span>
                <span className="mockup__item-sub">10:00 AM · 30 min</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects section-gap" id="projects">
      <div className="container">
        <div className="projects__header reveal">
          <span className="section-tag">Selected Work</span>
          <h2 className="section-heading">Projects I've <em>Built</em></h2>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Preview banner */}
              <div className="project-card__preview">
                <CardMockup project={p} />
                <span className="project-card__badge">Deployed</span>
              </div>

              {/* Body */}
              <div className="project-card__body">
                <div className="project-card__top">
                  <h3 className="project-card__name">{p.name}</h3>
                  <div className="project-card__check">
                    <i className="fa fa-check" />
                  </div>
                </div>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>

              {/* Actions */}
              <div className="project-card__actions">
                <a href={p.live} target="_blank" rel="noreferrer" className="btn-live">
                  <i className="fa fa-arrow-up-right-from-square" />
                  View Website
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-code">
                  <i className="fa-brands fa-github" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
