"use client";

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useId, useRef, useEffect } from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useOutsideClick } from "@/hooks/use-outside-click";
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

const coreHeaderWords = [
  {
    text: "Current",
		className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Student",
		className: "supports-[background-clip:text]:text-transparent",
  },
  {
    text: "Leadership",
		className: "supports-[background-clip:text]:text-transparent",
  },
];

type OfficerCard = {
	title: string;
	name: string;
	email: string;
	year: "2025-2026" | "2024-2025" | "2023-2024";
	grade?: "Sophomore" | "Junior" | "Senior" | "Freshman";
	bio?: string;
};

const coreFourData: OfficerCard[] = [
  { 
    title: "President", 
    name: "Justin Chung", 
		email: "jc90031@student.musd.org",
		year: "2025-2026",
		bio: "Justin helps set the vision for MXR and keeps every team aligned on long-term goals, outreach, and competition readiness."
  },
  { 
    title: "Vice President", 
    name: "Sriram Sivakumar", 
		email: "ss107060@student.musd.org",
		year: "2025-2026",
		bio: "Sriram supports day-to-day operations across subteams and makes sure projects keep moving when timelines get tight."
  },
  { 
    title: "Secretary", 
    name: "Diyaan Zinjuwadia", 
		email: "dz91956@student.musd.org",
		year: "2025-2026",
		bio: "Diyaan keeps meetings organized, tracks important updates, and helps the team stay connected and informed."
  },
	{ 
		title: "Treasurer", 
		name: "Ryan Stanley", 
		email: "rs95957@student.musd.org",
		year: "2025-2026",
		bio: "Ryan manages budgets, planning, and resource requests so teams have what they need for builds, events, and travel."
	},
];

const programLeadsData: OfficerCard[] = [
	{
		title: "Fundraising",
		name: "Moksh Joshi",
		email: "mj98473@student.musd.org",
		year: "2025-2026",
		grade: "Sophomore",
		bio: "Moksh leads fundraising efforts and partnerships to support team projects, travel, and outreach throughout the year.",
	},
	{
		title: "Publicist",
		name: "Aarya Borkar",
		email: "ab104066@student.musd.org",
		year: "2025-2026",
		grade: "Sophomore",
		bio: "Aarya handles club communications and social media, helping MXR share milestones, events, and opportunities with the community.",
	},
	{
		title: "VEX Lead",
		name: "Ivan Petrenko",
		email: "ip90071@student.musd.org",
		year: "2025-2026",
		grade: "Junior",
		bio: "Ivan guides the VEX team through strategy, build decisions, and iteration so students can improve quickly between events.",
	},
	{
		title: "FTC Lead",
		name: "Arnav Gupta",
		email: "ag91943@student.musd.org",
		year: "2025-2026",
		grade: "Sophomore",
		bio: "Arnav leads FTC planning and execution, coordinating design, programming, and testing to keep the team competition-ready.",
	},
	{
		title: "Mars Leads",
		name: "Aarohi Kulkarni",
		email: "ak106736@student.musd.org",
		year: "2025-2026",
		grade: "Junior",
		bio: "Aarohi helps lead Mars projects by mentoring members and balancing technical progress with strong team collaboration.",
	},
	{
		title: "Mars Leads",
		name: "Shiv Anga",
		email: "sa105094@student.musd.org",
		year: "2025-2026",
		grade: "Junior",
		bio: "Shiv co-leads Mars initiatives and focuses on reliable execution, helping the team turn ideas into polished results.",
	},
];

