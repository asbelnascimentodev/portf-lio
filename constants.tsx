
import { Page, Skill, ExperienceItem, Certificate, EducationItem } from './types';

export const PROFILE_IMAGE = "https://ui-avatars.com/api/?name=AN&background=136dec&color=fff&font-size=0.4&bold=true&size=512";
export const INNOVATION_HERO_IMAGE = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200";

export const SKILLS: Skill[] = [
  { name: 'Github & Git', percentage: 90 },
  { name: 'Visual Studio & IntelliJ', percentage: 85 },
  { name: 'Photoshop', percentage: 75 },
  { name: 'CapCut', percentage: 95 },
  { name: 'AI Prompt Engineering', percentage: 98 },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Inspetor de Qualidade',
    company: 'Control Union ltda.',
    period: '08/2024 - Atual',
    responsibilities: [
      'Análise detalhada de conformidade de produtos.',
      'Emissão de relatórios técnicos de inspeção.',
      'Garantia de padrões de qualidade internacionais.'
    ],
    tags: ['Qualidade', 'Inspeção', 'Logística']
  },
  {
    id: '2',
    role: 'Inspetor Jr',
    company: 'SGS ltda.',
    period: '07/2024 - 07/2025',
    responsibilities: [
      'Execução de inspeções técnicas.',
      'Suporte em auditorias.',
      'Apoio na implementação de novos procedimentos.'
    ],
    tags: ['Auditoria', 'Suporte']
  },
  {
    id: '3',
    role: 'Auxiliar de Vendas',
    company: 'Oticas Prevent',
    period: '09/2023 - 07/2024',
    responsibilities: [
      'Atendimento ao cliente.',
      'Suporte nas operações de vendas.',
      'Organização de estoque.'
    ],
    tags: ['Vendas', 'Atendimento']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Amazon Bedrock Getting Started',
    issuer: 'Amazon',
    year: '2024',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c2',
    title: 'Java: primeira aplicação',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c3',
    title: 'Versionamento Git e GitHub',
    issuer: 'DIO',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c4',
    title: 'English Fundamentals: Successful Networking and Interviews',
    issuer: 'English Test Santander',
    year: '2023',
    category: 'Languages',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c5',
    title: 'Getting Started with AWS for Games',
    issuer: 'AWS for Games',
    year: '2024',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c6',
    title: 'Começando em Programação: Carreira e Primeiros Passos',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c7',
    title: 'UX Design: Conheça o universo da experiência em produtos digitais',
    issuer: 'Alura',
    year: '2023',
    category: 'Design',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c8',
    title: 'Data Analysis: Google Sheets',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c9',
    title: 'Introdução ao desenvolvimento Front-End',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c10',
    title: 'Transição de Carreira: Um guia para a área da tecnologia',
    issuer: 'Alura',
    year: '2023',
    category: 'Other',
    imageUrl: 'https://images.unsplash.com/photo-1454165833767-027eeed13c50?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c11',
    title: 'Primeiros passos em programação',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c12',
    title: 'HTML e CSS',
    issuer: 'Alura',
    year: '2023',
    category: 'Tech',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'c13',
    title: 'Technical Writing',
    issuer: 'Alura',
    year: '2023',
    category: 'Other',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=600'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'e1',
    degree: 'Análise e Desenv. de Sistemas',
    institution: 'Universidade Paulista',
    period: '2022 - Presente',
    location: 'Santos, Brasil',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400'
  }
];
