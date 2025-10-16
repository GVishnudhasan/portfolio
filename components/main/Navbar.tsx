"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@developer-hub/liquid-glass";

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
      className="font-raleway font-medium cursor-pointer px-4 py-1 rounded-full text-white transition-all duration-300
    hover:bg-white/10 hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/30"
>
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
{/* Desktop Navbar */}
<div className="fixed top-3 z-[100] w-full flex justify-center px-4 hidden md:flex pointer-events-auto">
  <GlassCard
    displacementScale={120}
    blurAmount={0.080}
    cornerRadius={50}
    padding="10px 24px"
    className="border border-[#7042f88b] max-w-[900px] w-full h-[46px] text-gray-200 flex items-center justify-center"
  >
    {/* Flex wrapper with gap */}
    <div className="flex items-center justify-center gap-x-6 w-full">
      <NavLink href="#about-me">About me</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#experience">Experience</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  </GlassCard>
</div>


      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 right-4 z-[101] p-3 rounded-full border border-[#7042f861] bg-[#0300145e] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 text-gray-200"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed md:hidden top-16 right-4 w-[200px] max-h-[calc(100vh-64px)] z-[100]"
            >
              <GlassCard
                displacementScale={90}
                blurAmount={0.070}
                cornerRadius={20}
                padding="16px"
                className="border border-[#7042f88b] flex flex-col p-4 text-gray-200"
              >
                <nav className="flex flex-col gap-6">
                  <NavLink href="#about-me" onClick={closeMenu}>
                    About me
                  </NavLink>
                  <NavLink href="#skills" onClick={closeMenu}>
                    Skills
                  </NavLink>
                  <NavLink href="#experience" onClick={closeMenu}>
                    Experience
                  </NavLink>
                  <NavLink href="#projects" onClick={closeMenu}>
                    Projects
                  </NavLink>
                  <NavLink href="#contact" onClick={closeMenu}>
                    Contact
                  </NavLink>
                </nav>
              </GlassCard>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