export default function AboutUsPage() {
	const [active, setActive] = useState<OfficerCard | null>(null);
	const [selectedYear, setSelectedYear] = useState<"2025-2026" | "2024-2025" | "2023-2024">("2025-2026");
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);
	const filteredCoreFour = coreFourData.filter((officer) => officer.year === selectedYear);
	const filteredProgramLeads = programLeadsData.filter((officer) => officer.year === selectedYear);

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(null);
			}
		}

		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<div className="-mt-20 w-full bg-[#0A0A0A]">
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
							Officers
						</h1>
					</motion.div>
				</div>
			</section>

			<AnimatePresence>
				{active ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className="fixed inset-0 z-40 h-full w-full bg-black/55 backdrop-blur-sm"
					/>
				) : null}
			</AnimatePresence>

			<AnimatePresence>
				{active ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.22, ease: "easeOut" }}
						className="fixed inset-0 z-50 grid place-items-center p-4"
					>
						<BackgroundGradient containerClassName="w-full max-w-3xl rounded-3xl">
							<motion.div
								ref={ref}
								initial={{ opacity: 0, scale: 0.96, y: 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.98, y: 6 }}
								transition={{ duration: 0.24, ease: "easeOut" }}
								className="flex h-fit w-full flex-col overflow-hidden rounded-3xl bg-zinc-950/95 md:flex-row"
							>
								<motion.div className="relative h-64 shrink-0 md:h-auto md:w-72 md:min-h-[320px]">
									<Image
										src="/logo.png"
										alt={active.name}
										fill
										sizes="(min-width: 768px) 18rem, 100vw"
										className="object-cover object-center"
									/>
								</motion.div>

								<div className={`${ibmPlexMono.className} flex-1 border-t border-zinc-800/70 p-6 md:border-l md:border-t-0`}>
									<motion.h3
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2, delay: 0.08, ease: "easeOut" }}
										className="text-3xl font-semibold tracking-tight text-zinc-100"
									>
										{active.name}
									</motion.h3>
									<motion.p
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2, delay: 0.12, ease: "easeOut" }}
										className="mt-1 text-xl text-zinc-300"
									>
										{active.title}
									</motion.p>
									<motion.a
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2, delay: 0.14, ease: "easeOut" }}
										href={`mailto:${active.email}`}
										className="mt-1 inline-block text-sm text-zinc-400 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
									>
										{active.email}
									</motion.a>
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.22, delay: 0.16, ease: "easeOut" }}
										className="mt-4 border-t border-zinc-800/80 pt-4 text-sm leading-7 text-zinc-400 lg:text-base"
									>
										<p>
											{`Hi, I'm ${active.name}. I'm the ${active.title} at MXR. ${
												active.grade
													? `I'm currently a ${active.grade}.`
													: `I'm part of the ${active.year} leadership team.`
											}`}
										</p>
										<p className="mt-3">
											{active.bio ?? "I love helping MXR members learn, build, and grow through robotics."}
										</p>
									</motion.div>
								</div>
							</motion.div>
						</BackgroundGradient>
					</motion.div>
				) : null}
			</AnimatePresence>

			<section className="w-full px-6 py-10 lg:px-10 lg:py-12">
				<div className="mx-auto w-full max-w-5xl px-2 py-2 lg:px-4 lg:py-4">
					<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<TypewriterEffect
							words={coreHeaderWords}
							className="inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl"
						/>
						<div className={`${ibmPlexMono.className} sm:pt-1`}>
							<div className="relative inline-block">
								<select
									id="year-selector"
									aria-label="Select school year"
									value={selectedYear}
									onChange={(event) =>
										setSelectedYear(event.target.value as "2025-2026" | "2024-2025" | "2023-2024")
									}
									className="appearance-none rounded-full border border-zinc-700/70 bg-zinc-950/90 px-4 py-2 pr-10 text-sm text-zinc-200 shadow-sm outline-none transition-all hover:border-zinc-500/80 hover:bg-zinc-900/90 focus:border-[#b2c4ff] focus:ring-2 focus:ring-[#b2c4ff]/25"
								>
									<option value="2025-2026">2025-2026</option>
									<option value="2024-2025">2024-2025</option>
									<option value="2023-2024">2023-2024</option>
								</select>
								<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400">
									▾
								</span>
							</div>
						</div>
					</div>
					<div className="pb-3">
						<h2 className={`${ibmPlexMono.className} mb-3 text-xl font-semibold text-zinc-200`}>
							Core Four:
						</h2>
						<ul className="mx-auto grid w-full grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">
					{filteredCoreFour.map((officer) => (
						<BackgroundGradient key={officer.title} containerClassName="self-start rounded-2xl">
							<motion.div
								onClick={() => setActive(officer)}
								className={`${ibmPlexMono.className} flex h-72 w-52 flex-col items-center rounded-2xl bg-zinc-950 p-3 cursor-pointer hover:opacity-90 transition-opacity`}
							>
								<motion.div>
									<Image
										width={136}
										height={136}
										src="/logo.png"
										alt={officer.name}
										className="mb-3 h-32 w-32 rounded-xl object-cover object-center"
									/>
								</motion.div>
								<motion.h3
									className="text-center text-lg font-semibold text-zinc-100"
								>
									{officer.name}
								</motion.h3>
								<motion.p
									className="mt-1 text-center text-sm text-zinc-400 whitespace-nowrap"
								>
									{officer.title}
								</motion.p>
								<a
									href={`mailto:${officer.email}`}
									className="mt-1 block w-full break-words px-1 text-center text-[10px] leading-4 text-zinc-500 underline decoration-zinc-700 underline-offset-2 hover:text-zinc-300"
								>
									{officer.email}
								</a>
							</motion.div>
						</BackgroundGradient>
					))}
						</ul>
						{filteredCoreFour.length === 0 ? (
							<p className={`${ibmPlexMono.className} mt-4 text-center text-sm text-zinc-400`}>
								No core four officers added for {selectedYear} yet.
							</p>
						) : null}

						<h2 className={`${ibmPlexMono.className} mb-3 mt-10 text-xl font-semibold text-zinc-200`}>
							Program Leads:
						</h2>
						<ul className="mx-auto grid w-full grid-cols-1 justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-4">
							{filteredProgramLeads.map((officer, index) => (
								<BackgroundGradient
									key={`${officer.title}-${officer.name}`}
									containerClassName={`${index === 4 ? "lg:col-start-2" : ""} self-start rounded-2xl`}
								>
									<motion.div
										onClick={() => setActive(officer)}
										className={`${ibmPlexMono.className} flex h-72 w-52 flex-col items-center rounded-2xl bg-zinc-950 p-3 cursor-pointer hover:opacity-90 transition-opacity`}
									>
										<motion.div>
											<Image
												width={136}
												height={136}
												src="/logo.png"
												alt={officer.name}
												className="mb-3 h-32 w-32 rounded-xl object-cover object-center"
											/>
										</motion.div>
										<motion.h3 className="text-center text-lg font-semibold text-zinc-100">
											{officer.name}
										</motion.h3>
										<motion.p className="mt-1 text-center text-sm text-zinc-400 whitespace-nowrap">
											{officer.title}
										</motion.p>
										<a
											href={`mailto:${officer.email}`}
											className="mt-1 block w-full break-words px-1 text-center text-[10px] leading-4 text-zinc-500 underline decoration-zinc-700 underline-offset-2 hover:text-zinc-300"
										>
											{officer.email}
										</a>
									</motion.div>
								</BackgroundGradient>
							))}
						</ul>
						{filteredProgramLeads.length === 0 ? (
							<p className={`${ibmPlexMono.className} mt-4 text-center text-sm text-zinc-400`}>
								No program leads added for {selectedYear} yet.
							</p>
						) : null}
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
								<Link href="/#vex" className="hover:text-[#E4E4E7]">
									VEX
								</Link>
							</li>
							<li className="shrink-0">
								<Link href="/#ftc" className="hover:text-[#E4E4E7]">
									FTC
								</Link>
							</li>
							<li className="shrink-0">
								<Link href="/#outreach" className="hover:text-[#E4E4E7]">
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
						© 2026 Milpitas Xtreme Robotics
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



