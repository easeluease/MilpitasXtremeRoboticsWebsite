"use client";

import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CometCard } from "@/components/ui/comet-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

import { motion } from "framer-motion";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const typeWriterWords = [
  {
    text: "About",
    className: "text-[#E4E4E7]",
  },
  {
    text: "Us",
    className: "text-[#E4E4E7]",
  }
];

const programsTypewriterWords = [
  {
    text: "Programs",
    className: "supports-[background-clip:text]:text-transparent",
  }
];

const vexTypewriterWords = [
  {
    text: "VEX",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Robotics",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Compitition",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const ftcTypewriterWords = [
  {
    text: "First",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Tech",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Competition",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const outreachTypewriterWords = [
  {
    text: "Outreach",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "&",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Events",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

export default function Home() {
  const smoothScrollToElement = (element: HTMLElement, duration = 1400) => {
    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
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
                    className="inline-block text-center font-bold text-6xl lg:text-7xl leading-[0.95] bg-clip-text text-transparent drop-shadow-2xl bg-linear-to-r from-[#b2c4ff] to-white">
                    <span className="block whitespace-nowrap">Milpitas Xtreme</span>
                    <span className="block whitespace-nowrap">Robotics</span>
                  </motion.div>
                  <button
                    onClick={() => {
                      const aboutSection = document.getElementById('about-section');
                      if (aboutSection) {
                        smoothScrollToElement(aboutSection, 1500);
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
          <div id="about-section" className="sticky top-0 z-0 flex flex-col items-center justify-center py-15 lg:py-25 w-full px-10 lg:px-40 min-h-screen pb-[calc(32rem+232px)] overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[3px] scale-105"
            ></div>
            <div aria-hidden className="absolute inset-0 bg-black/55"></div>
            <div className="relative z-10 max-w-4xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
              >
                <TypewriterEffect words={typeWriterWords} className="justify-center text-5xl lg:text-6xl font-bold" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${ibmPlexMono.className} text-center space-y-6 text-[#E4E4E7]`}
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
              <TypewriterEffect words={programsTypewriterWords} className="justify-center bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-5xl lg:text-6xl font-bold leading-[1.15] pb-2" />
            </motion.div>

            {/* Program 1 - Number/Text Left, Image Right */}
            <div
              id="vex"
              className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-2 w-full items-start"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">01</div>
                <div>
                  <TypewriterEffect words={vexTypewriterWords} className="justify-start whitespace-nowrap bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-3xl lg:text-4xl font-bold mb-6 text-left" />
                  <div className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-base`}>
                    <LinkPreview
                      url="https://www.vexrobotics.com/competition?srsltid=AfmBOorWHCQCMcI5b7pOVo5EMUoZbvNnlHV8y-QmunTlb2qpb8Ux5mif"
                      className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                      width={170}
                      height={105}
                      quality={60}
                    >
                      VEX Robotics
                    </LinkPreview>{" "}
                    is a fast-paced competition where teams design, build, and program custom robots to compete in head-to-head matches on a dynamic game field. Students focus on mechanical design, autonomous programming, and strategic gameplay throughout the season.
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/#vex"
                      className="inline-block"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="bg-[#0B0B0B] text-[#E4E4E7] px-5 py-2 text-sm lg:text-base"
                      >
                        <span>Learn More</span>
                      </HoverBorderGradient>
                    </Link>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-end pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)]">
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
              id="ftc"
              className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full items-start"
            >
              <div className="order-2 flex flex-col justify-start space-y-6 pt-0 z-10">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">02</div>
                <div>
                  <TypewriterEffect words={ftcTypewriterWords} className="justify-start bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-3xl lg:text-4xl font-bold mb-6" />
                  <div className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-base`}>
                    <LinkPreview
                      url="https://www.firstinspires.org/programs/ftc/"
                      className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                      width={170}
                      height={105}
                      quality={60}
                    >
                      FIRST Tech Challenge (FTC)
                    </LinkPreview>{" "}
                    challenges teams to build robots using a modular kit system while emphasizing innovation, outreach, and engineering documentation. Teams compete in alliances and present their design process to judges alongside on-field performance.
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/#ftc"
                      className="inline-block"
                    >
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="bg-[#0B0B0B] text-[#E4E4E7] px-5 py-2 text-sm lg:text-base"
                      >
                        <span>Learn More</span>
                      </HoverBorderGradient>
                    </Link>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="order-1 flex justify-center md:justify-start pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)]">
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
              id="outreach"
              className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full items-start"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="text-9xl font-bold text-[#A1A1AA] -mb-8 leading-none">03</div>
                <div>
                  <TypewriterEffect words={outreachTypewriterWords} className="justify-start w-full bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl lg:text-4xl font-bold mb-6" />
                  <p className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-base`}>
                    Placeholder
                  </p>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-end pt-28"
              >
                <CometCard rotateDepth={24} translateDepth={24} className="rounded-full overflow-visible">
                  <div className="relative flex h-64 w-64 items-center justify-center rounded-full overflow-hidden bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)]">
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
              className="space-y-8 bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-5xl lg:text-6xl px-4 font-bold text-transparent max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
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

          <footer className="relative z-30 w-full bg-[#0B0B0D] border-t border-zinc-800/70">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-4 lg:py-5">
              <div className="md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <Image src="/logo.png" className="me-3 h-8 w-auto object-contain" width={1941} height={1564} alt="MXR Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-[#E4E4E7]">Milpitas Xtreme Robotics</span>
                  </Link>
                </div>
                <div>
                  <ul className={`${ibmPlexMono.className} flex flex-nowrap items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-[#D4D4D8]`}>
                    <li className="shrink-0">
                      <LinkPreview url="/about-us" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/ClubPicture.png">About</LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview url="/#vex" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/vex.png" previewClassName="scale-125">VEX</LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview url="/#ftc" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/FTC.jpg">FTC</LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview url="/#outreach" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/logo.png">Outreach</LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview url="/sponsors" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/team.png">Sponsors</LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview url="/#blog" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/logo.png">Blog</LinkPreview>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-4 border-zinc-700/80 sm:mx-auto lg:my-5" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className={`${ibmPlexMono.className} text-sm text-[#A1A1AA] sm:text-center`}>© 2026 Milpitas Xtreme Robotics</span>
                <div className="mt-2 flex sm:mt-0 sm:justify-center">
                  <a href="https://www.instagram.com/milpitasxrobotics/" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4" aria-label="Instagram">
                    <InstagramLogoIcon className="h-4 w-4" />
                  </a>
                  <a href="https://discord.gg/MZYKRq3cvw" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4" aria-label="Discord">
                    <DiscordLogoIcon className="h-4 w-4" />
                  </a>
                  <a href="https://www.youtube.com/@MilpitasXtremeRobotics" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4" aria-label="YouTube">
                    <VideoIcon className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/company/milpitas-xtreme-robotics/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4" aria-label="LinkedIn">
                    <LinkedInLogoIcon className="h-4 w-4" />
                  </a>
                  <a href="https://github.com/milpitasxr" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4" aria-label="GitHub">
                    <GitHubLogoIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
