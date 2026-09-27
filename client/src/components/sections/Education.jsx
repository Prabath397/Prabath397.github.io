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
          <article className="education-card" key={idx}>
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
          </article>
        ))}
      </div>
    </section>
  );
}
