"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxTextReveal = () => {
  // useEffect(()=>{
  //     gsap.fromTo("#imageWrapper1",{y:0},{y:-400, scrollTrigger:{
  //         trigger: '#imageWrapper1',
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true,

  //     }})

  //     gsap.fromTo("#imageWrapper2",{y:-500},{y:-400, scrollTrigger:{
  //         trigger: '#imageWrapper2',
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true,

  //     }})

  //     gsap.fromTo("#imageWrapper3",{y:-600},{y:-400, scrollTrigger:{
  //         trigger: '#imageWrapper3',
  //         start: "top bottom",
  //         end: "top top",
  //         scrub: true,

  //     }})
  // },[])

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#textsContainer",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      pin: "#allTexts",
      markers: true,
    });
  }, []);

  return (
    <section className="h-[250vh] w-screen" id="textsContainer">
      <div className="absolute w-screen h-screen">
        <div className="relative h-screen w-screen" id="imageWrapper1">
          <Image
            src="/images/parallax1.png"
            objectFit="cover"
            layout="fill"
            alt="missingBackground"
          />
        </div>
        <div className="relative h-screen w-screen" id="imageWrapper2">
          <Image
            src="/images/parallax2.png"
            objectFit="cover"
            layout="fill"
            alt="missingBackground"
          />
        </div>
        <div className="relative h-screen w-screen" id="imageWrapper3">
          <Image
            src="/images/parallax3.png"
            objectFit="cover"
            layout="fill"
            alt="missingBackground"
          />
        </div>
      </div>

      <div className="w-screen flex justify-center" id="allTexts">
        <span
          className="flex h-screen w-screen justify-center items-center text-6xl absolute"
          id="Text1"
        >
          TEXT1
        </span>
        <span
          className="flex h-screen w-screen justify-center items-center text-6xl absolute"
          id="Text2"
        >
          TEXT2{" "}
        </span>
        <span
          className="flex h-screen w-screen justify-center items-center text-6xl absolute"
          id="Text3"
        >
          TEXT3
        </span>
      </div>
    </section>
  );
};

export default ParallaxTextReveal;
{
  /* */
}
