"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  QrCode, 
  ArrowUpRight, 
  Instagram, 
  Github, 
  Youtube, 
  Linkedin, 
  MonitorPlay 
} from "lucide-react";

import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  VideoIcon, 
} from "@radix-ui/react-icons";

const marsPhotos = [
  {
    src: "/Images/MARS/IMG_3493.jpg",
    alt: "MARS classroom workshop",
  },
  {
    src: "/Images/MARS/IMG_3493.jpg",
    alt: "same as above",
  },
  {
    src: "/Images/MARS/Sping_MARS_2025.jpg",
    alt: "MARS showcase event",
  },
];

const StaggeredText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.h2 
      className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08 }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, rotate: 2 },
            visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div className="w-full bg-[#050505] text-[#E4E4E7] font-sans selection:bg-[#b2c4ff] selection:text-black overflow-hidden">
      
      <section className="relative h-screen w-full flex items-end p-6 md:p-12">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-between items-end pb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none text-white"
          >
            mars.
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden md:flex items-center gap-2 text-sm font-mono text-white/50"
          >
            <div className="w-2 h-2 rounded-full bg-[#b2c4ff] animate-pulse" />
            Milpitas Applied Robotics
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:py-40 max-w-7xl mx-auto">
        <StaggeredText 
          text="empowering the next generation of engineers." 
          className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-4 font-mono text-sm text-zinc-500 uppercase tracking-widest pt-2">
            Program Overview
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-8 text-lg md:text-2xl leading-relaxed text-zinc-300"
          >
            The MARS Program is a student-driven initiative led by Milpitas Xtreme Robotics to teach students the fundamentals of coding, the design process, and scientific concepts. We target middle and elementary students to strengthen their technical and problem-solving skills through hands-on projects with tangible impact.
          </motion.div>
        </div>
      </section>

      <section className="w-full px-6 py-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-14"
        >
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#b2c4ff] opacity-10 blur-[100px] rounded-full group-hover:opacity-20 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-[#b2c4ff]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b2c4ff]" />
                Registrations Open
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Summer MARS 2026
              </h3>
              <p className="text-zinc-400 max-w-md font-mono text-sm leading-relaxed">
                Join us from <span className="text-white">June 15-19</span> at Milpitas High School. Scan the QR code to secure your spot for a week of robotics, coding, and engineering challenges.
              </p>
              
              <a href="mailto:milpitasxtreme.mars@gmail.com" className="inline-flex items-center gap-2 mt-4 text-sm font-mono text-zinc-300 hover:text-white transition-colors group/link">
                milpitasxtreme.mars@gmail.com
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="shrink-0">
              <div className="bg-white p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-2xl flex items-center justify-center bg-zinc-100">
                  <img 
                    src="Images/MARS/qrcodesummer.png"
                    alt="Summer MARS QR Code" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if(e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = '<span class="text-zinc-400 font-mono text-xs text-center p-4">Put QR Image here</span>';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full px-6 py-24 md:py-40 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">in action.</h2>
          <span className="font-mono text-sm text-zinc-500">03 Shots</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {marsPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-3xl bg-zinc-900 group ${
                index === 0 ? "md:col-span-8 md:h-[32rem]" : 
                index === 1 ? "md:col-span-4 md:h-[32rem]" : 
                "md:col-span-12 md:h-[40rem]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-mono text-xs bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="w-full border-t border-white/10 bg-[#050505] px-6 py-12 text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">
              MXR
            </div>
            <span className="font-medium text-white tracking-tight">Milpitas Xtreme Robotics</span>
          </div>

          <div className="flex gap-6 font-mono text-sm">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">VEX</a>
            <a href="#" className="hover:text-white transition-colors">FTC</a>
            <a href="#" className="hover:text-white transition-colors">Programs</a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/milpitasxrobotics/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4 text-[#9CA3AF] hover:text-[#E4E4E7]"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </a>
            <a
              href="https://discord.gg/MZYKRq3cvw"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4 text-[#9CA3AF] hover:text-[#E4E4E7]"
              aria-label="Discord"
            >
              <DiscordLogoIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@MilpitasXtremeRobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4 text-[#9CA3AF] hover:text-[#E4E4E7]"
              aria-label="YouTube"
            >
              <VideoIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/milpitas-xtreme-robotics/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4 text-[#9CA3AF] hover:text-[#E4E4E7]"
              aria-label="LinkedIn"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/milpitasxr"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-4 text-[#9CA3AF] hover:text-[#E4E4E7]"
              aria-label="GitHub"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-zinc-600">
          <span>&copy; 2026 Milpitas Xtreme Robotics</span>
          <span>Designed with purpose.</span>
        </div>
      </footer>
    </div>
  );
}