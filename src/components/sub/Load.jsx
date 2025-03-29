"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Load = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoad(true);
    }, 1500); // Adjust the delay to control how long the loading page is visible
    return () => clearTimeout(timeOut); // Cleanup to avoid memory leaks
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.9 }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <Image
        src="/spinner.gif"
        width={400}
        height={400}
        className="size-20"
        alt="Spinner"
      />
    </motion.div>
  );
};

export default Load;
