"use client";
import { navbarData, copyRightIcon } from "@/Assets";

const Navbar = ({ id }) => {
  return (
    <div
      className="fixed sm:top-auto sm:bottom-0 sm:left-0 sm:right-0 sm:w-full sm:h-[60px] sm:flex-row sm:justify-around sm:border-t sm:border-r-0
                    w-[70px] h-full  left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-3 z-50
                    xl:py-6 sm:px-2 sm:py-1 sm:bg-white"
    >
      <a href="/#home" className="sm:hidden">
        <span className="text-2xl font-semibold text-red-400">E</span>.
        <span className="block w-min rotate-90 origin-bottom text-semibold text-[11px] dark:text-white">
          Mintah
        </span>
      </a>

      <div className="flex flex-col gap-y-1 xl:gap-y-1 sm:gap-y-0 sm:flex-row sm:items-center sm:justify-center sm:w-full">
        {navbarData.map((item, index) => (
          <a
            href={`/#${item.id}`}
            key={`${item.id}-${index}`}
            className="group flex flex-col items-center sm:flex-1 sm:justify-center"
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
              className={`text-[10px] font-bold sm:text-[8px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-gray-500 sm:opacity-100 sm:translate-x-0 sm:mt-0.5
                ${
                  item.id === id
                    ? "sm:opacity-100 sm:translate-x-0"
                    : index % 2 === 0
                    ? "translate-x-2 sm:translate-x-0"
                    : "-translate-x-2 sm:translate-x-0"
                }`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>

      <p className="flex item-center justify-center text-[13px] sm:hidden sm:text-[11px] text-gray-500 mt-2 sm:mb-5">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon} 2023-{new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
