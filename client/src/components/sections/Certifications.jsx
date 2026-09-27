import { certifications } from '../../data/portfolio';

export function Certifications() {
  return (
    <section className="section section-light" id="certifications">
      <div className="section-shell section-heading">
        <p className="eyebrow">Certifications</p>
        <h2>Additional learning that strengthens my technical foundation.</h2>
      </div>

      <div className="section-shell certifications-layout">
        {certifications.map((cert, idx) => (
          <article className="certification-card" key={idx}>
            <div className="certificate-preview" aria-label={`${cert.title} certificate preview`}>
              <a
                href={cert.imagePath}
                target="_blank"
                rel="noopener noreferrer"
                title={`Click to view full size ${cert.title}`}
                className="certificate-img-link"
              >
                <img
                  src={cert.imagePath}
                  alt={`${cert.title} certificate`}
                  className="certificate-img"
                  loading="lazy"
                />
                <span className="certificate-zoom-hint">
                  <i className="fas fa-magnifying-glass-plus"></i> View Full Size
                </span>
              </a>
            </div>
            <div className="certificate-details">
              <span className="certificate-provider">{cert.provider}</span>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className="certificate-links-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <a
                  className="button button-primary"
                  href={cert.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                  View on LinkedIn
                </a>
                <a
                  className="button button-ghost"
                  style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
                  href={cert.documentPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-pdf"></i>
                  Official PDF
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
