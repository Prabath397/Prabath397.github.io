import { experience } from '../../data/portfolio';

export function Experience() {
  return (
    <section className="section section-light" id="experience">
      <div className="section-shell section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Work experience that reinforces accuracy and ownership.</h2>
      </div>

      <div className="section-shell timeline">
        {experience.map((item, idx) => (
          <article className="timeline-item" key={idx}>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul>
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
