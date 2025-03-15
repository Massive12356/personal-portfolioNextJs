"use client"
import { moonIcon,sunIcon } from "@/Assets"
import { useRef, useState,useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { motion } from "framer-motion";
const Toggle = ({children}) => {
    // theme toggle
    const [darkTheme, setDarkTheme] = useState(false);
    const mainRef = useRef(null);

    // darKthemeFunction
    const addDarkTheme = () => {
        mainRef.current.classList.add("dark");
        setDarkTheme(true);
    }

    //Remove dark theme
    const removeDarkTheme = () => {
        mainRef.current.classList.remove("dark");
        setDarkTheme(false);
    }

    useEffect(()=>{
        const darkTheme = reactLocalStorage.get('darkTheme'); 
        const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);

        const systemTheme = typeof window !== undefined && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if(darkTheme === undefined){
            systemTheme ? addDarkTheme() : removeDarkTheme();
        } else {
            darkThemeParsed ? addDarkTheme() : removeDarkTheme();
        }
    }, [])
  return (
   <main ref={mainRef}> 
    <div className=" bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[50] sm:pl-[80px] sm:pr-5 overflow-hidden">
            <button onClick={() =>{if(!darkTheme){addDarkTheme(); reactLocalStorage.set('darkTheme',true)} else{removeDarkTheme(); reactLocalStorage.set('darkTheme', false)}}} className="fixed right-14 sm:right-10 top-10 text-yellow-600 hover:text-yellow-500 focus:outline-none">
                <motion.span animate={{scale:darkTheme ? 0 : 1}} className=" absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800">{moonIcon}</motion.span>
                <motion.span animate={{scale:darkTheme ? 1 : 0}} className=" absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800">{sunIcon}</motion.span>
            </button>
            {children}
        </div>
    </div>
   </main>
  )
}

export default Toggle