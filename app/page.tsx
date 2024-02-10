import Image from "next/image";
import LandingPage from "./_components/LandingPage";
import About from "./_components/About";
import About1 from "./_components/About1";
import ParallaxTextReveal from "./_components/ParallaxTextReveal";
import Smooth from "./_components/ScrollSmoother";

export default function Home() {
  return (
   <Smooth>
    
    <LandingPage />
    {/* <About /> */}
    <About1 />
    <ParallaxTextReveal />
   </Smooth>
  );
}
