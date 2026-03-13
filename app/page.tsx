"use client";

import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";

import { motion } from "framer-motion";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const typeWriterWords = [
  {
    text: "About",
    className: "text-[#111111]",
  },
  {
    text: "Us",
    className: "text-[#111111]",
  }
];

const programsTypewriterWords = [
  {
    text: "Programs",
    className: "text-[#E4E4E7]",
  }
];

const vexTypewriterWords = [
  {
    text: "VEX",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Robotics",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Compitition",
    className: "text-[#E4E4E7]",
  },
];

const ftcTypewriterWords = [
  {
    text: "First",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Tech",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Competition",
    className: "text-[#E4E4E7]",
  },
];

const outreachTypewriterWords = [
  {
    text: "Outreach",
    className: "text-[#E4E4E7]",
  },
  {
    text: "&",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Events",
    className: "text-[#E4E4E7]",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* SECTION 1: The Sticky Hero */}
      <div className="sticky top-20 z-0 h-screen w-full overflow-hidden">
        <div className="hero-sticky w-full overflow-hidden">
          <BackgroundLines className="mt-8 lg:-mt-20">
            <div className="z-100 inset-0 flex items-center justify-center text-white lg:pt-36 px-10 lg:px-40 text-center">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="basis-3/5 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 50 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="inline-block text-center font-bold text-6xl lg:text-7xl leading-[0.95] bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-[#EAEAEA] to-[#B9B9B9]">
                    <span className="block whitespace-nowrap">Milpitas Xtreme</span>
                    <span className="block whitespace-nowrap">Robotics</span>
                  </motion.div>
                  <button
                    onClick={() => {
                      const aboutSection = document.getElementById('about-section');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }}
                    className="mt-45 hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none p-0"
                    style={{
                      opacity: 1,
                      animation: 'fadeInUp 1.5s ease-out 1.8s both'
                    }}>
                    <Image src="/scroll-down.svg" alt="Scroll Down" width={200} height={60} style={{ display: "block" }} />
                  </button>
                  <style>{`
                    @keyframes fadeInUp {
                      from {
                        opacity: 0;
                        transform: translateY(20px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </BackgroundLines>
        </div>
      </div>

      {/* WRAPPER FOR EVERYTHING ELSE: This "covers" the hero */}
      <div className="relative z-10 w-full bg-[#0A0A0A] overflow-visible">
        <div className="flex flex-col items-center space-y-0">
          {/* SECTION 2: About Section */}
          <div id="about-section" className="sticky top-0 z-0 flex flex-col items-center justify-center py-15 lg:py-25 w-full px-10 lg:px-40 min-h-screen pb-[calc(32rem+232px)] bg-[rgb(200,200,200)]">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <TypewriterEffect words={typeWriterWords} className="justify-center text-5xl lg:text-6xl font-bold text-[#111111]" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${ibmPlexMono.className} text-center space-y-6 text-[#666666]`}
              >
                <p className="text-base leading-relaxed">
                  In a nutshell, Milpitas Xtreme Robotics is the official robotics club of Milpitas High. We provide the students of Milpitas High a chance to discover, create, or nurture a passion for what the Silicon Valley is famed for - technology. MXR offer our members a chance to use the skills they learn in their classrooms on something more tangible. However, we also highly promote certain key concepts in our club; productive teamwork with fellow club members, innovation in engineering techniques used, and ingenuity in overcoming obstacles. Milpitas Xtreme Robotics encourages our members to get off their computers and out of their videos games, and instead take a shot at bringing to life our very own creations.
                </p>
              </motion.div>
            </div>
          </div>

          {/* SECTION 3: Programs */}
          <motion.div 
            className="relative z-20 mt-[30vh] flex flex-col items-center justify-center pb-20 w-full px-10 lg:px-40 space-y-20 bg-[#0A0A0A] pt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TypewriterEffect words={programsTypewriterWords} className="justify-center text-5xl lg:text-6xl font-bold text-[#E4E4E7]" />
            </motion.div>

            {/* Program 1 - Number/Text Left, Image Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full items-start"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">01</div>
                <div>
                  <TypewriterEffect words={vexTypewriterWords} className="justify-start whitespace-nowrap text-3xl lg:text-4xl font-bold text-[#E4E4E7] mb-6" />
                  <p className={`${ibmPlexMono.className} text-[#666666] leading-relaxed text-base`}>
                    VEX Robotics is a fast-paced competition where teams design, build, and program custom robots to compete in head-to-head matches on a dynamic game field. Students focus on mechanical design, autonomous programming, and strategic gameplay throughout the season.
                  </p>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111]">
                    <Image
                      src="/Images/vex.png"
                      alt="VEX Robotics"
                      width={320}
                      height={320}
                      className="relative z-10 h-56 w-56 rounded-full object-cover"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>

            {/* Program 2 - Image Left, Text Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full items-start"
            >
              <div className="order-2 flex flex-col justify-start space-y-6 pt-0 z-10">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">02</div>
                <div>
                  <TypewriterEffect words={ftcTypewriterWords} className="justify-start text-3xl lg:text-4xl font-bold text-[#E4E4E7] mb-6" />
                  <p className={`${ibmPlexMono.className} text-[#666666] leading-relaxed text-base`}>
                    FIRST Tech Challenge (FTC) challenges teams to build robots using a modular kit system while emphasizing innovation, outreach, and engineering documentation. Teams compete in alliances and present their design process to judges alongside on-field performance.
                  </p>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="order-1 flex justify-center lg:justify-start pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111]">
                    <Image
                      src="/Images/FTC.jpg"
                      alt="First Tech Competition"
                      width={320}
                      height={320}
                      className="relative z-10 h-56 w-56 rounded-full object-cover"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>

            {/* Program 3 - Number/Text Left, Image Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full items-start"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">03</div>
                <div>
                  <TypewriterEffect words={outreachTypewriterWords} className="justify-start w-full text-left text-3xl lg:text-4xl font-bold text-[#E4E4E7] mb-6" />
                  <p className={`${ibmPlexMono.className} text-[#666666] leading-relaxed text-base`}>
                    Placeholder
                  </p>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111]">
                    <Image
                      src="/logo.png"
                      alt="Outreach & Education"
                      width={320}
                      height={320}
                      className="relative z-10 h-56 w-56 rounded-full object-cover"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>
          </motion.div>

          {/* SECTION 4: Sponsorship CTA */}
            <HeroHighlight
              containerClassName="relative z-30 mt-0 h-[18rem] lg:h-[18rem] bg-[#0A0A0A]"
              className="relative z-30 pt-8 px-10 space-y-6 w-full bg-transparent"
            >
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 1,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              viewport={{ once: true}}
              className="space-y-8 text-5xl lg:text-6xl px-4 font-bold text-[#E4E4E7] max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Want to sponsor us?
            </motion.h1>
            {/* desktop sponsors link */}
            <Link href="/sponsors" className="hidden lg:flex">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="flex flex-col gap-y-1 text-3xl text-blue-400 font-bold w-full items-center justify-center"
              >
                  <div className="flex flex-row gap-x-0">
                    Explore Sponsorship Opportunities
                  </div>
                  <motion.div
                    variants={{
                      rest: { scaleX: 0 },
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
                    className="bg-blue-400 w-[35rem] h-1">
                  </motion.div>
              </motion.div>
            </Link>
            {/* mobile sponsors link */}
            <Link href="/sponsors" className="lg:hidden">
              <div className="text-blue-400 text-xl font-bold text-center">
                Explore Sponsorship Opportunities
              </div>
            </Link>
          </HeroHighlight>

          {/* Footer */}
          {/* desktop footer */}
          <div className="relative z-30 hidden bg-neutral-900 w-full lg:flex flex-row items-start justify-center py-8 px-40">
            <div className="basis-1/4 flex flex-col space-y-8">
              <div className="flex flex-row items-center justify-start space-x-4">
                <Image className="rounded-xl w-1/12" src="/logo.png" width={500} height={500} alt="logo"/>
                <div className="font-bold text-lg text-[#E4E4E7]">Milpitas Xtreme Robotics</div>
              </div>
              <div className="w-full flex flex-col space-y-0">
                <div className="text-md text-[#CFCFCF]">© 2025 Milpitas Xtreme Robotics</div>
                <div className="text-md text-[#CFCFCF]">All rights reserved</div>
                <div className="text-md text-[#CFCFCF]">Made with ❤️ and 🧔🏽‍♀️</div>
              </div>
            </div>
            <div className="basis-3/4 font-bold flex flex-row space-x-12 items-center justify-start text-[#E4E4E7]">
              <Link href="#home" className="text-lg hover:text-neutral-400 transition">Home</Link>
              <Link href="#vex" className="text-lg hover:text-neutral-400 transition">VEX</Link>
              <Link href="#ftc" className="text-lg hover:text-neutral-400 transition">FTC</Link>
              <Link href="#frc" className="text-lg hover:text-neutral-400 transition">FRC</Link>
            </div>
          </div>
          {/* mobile footer */}
          <div className="relative z-30 lg:hidden bg-neutral-900 w-full flex flex-col space-y-4 items-start justify-center py-8 px-12">
            <div className="font-bold text-lg text-[#E4E4E7]">Milpitas Xtreme Robotics</div>
            <div className="w-full flex flex-col space-y-0">
              <div className="text-md text-[#CFCFCF]">© 2025 Milpitas Xtreme Robotics</div>
              <div className="text-md text-[#CFCFCF]">All rights reserved</div>
              <div className="text-md text-[#CFCFCF]">Made with ❤️ and 🧔🏽‍♀️</div>
            </div>
            <div className="font-bold flex flex-row space-x-8 items-center justify-start text-[#E4E4E7]">
              <Link href="#home" className="text-sm hover:text-neutral-400 transition">Home</Link>
              <Link href="#vex" className="text-sm hover:text-neutral-400 transition">VEX</Link>
              <Link href="#ftc" className="text-sm hover:text-neutral-400 transition">FTC</Link>
              <Link href="#frc" className="text-sm hover:text-neutral-400 transition">FRC</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
