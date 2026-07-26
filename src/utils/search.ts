import { projectsData } from '../data/projects';
import { skillCategories } from '../data/skills';
import { researchData } from '../data/research';
import { leadershipData } from '../data/leadership';
import { certificationsData } from '../data/certifications';

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'project' | 'skill' | 'research' | 'leadership' | 'certification';
  url: string;
  tags: string[];
}

export function performGlobalSearch(query: string): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResultItem[] = [];

  // Search Projects
  projectsData.forEach((p) => {
    if (
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q)) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    ) {
      results.push({
        id: `p-${p.id}`,
        title: p.title,
        subtitle: `Project • ${p.tagline}`,
        type: 'project',
        url: '#projects',
        tags: p.tags,
      });
    }
  });

  // Search Skills
  skillCategories.forEach((cat) => {
    cat.skills.forEach((s) => {
      if (
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      ) {
        results.push({
          id: `s-${s.name}`,
          title: s.name,
          subtitle: `Skill • ${s.category}`,
          type: 'skill',
          url: '#skills',
          tags: [s.category],
        });
      }
    });
  });

  // Search Research
  researchData.forEach((r) => {
    if (
      r.title.toLowerCase().includes(q) ||
      r.abstract.toLowerCase().includes(q) ||
      r.venue.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push({
        id: `r-${r.id}`,
        title: r.title,
        subtitle: `Research • ${r.venue}`,
        type: 'research',
        url: r.pdfUrl || '#research',
        tags: r.tags,
      });
    }
  });

  // Search Leadership
  leadershipData.forEach((l) => {
    if (
      l.role.toLowerCase().includes(q) ||
      l.organization.toLowerCase().includes(q) ||
      l.description.toLowerCase().includes(q)
    ) {
      results.push({
        id: `l-${l.id}`,
        title: `${l.role} — ${l.organization}`,
        subtitle: `Leadership • ${l.period}`,
        type: 'leadership',
        url: '#leadership',
        tags: l.category ? [l.category] : [],
      });
    }
  });

  // Search Certifications
  certificationsData.forEach((c) => {
    if (
      c.title.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      c.skills.some((s) => s.toLowerCase().includes(q))
    ) {
      results.push({
        id: `c-${c.id}`,
        title: c.title,
        subtitle: `Certification • ${c.issuer}`,
        type: 'certification',
        url: c.pdfUrl || c.credentialUrl || '#certifications',
        tags: c.skills,
      });
    }
  });

  return results.slice(0, 12);
}
