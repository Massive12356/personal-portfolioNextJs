"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsButton, projectsData } from "@/Assets";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);

  // ✅ Memoize the handleClick function to prevent re-creation on each render
  const handleClick = useCallback(() => {
    if (buttonsRef.current[prevIndex.current]) {
      animate(buttonsRef.current[prevIndex.current], {
        opacity: 0.7,
        scale: 1,
      });
    }
    if (buttonsRef.current[index]) {
      animate(buttonsRef.current[index], { opacity: 1, scale: 1.1 });
    }
  }, [index]);

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  return (
    <div id="projects" className="w-[100%] min-h-screen py-4 pr-5">
      <div className="max-w-7xl mx-auto">
        <Heading text={"Projects"} />
        <div className="flex flex-wrap items-center justify-center gap-3 py-10">
          {projectsButton.map((text, i) => (
            <motion.button
              initial={{
                opacity: i === 0 ? 1 : 0.7,
                scale: i === 0 ? 1.1 : 1,
              }}
              key={i} // ✅ Use index as key for tracking changes
              ref={(el) => (buttonsRef.current[i] = el)} // ✅ Set ref using index
              onClick={() => {
                setIndex(i);
                setTech(text);
              }}
              className={`border rounded-full px-4 py-2 text-sm font-medium tracking-wider transition-all duration-300 ease-in-out ${
                tech === text
                  ? "bg-yellow-500 text-gray-900 border-yellow-500 scale-110"
                  : "border-yellow-500 text-gray-700 dark:text-gray-300 hover:bg-yellow-500 hover:text-gray-900"
              }`}
            >
              {text}
            </motion.button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-around gap-5 w-[120%]">
          {projectsData
            .filter((project) =>
              project.tech.some((item) => (tech === "All" ? true : item === tech))
            )
            .map((data, i) => (
              <motion.div 
                key={i} 
                layout
                whileHover={{ y: -10 }}
              >
                <Project data={data} index={i} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;