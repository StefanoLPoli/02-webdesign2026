import { writable } from 'svelte/store';

export const activeYear = writable(2026);

export const projects = writable([
  {
    id: 1,
    title: 'FatFade',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=FatFade'
  },
  {
    id: 2,
    title: 'Unmagaged',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Unmagaged'
  },
  {
    id: 3,
    title: 'Mako di Plaatsa',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Mako+di+Plaatsa'
  },
  {
    id: 4,
    title: 'Piiarity',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Piiarity'
  },
  {
    id: 5,
    title: 'Substrato',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Substrato'
  },
  {
    id: 6,
    title: 'Uny',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Uny'
  },
  {
    id: 7,
    title: 'RCIO.ME',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=RCIO.ME'
  },
  {
    id: 8,
    title: 'Sound Morphology',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Sound+Morphology'
  },
  {
    id: 9,
    title: 'Universo',
    year: 2026,
    image: 'https://via.placeholder.com/800x500?text=Universo'
  },
  {
    id: 10,
    title: 'Archive',
    year: 2025,
    image: 'https://via.placeholder.com/800x500?text=Archive'
  }
]);

export const filteredProjects = writable([]);

// Subscribe to both stores and filter projects
activeYear.subscribe(year => {
  projects.subscribe(allProjects => {
    const filtered = allProjects.filter(project => project.year === year);
    filteredProjects.set(filtered);
  });
});
