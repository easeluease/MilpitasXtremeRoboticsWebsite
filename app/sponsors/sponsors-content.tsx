'use client';

import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
	DiscordLogoIcon,
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import { LinkPreview } from "@/components/ui/link-preview";

const ibmPlexMono = IBM_Plex_Mono({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin"],
});

const headerWords = [
	{
		text: "Current",
		className: "supports-[background-clip:text]:text-transparent",
	},
	{
		text: "Sponsors",
		className: "supports-[background-clip:text]:text-transparent",
	},
];

type SponsorCard = {
	name: string;
	tier: "platinum" | "gold" | "silver";
	description: string;
	website?: string;
	logo?: string;
};

const sponsorData: SponsorCard[] = [];

const sponsorTiers = [
	{
		name: "Platinum Sponsors",
		tier: "platinum" as const,
	},
	{
		name: "Gold Sponsors",
		tier: "gold" as const,
	},
	{
		name: "Silver Sponsors",
		tier: "silver" as const,
	},
];

export default function SponsorsPage() {
	const [active, setActive] = useState<SponsorCard | null>(null);
	const ref = useRef<HTMLDivElement>(null);

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

	const sponsorsByTier = sponsorTiers.map(tierInfo => ({
		...tierInfo,
		sponsors: sponsorData.filter(s => s.tier === tierInfo.tier),
	}));

	return (
		<div className="-mt-20 w-full bg-[#0A0A0A]">
			<section className="relative h-screen w-full overflow-hidden -mb-px">
				<div
					aria-hidden
					className="absolute inset-0 bg-[url('/Images/ClubPicture.png')] bg-cover bg-center blur-[1px] scale-105"
				></div>
				<div aria-hidden className="absolute inset-0 bg-black/55"></div>

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
						className="fixed inset-0 z-50 grid place-items-center p-3 sm:p-4"
					>
						<BackgroundGradient containerClassName="w-full max-w-3xl rounded-3xl">
							<motion.div
								ref={ref}
								initial={{ opacity: 0, scale: 0.96, y: 10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.98, y: 6 }}
								transition={{ duration: 0.24, ease: "easeOut" }}
								className="flex h-fit max-h-[85vh] w-full flex-col overflow-y-auto rounded-3xl bg-zinc-950/95 md:max-h-[unset] md:overflow-visible md:flex-row"
							>
								<motion.div className="relative h-56 shrink-0 sm:h-64 md:h-auto md:w-72 md:min-h-80">
									<Image
										src={active.logo || "/logo.png"}
										alt={active.name}
										fill
										sizes="(min-width: 768px) 18rem, 100vw"
										className="object-cover object-center"
									/>
								</motion.div>

								<div className={`${ibmPlexMono.className} flex-1 border-t border-zinc-800/70 p-4 sm:p-6 md:border-l md:border-t-0`}>
									<motion.h3
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2, delay: 0.08, ease: "easeOut" }}
										className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl"
									>
										{active.name}
									</motion.h3>
									<motion.p
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.2, delay: 0.12, ease: "easeOut" }}
										className="mt-1 text-lg text-zinc-300 sm:text-xl capitalize"
									>
										{active.tier} Sponsor
									</motion.p>
									{active.website && (
										<motion.a
											initial={{ opacity: 0, y: 6 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.2, delay: 0.14, ease: "easeOut" }}
											href={active.website}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-1 inline-block text-sm text-zinc-400 underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
										>
											Visit Website
										</motion.a>
									)}
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.22, delay: 0.16, ease: "easeOut" }}
										className="mt-4 border-t border-zinc-800/80 pt-4 text-sm leading-7 text-zinc-400 lg:text-base"
									>
										<p>{active.description}</p>
									</motion.div>
								</div>
							</motion.div>
						</BackgroundGradient>
					</motion.div>
				) : null}
			</AnimatePresence>

			<section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
				<div className="mx-auto w-full max-w-6xl">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center mb-16">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h2 className="mb-6 bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-3xl font-bold leading-tight tracking-tight text-transparent lg:text-5xl">
								Become a Sponsor and Support Our Work
							</h2>
							<p className={`${ibmPlexMono.className} mb-8 text-sm leading-7 text-zinc-300 lg:text-base`}>
								Milpitas Xtreme Robotics is a student-led team competing in VEX and FTC robotics at
								Milpitas High School. We design, build, and program competition robots entirely from
								the ground up — and your support makes it possible. Sponsorships fund hardware,
								competition fees, travel, and the hands-on engineering education our members carry
								into their careers.
							</p>
							<p className={`${ibmPlexMono.className} text-sm leading-7 text-zinc-300 lg:text-base`}>
								If you want to sponsor or have any questions, email{' '}
								<a href="mailto:mxrmhs@gmail.com" className="underline underline-offset-2 hover:text-zinc-200 transition-colors">
									mxrmhs@gmail.com
								</a>
							</p>
							<div className="mt-6">
								<a
									href="/sponsorship-prospectus.pdf"
									download
									className="inline-block"
								>
									<HoverBorderGradient
										containerClassName="rounded-full"
										className="bg-[#0B0B0B] text-[#E4E4E7] px-6 py-3 font-medium lg:text-lg"
									>
										<span>Download Sponsorship Packet</span>
									</HoverBorderGradient>
								</a>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="w-full"
						>
							<BackgroundGradient containerClassName="rounded-lg">
								<div className="rounded-lg overflow-hidden bg-zinc-950/90" style={{ aspectRatio: '8.5/11' }}>
									<iframe
										src="/sponsorship-prospectus.pdf#toolbar=0&navpanes=0&view=FitH"
										className="w-full h-full border-0"
										title="2025-2026 Sponsorship Prospectus"
									/>
								</div>
							</BackgroundGradient>
							<p className={`${ibmPlexMono.className} mt-4 text-center text-sm text-zinc-400`}>
								2025-2026 Sponsorship Prospectus
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
				<div className="mx-auto w-full max-w-6xl">
					<div className="mb-16">
						<div className="mb-12">
							<TypewriterEffect
								words={[
									{ text: "Sponsorship", className: "supports-[background-clip:text]:text-transparent" },
									{ text: "Tiers", className: "supports-[background-clip:text]:text-transparent" },
								]}
								className="mb-5 inline-block w-fit mx-auto bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-center text-4xl font-bold leading-[1.15] pb-2 lg:text-5xl text-transparent justify-center"
							/>
						</div>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
							{/* Silver Tier */}
							<BackgroundGradient containerClassName="rounded-2xl">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true }}
									className="rounded-2xl bg-black p-8 min-h-96"
								>
									<h3 className="mb-2 text-2xl font-bold text-zinc-200">Silver</h3>
									<p className={`${ibmPlexMono.className} mb-6 text-sm text-zinc-400`}>$499+</p>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Logo on Website (Small)</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Distribute Swag</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Meeting Intro</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Company Intro (1 min)</span>
										</li>
									</ul>
								</motion.div>
							</BackgroundGradient>

							{/* Gold Tier */}
							<BackgroundGradient containerClassName="rounded-2xl">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true }}
									className="rounded-2xl bg-black p-8 min-h-96"
								>
									<h3 className="mb-2 text-2xl font-bold text-zinc-200">Gold</h3>
									<p className={`${ibmPlexMono.className} mb-6 text-sm text-zinc-400`}>$1,000+</p>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">All Silver Benefits</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Company Visit</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Logo on Shirts</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Company Intro (2 min)</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Social Media Tags</span>
										</li>
									</ul>
								</motion.div>
							</BackgroundGradient>

							{/* Platinum Tier */}
							<BackgroundGradient containerClassName="rounded-2xl">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true }}
									className="rounded-2xl bg-black p-8 min-h-96"
								>
									<h3 className="mb-2 text-2xl font-bold text-zinc-200">Platinum</h3>
									<p className={`${ibmPlexMono.className} mb-6 text-sm text-zinc-400`}>$3,500+</p>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">All Gold Benefits</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Recruiting Material</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Resume/LinkedIn Access</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Email Club Members</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="font-bold">✓</span>
											<span className="text-sm text-zinc-300">Company Intro (5 min)</span>
										</li>
									</ul>
								</motion.div>
							</BackgroundGradient>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full px-4 py-10 sm:px-6 lg:px-10 lg:py-12">
				<div className="mx-auto w-full max-w-5xl">
					<div className="mb-5">
						<TypewriterEffect
							words={headerWords}
							className="mb-5 inline-block w-fit bg-linear-to-r from-[#b2c4ff] to-white bg-clip-text text-left text-3xl font-bold leading-[1.15] pb-2 lg:text-5xl text-transparent"
						/>
					</div>

					{sponsorsByTier.filter(tierInfo => ['silver', 'gold', 'platinum'].includes(tierInfo.tier)).map((tierInfo, tierIdx) => (
						<div key={`tier-${tierIdx}`} className="mb-10">
							<h2 className="mb-6 text-2xl font-bold text-white lg:text-3xl">
								{tierInfo.name}
							</h2>
							{tierInfo.sponsors.length > 0 ? (
								<ul className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{tierInfo.sponsors.map((sponsor) => (
										<div key={sponsor.name} className="rounded-2xl border border-zinc-700/50 bg-zinc-950/40 p-6 w-full max-w-56">
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
														className="inline-block text-xs text-zinc-300 hover:text-zinc-100 underline underline-offset-2"
													>
														Visit Website
													</a>
												</div>
											)}
										</div>
									))}
								</ul>
							) : (
								<p className={`${ibmPlexMono.className} text-center text-sm text-zinc-400`}>
									Currently, there are no sponsors in this tier.
								</p>
							)}
						</div>
					))}
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
