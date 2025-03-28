import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const Achievements = ({ title, amount, children }) => {
  const number = useMotionValue(0);

  useEffect(() => {
    const controls = animate(number, amount, { duration: 1.5 }); // Smooth animation
    return controls.stop; // Cleanup animation on unmount
  }, [amount, number]);

  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span className="text-2xl lg:text-xl font-light text-yellow-500">
          {number.get().toFixed(0)} {/* Display integer */}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
};

export default Achievements;
