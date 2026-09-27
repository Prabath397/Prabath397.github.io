import { profile, strengths } from '../../data/portfolio';

export function About() {
  return (
    <section className="section section-light" id="about">
      <div className="section-shell two-column">
        <div>
          <p className="eyebrow">About</p>
          <h2>Building steady engineering habits through real projects.</h2>
        </div>
        <div className="section-copy">
          <p>{profile.about}</p>
          <p>{profile.aboutExtra}</p>
        </div>
      </div>

      <div className="section-shell focus-grid" aria-label="Professional strengths">
        {strengths.map((strength, idx) => (
          <article className="focus-card" key={idx}>
            <i className={strength.icon}></i>
            <h3>{strength.title}</h3>
            <p>{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
