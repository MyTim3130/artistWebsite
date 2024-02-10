import Image from "next/image";
import LandingPage from "./_components/LandingPage";
import About from "./_components/About";
import About1 from "./_components/About1";
import ParallaxTextReveal from "./_components/ParallaxTextReveal";

export default function Home() {
  return (
   <>
    
    <LandingPage />
    {/* <About /> */}
    <About1 />
    <ParallaxTextReveal />
   </>
  );
}
