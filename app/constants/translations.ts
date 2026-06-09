import * as THREE from "three";
import { WorkTimelinePoint, Project, FooterLink } from "../types";

export interface TranslationSet {
  hero: {
    greeting: string;
    primaryTitle: string;
    secondaryTitle: string;
    rotatingSides: {
      leftTop: string;
      leftBottom: string;
      rightTop: string;
      rightBottom: string;
    };
  };
  experience: {
    workTitle: string;
    projectsTitle: string;
    mainTitle: string;
  };
  workTimeline: WorkTimelinePoint[];
  projects: Project[];
  footerLinks: FooterLink[];
  contact: {
    button: string;
    title: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    success: string;
    error: string;
    close: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'pt', TranslationSet> = {
  en: {
    hero: {
      greeting: "Hi My name is Victor Maitto",
      primaryTitle: "BRAND & CONTENT STRATEGIST",
      secondaryTitle: "BRAND DESIGNER",
      rotatingSides: {
        leftTop: "CREATIVE CONTENT",
        leftBottom: "TECH ENTHUSIAST",
        rightTop: "DESIGN STRATEGIST",
        rightBottom: "CREATIVE. OPTIMIST"
      }
    },
    experience: {
      workTitle: "WORK AND EDUCATION",
      projectsTitle: "PROJECTS",
      mainTitle: "EXPERIENCE"
    },
    workTimeline: [
      {
        point: new THREE.Vector3(0, 0, 0),
        year: '2021 - 2025',
        title: 'PUCPR',
        subtitle: 'Bachelor of Design',
        position: 'right',
      },
      {
        point: new THREE.Vector3(-4, -4, -3),
        year: '2021',
        title: 'Redux',
        subtitle: 'Design Intern',
        position: 'left',
      },
      {
        point: new THREE.Vector3(-3, -1, -6),
        year: '2022 - 2025',
        title: 'Freelancer',
        subtitle: 'Identity & Content Design',
        position: 'left',
      },
      {
        point: new THREE.Vector3(0, -2, -9),
        year: '2023 - 2024',
        title: 'Eagle Media',
        subtitle: 'Brand Designer',
        position: 'left',
      },
      {
        point: new THREE.Vector3(2, -1, -12),
        year: '2024 - 2025',
        title: 'Grupo Marista',
        subtitle: 'Communication Designer',
        position: 'right',
      },
      {
        point: new THREE.Vector3(0, 1, -15),
        year: '2025 - 2026',
        title: 'Freelancer',
        subtitle: 'Brand & Content Strategy',
        position: 'left',
      },
      {
        point: new THREE.Vector3(-2, 2, -18),
        year: '2025 - 2026',
        title: 'FGV',
        subtitle: 'Postgraduate in Marketing',
        position: 'left',
      },
      {
        point: new THREE.Vector3(1, 1, -21),
        year: '2025 - Present',
        title: 'Avenza',
        subtitle: 'Branding Specialist',
        position: 'right',
      }
    ],
    projects: [
      {
        title: 'Napoli Centenary | study',
        date: '2026',
        subtext: 'Napoli Project',
        url: 'https://www.behance.net/gallery/245899125/Napoli-Centenary-study',
      },
      {
        title: 'SKAL | branding',
        date: '2025',
        subtext: 'Minimalist brand identity system, custom typography, and visual guidelines developed for SKAL.',
        url: 'https://www.behance.net/gallery/245281035/SKAL-branding',
      },
      {
        title: 'Ações Afirmativas Étnico-Raciais | PUCPR',
        date: '2024',
        subtext: 'PUCPR project',
        url: 'https://www.behance.net/gallery/237958197/Acoes-Afirmativas-Etnico-Raciais-PUCPR',
      },
      {
        title: '25°S - surf & fashion',
        date: '2024',
        subtext: 'Branding strategy, visual language, and contemporary aesthetic alignment for a surf and fashion brand.',
        url: 'https://www.behance.net/gallery/233423741/25S-surf-fashion',
      }
    ],
    footerLinks: [
      {
        name: 'LinkedIn',
        hoverText: 'Connect with me',
        icon: '/icons/linkedin.svg',
        url: 'https://www.linkedin.com/in/victor-maitto',
      },
      {
        name: 'GitHub',
        hoverText: 'Open Sourcing',
        icon: '/icons/github.svg',
        url: 'https://github.com/victorfncmtt-a11y',
      },
      {
        name: 'Behance',
        hoverText: 'My portfolio projects',
        icon: '/icons/behance.svg', // Ensure behance.svg is available or you upload it
        url: 'https://behance.net/victor-maitto',
      },
      {
        name: 'Instagram',
        hoverText: 'Follow me',
        icon: '/icons/instagram.svg',
        url: '#',
      },
      {
        name: 'Resume',
        hoverText: 'Download PDF',
        icon: '/icons/file.svg',
        url: './Resume.pdf',
      }
    ],
    contact: {
      button: "CONTACT",
      title: "Get in Touch",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      messageLabel: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
      close: "Close",
      namePlaceholder: "Enter your name",
      emailPlaceholder: "Enter your email address",
      messagePlaceholder: "Write your message here..."
    }
  },
  pt: {
    hero: {
      greeting: "Olá, meu nome é Victor Maitto",
      primaryTitle: "ESTRATEGISTA DE MARCA E CONTEÚDO",
      secondaryTitle: "DESIGNER DE MARCA",
      rotatingSides: {
        leftTop: "CONTEÚDO CRIATIVO",
        leftBottom: "ENTUSIASTA DE TECH",
        rightTop: "ESTRATEGISTA DE DESIGN",
        rightBottom: "CRIATIVO. OTIMISTA"
      }
    },
    experience: {
      workTitle: "FORMAÇÃO E EXPERIÊNCIA",
      projectsTitle: "PROJETOS",
      mainTitle: "EXPERIÊNCIA"
    },
    workTimeline: [
      {
        point: new THREE.Vector3(0, 0, 0),
        year: '2021 - 2025',
        title: 'PUCPR',
        subtitle: 'Bacharelado em Design',
        position: 'right',
      },
      {
        point: new THREE.Vector3(-4, -4, -3),
        year: '2021',
        title: 'Redux',
        subtitle: 'Estagiário de Design',
        position: 'left',
      },
      {
        point: new THREE.Vector3(-3, -1, -6),
        year: '2022 - 2025',
        title: 'Freelancer',
        subtitle: 'Design de Identidade & Conteúdo',
        position: 'left',
      },
      {
        point: new THREE.Vector3(0, -2, -9),
        year: '2023 - 2024',
        title: 'Eagle Media',
        subtitle: 'Designer de Marca',
        position: 'left',
      },
      {
        point: new THREE.Vector3(2, -1, -12),
        year: '2024 - 2025',
        title: 'Grupo Marista',
        subtitle: 'Designer de Comunicação',
        position: 'right',
      },
      {
        point: new THREE.Vector3(0, 1, -15),
        year: '2025 - 2026',
        title: 'Autônomo',
        subtitle: 'Estratégia de Marca e Conteúdo',
        position: 'left',
      },
      {
        point: new THREE.Vector3(-2, 2, -18),
        year: '2025 - 2026',
        title: 'FGV',
        subtitle: 'Pós-Graduação em Marketing e Mídias Digitais',
        position: 'left',
      },
      {
        point: new THREE.Vector3(1, 1, -21),
        year: '2025 - Presente',
        title: 'Avenza',
        subtitle: 'Especialista em Branding',
        position: 'right',
      }
    ],
    projects: [
      {
        title: 'Napoli Centenary | study',
        date: '2026',
        subtext: 'Napoli Project',
        url: 'https://www.behance.net/gallery/245899125/Napoli-Centenary-study',
      },
      {
        title: 'SKAL | branding',
        date: '2025',
        subtext: 'Sistema de identidade minimalista de marca, tipografia personalizada e diretrizes visuais desenvolvidas para a SKAL.',
        url: 'https://www.behance.net/gallery/245281035/SKAL-branding',
      },
      {
        title: 'Ações Afirmativas Étnico-Raciais | PUCPR',
        date: '2024',
        subtext: 'PUCPR project',
        url: 'https://www.behance.net/gallery/237958197/Acoes-Afirmativas-Etnico-Raciais-PUCPR',
      },
      {
        title: '25°S - surf & fashion',
        date: '2024',
        subtext: 'Estratégia de branding, linguagem visual e alinhamento estético contemporâneo para uma marca de surf e moda.',
        url: 'https://www.behance.net/gallery/233423741/25S-surf-fashion',
      }
    ],
    footerLinks: [
      {
        name: 'LinkedIn',
        hoverText: 'Conecte-se comigo',
        icon: '/icons/linkedin.svg',
        url: 'https://www.linkedin.com/in/victor-maitto',
      },
      {
        name: 'GitHub',
        hoverText: 'Código aberto',
        icon: '/icons/github.svg',
        url: 'https://github.com/victorfncmtt-a11y',
      },
      {
        name: 'Behance',
        hoverText: 'Meus projetos no Behance',
        icon: '/icons/behance.svg',
        url: 'https://behance.net/victor-maitto',
      },
      {
        name: 'Instagram',
        hoverText: 'Siga-me',
        icon: '/icons/instagram.svg',
        url: '#',
      },
      {
        name: 'Resume',
        hoverText: 'Baixar PDF',
        icon: '/icons/file.svg',
        url: './Resume.pdf',
      }
    ],
    contact: {
      button: "CONTATO",
      title: "Entre em Contato",
      nameLabel: "Seu Nome",
      emailLabel: "Seu E-mail",
      messageLabel: "Sua Mensagem",
      sendButton: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
      close: "Fechar",
      namePlaceholder: "Digite seu nome",
      emailPlaceholder: "Digite seu endereço de e-mail",
      messagePlaceholder: "Escreva sua mensagem aqui..."
    }
  }
};
