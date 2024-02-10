'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const ParallaxTextReveal = () => {

    useEffect(()=>{
        gsap.fromTo("#imageWrapper1",{y:0},{y:-400, scrollTrigger:{
            trigger: '#imageWrapper1',
            start: "top bottom",
            end: "top top",
            scrub: true,

        }})

        gsap.fromTo("#imageWrapper2",{y:-200},{y:-400, scrollTrigger:{
            trigger: '#imageWrapper2',
            start: "top bottom",
            end: "top top",
            scrub: true,

        }})

        gsap.fromTo("#imageWrapper3",{y:-200},{y:-400, scrollTrigger:{
            trigger: '#imageWrapper3',
            start: "top bottom",
            end: "top top",
            scrub: true,

        }})
    },[])

  return (
    <section className="h-screen w-screen relative">
      <div className="h-[120vh] w-screen" id="imageWrapper1">
        <Image
          src="/images/parallax1.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
          className="fixed"
        />
      </div>
      <div className="h-[120vh] w-screen relative" id="imageWrapper2">
        <Image
          src="/images/parallax2.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
        />
      </div>
      <div className="h-[120vh] w-screen relative" id="imageWrapper3">
        <Image
          src="/images/parallax3.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
        />
      </div>
    </section>
  );
};

export default ParallaxTextReveal;
