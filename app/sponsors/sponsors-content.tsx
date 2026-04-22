'use client';

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

type SponsorCard = {
  name: string;
  tier: "platinum" | "gold" | "silver";
  description: string;
  website?: string;
  logo?: string;
};

const sponsorData: SponsorCard[] = [];

const impactWords = [
  {
    text: "Why",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Sponsor",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const tiersWords = [
  {
    text: "Sponsorship",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Tiers",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const currentWords = [
  {
    text: "Current",
    className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Sponsors",
    className: "supports-[background-clip:text]:text-transparent",
  },
];

const sponsorTiers = [
  {
    tier: "silver" as const,
    name: "Silver",
    amount: "$499+",
    benefits: [
      "Logo on website",
      "Distribute swag",
      "Meeting introduction",
      "1-minute company intro",
    ],
  },
  {
    tier: "gold" as const,
    name: "Gold",
    amount: "$1,000+",
    benefits: [
      "Everything in Silver",
      "Company visit",
      "Logo on shirts",
      "2-minute company intro",
      "Social media tags",
    ],
  },
  {
    tier: "platinum" as const,
    name: "Platinum",
    amount: "$3,500+",
    benefits: [
      "Everything in Gold",
      "Recruiting materials shared",
      "Resume and LinkedIn access",
      "Direct email to club members",
      "5-minute company intro",
    ],
  },
];

const currentSponsorTierOrder: SponsorCard["tier"][] = ["platinum", "gold", "silver"];

export default function SponsorsPage() {
  const sponsorsByTier = sponsorTiers.map((tierInfo) => ({
    ...tierInfo,
    sponsors: sponsorData.filter((sponsor) => sponsor.tier === tierInfo.tier),
  }));

  return (
    <div className="-mt-20 w-full bg-[#0A0A0A] text-white">
      <section className="relative isolate h-screen overflow-hidden -mb-px">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[1px] scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-black/55"
        />

        <div className="absolute bottom-8 left-4 z-10 sm:left-6 lg:bottom-14 lg:left-14">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
          >
            <h1 className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-4xl font-bold leading-none tracking-tight text-transparent sm:text-5xl lg:text-7xl">
              Sponsors
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex h-full w-full flex-col"
          >
            <TypewriterEffect
              words={impactWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
            <p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-300 sm:text-base`}>
              We design, build, and program our robots from the ground up. Sponsorship
              helps us compete at a higher level while giving students more access to
              technical learning, collaboration, and outreach.
            </p>

            <p className={`${ibmPlexMono.className} mt-8 text-sm leading-7 text-zinc-400`}>
              Questions or custom partnership ideas? Email{" "}
              <a
                href="mailto:mxrmhs@gmail.com"
                className="text-zinc-200 underline decoration-zinc-500 underline-offset-4 transition hover:text-white"
              >
                mxrmhs@gmail.com
              </a>
              .
            </p>

            <div className="mt-6">
              <a
                href="/sponsorship-prospectus.pdf"
                download
                className="inline-block"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-[#0B0B0B] px-6 py-3 text-sm font-medium text-[#E4E4E7] sm:text-base"
                >
                  <span>Download Sponsorship Packet</span>
                </HoverBorderGradient>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="w-full lg:pt-2"
          >
            <div className="mx-auto w-full sm:w-[88%] lg:w-[74%]">
              <div className="overflow-hidden rounded-2xl bg-zinc-950/80" style={{ aspectRatio: "8.5/11" }}>
                <iframe
                  src="https://drive.google.com/file/d/1IcCQ_JW49XJullFeWmNUpIHQ_tUqLrEx/preview"
                  className="h-full w-full border-0"
                  title="Sponsorship Prospectus"
                />
              </div>
              <p className={`${ibmPlexMono.className} pt-4 text-center text-sm text-zinc-400`}>
                2025-2026 Sponsorship Prospectus
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-8 max-w-2xl">
            <TypewriterEffect
              words={tiersWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-800/80 bg-white/[0.02] p-6"
              >
                <div className="pt-1">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                    <p className={`${ibmPlexMono.className} mt-2 text-sm text-zinc-400`}>
                      {tier.amount}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#b2c4ff]" />
                        <span className={`${ibmPlexMono.className} text-sm leading-6 text-zinc-300`}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="mb-5">
            <TypewriterEffect
              words={currentWords}
              className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
            />
          </div>

          {currentSponsorTierOrder.map((tier) => {
            const tierInfo = sponsorsByTier.find((sponsorTier) => sponsorTier.tier === tier);
            if (!tierInfo) {
              return null;
            }

            return (
              <div key={tierInfo.tier} className="mb-10">
                <h2 className="mb-6 text-2xl font-bold text-white lg:text-3xl">
                  {tierInfo.name} Sponsors
                </h2>
                {tierInfo.sponsors.length > 0 ? (
                  <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {tierInfo.sponsors.map((sponsor) => (
                      <div key={sponsor.name} className="w-full rounded-2xl border border-zinc-700/50 bg-zinc-950/40 p-6">
                        {sponsor.logo && (
                          <div className="mb-4 flex justify-center">
                            <Image
                              width={100}
                              height={100}
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="h-20 w-20 rounded-lg object-cover object-center"
                            />
                          </div>
                        )}
                        <h3 className="text-center text-lg font-semibold text-zinc-100">
                          {sponsor.name}
                        </h3>
                        <p className="mt-2 text-center text-sm text-zinc-400 capitalize">
                          {sponsor.tier} Sponsor
                        </p>
                        {sponsor.website && (
                          <div className="mt-4">
                            <a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block text-xs text-zinc-300 underline underline-offset-2 hover:text-zinc-100"
                            >
                              Visit Website
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </ul>
                ) : (
                  <p className={`${ibmPlexMono.className} text-sm text-zinc-400`}>
                    Currently, there are no sponsors in this tier.
                  </p>
                )}
              </div>
            );
          })}
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
