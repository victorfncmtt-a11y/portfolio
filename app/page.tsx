'use client';

import dynamic from 'next/dynamic';
import CanvasLoader from "./components/common/CanvasLoader";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Hero from "./components/hero";

// Dynamically load heavy 3D sub-sections below the fold
const Experience = dynamic(() => import("./components/experience"), { ssr: false });
const Footer = dynamic(() => import("./components/footer"), { ssr: false });

const Home = () => {
  return (
    <CanvasLoader>
      <ScrollWrapper>
        <Hero/>
        <Experience/>
        <Footer/>
      </ScrollWrapper>
    </CanvasLoader>
  );
};
export default Home;
