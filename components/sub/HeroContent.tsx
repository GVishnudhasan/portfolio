"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  // Called when the slideInFromLeft(0.5) animation completes
  const handleTypewriterAnimationComplete = () => {
    setShowTypewriter(true);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full md:w-1/2 flex flex-col gap-5 justify-center text-center md:text-start mt-10 md:mt-0">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[14px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
          {/* <h1 className="Welcome-text text-[25px]">Hey! This is Vishnu</h1> */}
          <h1 className="Welcome-text text-[25px] drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
  Hey! This is Vishnu
</h1>


        </motion.div>

        {/* Typewriter Effect */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white w-full"
          onAnimationComplete={handleTypewriterAnimationComplete}
        >
          <div className="flex flex-col items-center justify-center md:items-start space-y-4">
            <span className="text-3xl md:text-4xl lg:text-5xl"> I&apos;m a</span>
            {/* <div className="h-[60px] md:h-[72px] overflow-hidden"> */}
            <div className="w-full max-w-xs md:max-w-none">
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 whitespace-nowrap"> */}
                <span
  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 break-words md:whitespace-nowrap"
>
                {showTypewriter && (
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "Frontend Developer",
                      "Open Source Contributor",
                      "AI Enthusiast",
                      "Public Speaker",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                )}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] mx-auto md:mx-0 select-text cursor-text relative z-20"
        >
          On stage, I talk about{" "}
          <span className="text-white font-semibold">AI</span> and software engineering.  
          Behind the screen, I <span className="text-white font-semibold">build it</span>.  
          From crafting interfaces to exploring tech advancements - I code, speak, and share ideas that shape tomorrow.
        </motion.p>

        {/* Social Links */}
        <motion.div
  variants={slideInFromLeft(1)}
  className="flex flex-wrap items-center gap-4 justify-center md:justify-start mx-auto md:mx-0"
>
          <a
            href="https://www.linkedin.com/in/vishnudhasan-govindarajan/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                     bg-gradient-to-br from-white/10 to-white/5 
                     hover:from-[#0077b5]/20 hover:to-[#0077b5]/5
                     backdrop-blur-sm border border-white/10
                     shadow-[0_0_20px_rgba(0,119,181,0.1)]
                     transition-all duration-300 ease-in-out
                     overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0077b5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <svg className="w-5 h-5 fill-white/70 group-hover:fill-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-white/70 font-medium relative z-10 group-hover:text-white">LinkedIn</span>
          </a>

          <a
            href="https://github.com/GVishnudhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                     bg-gradient-to-br from-white/10 to-white/5
                     hover:from-[#333]/20 hover:to-[#333]/5
                     backdrop-blur-sm border border-white/10
                     shadow-[0_0_20px_rgba(51,51,51,0.1)]
                     transition-all duration-300 ease-in-out
                     overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#333]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <svg className="w-5 h-5 fill-white/70 group-hover:fill-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-white/70 font-medium relative z-10 group-hover:text-white">GitHub</span>
          </a>

          <a
            href="https://x.com/Vishnudhasan10"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl
                     bg-gradient-to-br from-white/10 to-white/5
                     hover:from-white/20 hover:to-white/5
                     backdrop-blur-sm border border-white/10
                     shadow-[0_0_20px_rgba(255,255,255,0.1)]
                     transition-all duration-300 ease-in-out
                     overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <svg className="w-5 h-5 fill-white/70 group-hover:fill-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-white/70 font-medium relative z-10 group-hover:text-white">Twitter</span>
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full md:w-1/2 h-auto justify-end items-center"
      >
        <div className="relative w-[450px] lg:w-[650px] aspect-square mr-[-150px] lg:mr-[-80px]">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
