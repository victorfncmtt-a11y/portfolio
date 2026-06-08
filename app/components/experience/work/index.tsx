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
    // Find all scrollable divs in the document
    const scrollContainers = Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      return (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto' || style.overflow === 'scroll') && el.scrollHeight > el.clientHeight;
    }) as HTMLElement[];

    // Identify the scroll wrappers by scrollHeight (main scroll has pages=4, work scroll has pages=2)
    const mainScroll = scrollContainers.find(div => div.scrollHeight > window.innerHeight * 3);
    const workScroll = scrollContainers.find(div => div.scrollHeight <= window.innerHeight * 3);

    if (isActive) {
      if (workScroll && mainScroll) {
        setScrollProgress(0);
        workScroll.addEventListener('scroll', handleScroll);
        workScroll.style.zIndex = '1';
        mainScroll.style.zIndex = '-1';
      }
    } else {
      if (workScroll && mainScroll) {
        workScroll.scrollTo({ top: 0, behavior: 'smooth' });
        setScrollProgress(0);
        workScroll.removeEventListener('scroll', handleScroll);
        workScroll.style.zIndex = '-1';
        mainScroll.style.zIndex = '1';
      }
    }

    return () => {
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