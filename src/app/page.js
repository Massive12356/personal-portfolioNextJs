"use client"
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
// import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";
import { useState, useRef, useEffect } from "react";
import Load from "@/components/sub/Load";
export default function Home() {
  const [id,SetId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          SetId(entry.target.id);
        }
      });
    }, 
    { threshold: 0.3 },
  );
    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => observer.observe(comp));
  }, []);
  return (
    <>
    <Load />
    <Toggle> 
    <Navbar id={id} />
    <div className="w-min" ref={compsRef}>
      <Hero />
      <About />
      <Experience />
      <Skills/>
      <Reviews />
      <Projects/>
      {/* <PricingPlans /> */}
      <Contact />
    </div>
    </Toggle>
    </>
  );
}
