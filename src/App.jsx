/* global React, ReactDOM */
const { useState, useEffect, useRef } = React;

// ==================== DATA ====================
const NAV_ITEMS = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Careers', page: 'careers' },
  { label: 'Contact', page: 'contact' },
];

const SERVICES_DATA = [
  {
    icon: '🌐', color: 'teal',
    title: 'Web Development',
    desc: 'We craft fast, accessible, and scalable web applications using modern frameworks. From MVPs to enterprise platforms, we deliver pixel-perfect results.',
    tags: ['React', 'Next.js', 'Node.js']
  },
  {
    icon: '📱', color: 'orange',
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps built with intuitive UX. We develop iOS and Android applications that users love and businesses depend on.',
    tags: ['React Native', 'Flutter', 'Swift']
  },
  {
    icon: '🎨', color: 'gold',
    title: 'UI/UX Design',
    desc: 'Design that converts. We create user experiences backed by research and refined through iteration — beautiful interfaces that drive results.',
    tags: ['Figma', 'Design Systems', 'Prototyping']
  },
  {
    icon: '⚙️', color: 'teal',
    title: 'Backend & API Development',
    desc: 'Robust, scalable server-side solutions. RESTful APIs, GraphQL, microservices — we build the backbone that powers your applications.',
    tags: ['Node.js', 'Python', 'PostgreSQL']
  },
  {
    icon: '☁️', color: 'blue',
    title: 'Cloud & DevOps',
    desc: 'End-to-end cloud architecture, CI/CD pipelines, and infrastructure-as-code. Deploy with confidence and scale without limits.',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    icon: '🛡️', color: 'orange',
    title: 'Cybersecurity & QA',
    desc: 'Security audits, penetration testing, and comprehensive quality assurance. We ensure your product is bulletproof before it meets the world.',
    tags: ['Security Audits', 'Automated Testing', 'OWASP']
  }
];

const TECHNOLOGIES = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🟦', name: 'Next.js' },
  { icon: '📱', name: 'Flutter' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🐳', name: 'Docker' },
  { icon: '🔴', name: 'Redis' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🌐', name: 'GraphQL' },
];

const TESTIMONIALS = [
  {
    text: `Landmine Soft transformed our legacy system into a modern, high-performance platform. The team's attention to detail and proactive communication made the entire process seamless.`,
    name: 'Alexandra Chen', role: 'CTO, NexaFlow Inc.', initials: 'AC'
  },
  {
    text: `Incredible work ethic and technical depth. They delivered a complex mobile app ahead of schedule with zero critical bugs. I wouldn't hesitate to work with them again.`,
    name: 'Marcus Webb', role: 'Founder, TrackMate', initials: 'MW'
  },
  {
    text: 'From UI design to backend APIs, every layer of our product was handled professionally. Landmine Soft is our go-to technology partner.',
    name: 'Priya Nair', role: 'Product Director, Orbis Health', initials: 'PN'
  },
];

const PROJECTS = [
  { emoji: '🏪', bg: 'bg1', title: 'RetailPulse Dashboard', desc: 'Real-time analytics platform for 500+ retail stores across 3 countries.', tags: ['React', 'Node.js', 'AWS'] },
  { emoji: '🏥', bg: 'bg2', title: 'MediSync Mobile App', desc: 'Patient management app with HIPAA-compliant data handling.', tags: ['Flutter', 'Firebase', 'Python'] },
  { emoji: '🚚', bg: 'bg3', title: 'LogiTrack Enterprise', desc: 'Fleet management & route optimization for logistics companies.', tags: ['Next.js', 'PostgreSQL', 'Docker'] },
  { emoji: '💰', bg: 'bg4', title: 'FinanceOS Platform', desc: 'Automated accounting and reporting SaaS for SMEs.', tags: ['TypeScript', 'GraphQL', 'AWS'] },
];

const TEAM = [
  { name: 'Aryan Sharma', role: 'CEO & Co-Founder', bio: 'Visionary leader with 12+ years in software engineering and startup ecosystem.', initials: 'AS', color: '#00E5C3' },
  { name: 'Meera Kapoor', role: 'CTO', bio: 'Full-stack architect passionate about scalable systems and developer experience.', initials: 'MK', color: '#FF5C35' },
  { name: 'David Osei', role: 'Head of Design', bio: 'Award-winning UX designer focused on human-centered product experiences.', initials: 'DO', color: '#F5C842' },
  { name: 'Sofia Rodriguez', role: 'Lead Engineer', bio: 'Backend specialist and open-source contributor with deep cloud expertise.', initials: 'SR', color: '#63B3ED' },
];

const JOBS = [
  { title: 'Senior React Developer', type: 'Full-time', dept: 'Engineering', loc: 'Remote', desc: 'Build next-gen web interfaces for our enterprise clients.' },
  { title: 'Flutter Mobile Engineer', type: 'Full-time', dept: 'Mobile', loc: 'Hybrid', desc: 'Develop cross-platform apps for iOS and Android platforms.' },
  { title: 'UI/UX Designer', type: 'Full-time', dept: 'Design', loc: 'Remote', desc: 'Create stunning user experiences from wireframe to high-fidelity.' },
  { title: 'DevOps Engineer', type: 'Contract', dept: 'Infrastructure', loc: 'Remote', desc: 'Manage and scale cloud infrastructure across AWS and GCP.' },
  { title: 'Business Development Executive', type: 'Full-time', dept: 'Sales', loc: 'On-site', desc: 'Drive growth by building partnerships and closing enterprise deals.' },
];

const FAQS = [
  { q: 'What industries do you serve?', a: `We work across healthcare, fintech, e-commerce, logistics, and SaaS. Our team's versatility means we can quickly understand your domain and deliver solutions that fit your industry's specific needs and compliance requirements.` },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A simple web app may take 4–8 weeks, while a full-scale enterprise platform could take 3–6 months. During our discovery phase, we provide a detailed timeline with milestones.' },
  { q: 'Do you offer post-launch support and maintenance?', a: 'Yes, absolutely. We offer flexible maintenance packages including bug fixes, performance monitoring, feature updates, and 24/7 critical issue support. We believe in long-term partnerships.' },
  { q: 'Can you work with our existing development team?', a: 'Definitely. We offer team augmentation services where our engineers integrate seamlessly with your in-house team, following your workflows, tools, and culture.' },
  { q: 'How do you handle confidentiality and IP rights?', a: 'We sign NDAs before every engagement and all code, designs, and intellectual property produced during the project belong 100% to you. We take data privacy and confidentiality very seriously.' },
  { q: 'What is your development methodology?', a: 'We follow Agile/Scrum with two-week sprints. You get regular demos, sprint reviews, and full transparency through tools like Jira and Notion. Communication is at the core of our process.' },
  { q: 'Do you work with startups or only established companies?', a: 'Both! We love working with early-stage startups to bring ideas to life quickly, and we also partner with established enterprises for complex digital transformation projects.' },
];

// ==================== UTILS ====================
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return scrolled;
}

