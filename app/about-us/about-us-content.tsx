"use client";

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import CountUpOnView from "@/components/ui/count-up-on-view";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import {
	DiscordLogoIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	VideoIcon,
} from "@radix-ui/react-icons";

const ibmPlexMono = IBM_Plex_Mono({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const missionHeaderWords = [
	{
		text: "Our",
		className: "text-transparent",
	},
	{
		text: "Mission",
		className: "text-transparent",
	},
];

const storyHeaderWords = [
	{
		text: "Our",
		className: "text-transparent",
	},
	{
		text: "Story",
		className: "text-transparent",
	},
];

const photosHeaderWords = [
	{
		text: "Photos",
		className: "text-transparent",
	},
];

const photoImages = Array.from({ length: 24 }, () => "/logo.png");

export default function AboutUsPage() {
	return (
		<main className="-mt-20 w-full bg-[#0A0A0A]">
			<section className="relative h-screen w-full overflow-hidden -mb-px">
				<div
					aria-hidden
					className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[1px] scale-105"
				></div>
				<div aria-hidden className="absolute inset-0 bg-black/55"></div>

				<div className="absolute bottom-8 left-6 z-10 lg:bottom-14 lg:left-14">
					<motion.div
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.1 }}
						viewport={{ once: true }}
					>
						<h1 className="bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-4xl font-bold leading-none tracking-tight text-transparent sm:text-5xl lg:text-7xl">
							About Us
						</h1>
					</motion.div>
				</div>
			</section>

			<section className="w-full px-6 py-10 lg:px-10 lg:py-12">
				<div className="mx-auto w-full max-w-5xl px-2 py-2 lg:px-4 lg:py-4">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
						<div className="border-zinc-800/70 px-2 lg:border-r lg:px-8">
							<p className={`${ibmPlexMono.className} text-sm text-zinc-400 lg:text-base`}>Years</p>
							<div className="mt-2 text-4xl font-bold text-[#E4E4E7] lg:text-5xl">
								<CountUpOnView end={24} durationMs={1400} />
							</div>
							<p className={`${ibmPlexMono.className} mt-1 text-lg text-zinc-400 lg:text-xl`}>
								Est 2002
							</p>
						</div>

						<div className="border-zinc-800/70 px-2 lg:border-r lg:px-8">
							<p className={`${ibmPlexMono.className} text-sm text-zinc-400 lg:text-base`}>Awards</p>
							<div className="mt-2 text-4xl font-bold text-[#E4E4E7] lg:text-5xl">
								<CountUpOnView end={30} durationMs={1500} suffix="+" />
							</div>
						</div>

						<div className="border-zinc-800/70 px-2 lg:border-r lg:px-8">
							<p className={`${ibmPlexMono.className} text-sm text-zinc-400 lg:text-base`}>Active Members</p>
							<div className="mt-2 text-4xl font-bold text-[#E4E4E7] lg:text-5xl">
								<CountUpOnView end={50} durationMs={1600} suffix="+" />
							</div>
						</div>

						<div className="px-2 lg:px-8">
							<p className={`${ibmPlexMono.className} text-sm text-zinc-400 lg:text-base`}>Events Hosted</p>
							<div className="mt-2 text-4xl font-bold text-[#E4E4E7] lg:text-5xl">
								<CountUpOnView end={3} durationMs={1200} suffix="+" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative mx-auto flex w-full max-w-5xl flex-col gap-18 px-6 pb-20 lg:px-10 lg:pb-24">
				<div>
					<TypewriterEffect
						words={missionHeaderWords}
						className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
					/>
					<p className={`${ibmPlexMono.className} max-w-4xl text-sm leading-7 text-zinc-300 lg:text-base`}>
						Like many robotics clubs, Milpitas Xtreme Robotics aims to give students hands-on
						experiences in engineering, programming, finance, and leadership, as well as
						opportunities in STEM programs. However, we also aim to make an open space where
						members can feel comfortable enough to share their ideas and be themselves.
					</p>
				</div>

				<div>
					<TypewriterEffect
						words={storyHeaderWords}
						className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
					/>
					<p className={`${ibmPlexMono.className} max-w-4xl text-sm leading-7 text-zinc-300 lg:text-base`}>
						In a nutshell, Milpitas Xtreme Robotics is the official robotics club of{" "}
						<LinkPreview
							url="https://mhs.musd.org/"
							className="font-semibold text-zinc-200 underline decoration-zinc-400 underline-offset-4 hover:text-white"
							width={170}
							height={105}
						>
							Milpitas High School
						</LinkPreview>{" "}
						. We provide the students of Milpitas High a chance to discover, create, or
						nurture a passion for what the Silicon Valley is famed for - technology. MXR offer
						our members a chance to use the skills they learn in their classrooms on something
						more tangible. However, we also highly promote certain key concepts in our club;
						productive teamwork with fellow club members, innovation in engineering techniques
						used, and ingenuity in overcoming obstacles. Milpitas Xtreme Robotics encourages
						our members to get off their computers and out of their videos games, and instead
						take a shot at bringing to life our very own creations.
					</p>
				</div>
			</section>

			<section className="w-full px-6 pb-10 pt-2 lg:px-10 lg:pb-14 lg:pt-2">
				<div className="mx-auto flex w-full max-w-5xl flex-col items-center">
					<TypewriterEffect
						words={photosHeaderWords}
						className="mb-3 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-3xl font-bold tracking-tight lg:mb-4 lg:text-5xl"
					/>
					<BackgroundGradient
						containerClassName="mx-auto mt-2 mb-0 w-full max-w-5xl rounded-3xl"
						className="rounded-3xl bg-gray-950/95 p-2"
					>
						<ThreeDMarquee images={photoImages} />
					</BackgroundGradient>
				</div>
			</section>

			<footer className="relative z-30 w-full border-t border-zinc-800/70 bg-[#0B0B0D] p-5">
				<div className="mx-auto w-full max-w-7xl">
					<div className="md:flex md:justify-between">
						<div className="mb-4 md:mb-0">
							<Link href="/" className="flex items-center">
								<Image
									src="/logo.png"
									className="me-3 h-8 w-auto object-contain"
									width={1941}
									height={1564}
									alt="MXR Logo"
								/>
								<span className="self-center whitespace-nowrap text-xl font-semibold text-[#E4E4E7]">
									Milpitas Xtreme Robotics
								</span>
							</Link>
						</div>
						<div>
							<ul
								className={`${ibmPlexMono.className} flex flex-nowrap items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-[#D4D4D8]`}
							>
								<li className="shrink-0">
									<Link href="/about-us" className="hover:text-[#E4E4E7]">
										About
									</Link>
								</li>
								<li className="shrink-0">
									<Link href="/programs/vex" className="hover:text-[#E4E4E7]">
										VEX
									</Link>
								</li>
								<li className="shrink-0">
									<Link href="/programs/ftc" className="hover:text-[#E4E4E7]">
										FTC
									</Link>
								</li>
								<li className="shrink-0">
									<Link href="/outreach" className="hover:text-[#E4E4E7]">
										Outreach
									</Link>
								</li>
								<li className="shrink-0">
									<Link href="/sponsors" className="hover:text-[#E4E4E7]">
										Sponsors
									</Link>
								</li>
								<li className="shrink-0">
									<Link href="/blog" className="hover:text-[#E4E4E7]">
										Blog
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<hr className="my-4 border-zinc-700/80 sm:mx-auto lg:my-5" />
					<div className="sm:flex sm:items-center sm:justify-between">
						<span className={`${ibmPlexMono.className} text-sm text-[#A1A1AA] sm:text-center`}>
							(c) 2026 Milpitas Xtreme Robotics. All Rights Reserved.
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
		</main>
	);
}


