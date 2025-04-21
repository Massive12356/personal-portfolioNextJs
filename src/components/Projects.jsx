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
        opacity: 0.5,
        scale: 1,
      });
    }
    if (buttonsRef.current[index]) {
      animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
    }
  }, [index]);

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index, handleClick]);

  return (
    <div id="projects" className="w-[100%] min-h-screen py-4 pr-5">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-around gap-3 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            initial={{
              opacity: i === 0 ? 1 : 0.5,
              scale: i === 0 ? 1.2 : 1,
            }}
            key={i} // ✅ Use index as key for tracking changes
            ref={(el) => (buttonsRef.current[i] = el)} // ✅ Set ref using index
            onClick={() => {
              setIndex(i);
              setTech(text);
            }}
            className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
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
            <motion.div key={i} layout>
              {" "}
              {/* ✅ Added index key for tracking */}
              <Project data={data} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
