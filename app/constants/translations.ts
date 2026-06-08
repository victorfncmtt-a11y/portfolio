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
        title: 'Briefbox',
        date: '2026',
        subtext: 'Complete B2B SaaS positioning, content direction, and 7-day multi-channel execution skeleton for an anti-prompting client-side Chrome extension.',
        url: '/projects/briefbox',
      },
      {
        title: 'Maestro Social Selling',
        date: '2026',
        subtext: 'Sleek positioning territory, local privacy procurement strategies, and WhatsApp-first B2B sales content engine for South Brazilian inside sales operations.',
        url: '/projects/maestro',
      },
      {
        title: 'Avenza Branding & Identity',
        date: '2025 - Present',
        subtext: 'Branding systems, visual guidelines, and strategic communication designs developed in my current role as a Branding Specialist.',
        url: 'https://behance.net/victor-maitto',
      },
      {
        title: 'This Portfolio',
        date: 'Jun 2026',
        subtext: 'A stunning 3D interactive portfolio built using Next.js, React Three Fiber (R3F), Drei, and GSAP.',
        url: 'https://github.com/your-username/my-portfolio-site',
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
        url: 'https://github.com/your-username',
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
        url: 'https://www.instagram.com/your-handle/',
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
        title: 'Briefbox',
        date: '2026',
        subtext: 'Posicionamento completo de B2B SaaS, direcionamento de conteúdo e cronograma de 7 dias de execução multicanal para extensão Chrome baseada em processamento local.',
        url: '/projects/briefbox',
      },
      {
        title: 'Maestro Social Selling',
        date: '2026',
        subtext: 'Posicionamento estratégico, atalho de segurança local para compras corporativas e motor de conteúdo focado em WhatsApp Web para vendas complexas.',
        url: '/projects/maestro',
      },
      {
        title: 'Avenza Branding & Identity',
        date: '2025 - Presente',
        subtext: 'Sistemas de marca, guias visuais e design de comunicação estratégica desenvolvidos em minha atuação atual como Especialista em Branding.',
        url: 'https://behance.net/victor-maitto',
      },
      {
        title: 'Este Portfólio',
        date: 'Jun 2026',
        subtext: 'Um portfólio interativo 3D impressionante construído usando Next.js, React Three Fiber (R3F), Drei e GSAP.',
        url: 'https://github.com/your-username/my-portfolio-site',
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
        url: 'https://github.com/your-username',
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
        url: 'https://www.instagram.com/your-handle/',
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
