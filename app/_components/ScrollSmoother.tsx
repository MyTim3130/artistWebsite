'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'


gsap.registerPlugin(ScrollSmoother)

const Smooth = ({children}:{children:React.ReactNode}) => {

 useEffect(()=>{
    ScrollSmoother.create({
        smooth: 1,
        effects: true,
      });
 },[])
  return (
    <>
      <div id="smooth-wrapper">
    <div id="smooth-content">
     {children}
    </div>
  </div>
    </>
  )
}

export default Smooth