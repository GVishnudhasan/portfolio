"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@developer-hub/liquid-glass";
import { experience_data } from "@/constants";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  logo: string;
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  totalCards: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  
  // Smooth scale animation
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.92, 0.96, 1]
  );

  // Cards slide up smoothly
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y,
        position: "sticky",
        top: "80px",
        zIndex: 10,
      }}
      className="min-h-screen flex items-center justify-center py-8 md:py-12"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <GlassCard
          displacementScale={120}
          blurAmount={0.25}
          cornerRadius={24}
          padding="0px"
          className="relative border border-[#7042f8]/30 shadow-[0_0_30px_rgba(112,66,248,0.2)] overflow-hidden"
          style={{
            background: "rgba(3,0,20,0.5)",
          }}
        >
          {/* Depth overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none"></div>

          {/* Content */}
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Left: Icon + Title */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative">
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {experience.company[0]}
                    </div>
                  </div> */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="object-contain"
                    />
                  </div>

                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex self-start sm:self-auto">
                <div className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/20 backdrop-blur-md">
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                    {experience.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8"></div>

            {/* Description */}
            <ul className="space-y-3 sm:space-y-4">
              {experience.description.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400"></div>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed flex-1">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const totalCards = experience_data.length;
  const scrollAreaHeight = `calc(100vh * ${totalCards})`;

  return (
    <div className="w-full bg-[#030014] select-text" id="experience">
      <div
        className="relative mx-auto max-w-7xl pointer-events-auto"
        style={{ height: scrollAreaHeight }}
      >
        {/* Sticky Header with enhanced styling */}
        <div className="sticky top-16 sm:top-20 bg-gradient-to-b from-[#030014] via-[#030014] to-transparent py-10 sm:py-14 md:py-16 flex justify-center">
          <div className="relative">
            <h1 className="text-[55px] md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500 mb-0 select-none">
              Experience
            </h1>
            {/* Glow effect under title */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-50"></div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="relative">
          {experience_data.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              totalCards={totalCards}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;