"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, experienceData } from "@/Assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });

  return (
    <div id="experience" className="relative py-20">
      <Heading text={"Experience & Education"} />
      <Image
        src={"/education.png"}
        alt={"Experience"}
        width={400}
        height={400}
        className="absolute top-10 -right-5 opacity-70 lg:hidden w-[40%]"
      />

      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10 w-full"
      >
        {/* Vertical Timeline Bar */}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 origin-top"
        ></motion.div>

        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-full max-w-5xl px-12 sm:px-0 relative flex items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-6 md:p-3 tracking-wide w-[45%] sm:w-[100%] md:w-[120%] shadow-lg cursor-pointer hover:bg-red-200 dark:bg-zinc-700 transition-colors z-20"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800 dark:text-gray-100">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, idx) => (
                    <li
                      key={`exp-${i}-${idx}`}
                      className="my-1 font-extralight"
                    >
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Arrow Indicator */}
              <span
                className={`absolute top-20 lg:hidden ${
                  i % 2 === 0
                    ? "left-[105%] rotate-0"
                    : "right-[105%] rotate-180"
                } text-red-500`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>

            {/* Year Indicator */}
            <div
              className={`w-16 h-16 absolute top-20 ${
                i % 2 === 0 ? "left-[51%]" : "left-[43%]"
              } border border-gray-300 rounded-full flex items-center justify-center text-red-400 font-light bg-white shadow-md md:hidden sm:hidden`}
            >
              {data.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
