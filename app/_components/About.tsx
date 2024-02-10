import React from "react";
import Image from "next/image";
import { Spotlight } from "../components/ui/Spotlight";
import { BackgroundBeams } from "../components/ui/background-beams";

const About = () => {
  return (<>
  
      <section className="h-screen w-screen flex flex-col md:flex-row items-center justify-evenly">
     
        
        <Image height={400} width={400} src="/images/test3.jpg" alt="missing About" className="rounded-md h-96 w-auto lg:h-[30rem] xl:h-[40rem]" />
    
  <p className="w-5/6 md:w-3/6">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    ipsum dolor sit amet.
  </p>

</section>
<div className="h-screen w-screen absolute top-[210vh]">
<div className="bg-gradient-to-t from-transparent to-[#151519] h-[20vh]"></div>
<BackgroundBeams className="-z-50 md:opacity-60" />
<div className="bg-gradient-to-b from-transparent to-[#151519] h-[20vh] relative top-[60vh]"></div>


</div>

  </>

  );
};

export default About;
