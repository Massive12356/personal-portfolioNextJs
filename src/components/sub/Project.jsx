"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ data = {}, index }) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      key={index} // ✅ Added key to track changes
      initial={{
        opacity: 0,
        y: index % 2 === 0 ? 100 : -100,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onClick={() => setShow((show) => !show)}
      className="relative w-[300px] md:w-[100%] sm:w-[80%] bg-green-900 h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      {/* ✅ Render image only if `data.url` is available */}
      {data.url && (
        <Image
          src={data.url}
          alt={data.name || "Project Image"}
          width={400}
          height={400}
          className="rounded-lg opacity-70"
        />
      )}

      {/* ✅ Add animation for hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors"
      >
        {/* ✅ Add fallback for `data.link` */}
        {data.link ? (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            <h2 className="text-lg sm:text-sm font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
              {data.name}
            </h2>
          </a>
        ) : (
          <h2 className="text-lg sm:text-sm font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
            {data.name}
          </h2>
        )}

        {/* ✅ Fallback for `data.desc` */}
        <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
          {data.desc || "No description available."}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
