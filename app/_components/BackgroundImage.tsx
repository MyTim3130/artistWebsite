"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface BackgroundImageProps {
  source: string;
  x: number;
  y: number;
  id: string;
  start: string;
  zIndex: string;
}

const BackgroundImage = ({ source, y, x, id, start, zIndex }: BackgroundImageProps) => {
  useEffect(() => {
    gsap.fromTo(
      `#${id}IMAGE`,
      { scale: 1.5 },
      {
        scale: 1,
        duration: 2.5,
        ease: "cubic-bezier(0.17, 0.67, 0.83, 0.67)"
      }
    );

    gsap.fromTo(
        `.${id}`,
        { scale: .5 },
        {
          scale: 1,
            duration: 1,
            ease: "cubic-bezier(0.17, 0.67, 0.83, 0.67)"

        }
      );
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (windowWidth === 0) return;
    if (windowWidth < 500) {
      gsap.fromTo(
        `.${id}`,
        { x: x, y: y, opacity: 1 },
        {
          x: x * 10,
          y: y * 10,
          opacity: 0,
          scrollTrigger: {
            start: start,
            end: "+=1000",
            scrub: true,
          },
        }
      );
    } else if (windowWidth < 1024) {
      gsap.fromTo(
        `.${id}`,
        { x: x * 3, y: y * 1, opacity: 1 },
        {
          x: x * 10,
          y: y * 10,
          opacity: 0,
          scrollTrigger: {
            start: start,
            end: "+=1000",
            scrub: true,
          },
        }
      );
    } else {
      gsap.fromTo(
        `.${id}`,
        { x: x * 6, y: y * 1.7, opacity: 1 },
        {
          x: x * 10,
          y: y * 10,
          opacity: 0,
          scrollTrigger: {
            start: start,
            end: "+=1000",
            scrub: true,
          },
        }
      );
    }
  }, [windowWidth]);
  return (
    <div className={clsx("h-screen w-screen absolute flex items-center justify-center", zIndex)}>
      <div
        className={clsx(
          "h-44 w-32 relative overflow-hidden rounded-md sm:h-60 sm:w-52 lg:h-96 lg:w-80 drop-shadow-glow",
          id
        )}
      >
        <Image
          src={source}
          alt="missing Background Image"
          objectFit="cover"
          layout="fill"
          id={id + "IMAGE"}
          
          
       
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
