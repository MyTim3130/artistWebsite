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

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "#imageWrapper1",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //     pin: "#Text1",
  //     markers: true,
  //   });
  // }, []);

  return (
    <>
      <div
        className="relative h-screen w-screen overflow-hidden"
        id="imageWrapper1"
      >
      
        <div
          className="flex w-screen h-screen justify-center items-center text-6xl absolute z-50"
          id="Text1"
          data-speed="0.001"
        >
          TEXT1
        </div>
       
      
        <Image
          src="/images/parallax1.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
          data-speed="0.5"
        />
      </div>
      <div
        className="relative h-screen w-screen overflow-hidden"
        id="imageWrapper2"
      >
        <div className="w-screen h-screen flex justify-center items-center">
        <div
          className="flex w-screen h-screen justify-center items-center text-6xl absolute z-50"
          id="Text1"
          data-speed="0.001"
        >
          TEXT2
        </div>
       
        </div>
        <Image
          src="/images/parallax2.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
          data-speed="0.5"
        />
      </div>
      <div className="relative h-screen w-screen overflow-hidden" id="imageWrapper3">
      <div className="w-screen h-screen flex justify-center items-center">
      <div
          className="flex w-screen h-screen justify-center items-center text-6xl absolute z-50"
          id="Text1"
          data-speed="0.001"
        >
          TEXT3
        </div>
       
        </div>
        <Image
          src="/images/parallax3.png"
          objectFit="cover"
          layout="fill"
          alt="missingBackground"
          data-speed="0.5"
        />
      </div>
    </>
  );
};

export default ParallaxTextReveal;
{
  /* */
}
