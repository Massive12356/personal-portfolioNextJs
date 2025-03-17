"use client";
import { navbarData, copyRightIcon } from "@/Assets";

const Navbar = ({ id }) => {
  return (
    <div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-3 z-10 xl:py-6 sm:w-[50px] sm:py-2 sm:px-2">
      <a href="/#home">
        <span className="text-2xl font-semibold text-red-400">E</span>.
        <span className="block w-min rotate-90 origin-bottom text-semibold text-[11px] dark:text-white">
          Mintah
        </span>
      </a>
      <div className="flex flex-col gap-y-1 xl:gap-y-1 sm:gap-y-2">
        {navbarData.map((item) => (
          <a
            href={`/#${item.id}`}
            key={item.id}
            className="group flex flex-col items-center"
          >
            <span
              className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 transition-all ${
                item.id === id
                  ? "text-red-500 scale-110 xl:group-hover:scale-100"
                  : "text-yellow-600 scale-100 xl:group-hover:scale-90"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] sm:text-[8px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                item.id === id
                  ? "-translate-x-0 opacity-100"
                  : item.id % 2 === 0
                  ? "translate-x-2"
                  : "-translate-x-2"
              }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex item-center justify-center text-[13px] sm:text-[11px] text-gray-500 mt-2 sm:mb-5">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon} 2023-{new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
