"use client";

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const aboutWords = [
  {
    text: "About",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "MARS",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const picturesWords = [
  {
    text: "Pictures",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const marsPhotos = [
  {
    src: "/Images/MARS/IMG_5969.jpg",
    alt: "MARS classroom workshop",
  },
  {
    src: "/Images/MARS/IMG_3493.jpg",
    alt: "MARS students and families group photo",
  },
  {
    src: "/Images/MARS/Sping_MARS_2025.jpg",
    alt: "MARS outdoor team activity",
  },
];

export default function MarsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPrevious = () => {
    setActiveSlide((prev) => (prev - 1 + marsPhotos.length) % marsPhotos.length);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % marsPhotos.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % marsPhotos.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="-mt-20 w-full bg-[#0A0A0A] text-white">
      <section className="relative h-screen w-full overflow-hidden -mb-px">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[1px] scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-8 left-4 z-10 sm:left-6 lg:bottom-14 lg:left-14">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <h1 className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-4xl font-bold leading-[1.05] tracking-tight pb-1 text-transparent sm:text-5xl lg:text-7xl">
              MARS
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <TypewriterEffect
            words={aboutWords}
            className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
          />
          <p className={`${ibmPlexMono.className} max-w-4xl text-sm leading-7 text-zinc-300 lg:text-base`}>
            MARS (Milpitas Applied Robotics and Science) is MXR&apos;s hands-on STEM
            outreach program for younger students. Kids learn through fun projects in
            robotics, coding, and science, with support from Milpitas Xtreme Robotics
            mentors.
          </p>
          <p className={`${ibmPlexMono.className} mt-4 text-sm leading-7 text-zinc-400`}>
            Summer MARS 2026: <span className="text-zinc-200">Coming soon.</span>
          </p>
          <p className={`${ibmPlexMono.className} mt-2 text-sm leading-7 text-zinc-400`}>
            Questions:{" "}
            <a
              href="mailto:milpitasxtreme.mars@gmail.com"
              className="text-zinc-200 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
            >
              milpitasxtreme.mars@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-10 pb-14 sm:px-6 sm:py-10 lg:px-10 lg:py-12 lg:pb-18">
        <div className="mx-auto w-full max-w-5xl">
          <TypewriterEffect
            words={picturesWords}
            className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
          />

          <div className="relative">
            <BackgroundGradient
              containerClassName="w-full rounded-[1.8rem]"
              className="rounded-[1.8rem] bg-[#06080f]/95 p-2"
            >
              <div className="relative overflow-hidden rounded-[1.45rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={marsPhotos[activeSlide].src}
                    initial={{ opacity: 0.25, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.25, scale: 0.99 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image
                      src={marsPhotos[activeSlide].src}
                      alt={marsPhotos[activeSlide].alt}
                      width={2048}
                      height={2048}
                      className="h-72 w-full object-cover sm:h-84 lg:h-[34rem]"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/55 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </BackgroundGradient>

            <div className="mt-4 flex items-center justify-center gap-2">
              {marsPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    activeSlide === index ? "w-8 bg-[#b2c4ff]" : "w-2.5 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>
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
