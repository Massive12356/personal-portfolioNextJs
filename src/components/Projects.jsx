"use client";
import { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsButton, projectsData } from "@/Assets";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonsRef = useRef([]);

  const handleClick = () => {
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div id="projects" className="w-[100%] min-h-screen py-4">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-around gap-3 py-10">
        {projectsButton.map((text) => (
          <motion.button
            initial={{
              opacity: text === projectsButton[0] ? 1 : 0.5,
              scale: text === projectsButton[0] ? 1.2 : 1,
            }}
            key={text} // ✅ Fixed: Use unique key
            ref={(el) => buttonsRef.current.push(el)}
            onClick={() => {
              setIndex(projectsButton.indexOf(text));
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
          .map((data) => (
            <motion.div key={data.id} layout>
              {" "}
              {/* ✅ Fixed: Use unique id */}
              <Project data={data} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
