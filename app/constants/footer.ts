import { FooterLink } from "../types";

/**
 * Edit these links to point to your social profiles.
 * You can also change the hover text and links.
 * 
 * Note: The resume file should be placed in the `public/` directory.
 */
export const FOOTER_LINKS: FooterLink[] = [
  {
    name: 'LinkedIn',
    hoverText: 'Connect with me',
    icon: '/icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/your-profile/',
  },
  {
    name: 'GitHub',
    hoverText: 'Open Sourcing',
    icon: '/icons/github.svg',
    url: 'https://github.com/your-username',
  },
  {
    name: 'Spotify',
    hoverText: 'Curated playlists',
    icon: '/icons/spotify.svg',
    url: 'https://open.spotify.com/user/your-user-id',
  },
  {
    name: 'Instagram',
    hoverText: '@your-handle',
    icon: '/icons/instagram.svg',
    url: 'https://www.instagram.com/your-handle/',
  },
  {
    name: 'Resume',
    hoverText: 'Download PDF',
    icon: '/icons/file.svg',
    url: './Resume.pdf', // Put your resume file named "Resume.pdf" in the public/ folder
  }
];