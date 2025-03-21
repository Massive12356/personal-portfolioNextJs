"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "@/Assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variance = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),

    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20"
    >
      <Heading text={"Skills"} />

      <div className="w-[100%] flex justify-between flex-wrap gap-x-8 md:gap-x-2 gap-y-10 lg:gap-y-6">
        {/* ✅ Safe mapping with optional chaining */}
        {skillsData?.length > 0 ? (
          skillsData.map((item, index) => (
            <motion.div
              custom={index}
              variants={variance}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              key={`skill-${index}`} // ✅ Added unique key
              className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-5 lg:px-2 cursor-pointer"
            >
              <Image
                src={item.icon}
                alt="skills image"
                width={100}
                height={100}
                className="h-auto w-[40px]"
              />
              <p className="text-sm text-gray-600">{item.name}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500">No skills data available.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
