import { featuredProjects, pinnedRepos, contact } from '../../data/portfolio';

export function Work() {
  return (
    <section className="section section-ink" id="work">
      <div className="section-shell section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Full-stack projects shaped by real workflows.</h2>
        <p>
          Recent builds from coursework and self-learning, focused on practical business
          systems, role-based workflows, APIs, and database-backed applications.
        </p>
      </div>

      <div className="section-shell featured-work">
        {featuredProjects.map((project, idx) => (
          <article key={idx} className={`work-card ${project.featured ? 'work-card-large' : ''}`}>
            <div className="work-meta">
              <span>{project.category}</span>
              <span>{project.technologies.join(' · ')}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="work-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                Source
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="section-shell recent-work github-section">
        <div className="recent-heading">
          <div>
            <p className="eyebrow">GitHub</p>
            <h3>Pinned Repositories</h3>
            <p className="github-intro">A quick view of the projects I pin first on my GitHub profile.</p>
          </div>
          <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
            View GitHub
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>

        <div className="repo-grid" id="projects-container" aria-live="polite">
          {pinnedRepos.map((repo, idx) => (
            <article className="repo-card pinned-repo-card" key={idx}>
              <div className="repo-title-row">
                <i className="far fa-window-maximize repo-icon" aria-hidden="true"></i>
                <h4>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h4>
                <span className="repo-visibility">Public</span>
              </div>
              <p>{repo.description}</p>
              <div className="repo-footer">
                <span className="repo-language">
                  <span className="language-dot" style={{ '--repo-language-color': repo.color }}></span>
                  {repo.language}
                </span>
                <span>
                  <i className="far fa-star"></i> {repo.stars}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
