"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { reviewsData, starIcons, arrowIcons } from "@/Assets";
import { useRef, useState, useEffect, useCallback } from "react";
import { animate, motion } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  const rightClickHandler = useCallback(() => {
    animate(
      slides.current[index],
      { x: 0, scale: 1, rotate: 0 },
      { delay: 0.3 }
    );
    animate(slides.current[prevIndex.current], {
      scale: 0.4,
      rotate: index % 2 === 0 ? 10 : -10,
      x: "-100%",
    });
  }, [index]);

  const leftClickHandler = useCallback(() => {
    animate(
      slides.current[index],
      { x: 0, scale: 1, rotate: 0 },
      { delay: 0.3 }
    );
    animate(slides.current[prevIndex.current], {
      x: "100%",
      scale: 0.4,
      rotate: prevIndex.current % 2 === 0 ? 10 : -10,
    });
  }, [index]);

  useEffect(() => {
    if (slides.current[index]) {
      direction ? leftClickHandler() : rightClickHandler();
      prevIndex.current = index;
    }
  }, [index, direction, leftClickHandler, rightClickHandler]);

  useEffect(() => {
    if (slides.current[0]) {
      animate(slides.current[0], { x: 0, scale: 1, rotate: 0 });
    }
  }, []);

  const handlePrevClick = () => {
    setDirection(true);
    setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const handleNextClick = () => {
    setDirection(false);
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  return (
    <div id="reviews" className="my-20 pr-7">
      <Heading text={"Reviews"} />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {reviewsData.map((review, i) => (
            <motion.div
              initial={{ x: i === 0 ? 0 : "100%" }}
              key={review.id || i} // ✅ Use a unique identifier if available
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-100 p-14 lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
              ref={(el) => (slides.current[i] = el)}
            >
              <Image
                src={review.image}
                alt="Reviews Image"
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars.reduce((sum, item) => sum + item, 0).toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, j) => (
                    <span key={`${review.id || i}-${j}`}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button onClick={handlePrevClick}>{arrowIcons[0]}</button>
          <button onClick={handleNextClick}>{arrowIcons[1]}</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
