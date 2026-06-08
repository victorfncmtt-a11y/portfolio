import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

/**
 * Victor Maitto's Academic and Professional Timeline.
 * 
 * Order: Chronological (from oldest to newest).
 * Coordinates are laid out in a winding 3D path going backwards in the Z-axis.
 */
export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2021',
    title: 'PUCPR',
    subtitle: 'Bacharelado em Design - Início',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2021',
    title: 'Redux Professional',
    subtitle: 'Estagiário de Design',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2022',
    title: 'Projetos de Design e Comunicação',
    subtitle: 'Designer de Identidade Visual e Conteúdo',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -2, -9),
    year: '2023',
    title: 'Eagle Media',
    subtitle: 'Designer de Marca',
    position: 'left',
  },
  {
    point: new THREE.Vector3(2, -1, -12),
    year: '2024',
    title: 'Grupo Marista',
    subtitle: 'Designer de Comunicação',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, 1, -15),
    year: '2025',
    title: 'Atuação Autônoma',
    subtitle: 'Estrategista de Marca e Conteúdo',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-2, 2, -18),
    year: '2025',
    title: 'Fundação Getulio Vargas',
    subtitle: 'Pós-graduação em Marketing e Mídias Digitais',
    position: 'right',
  },
  {
    point: new THREE.Vector3(1, 1, -21),
    year: 'Presente',
    title: 'Avenza',
    subtitle: 'Especialista de Branding e Conteúdo Estratégico',
    position: 'right',
  }
];