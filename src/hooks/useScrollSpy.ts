import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 100): string {
  const [activeId, setActiveId] = useState<string>('');
  const idsKey = sectionIds.join(',');

  useEffect(() => {
    const ids = idsKey.split(',').filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const sectionId = ids[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveId('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [idsKey, offset]);

  return activeId;
}
