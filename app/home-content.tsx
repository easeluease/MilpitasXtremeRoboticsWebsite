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
  },
];

const programsTypewriterWords = [
  {
    text: "Programs",
    className: "supports-[background-clip:text]:text-transparent",
  },
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
    text: "Competition",
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
      <div className="sticky top-20 z-0 h-screen w-full overflow-hidden">
        <div className="hero-sticky w-full overflow-hidden">
          <BackgroundLines className="mt-4 lg:-mt-20">
            <div className="z-100 inset-0 relative flex items-center justify-center px-4 pt-12 text-center text-white sm:px-6 lg:px-16 lg:pt-36 xl:px-24">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                <div className="basis-3/5 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 300 }}
                    whileInView={{ opacity: 1, y: 150 }}
                    transition={{ duration: 1.5, ease: [0.4, 0.0, 0.2, 1] }}
                    viewport={{ once: true }}
                    className="inline-block bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-center text-5xl leading-[0.95] font-bold text-transparent drop-shadow-2xl sm:text-6xl lg:text-8xl"
                  >
                    <span className="block whitespace-normal sm:whitespace-nowrap">
                      Milpitas Xtreme
                    </span>
                    <span className="block whitespace-normal sm:whitespace-nowrap">
                      Robotics
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundLines>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0, ease: [0.4, 0.0, 0.2, 1] }}
          viewport={{ once: true }}
          className="absolute bottom-25 left-1/2 z-40 -translate-x-1/2"
        >
          <button
            onClick={() => {
              const aboutSection =
                document.getElementById("about-section");
              if (aboutSection) {
                smoothScrollToElement(aboutSection, 1500);
              }
            }}
            className="cursor-pointer border-none bg-transparent p-0 transition-opacity hover:opacity-80"
          >
            <Image
              src="/scroll-down.svg"
              alt="Scroll Down"
              width={150}
              height={27}
              className="h-auto w-36 sm:w-44 lg:w-52"
            />
          </button>
        </motion.div>
      </div>

      <div className="relative z-10 w-full bg-[#0A0A0A] overflow-visible">
        <div className="flex flex-col items-center space-y-0">
          <div
            id="about-section"
            className="sticky top-0 z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-16 pb-20 sm:px-6 lg:px-16 lg:py-24 lg:pb-28 xl:px-24"
          >
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
                className="mb-10 text-center lg:mb-16"
              >
                <TypewriterEffect
                  words={typeWriterWords}
                  className="justify-center text-5xl font-bold sm:text-6xl lg:text-7xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${ibmPlexMono.className} space-y-6 text-center text-[#E4E4E7]`}
              >
                <p className="text-base leading-relaxed sm:text-lg lg:text-xl">
                  In a nutshell, Milpitas Xtreme Robotics is the official
                  robotics club of Milpitas High. We provide the students of
                  Milpitas High a chance to discover, create, or nurture a
                  passion for what the Silicon Valley is famed for - technology.
                  MXR offer our members a chance to use the skills they learn in
                  their classrooms on something more tangible. However, we also
                  highly promote certain key concepts in our club; productive
                  teamwork with fellow club members, innovation in engineering
                  techniques used, and ingenuity in overcoming obstacles.
                  Milpitas Xtreme Robotics encourages our members to get off
                  their computers and out of their videos games, and instead
                  take a shot at bringing to life our very own creations.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div className="relative z-20 mt-20 flex w-full flex-col items-center justify-center space-y-14 bg-[#0A0A0A] px-4 pb-20 pt-14 sm:mt-24 sm:px-6 lg:mt-[20vh] lg:space-y-20 lg:px-16 lg:pt-20 xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <TypewriterEffect
                words={programsTypewriterWords}
                className="justify-center bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text pb-2 text-5xl leading-[1.15] font-bold sm:text-6xl lg:text-7xl"
              />
            </motion.div>

            <div
              id="vex"
              className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-[1.25fr_0.75fr] lg:gap-10"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="-mb-4 text-7xl leading-none font-bold text-[#A1A1AA] sm:text-8xl lg:-mb-8 lg:text-[10rem]">
                  01
                </div>
                <div>
                  <TypewriterEffect
                    words={vexTypewriterWords}
                    className="mb-6 justify-start bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold sm:text-4xl lg:text-5xl"
                  />
                  <div
                    className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-lg lg:text-xl`}
                  >
                    <LinkPreview
                      url="https://www.vexrobotics.com/competition?srsltid=AfmBOorWHCQCMcI5b7pOVo5EMUoZbvNnlHV8y-QmunTlb2qpb8Ux5mif"
                      className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                      width={170}
                      height={105}
                      quality={60}
                    >
                      VEX Robotics Competition
                    </LinkPreview>{" "}
                    is a fast-paced competition where teams design, build, and
                    program custom robots to compete in head-to-head matches on
                    a dynamic game field. Students focus on mechanical design,
                    autonomous programming, and strategic gameplay throughout
                    the season.
                  </div>
                  <div className="mt-6">
                    <Link href="/#vex" className="inline-block">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="bg-[#0B0B0B] text-[#E4E4E7] px-6 py-2.5 text-base lg:text-lg"
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
                className="flex justify-center pt-8 sm:pt-12 md:justify-end md:pt-20 lg:pt-28"
              >
                <CometCard
                  rotateDepth={24}
                  translateDepth={24}
                  className="rounded-full overflow-visible"
                >
                  <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <Image
                      src="/Images/vex.png"
                      alt="VEX Robotics"
                      width={320}
                      height={320}
                      className="relative z-10 h-44 w-44 rounded-full object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>

            <div
              id="ftc"
              className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-10"
            >
              <div className="order-2 flex flex-col justify-start space-y-6 pt-0 z-10">
                <div className="-mb-4 text-7xl leading-none font-bold text-[#A1A1AA] sm:text-8xl lg:-mb-8 lg:text-[10rem]">
                  02
                </div>
                <div>
                  <TypewriterEffect
                    words={ftcTypewriterWords}
                    className="mb-6 justify-start bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold sm:text-4xl lg:text-5xl"
                  />
                  <div
                    className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-lg lg:text-xl`}
                  >
                    <LinkPreview
                      url="https://www.firstinspires.org/programs/ftc/"
                      className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                      width={170}
                      height={105}
                      quality={60}
                    >
                      FIRST Tech Challenge (FTC)
                    </LinkPreview>{" "}
                    challenges teams to build robots using a modular kit system
                    while emphasizing innovation, outreach, and engineering
                    documentation. Teams compete in alliances and present their
                    design process to judges alongside on-field performance.
                  </div>
                  <div className="mt-6">
                    <Link href="/#ftc" className="inline-block">
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        className="bg-[#0B0B0B] text-[#E4E4E7] px-6 py-2.5 text-base lg:text-lg"
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
                className="order-1 flex justify-center pt-8 sm:pt-12 md:justify-start md:pt-20 lg:pt-28"
              >
                <CometCard
                  rotateDepth={24}
                  translateDepth={24}
                  className="rounded-full overflow-visible"
                >
                  <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <Image
                      src="/Images/FTC.jpg"
                      alt="First Tech Competition"
                      width={320}
                      height={320}
                      className="relative z-10 h-44 w-44 rounded-full object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>

            <div
              id="outreach"
              className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-10"
            >
              <div className="flex flex-col justify-start space-y-6 pt-0">
                <div className="-mb-4 text-7xl leading-none font-bold text-[#A1A1AA] sm:text-8xl lg:-mb-8 lg:text-[10rem]">
                  03
                </div>
                <div>
                  <TypewriterEffect
                    words={outreachTypewriterWords}
                    className="mb-6 w-full justify-start bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold sm:text-4xl lg:text-5xl"
                  />
                  <p
                    className={`${ibmPlexMono.className} text-[#A1A1AA] leading-relaxed text-lg lg:text-xl`}
                  >
                    Placeholder
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0 }}
                viewport={{ once: true }}
                className="flex justify-center pt-8 sm:pt-12 md:justify-end md:pt-20 lg:pt-28"
              >
                <CometCard
                  rotateDepth={24}
                  translateDepth={24}
                  className="rounded-full overflow-visible"
                >
                  <div className="relative flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-[#111111] ring-1 ring-[#b2c4ff]/30 shadow-[0_0_36px_rgba(178,196,255,0.24)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <Image
                      src="/logo.png"
                      alt="Outreach & Education"
                      width={320}
                      height={320}
                      className="relative z-10 h-44 w-44 rounded-full object-cover sm:h-48 sm:w-48 lg:h-56 lg:w-56"
                    />
                  </div>
                </CometCard>
              </motion.div>
            </div>
          </motion.div>

          <HeroHighlight
            containerClassName="relative z-30 mt-0 h-[18rem] lg:h-[18rem] bg-[#0A0A0A]"
            className="relative z-30 w-full space-y-6 bg-transparent px-4 pt-8 sm:px-6 lg:px-10"
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
              viewport={{ once: true }}
              className="mx-auto max-w-4xl space-y-8 bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text px-2 text-center text-4xl leading-relaxed font-bold text-transparent sm:px-4 sm:text-5xl lg:text-7xl lg:leading-snug"
            >
              Want to sponsor us?
            </motion.h1>
            <Link href="/sponsors" className="hidden lg:flex">
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="flex w-full flex-col items-center justify-center gap-y-1 text-3xl font-bold text-blue-400 lg:text-4xl"
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
                  className="h-1 w-64 bg-blue-400 lg:w-96"
                ></motion.div>
              </motion.div>
            </Link>
            <Link href="/sponsors" className="lg:hidden">
              <div className="text-center text-2xl font-bold text-blue-400 sm:text-3xl">
                Explore Sponsorship Opportunities
              </div>
            </Link>
          </HeroHighlight>

          <footer className="relative z-30 w-full bg-[#0B0B0D] border-t border-zinc-800/70">
            <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:py-5">
              <div className="md:flex md:justify-between">
                <div className="mb-4 md:mb-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      className="me-3 h-auto w-auto object-contain"
                      width={41}
                      height={33}
                      alt="MXR Logo"
                    />
                    <span className="self-center text-lg font-semibold text-[#E4E4E7] sm:text-xl lg:text-2xl">
                      Milpitas Xtreme Robotics
                    </span>
                  </Link>
                </div>
                <div>
                  <ul
                    className={`${ibmPlexMono.className} flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap pb-1 text-base font-medium text-[#D4D4D8] sm:gap-5`}
                  >
                    <li className="shrink-0">
                      <LinkPreview
                        url="/about-us"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/Images/ClubPicture.png"
                      >
                        About
                      </LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview
                        url="/#vex"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/Images/vex.png"
                        previewClassName="scale-125"
                      >
                        VEX
                      </LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview
                        url="/#ftc"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/Images/FTC.jpg"
                      >
                        FTC
                      </LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview
                        url="/#outreach"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/logo.png"
                      >
                        Outreach
                      </LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview
                        url="/sponsors"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/team.png"
                      >
                        Sponsors
                      </LinkPreview>
                    </li>
                    <li className="shrink-0">
                      <LinkPreview
                        url="/#blog"
                        className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                        width={170}
                        height={105}
                        isStatic
                        imageSrc="/logo.png"
                      >
                        Blog
                      </LinkPreview>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-4 border-zinc-700/80 sm:mx-auto lg:my-5" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span
                  className={`${ibmPlexMono.className} text-base text-[#A1A1AA] sm:text-center`}
                >
                  © 2026 Milpitas Xtreme Robotics
                </span>
                <div className="mt-2 flex sm:mt-0 sm:justify-center">
                  <a
                    href="https://www.instagram.com/milpitasxrobotics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4"
                    aria-label="Instagram"
                  >
                    <InstagramLogoIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://discord.gg/MZYKRq3cvw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4"
                    aria-label="Discord"
                  >
                    <DiscordLogoIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@MilpitasXtremeRobotics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4"
                    aria-label="YouTube"
                  >
                    <VideoIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/milpitas-xtreme-robotics/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4"
                    aria-label="LinkedIn"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/milpitasxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9CA3AF] hover:text-[#E4E4E7] ms-4"
                    aria-label="GitHub"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
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
