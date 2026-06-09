import { ScrollControls, useScroll } from "@react-three/drei";
import { usePortalStore, useScrollStore } from "@stores";
import { useEffect } from "react";
import * as THREE from "three";
import { Memory } from "../../models/Memory";
import Timeline from "./Timeline";

const WorkScrollRegister = () => {
  const scroll = useScroll();
  const setWorkScrollEl = useScrollStore((state) => state.setWorkScrollEl);

  useEffect(() => {
    if (scroll?.el) {
      setWorkScrollEl(scroll.el);
    }
    return () => {
      setWorkScrollEl(null);
    };
  }, [scroll?.el, setWorkScrollEl]);

  return null;
};

const Work = () => {
  const isActive = usePortalStore((state) => state.activePortalId === 'work');
  const { scrollProgress, setScrollProgress, mainScrollEl: mainScroll, workScrollEl: workScroll } = useScrollStore();

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight - target.clientHeight;
    const progress = scrollHeight > 0 ? Math.min(Math.max(scrollTop / scrollHeight, 0), 1) : 0;
    console.log('[WorkScroll] handleScroll:', { scrollTop, scrollHeight, progress });
    setScrollProgress(progress);
  };

  // If the portal is active, add the scroll event listener to the scroll
  // wrapper div. If the portal is not active, remove the scroll event listener.
  useEffect(() => {
    if (isActive) {
      if (workScroll && mainScroll) {
        console.log('[WorkScroll] setupScroll found both:', {
          isActive,
          workScrollTop: workScroll.scrollTop,
          workScrollHeight: workScroll.scrollHeight,
          workClientHeight: workScroll.clientHeight,
        });
        workScroll.scrollTo({ top: 0 });
        setScrollProgress(0);
        workScroll.addEventListener('scroll', handleScroll);
        workScroll.style.zIndex = '1';
        mainScroll.style.zIndex = '-1';
      }
    } else {
      if (workScroll && mainScroll) {
        workScroll.scrollTo({ top: 0 });
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
  }, [isActive, workScroll, mainScroll]);

  if (!isActive) {
    return (
      <group>
        <Memory scale={new THREE.Vector3(5, 5, 5)} position={new THREE.Vector3(0, -6, 1)}/>
        <Timeline progress={0} />
      </group>
    );
  }

  return (
    <group>
      <mesh receiveShadow>
        <planeGeometry args={[4, 4, 1]} />
        <shadowMaterial opacity={0.1} />
      </mesh>
      <ScrollControls style={{ zIndex: 1 }} pages={2} maxSpeed={0.4}>
        <WorkScrollRegister />
        <Memory scale={new THREE.Vector3(5, 5, 5)} position={new THREE.Vector3(0, -6, 1)}/>
        <Timeline progress={scrollProgress} />
      </ScrollControls>
    </group>
  );
};

export default Work;