// ==================== NAVBAR ====================
function Navbar({ page, setPage }) {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  function go(p) {
    setPage(p);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="nav-logo" onClick={() => go('home')}>
            <div className="logo-mark">L</div>
            <div className="logo-text">Landmine<span>Soft</span></div>
          </div>

          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.page}>
                <button
                  className={page === item.page ? 'active' : ''}
                  onClick={() => go(item.page)}
                >{item.label}</button>
              </li>
            ))}
            <li><button onClick={() => go('faq')}>FAQ</button></li>
          </ul>

          <div className="nav-cta">
            <button className="btn btn-secondary btn-sm" onClick={() => go('login')}>Sign In</button>
            <button className="btn btn-primary btn-sm" onClick={() => go('contact')}>Get a Quote</button>
            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>✕</button>
          {[...NAV_ITEMS, { label: 'FAQ', page: 'faq' }].map(item => (
            <button key={item.page} onClick={() => go(item.page)}>{item.label}</button>
          ))}
          <button onClick={() => go('login')} style={{ color: 'var(--accent-teal)' }}>Sign In</button>
          <button className="btn btn-primary" onClick={() => go('contact')}>Get a Quote</button>
        </div>
      )}
    </>
  );
}

// ==================== FOOTER ====================
function Footer({ setPage }) {
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" onClick={() => go('home')} style={{ cursor: 'pointer' }}>
              <div className="logo-mark">L</div>
              <div className="logo-text">Landmine<span style={{ color: 'var(--accent-teal)' }}>Soft</span></div>
            </div>
            <p>Engineering tomorrow's solutions today. We build software that scales, performs, and delights.</p>
            <div className="social-links">
              {['𝕏', 'in', '⑀', '🐙'].map((s, i) => (
                <div key={i} className="social-link">{s}</div>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              {[['About Us', 'about'], ['Careers', 'careers'], ['Blog', 'home'], ['Press', 'home']].map(([l, p]) => (
                <li key={l}><button onClick={() => go(p)}>{l}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul className="footer-links">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud & DevOps', 'API Development'].map(l => (
                <li key={l}><button onClick={() => go('services')}>{l}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul className="footer-links">
              {[['Privacy Policy', 'privacy'], ['Terms of Service', 'terms'], ['FAQ', 'faq'], ['Contact', 'contact']].map(([l, p]) => (
                <li key={l}><button onClick={() => go(p)}>{l}</button></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Landmine Soft. All rights reserved. Built with precision & passion.</p>
          <div className="footer-bottom-links">
            <button onClick={() => go('privacy')}>Privacy</button>
            <button onClick={() => go('terms')}>Terms</button>
            <button onClick={() => go('contact')}>Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== HOME PAGE ====================
function HomePage({ setPage }) {
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }
  const marqueeItems = ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'API Development', 'DevOps', 'Cybersecurity', 'SaaS Products'];

  return (
    <main>
      {/* HERO */}
      <section className="hero noise-bg">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="hero-content fade-in">
              <div className="badge"><span className="dot" />Now Accepting Projects for Q3 2025</div>
              <h1>
                We Engineer<br />
                <span className="gradient-text">Digital Products</span><br />
                That Scale
              </h1>
              <p className="hero-sub">
                Landmine Soft is a full-service software studio. We design, develop, and deploy web apps, mobile apps, and cloud solutions that help ambitious companies grow.
              </p>
              <div className="hero-cta">
                <button className="btn btn-primary btn-lg" onClick={() => go('contact')}>
                  Start Your Project →
                </button>
                <button className="btn btn-secondary btn-lg" onClick={() => go('services')}>
                  Explore Services
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">120<span>+</span></span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8<span>yrs</span></span>
                  <span className="stat-label">In Business</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">98<span>%</span></span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="hero-visual fade-in fade-in-2">
              <div className="hero-orb">
                <div className="orb-center">🚀</div>
              </div>
              <div className="orb-tag t1"><span className="dot" />React & Next.js</div>
              <div className="orb-tag t2"><span className="dot" style={{ background: 'var(--accent-orange)' }} />120+ Projects Done</div>
              <div className="orb-tag t3"><span className="dot" style={{ background: 'var(--accent-gold)' }} />AWS Certified Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              <span className="sep">◆</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">What We Build</div>
            <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto 20px' }}>
              Full-Spectrum Software Services
            </h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From concept to deployment, we cover every layer of your digital product — designed for performance and built to last.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES_DATA.map((s, i) => (
              <div key={i} className="card service-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`service-icon ${s.color}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="learn-more" onClick={() => go('services')} style={{ cursor: 'pointer' }}>
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="why-grid">
            <div>
              <div className="section-label">Why Landmine Soft</div>
              <h2 className="section-title">Built Different,<br />From the Ground Up</h2>
              <p className="section-sub">
                We don't just write code. We solve problems. Every project begins with deep discovery, continues with transparent collaboration, and ends with software that actually works — and continues to be supported.
              </p>
              <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Agile development with 2-week sprints', 'Dedicated project manager on every engagement', 'Full code ownership — no vendor lock-in', '6-month post-launch support included'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,229,195,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'var(--accent-teal)', fontSize: '0.75rem' }}>✓</span>
                    </div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <button className="btn btn-primary" style={{ marginTop: '36px' }} onClick={() => go('about')}>
                Our Story →
              </button>
            </div>

            <div className="why-features">
              {[
                { icon: '⚡', title: 'Fast Delivery', desc: 'We ship MVPs in weeks, not months. Speed without sacrificing quality.' },
                { icon: '🔒', title: 'Secure by Default', desc: 'Security is built into every layer of our development process.' },
                { icon: '📈', title: 'Scalable Architecture', desc: 'Code that grows with your business from day one to day ten thousand.' },
                { icon: '💬', title: '24/7 Communication', desc: 'Your dedicated team is always reachable. No black holes, ever.' },
              ].map((f, i) => (
                <div key={i} className="card why-feature">
                  <div className="feature-icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div className="section-label">Our Work</div>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <button className="btn btn-secondary btn-sm">View All Projects →</button>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="card project-card">
                <div className={`project-img ${p.bg}`}>{p.emoji}</div>
                <div className="project-body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="section-sm" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">Technologies We Master</h2>
          </div>
          <div className="tech-grid">
            {TECHNOLOGIES.map((t, i) => (
              <div key={i} className="tech-item">
                <span className="tech-icon">{t.icon}</span>
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Client Love</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="card testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <span key={j} className="star">★</span>)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <div className="badge" style={{ margin: '0 auto 24px' }}><span className="dot" />Let's Build Something Great</div>
          <h2>Ready to Start Your<br /><span style={{ color: 'var(--accent-teal)' }}>Next Project?</span></h2>
          <p>Tell us about your vision. We'll get back to you within 24 hours with a free consultation and roadmap.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => go('contact')}>Get a Free Quote →</button>
            <button className="btn btn-secondary btn-lg" onClick={() => go('about')}>Learn About Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ==================== ABOUT PAGE ====================
function AboutPage() {
  return (
    <main>
      <section className="page-hero noise-bg">
        <div className="container">
          <div className="section-label">About Us</div>
          <h1>We're the Team Behind<br /><span style={{ color: 'var(--accent-teal)' }}>Your Next Big Thing</span></h1>
          <p>A passionate team of engineers, designers, and strategists united by a mission to build software that makes a real difference.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Our Story</div>
              <h2 className="section-title">Built From the Trenches of Real Engineering</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
                Founded in 2017 by a group of engineers tired of bloated agencies and broken promises, Landmine Soft was born with a simple mandate: build great software, deliver it on time, and stand behind it.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px' }}>
                Today, we're a team of 40+ engineers, designers, and strategists who've shipped products used by millions of people across 25+ countries. We work with everyone from scrappy startups finding product-market fit to Fortune 500 companies modernizing their legacy systems.
              </p>
              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                {[['2017', 'Founded'], ['40+', 'Team Members'], ['120+', 'Projects Shipped'], ['25+', 'Countries Served']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-teal)' }}>{n}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-visual">
              <div className="about-img-box">🏗️</div>
              <div className="about-stat-box">
                <div className="number">98%</div>
                <div className="label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION/VISION */}
      <section className="section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Purpose</div>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To empower businesses with software solutions that are not just functional but transformative — delivering quality code, on-time delivery, and genuine partnerships that drive long-term value.' },
              { icon: '🔭', title: 'Our Vision', text: `To be the world's most trusted software engineering studio — a place where the best engineers build the most impactful products, and where our clients grow alongside us.` },
            ].map((m, i) => (
              <div key={i} className="card" style={{ padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{m.icon}</div>
                <h3 style={{ marginBottom: '16px', fontSize: '1.3rem' }}>{m.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Core Values</div>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🔍', title: 'Radical Transparency', desc: 'We tell you what you need to hear, not what you want to hear. No hidden costs, no sugarcoating, no surprises.' },
              { icon: '⚡', title: 'Velocity with Care', desc: `Speed matters in tech. But not at the cost of quality. We move fast and we don't break things — intentionally.` },
              { icon: '🤝', title: 'Long-Term Partnership', desc: 'We treat every client like a co-founder. Your success is our success. We invest in relationships, not transactions.' },
              { icon: '💡', title: 'Continuous Learning', desc: 'Technology evolves fast. So do we. Every team member dedicates time to learning new skills and sharing knowledge.' },
            ].map((v, i) => (
              <div key={i} className="card value-card">
                <div className="icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">The Team</div>
            <h2 className="section-title">Meet the Builders</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Smart, passionate, and relentlessly committed to excellence — our team is our greatest asset.</p>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="card team-card">
                <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}99)` }}>
                  {m.initials}
                </div>
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
                <p className="bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ==================== SERVICES PAGE ====================
function ServicesPage({ setPage }) {
  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }

  const detailedServices = [
    {
      icon: '🌐', color: 'teal', title: 'Web Development',
      desc: 'We build performant, accessible, and beautifully crafted web applications. Whether you need a marketing site, an e-commerce platform, or a complex SaaS dashboard — we deliver.',
      features: ['React / Next.js / Vue.js', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization', 'SEO-ready Architecture'],
      price: 'Starting at $8,000'
    },
    {
      icon: '📱', color: 'orange', title: 'Mobile App Development',
      desc: 'Cross-platform and native mobile applications that users actually enjoy using. We handle iOS, Android, and everything in between.',
      features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'App Store Deployment', 'Push Notifications & Analytics'],
      price: 'Starting at $12,000'
    },
    {
      icon: '🎨', color: 'gold', title: 'UI/UX Design',
      desc: 'User research, interaction design, and visual execution. We craft experiences that reduce friction, increase conversions, and build user loyalty.',
      features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Figma / Adobe XD', 'Handoff-ready Specs'],
      price: 'Starting at $5,000'
    },
    {
      icon: '⚙️', color: 'teal', title: 'Backend & API Development',
      desc: 'Scalable, secure, and well-documented APIs and server-side systems. From microservices to monoliths — we architect what fits your needs.',
      features: ['REST & GraphQL APIs', 'Node.js / Python / Go', 'Database Design', 'Authentication Systems', 'Third-party Integrations', 'API Documentation'],
      price: 'Starting at $7,000'
    },
    {
      icon: '☁️', color: 'blue', title: 'Cloud & DevOps',
      desc: 'Modern infrastructure that keeps your application running reliably at any scale. CI/CD, monitoring, and cost optimization included.',
      features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Performance Monitoring', '24/7 Uptime Management'],
      price: 'Starting at $4,000/mo'
    },
    {
      icon: '🛡️', color: 'orange', title: 'Cybersecurity & QA',
      desc: 'We find the vulnerabilities before attackers do. Penetration testing, security audits, and comprehensive automated testing frameworks.',
      features: ['Security Audits', 'Penetration Testing', 'OWASP Compliance', 'Automated Test Suites', 'Load Testing', 'Bug Bounty Programs'],
      price: 'Starting at $3,000'
    },
  ];

  return (
    <main>
      <section className="page-hero noise-bg">
        <div className="container">
          <div className="section-label">Services</div>
          <h1>End-to-End Software<br /><span style={{ color: 'var(--accent-teal)' }}>Engineering Services</span></h1>
          <p>From a single component to a complete digital transformation. We bring the expertise, tooling, and discipline to make your product a success.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {detailedServices.map((s, i) => (
            <div key={i} className="card" style={{ marginBottom: '24px', padding: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div className={`service-icon ${s.color}`} style={{ flexShrink: 0 }}>{s.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px', maxWidth: '560px' }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {s.features.map(f => (
                        <span key={f} className="project-tag" style={{ padding: '6px 12px' }}>✓ {f}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Pricing</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-teal)', marginBottom: '16px' }}>{s.price}</div>
                  <button className="btn btn-primary btn-sm" onClick={() => go('contact')}>Get Quote →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'Discovery', desc: 'Deep-dive into your goals, users, and constraints. We build a shared understanding before writing a single line.' },
              { num: '02', title: 'Design', desc: 'Wireframes, prototypes, and final UI. Every pixel is intentional.' },
              { num: '03', title: 'Development', desc: 'Agile sprints with weekly demos. You see real progress constantly.' },
              { num: '04', title: 'Launch & Support', desc: 'QA, deployment, monitoring, and post-launch support included.' },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: '32px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--border-dim)', lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ==================== CONTACT PAGE ====================
function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Message cannot be empty';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  return (
    <main>
      <section className="page-hero noise-bg">
        <div className="container">
          <div className="section-label">Contact Us</div>
          <h1>Let's Build Something<br /><span style={{ color: 'var(--accent-teal)' }}>Together</span></h1>
          <p>Drop us a message and we'll get back to you within 24 hours with a free consultation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h3 style={{ marginBottom: '8px' }}>Get in Touch</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '0.9rem' }}>
                We're always excited to hear about new projects. Reach out via the form or any of the channels below.
              </p>
              {[
                { icon: '📧', title: 'Email', info: 'hello@landminesoft.com' },
                { icon: '📞', title: 'Phone', info: '+1 (555) 742-9100' },
                { icon: '📍', title: 'Address', info: '247 Innovation Drive, Suite 400\nSan Francisco, CA 94105' },
                { icon: '🕐', title: 'Hours', info: 'Monday – Friday\n9:00 AM – 6:00 PM PST' },
              ].map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <h5>{item.title}</h5>
                    <p style={{ whiteSpace: 'pre-line' }}>{item.info}</p>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: '32px', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-teal)', marginBottom: '8px' }}>⚡ Fast Response Promise</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Every inquiry gets a response within 24 hours. For urgent matters, call us directly.</p>
              </div>
            </div>

            <div className="card form-card">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    Thanks for reaching out. Our team will get back to you within 24 hours. In the meantime, feel free to check out our portfolio.
                  </p>
                  <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <>
                  <h3 style={{ marginBottom: '28px' }}>Send a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        className={errors.name ? 'error' : ''}
                        placeholder="John Smith"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                      />
                      {errors.name && <div className="error-msg">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input
                        type="email"
                        className={errors.email ? 'error' : ''}
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                      />
                      {errors.email && <div className="error-msg">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        placeholder="Your Company Name"
                        value={form.company}
                        onChange={e => handleChange('company', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Needed</label>
                      <select value={form.service} onChange={e => handleChange('service', e.target.value)}>
                        <option value="">Select a service...</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>Backend & API</option>
                        <option>Cloud & DevOps</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      className={errors.message ? 'error' : ''}
                      placeholder="Tell us about your project — what you're building, your goals, timeline, and budget..."
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                    />
                    {errors.message && <div className="error-msg">{errors.message}</div>}
                  </div>
                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmit}>
                    Send Message →
                  </button>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '12px', textAlign: 'center' }}>
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ==================== LOGIN PAGE ====================
function LoginPage({ setPage }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }

  function validate() {
    const e = {};
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.password) e.password = 'Password is required';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); alert('Login successful! (Demo)'); }, 1500);
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  return (
    <div className="auth-page">
      <div className="auth-glow" />
      <div className="card auth-card">
        <div className="logo-area">
          <div className="logo-mark">L</div>
          <h2>Welcome Back</h2>
          <p className="auth-sub">Sign in to your Landmine Soft account</p>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className={errors.email ? 'error' : ''}
            placeholder="you@company.com"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input-wrap">
            <input
              type={showPw ? 'text' : 'password'}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
              value={form.password}
              onChange={e => handleChange('password', e.target.value)}
            />
            <button className="toggle-eye" onClick={() => setShowPw(!showPw)} type="button">
              {showPw ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <div className="error-msg">{errors.password}</div>}
        </div>

        <button className="forgot-link" type="button">Forgot your password?</button>

        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? '⏳ Signing In...' : 'Sign In →'}
        </button>

        <div className="divider"><span>or continue with</span></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {['🔵 Google', '⚫ GitHub'].map((s, i) => (
            <button key={i} className="btn btn-secondary" style={{ justifyContent: 'center', fontSize: '0.85rem' }}>
              {s}
            </button>
          ))}
        </div>

        <div className="auth-footer-link">
          Don't have an account? <button onClick={() => go('register')}>Sign up free →</button>
        </div>
      </div>
    </div>
  );
}

// ==================== REGISTER PAGE ====================
function RegisterPage({ setPage }) {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [agreed, setAgreed] = useState(false);

  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }

  function getStrength(pw) {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^a-zA-Z0-9]/.test(pw)) score++;
    return score;
  }

  const strength = getStrength(form.password);
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthClass = strength <= 1 ? 'weak' : strength <= 2 ? 'medium' : 'strong';

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Must be at least 8 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!agreed) e.agreed = 'Please accept the terms to continue';
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    alert('Account created! (Demo)');
  }

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  }

  return (
    <div className="auth-page">
      <div className="auth-glow" />
      <div className="card auth-card" style={{ maxWidth: '500px' }}>
        <div className="logo-area">
          <div className="logo-mark">L</div>
          <h2>Create Account</h2>
          <p className="auth-sub">Start your journey with Landmine Soft</p>
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            className={errors.fullName ? 'error' : ''}
            placeholder="Jane Smith"
            value={form.fullName}
            onChange={e => handleChange('fullName', e.target.value)}
          />
          {errors.fullName && <div className="error-msg">{errors.fullName}</div>}
        </div>

        <div className="form-group">
          <label>Work Email</label>
          <input
            type="email"
            className={errors.email ? 'error' : ''}
            placeholder="jane@company.com"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
          />
          {errors.email && <div className="error-msg">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input-wrap">
            <input
              type={showPw ? 'text' : 'password'}
              className={errors.password ? 'error' : ''}
              placeholder="Minimum 8 characters"
              value={form.password}
              onChange={e => handleChange('password', e.target.value)}
            />
            <button className="toggle-eye" onClick={() => setShowPw(!showPw)} type="button">
              {showPw ? '🙈' : '👁️'}
            </button>
          </div>
          {form.password && (
            <div className="password-strength">
              <div className="strength-bars">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`strength-bar ${i < strength ? `active ${strengthClass}` : ''}`} />
                ))}
              </div>
              <div className="strength-label">{strengthLabels[strength]}</div>
            </div>
          )}
          {errors.password && <div className="error-msg">{errors.password}</div>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className={errors.confirmPassword ? 'error' : ''}
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={e => handleChange('confirmPassword', e.target.value)}
          />
          {errors.confirmPassword && <div className="error-msg">{errors.confirmPassword}</div>}
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
          <input type="checkbox" id="terms" checked={agreed} onChange={e => { setAgreed(e.target.checked); if (errors.agreed) setErrors(p => ({ ...p, agreed: '' })); }}
            style={{ marginTop: '3px', accentColor: 'var(--accent-teal)', cursor: 'pointer' }} />
          <label htmlFor="terms" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer', lineHeight: '1.5' }}>
            I agree to the <span style={{ color: 'var(--accent-teal)' }}>Terms of Service</span> and <span style={{ color: 'var(--accent-teal)' }}>Privacy Policy</span>
          </label>
        </div>
        {errors.agreed && <div className="error-msg" style={{ marginTop: '-16px', marginBottom: '16px' }}>{errors.agreed}</div>}

        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={handleSubmit}
        >
          Create Account →
        </button>

        <div className="auth-footer-link">
          Already have an account? <button onClick={() => go('login')}>Sign in →</button>
        </div>
      </div>
    </div>
  );
}

// ==================== CAREERS PAGE ====================
function CareersPage({ setPage }) {
  const [applying, setApplying] = useState(null);
  const [appForm, setAppForm] = useState({ name: '', email: '', linkedin: '', message: '' });
  const [appSent, setAppSent] = useState(false);

  function go(p) { setPage(p); window.scrollTo({ top: 0, behavior: 'instant' }); }

  function submitApp() {
    if (!appForm.name || !appForm.email) return;
    setAppSent(true);
  }

  return (
    <main>
      <section className="page-hero noise-bg">
        <div className="container">
          <div className="section-label">Careers</div>
          <h1>Build the Future<br /><span style={{ color: 'var(--accent-teal)' }}>With Us</span></h1>
          <p>Join a team that values craftsmanship, growth, and genuine impact. We're always looking for exceptional talent.</p>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Life at Landmine Soft</div>
            <h2 className="section-title">Why Engineers Love It Here</h2>
          </div>
          <div className="culture-grid">
            {[
              { icon: '🌍', title: 'Remote-First', desc: 'Work from anywhere on Earth. We believe talent has no borders and support flexible work arrangements.' },
              { icon: '📚', title: 'Learning Budget', desc: '$2,000 annual budget for courses, books, and conferences. We invest in your continuous growth.' },
              { icon: '🏥', title: 'Full Benefits', desc: 'Comprehensive health, dental, and vision coverage. Family plans available. Your wellbeing matters.' },
              { icon: '🚀', title: 'Real Impact', desc: 'No busywork. Every engineer works on products that real users depend on daily.' },
              { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible hours, unlimited PTO, and a culture that respects your time outside of work.' },
              { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading salaries, equity for senior hires, and annual performance reviews.' },
            ].map((c, i) => (
              <div key={i} className="card culture-card">
                <div className="icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="section" style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Open Positions</div>
            <h2 className="section-title">Current Openings</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Don't see a perfect fit? Send us a general application — we're always interested in exceptional talent.</p>
          </div>
          <div className="jobs-list">
            {JOBS.map((job, i) => (
              <div key={i} className="card job-card">
                <div className="job-info">
                  <h4>{job.title}</h4>
                  <div className="job-meta">
                    <span className="job-tag type">{job.type}</span>
                    <span className="job-tag dept">{job.dept}</span>
                    <span className="job-tag loc">📍 {job.loc}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px' }}>{job.desc}</p>
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => { setApplying(job.title); setAppSent(false); setAppForm({ name: '', email: '', linkedin: '', message: '' }); }}>
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL */}
      {applying && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(2,8,16,0.85)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '40px', position: 'relative' }}>
            <button onClick={() => setApplying(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', fontSize: '1.3rem', cursor: 'pointer', color: 'var(--text-muted)' }}>✕</button>
            {appSent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🎉</div>
                <h3>Application Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '12px', lineHeight: '1.7' }}>Thanks for applying for <strong>{applying}</strong>. Our HR team reviews every application and will get back to you within 5 business days.</p>
                <button className="btn btn-primary" style={{ marginTop: '24px' }} onClick={() => setApplying(null)}>Close</button>
              </div>
            ) : (
              <>
                <div className="section-label" style={{ marginBottom: '8px' }}>Apply For</div>
                <h3 style={{ marginBottom: '28px' }}>{applying}</h3>
                {[
                  { label: 'Full Name *', field: 'name', placeholder: 'Your full name', type: 'text' },
                  { label: 'Email Address *', field: 'email', placeholder: 'your@email.com', type: 'email' },
                  { label: 'LinkedIn / Portfolio URL', field: 'linkedin', placeholder: 'linkedin.com/in/yourname', type: 'url' },
                ].map(f => (
                  <div key={f.field} className="form-group">
                    <label>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={appForm[f.field]} onChange={e => setAppForm(p => ({ ...p, [f.field]: e.target.value }))} />
                  </div>
                ))}
                <div className="form-group">
                  <label>Cover Note</label>
                  <textarea placeholder="Tell us briefly why you'd be a great fit..." value={appForm.message} onChange={e => setAppForm(p => ({ ...p, message: e.target.value }))} style={{ minHeight: '100px' }} />
                </div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={submitApp}>Submit Application →</button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

// ==================== FAQ PAGE ====================
function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <main>
      <section className="page-hero noise-bg">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h1>Frequently Asked<br /><span style={{ color: 'var(--accent-teal)' }}>Questions</span></h1>
          <p>Can't find the answer you're looking for? Send us a message and we'll respond within 24 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className={`faq-chevron ${open === i ? 'open' : ''}`}>▾</span>
                </button>
                {open === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container cta-inner">
          <h2>Still Have Questions?</h2>
          <p>Our team is happy to help. Reach out and we'll get back to you promptly.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => { window.scrollTo({ top: 0 }); }}>Contact Us →</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// ==================== PRIVACY / TERMS PAGES ====================
function LegalPage({ title, content }) {
  return (
    <main>
      <section className="page-hero noise-bg" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-label">Legal</div>
          <h1>{title}</h1>
          <p>Last updated: June 15, 2025</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            {content.map((section, i) => (
              <div key={i} style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{section.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const PRIVACY_CONTENT = [
  { title: '1. Information We Collect', text: 'We collect information you provide directly to us when you fill out forms on our website, such as your name, email address, phone number, and project details. We also collect usage data, device information, and cookies to improve your experience.' },
  { title: '2. How We Use Your Information', text: 'Your information is used to respond to your inquiries, process project engagements, send important service updates, and improve our products and services. We do not sell your personal data to third parties.' },
  { title: '3. Data Storage and Security', text: 'We store your data on secure, encrypted servers. We implement industry-standard security measures including HTTPS encryption, access controls, and regular security audits to protect your information.' },
  { title: '4. Cookies', text: 'We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.' },
  { title: '5. Your Rights', text: 'You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at privacy@landminesoft.com.' },
  { title: '6. Contact Us', text: 'For any privacy-related questions or concerns, please contact our Data Protection Officer at privacy@landminesoft.com or write to us at 247 Innovation Drive, Suite 400, San Francisco, CA 94105.' },
];

const TERMS_CONTENT = [
  { title: '1. Acceptance of Terms', text: 'By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.' },
  { title: '2. Services Description', text: 'Landmine Soft provides software development, design, and consulting services. The scope, deliverables, timeline, and pricing of each engagement are defined in individual project contracts or Statements of Work (SOWs).' },
  { title: '3. Intellectual Property', text: 'Upon full payment, all custom code and designs created for your project become your intellectual property. Landmine Soft retains ownership of pre-existing tools, frameworks, and proprietary methodologies used in the work.' },
  { title: '4. Payment Terms', text: 'Payment schedules are outlined in individual project agreements. Standard terms require a deposit before work begins. Late payments may incur interest fees as specified in the contract.' },
  { title: '5. Limitation of Liability', text: 'Landmine Soft shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the total fees paid in the six months preceding a claim.' },
  { title: '6. Governing Law', text: 'These terms are governed by the laws of the State of California. Any disputes shall be resolved through binding arbitration in San Francisco, California, unless otherwise agreed.' },
];

// ==================== MAIN APP ====================
function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  const showNavFooter = !['login', 'register'].includes(page);

  function renderPage() {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage setPage={setPage} />;
      case 'contact': return <ContactPage />;
      case 'login': return <LoginPage setPage={setPage} />;
      case 'register': return <RegisterPage setPage={setPage} />;
      case 'careers': return <CareersPage setPage={setPage} />;
      case 'faq': return <FAQPage />;
      case 'privacy': return <LegalPage title="Privacy Policy" content={PRIVACY_CONTENT} />;
      case 'terms': return <LegalPage title="Terms of Service" content={TERMS_CONTENT} />;
      default: return <HomePage setPage={setPage} />;
    }
  }

  return (
    <>
      {showNavFooter && <Navbar page={page} setPage={setPage} />}
      {renderPage()}
      {showNavFooter && <Footer setPage={setPage} />}
    </>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
