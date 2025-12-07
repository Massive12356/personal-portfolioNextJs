"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ data = {}, index }) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="relative w-[300px] md:w-[100%] sm:w-[80%] overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
    >
      {/* Project Image */}
      {data.url && (
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={data.url}
            alt={data.name || "Project Image"}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          {data.link ? (
            <a 
              href={data.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl font-bold tracking-wide text-gray-800 dark:text-white hover:text-yellow-500 transition-colors duration-300"
            >
              {data.name}
            </a>
          ) : (
            <h2 className="text-xl font-bold tracking-wide text-gray-800 dark:text-white">
              {data.name}
            </h2>
          )}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {data.tech && data.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {data.desc || "No description available."}
        </p>
      </div>

      {/* Hover Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-2xl cursor-pointer"
        onClick={() => setShow((show) => !show)}
      >
        <div className="text-center p-4">
          {data.link ? (
            <a 
              href={data.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              View Project
            </a>
          ) : (
            <p className="text-white">No live demo available</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;