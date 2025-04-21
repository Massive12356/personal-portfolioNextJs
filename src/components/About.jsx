"use client";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/Assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center pr-7"
    >
      <Heading text={"About Me"} />
      <div className="w-[100%] flex items-center justify-between md:justify-center">
        <Image
          src={"/img2.jpg"}
          alt="About Image"
          width={400}
          height={400}
          className="w-[250px] lg:w-[200px] md:hidden rounded-lg"
        />
        <div className="relative max-w-[650px] rounded-xl bg-zinc-100 text-justify p-5 dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
            {aboutText}
          </p>
          <a
            href="/Cv/EdwardMintah_CV.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-[100%] flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, index) => (
          <Achievements key={index} title={item.title} amount={item.amount}>
            <span key={index}>{item.icon}</span> {/* Fixed: Added key here */}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
