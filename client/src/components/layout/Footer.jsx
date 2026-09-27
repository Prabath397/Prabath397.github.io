import { contact } from '../../data/portfolio';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© 2026 Prabath Udayanga Jayasuriya</p>
        <div className="footer-links">
          <a href={contact.cvPath} download>CV</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
