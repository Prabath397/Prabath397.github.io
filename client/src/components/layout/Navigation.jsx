import { sectionIds } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navigation({ isOpen, onLinkClick }) {
  const activeId = useScrollSpy(sectionIds);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="site-nav" id="site-nav" aria-label="Main navigation">
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={activeId === item.id ? 'is-active' : ''}
          onClick={onLinkClick}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
