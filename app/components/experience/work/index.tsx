import { ScrollControls } from "@react-three/drei";
import { usePortalStore, useScrollStore } from "@stores";
import { useEffect } from "react";
import * as THREE from "three";
import { Memory } from "../../models/Memory";
import Timeline from "./Timeline";

const Work = () => {
  const isActive = usePortalStore((state) => state.activePortalId === 'work');
  const { scrollProgress, setScrollProgress } = useScrollStore();

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
    setScrollProgress(progress);
  }

  // Hack: If the portal is active, add the scroll event listener to the scroll
  // wrapper div. If the portal is not active, remove the scroll event listener.
  // ScrollControls doesn't work out of the box, so we have to manually handle
  // the scroll event.
  useEffect(() => {
    let retryCount = 0;
    let timeoutId: NodeJS.Timeout;

    const setupScroll = () => {
      const scrollContainers = Array.from(document.querySelectorAll('*')).filter(el => {
        const style = window.getComputedStyle(el);
        return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto' || style.overflow === 'scroll') && el.scrollHeight > el.clientHeight;
      }) as HTMLElement[];

      // Sort by scrollHeight descending to identify containers reliably without viewport height dependencies
      const sorted = [...scrollContainers].sort((a, b) => b.scrollHeight - a.scrollHeight);
      const mainScroll = sorted[0];
      const workScroll = sorted[1];

      if (workScroll && mainScroll) {
        if (isActive) {
          setScrollProgress(0);
          workScroll.addEventListener('scroll', handleScroll);
          workScroll.style.zIndex = '1';
          mainScroll.style.zIndex = '-1';
        } else {
          workScroll.scrollTo({ top: 0, behavior: 'smooth' });
          setScrollProgress(0);
          workScroll.removeEventListener('scroll', handleScroll);
          workScroll.style.zIndex = '-1';
          mainScroll.style.zIndex = '1';
        }
      } else if (retryCount < 10) {
        retryCount++;
        timeoutId = setTimeout(setupScroll, 100);
      }
    };

    setupScroll();

    return () => {
      clearTimeout(timeoutId);
      const scrollContainers = Array.from(document.querySelectorAll('*')).filter(el => {
        const style = window.getComputedStyle(el);
        return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto' || style.overflow === 'scroll') && el.scrollHeight > el.clientHeight;
      }) as HTMLElement[];
      const sorted = [...scrollContainers].sort((a, b) => b.scrollHeight - a.scrollHeight);
      const workScroll = sorted[1];
      if (workScroll) {
        workScroll.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isActive]);

  return (
    <group>
      <mesh receiveShadow>
        <planeGeometry args={[4, 4, 1]} />
        <shadowMaterial opacity={0.1} />
      </mesh>
      <ScrollControls style={{ zIndex: -1}} pages={2} maxSpeed={0.4}>
        <Memory scale={new THREE.Vector3(5, 5, 5)} position={new THREE.Vector3(0, -6, 1)}/>
        <Timeline progress={isActive ? scrollProgress : 0} />
      </ScrollControls>
    </group>
  );
};

export default Work;