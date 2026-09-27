import { profile, contact, heroMetrics } from '../../data/portfolio';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-kicker">
          <span className="status-dot"></span>
          {profile.status}
        </div>
        <img className="hero-avatar" src="/images/profile.png" alt="Portrait of Prabath Udayanga Jayasuriya" />
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.title} · {profile.tagline}</p>
        <p className="hero-copy">{profile.summary}</p>
        
        <div className="hero-actions">
          <Button variant="primary" href="#work">
            <i className="fas fa-code"></i>
            View Work
          </Button>
          <Button variant="secondary" href={contact.cvPath} download>
            <i className="fas fa-file-arrow-down"></i>
            Download CV
          </Button>
          <Button variant="ghost" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </Button>
          <Button variant="ghost" href={contact.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            GitHub
          </Button>
          <Button variant="ghost" href="#contact">
            <i className="fas fa-paper-plane"></i>
            Contact Me
          </Button>
        </div>

        <dl className="hero-metrics" aria-label="Portfolio highlights">
          {heroMetrics.map((metric, idx) => (
            <div key={idx}>
              <dt>{metric.label}</dt>
              <dd>{metric.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
