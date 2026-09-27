import { skills } from '../../data/portfolio';

export function Skills() {
  return (
    <section className="section section-muted" id="skills">
      <div className="section-shell section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Areas I am learning and applying across software engineering.</h2>
      </div>

      <div className="section-shell skills-layout">
        {skills.map((category, idx) => (
          <article className="skill-panel" key={idx}>
            <h3>
              <i className={category.icon}></i> {category.title}
            </h3>
            <div className="tag-list">
              {category.items.map((item, iIdx) => (
                <span key={iIdx}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
