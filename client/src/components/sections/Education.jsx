import { education } from '../../data/portfolio';

export function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="section-shell section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic path and foundations.</h2>
      </div>

      <div className="section-shell education-grid">
        {education.map((item, idx) => (
          <article
            className={`education-card${item.documents ? ' education-card-featured' : ''}`}
            key={idx}
          >
            <span className="education-year">{item.period}</span>
            <h3>{item.degree}</h3>
            <p>{item.institution} · {item.notes}</p>
            {item.grades && (
              <div className="grade-list" aria-label="Grades">
                {item.grades.map((g, gIdx) => (
                  <span key={gIdx}>{g.subject}: {g.grade}</span>
                ))}
              </div>
            )}
            {item.documents && (
              <div
                className="education-documents"
                aria-label={`${item.degree} document previews`}
                onContextMenu={(event) => event.preventDefault()}
              >
                {item.documents.map((document) => (
                  <figure className="education-document" key={document.imagePath}>
                    <div className="education-document-frame">
                      <img
                        src={document.imagePath}
                        alt={document.label}
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <figcaption>{document.label}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
