"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import BackgroundImage from "./BackgroundImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesCore } from "../components/ui/sparkles";

import { Nunito } from "next/font/google";
export const title = Nunito({
  subsets: ["latin"],
  weight: ["600"],
});

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.to("#pinSection", {
      y: 0,
      scrollTrigger: { pin: "#pinSection", start: "top top", end: "+=1000" },
    });
  }, []);

  // ScrollTrigger.create({
  //   trigger:"#pinSection",
  //   pin: "#pinSection",
  //   start: "top top",
  //   end: "bottom top",
  //   scrub: true,
  //   markers: true,
  // });

  return (
    <main id="pinSection">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={3}
        particleDensity={10}
        className="w-full h-full -z-50 absolute"
        particleColor="#FFFFFF"
      />
      <BackgroundImage
        source="/images/test6.jpg"
        x={1}
        y={1}
        id="image6"
        start="+=100"
        zIndex="-z-10"
      />
      <BackgroundImage
        source="/images/test5.jpg"
        x={-70}
        y={-150}
        id="image5"
        start="+=20"
        zIndex="z-0"
      />
      <BackgroundImage
        source="/images/test1.jpg"
        x={-50}
        y={-19}
        id="image1"
        start="+=15"
        zIndex="-z-10"
      />
      <BackgroundImage
        source="/images/test3.jpg"
        x={99}
        y={80}
        id="image2"
        start="+=30"
        zIndex="-z-10"
      />
      <BackgroundImage
        source="/images/test5.jpg"
        x={39}
        y={-80}
        id="image8"
        start="+=0"
        zIndex="-z-10"
      />
      <BackgroundImage
        source="/images/test2.jpg"
        x={50}
        y={70}
        id="image7"
        start="+=40"
        zIndex="-z-10"
      />
      <BackgroundImage
        source="/images/test3.jpg"
        x={80}
        y={-150}
        id="image3"
        start="+=20"
        zIndex="z-0"
      />
      <BackgroundImage
        source="/images/test2.jpg"
        x={-80}
        y={100}
        id="image4"
        start="+=15"
        zIndex="-z-10"
      />

      <section className="h-screen w-screen flex justify-center items-center">
        <h1
          className={clsx("text-5xl lg:text-[10rem] md:text-[8rem] xl:text-[13rem]", title.className)}
          id="heroTitle"
        >
          XXNAMEXX
        </h1>
      </section>
    </main>
  );
};

export default LandingPage;
