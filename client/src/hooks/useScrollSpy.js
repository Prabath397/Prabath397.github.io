import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 130) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] || '');

  useEffect(() => {
    function handleScroll() {
      let current = sectionIds?.[0] || '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop - offset <= window.scrollY) {
          current = id;
        }
      }
      setActiveId(current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
