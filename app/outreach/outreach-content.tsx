"use client";

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { motion } from "framer-motion";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CometCard } from "@/components/ui/comet-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const marsWords = [
  {
    text: "MARS",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const sinnottWords = [
  {
    text: "Sinnott",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Classes",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const marsHighlights = [
  "Hands-on STEM workshops led by MXR mentors.",
  "Students rotate through coding, circuits, and design activities.",
  "Seasonal one-day sessions and a longer summer format.",
];

const sinnottHighlights = [
  "Guided robotics classes for elementary students.",
  "Grade-based groups with hands-on builds and coding.",
  "Mentor support from start to finish of each class block.",
];

export default function OutreachPage() {
  return (
    <div className="-mt-20 w-full bg-[#0A0A0A] text-white">
      <section className="relative h-screen w-full overflow-hidden -mb-px">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[1px] scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center sm:inset-auto sm:bottom-8 sm:left-6 sm:block sm:px-0 sm:text-left lg:bottom-14 lg:left-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h1 className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight pb-1 text-transparent sm:text-5xl lg:text-7xl">
              Outreach
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col"
          >
            <TypewriterEffect
              words={marsWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
            <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-300 sm:text-base`}>
              MARS introduces students to engineering, coding, and science through
              hands-on projects. 
            </p>
            <ul className="mt-6 space-y-3">
              {marsHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#b2c4ff]" />
                  <span className={`${ibmPlexMono.className} text-sm leading-6 text-zinc-300`}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/mars" className="inline-block">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-[#0B0B0B] px-6 py-3 text-sm font-medium text-[#E4E4E7] sm:text-base"
                >
                  <span>Learn More</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <CometCard
              rotateDepth={12}
              translateDepth={12}
              hoverScale={1.03}
              className="w-full"
              cardClassName="w-full rounded-[1.7rem]"
            >
              <BackgroundGradient
                containerClassName="w-full rounded-[1.7rem]"
                className="rounded-[1.7rem] bg-[#06080f]/95 p-2"
              >
                <Image
                  src="/Images/MARS/IMG_5969.jpg"
                  alt="MARS workshop in classroom"
                  width={2048}
                  height={2048}
                  className="h-72 w-full rounded-[1.35rem] object-cover lg:h-112"
                />
              </BackgroundGradient>
            </CometCard>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col"
          >
            <TypewriterEffect
              words={sinnottWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
            <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-300 sm:text-base`}>
              Sinnott Classes focus on classroom robotics with teamwork, building,
              and beginner-friendly coding.
            </p>
            <ul className="mt-6 space-y-3">
              {sinnottHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#b2c4ff]" />
                  <span className={`${ibmPlexMono.className} text-sm leading-6 text-zinc-300`}>
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/sinnott-robotics" className="inline-block">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-[#0B0B0B] px-6 py-3 text-sm font-medium text-[#E4E4E7] sm:text-base"
                >
                  <span>Learn More</span>
                </HoverBorderGradient>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <CometCard
              rotateDepth={12}
              translateDepth={12}
              hoverScale={1.03}
              className="w-full"
              cardClassName="w-full rounded-[1.7rem]"
            >
              <BackgroundGradient
                containerClassName="w-full rounded-[1.7rem]"
                className="rounded-[1.7rem] bg-[#06080f]/95 p-2"
              >
                <Image
                  src="/Images/Outreach/sinnott-team.png"
                  alt="Sinnott robotics class"
                  width={800}
                  height={1067}
                  className="h-72 w-full rounded-[1.35rem] object-cover object-top lg:h-112"
                />
              </BackgroundGradient>
            </CometCard>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-30 w-full border-t border-zinc-800/70 bg-[#0B0B0D] p-5">
        <div className="mx-auto w-full max-w-7xl">
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
                <span className="self-center text-base font-semibold text-[#E4E4E7] sm:text-lg lg:text-xl">
                  Milpitas Xtreme Robotics
                </span>
              </Link>
            </div>
            <div>
              <ul
                className={`${ibmPlexMono.className} flex flex-nowrap items-center gap-4 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-[#D4D4D8] sm:gap-5`}
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
                    url="/vex"
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
                    url="/ftc"
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
                    url="/programs"
                    className="text-[#D4D4D8] hover:text-[#E4E4E7]"
                    width={170}
                    height={105}
                    isStatic
                    imageSrc="/logo.png"
                  >
                    Programs
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
                    url="/wip"
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
            <span className={`${ibmPlexMono.className} text-sm text-[#A1A1AA] sm:text-center`}>
              Copyright 2026 Milpitas Xtreme Robotics
            </span>
            <div className="mt-2 flex sm:mt-0 sm:justify-center">
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
        </div>
      </footer> 
    </div>
  );
}
