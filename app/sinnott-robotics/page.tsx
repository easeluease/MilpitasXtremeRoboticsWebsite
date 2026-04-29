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

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const aboutWords = [
  { text: "What", className: "supports-[background-clip:text]:text-transparent" },
  { text: "Are", className: "supports-[background-clip:text]:text-transparent" },
  { text: "Sinnot", className: "supports-[background-clip:text]:text-transparent" },
  { text: "Classes?", className: "supports-[background-clip:text]:text-transparent" },
];

const classWords = [
  { text: "Class", className: "supports-[background-clip:text]:text-transparent" },
  { text: "Details", className: "supports-[background-clip:text]:text-transparent" },
];

const signupWords = [
  { text: "Sinnott", className: "supports-[background-clip:text]:text-transparent" },
  { text: "Signup", className: "supports-[background-clip:text]:text-transparent" },
];

const classHighlights = [
  "LEGO Education SPIKE Prime robotics with MXR mentors",
  "Two age groups: G4-G6 and G1-G3",
  "Six Saturday sessions with build and coding challenges",
  "Bring a laptop, tablet, or smartphone for programming",
];

export default function SinnottRoboticsPage() {
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
              Sinnott Classes
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <TypewriterEffect
            words={aboutWords}
            className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
          />
          <p className={`${ibmPlexMono.className} max-w-4xl text-sm leading-7 text-zinc-300 lg:text-base`}>
            A community robotics program where MXR mentors guide elementary students through hands-on build, coding, and problem-solving activities.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <TypewriterEffect
              words={classWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
            <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-300 lg:text-base`}>
              Classes are first-come, first-served and split by grade band. Each session mixes short lessons, guided practice, and a final challenge. For the full overview, check the{" "}
              <LinkPreview
                url="https://docs.google.com/presentation/d/1Bw1yTRMgsGvNSxer1LTsTHmG2cnKqMv9qXDhNIFy74Y"
                className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                width={170}
                height={105}
                quality={60}
              >
                slides
              </LinkPreview>{" "}
              and the{" "}
              <LinkPreview
                url="https://www.youtube.com/watch?v=OLxpfwbU2fU"
                className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                width={170}
                height={105}
                quality={60}
              >
                info session video
              </LinkPreview>{" "}
              along with the{" "}
              <LinkPreview
                url="https://www.sinnottpta.org/programs/robotics-club-with-mxr"
                className="text-[#E4E4E7] underline decoration-[#A1A1AA] underline-offset-4"
                width={170}
                height={105}
                quality={60}
              >
                PTA website
              </LinkPreview>.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>Class size: Up to 36 students per class</p>
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>Format: First-come, first-served signup</p>
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>G4-G6: 2:30 PM - 4:00 PM</p>
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>G1-G3: 4:15 PM - 5:45 PM</p>
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>Typical schedule: 6 Saturday sessions</p>
              <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>Suggested donation: $40 minimum</p>
            </div>
            <ul className="mt-6 space-y-3">
              {classHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#b2c4ff]" />
                  <span className={`${ibmPlexMono.className} text-sm leading-6 text-zinc-300`}>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2">
              <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-400`}>
                Resources:{" "}
                <a
                  href="https://docs.google.com/presentation/d/1Bw1yTRMgsGvNSxer1LTsTHmG2cnKqMv9qXDhNIFy74Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
                >
                  Program Slides
                </a>
              </p>
              <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-400`}>
                Reference page:{" "}
                <a
                  href="https://www.sinnottpta.org/programs/robotics-club-with-mxr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
                >
                  Sinnott PTA Robotics Club with MXR
                </a>
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70">
            <div className="aspect-4/3 w-full">
              <iframe
                src="https://docs.google.com/presentation/d/1Bw1yTRMgsGvNSxer1LTsTHmG2cnKqMv9qXDhNIFy74Y/embed?start=false&loop=false&delayms=3000"
                title="Sinnott PTA Robotics Slides"
                className="h-full w-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0A0A0A] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="mb-8 bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-3xl font-bold leading-[1.15] text-transparent lg:text-4xl">
            Info Session Video
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-black">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/OLxpfwbU2fU"
              title="2025 - 2026 Sinnott PTA Robotics Info Session"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="signup" className="w-full bg-[#0A0A0A] px-4 py-10 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <TypewriterEffect
            words={signupWords}
            className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
          />
          <p className={`${ibmPlexMono.className} max-w-4xl text-sm leading-7 text-zinc-300 lg:text-base`}>
            No more classes are available for this school year. Next available classes are expected around Fall 2026.
          </p>
          <div className="mt-6">
            <a
              href="https://www.sinnottpta.org/programs/robotics-club-with-mxr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="bg-[#0B0B0B] px-6 py-3 text-sm font-medium text-[#E4E4E7] sm:text-base"
              >
                <span>Sinnott Sign Up</span>
              </HoverBorderGradient>
            </a>
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
                  <LinkPreview url="/about-us" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/ClubPicture.png">
                    About
                  </LinkPreview>
                </li>
                <li className="shrink-0">
                  <LinkPreview url="/vex" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/vex.png" previewClassName="scale-125">
                    VEX
                  </LinkPreview>
                </li>
                <li className="shrink-0">
                  <LinkPreview url="/ftc" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/Images/FTC.jpg">
                    FTC
                  </LinkPreview>
                </li>
                <li className="shrink-0">
                  <LinkPreview url="/outreach" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/logo.png">
                    Outreach
                  </LinkPreview>
                </li>
                <li className="shrink-0">
                  <LinkPreview url="/sponsors" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/team.png">
                    Sponsors
                  </LinkPreview>
                </li>
                <li className="shrink-0">
                  <LinkPreview url="/wip" className="text-[#D4D4D8] hover:text-[#E4E4E7]" width={170} height={105} isStatic imageSrc="/logo.png">
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
              <a href="https://www.instagram.com/milpitasxrobotics/" target="_blank" rel="noopener noreferrer" className="ms-4 text-[#9CA3AF] transition hover:text-[#E4E4E7]" aria-label="Instagram">
                <InstagramLogoIcon className="h-4 w-4" />
              </a>
              <a href="https://discord.gg/MZYKRq3cvw" target="_blank" rel="noopener noreferrer" className="ms-4 text-[#9CA3AF] transition hover:text-[#E4E4E7]" aria-label="Discord">
                <DiscordLogoIcon className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@MilpitasXtremeRobotics" target="_blank" rel="noopener noreferrer" className="ms-4 text-[#9CA3AF] transition hover:text-[#E4E4E7]" aria-label="YouTube">
                <VideoIcon className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/milpitas-xtreme-robotics/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="ms-4 text-[#9CA3AF] transition hover:text-[#E4E4E7]" aria-label="LinkedIn">
                <LinkedInLogoIcon className="h-4 w-4" />
              </a>
              <a href="https://github.com/milpitasxr" target="_blank" rel="noopener noreferrer" className="ms-4 text-[#9CA3AF] transition hover:text-[#E4E4E7]" aria-label="GitHub">
                <GitHubLogoIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
