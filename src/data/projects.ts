import type { Project } from '@/types';
import cat1 from '@/assets/portfolio/cat-1.jpg';
import cat2 from '@/assets/portfolio/cat-2.jpg';
import cat3 from '@/assets/portfolio/cat-3.jpg';
import cat4 from '@/assets/portfolio/cat-4.jpg';
import cat5 from '@/assets/portfolio/cat-5.jpg';
import cat6 from '@/assets/portfolio/cat-6.jpg';
import cat7 from '@/assets/portfolio/cat-7.jpg';
import cat8 from '@/assets/portfolio/cat-8.jpg';

export const projects: Project[] = [
  {
    id: '1',
    title: '瞪大眼睛',
    category: 'miaomiao',
    year: '2025',
    slug: 'desert-solitude',
    coverImage: cat1,
    description: 'An exploration of the stark beauty and quiet majesty of the American Southwest. This series captures the interplay of light, shadow, and ancient geological formations that define the desert landscape.',
    location: 'China',
    images: []
  },
  {
    id: '2',
    title: '不敢睁开眼',
    category: 'miaomiao',
    year: '2025',
    slug: 'urban-portraits',
    coverImage: cat2,
    description: 'A portrait series celebrating the diversity and character of city dwellers. Each subject was photographed in their favorite urban location, revealing the intimate connection between people and their environment.',
    location: 'China',
    images: []
  },
  {
    id: '3',
    title: '伸懒腰',
    category: 'miaomiao',
    year: '2025',
    slug: 'architectural-visions',
    coverImage: cat3,
    description: 'Modern architecture captured through a minimalist lens. This series focuses on geometric forms, materiality, and the interplay of structure with natural light.',
    location: 'China',
    images: []
  },
  {
    id: '4',
    title: '你瞅啥',
    category: 'miaomiao',
    year: '2025',
    slug: 'fashion-forward',
    coverImage: cat4,
    description: 'An editorial series exploring contemporary fashion through bold compositions and dramatic lighting. Shot on location and in studio.',
    location: 'China',
    images: []
  },
  {
    id: '5',
    title: '怎么说',
    category: 'miaomiao',
    year: '2025',
    slug: 'mountain-stories',
    coverImage: cat5,
    description: 'Documentary series following mountain communities and their relationship with the changing alpine environment. A year-long project documenting life at altitude.',
    location: 'China',
    images: []
  },
  {
    id: '6',
    title: '在干嘛',
    category: 'miaomiao',
    year: '2025',
    slug: 'coastal-light',
    coverImage: cat6,
    description: 'The ever-changing mood of the coastline captured through different seasons and weather conditions. A meditation on light, water, and time.',
    location: 'China',
    images: []
  },
  {
    id: '7',
    title: '我俩世界第一好',
    category: 'miaomiao',
    year: '2025',
    slug: 'studio-sessions',
    coverImage: cat7,
    description: 'Controlled studio portraiture emphasizing form, light, and expression. Classic approach to contemporary subjects.',
    location: 'China',
    images: []
  },
  {
    id: '8',
    title: '疲惫',
    category: 'miaomiao',
    year: '2025',
    slug: 'city-lights',
    coverImage: cat8,
    description: 'Urban nightscapes and the electric energy of city life after dark. Long exposures and ambient light create a dreamlike quality.',
    location: 'China',
    images: []
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
