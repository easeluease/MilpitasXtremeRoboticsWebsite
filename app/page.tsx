"use client";

import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

import { MoveRightIcon } from "lucide-react";

import { motion, LayoutGroup } from "framer-motion";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const blogPosts = [
  {
    quote:
      "yesterday's comp was great, we got last place and 1095r shat on our robot and now theres 1095r shit all over our shitty bot",
    name: "Milpitas Xtreme Robotics",
    title: "4/20/69",
  },
  {
    quote:
      "yo:gurt gurt:yo what you are doing is really smart but also really dangerous gurt: sybau",
    name: "Justin Chung",
    title: "4/13/25",
  },
  {
    quote: "yo lwk ts pmo icl bru 💔🥀🪫",
    name: "Oilver Ma",
    title: "4/13/25",
  },
  {
    quote:
      "don't try to play the fool with me, no it's very bad",
    name: "Sriram Sivakumar",
    title: "4/13/25",
  },
  {
    quote:
      "i am devexon mamixon",
    name: "Devesh Mamidi",
    title: "4/13/25",
  },
];

const typeWriterWords = [
  {
    text: "Who",
  },
  {
    text: "are",
  },
  {
    text: "we?",
  },
];

const images = [
  "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",
  "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",
  "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",
  "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",
  "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",
    "https://www.onshape.com/global-assets/img/updated-images/24991/new-onshape-logo-2020.jpg",
  "https://eits.uga.edu/_resources/files/images/Autodesk1.png",
  "https://d1kvkzjpuym02z.cloudfront.net/5f638bb20783a00859ff4082.jpg?Expires=2093792774&Signature=Kg6iX3PG4APKUSaXCCjLMzzTC0f5s4nXWfsN3agz6LbYcEKXKjBHkIT2ozcywlbdh4znnVvrEAbNFb2umwOswim~YpeCheVmnwCot4cGK3n7sBz8AyZ2jgenJcHt8FaMEelHwJPq66n-GOG3mIoDjpC-1LExPTIxBpApvXiVgfs_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
  "https://robotics.nasa.gov/wp-content/uploads/2020/05/vex-robotics-logo.png",
  "https://yt3.googleusercontent.com/e3ZNO3yQ24kX_LDtvWPqfv3vBOD4U_yqvyoxUnLCTmuJMnD2VnvYxQneBPpt2HOAxih8a7I9=s900-c-k-c0x00ffffff-no-rj",

]

export default function Home() {
  return (
    <main className="pt-10 flex min-h-screen flex-col items-center justify-between">
      <BackgroundLines>
        <div className="z-100 inset-0 flex items-center justify-center text-white lg:pt-36 px-10 lg:px-40 text-center">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="basis-3/5 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="font-bold text-6xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40">
                Milpitas Xtreme Robotics
              </motion.div>
              <CardSpotlight className="mt-8 lg:mt-24 lg:w-2/3">
                <div className={ibmPlexMono.className}>
                  <div className="relative z-20">
                    <p className="text-3xl font-bold pb-4">
                      Hello World!
                    </p>
                    <p>
                      We are a student-run robotics club from Milpitas High School. We compete in VEX, FTC, and looking to compete in FRC in the future. We are a group of diverse, fun, and passionate students who love STEM and robotics. ✨
                    </p>
                  </div>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </div>
      </BackgroundLines>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-10 lg:px-40 pb-24 lg:pb-48 w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <InfiniteMovingCards
              items={blogPosts}
              direction="right"
              speed="slow"
            />
          </motion.div>
          <CardSpotlight>
            <div className={ibmPlexMono.className}>
              <div className="relative z-20 text-xs">
                <TypewriterEffect words={typeWriterWords} className="pb-8" />
                <p className="pb-4">
                  We are a robotics club that competes in VEX and FTC. Around 15 years old now, our club takes pride in teamwork and problem solving. We have competed in VEX for over 5 years and have made it to states and worlds. We recently expanded to FTC and included many new members. We are looking to expand to FRC in the future.
                </p>
                <p>
                  Apart from competitive robotics, we also have many outreach programs. We teach SPIKE lego robotics to john sinnot elementery school students. We have also founded the M.A.R.S. program, which is robotics workshop for elementary school students across MUSD. We also enhance our school spirit by participating in school events and activities. We recently created a ferris wheel for the school's homecoming event. For more details, visit our blog!
                </p>
              </div>
            </div>
          </CardSpotlight>
      </div>
      <div className="flex flex-col items-center justify-center pb-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="font-bold text-6xl lg:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/40"
        >
          Sponsors
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto my-10 max-w-screen lg:max-w-7xl rounded-3xl p-2 ring-1 ring-neutral-700/10 bg-neutral-800"
        >
          <ThreeDMarquee images={images} />
        </motion.div>
      </div>
      <HeroHighlight className="px-10 space-y-8">
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
          className="space-y-12 text-[28px] lg:text-7xl px-4 font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <Highlight className="text-white">
            Want to sponsor us?
          </Highlight>
        </motion.h1>
        {/* desktop prospectus link */}
        <Link href="/prospectus.pdf" className="hidden lg:flex">
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="flex flex-col gap-y-1 text-4xl text-blue-400 font-bold w-full items-center justify-center"
          >
              <div className="flex flex-row gap-x-4">
                <motion.div
                  variants={{
                    rest: { x: -50 },
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 1, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <MoveRightIcon size={36} />
                </motion.div>
                View our sponsors prospectus
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
        {/* mobile prospectus link */}
        <Link href="/prospectus.pdf" className="lg:hidden">
          <div className="text-blue-400 text-xl font-bold text-center">
            View our sponsors prospectus
          </div>
        </Link>
      </HeroHighlight>
      {/* desktop footer */}
      <div className="hidden border-t-2 border-neutral-800 bg-neutral-900 w-full lg:flex flex-row items-start justify-center py-8 px-40">
        <div className="basis-1/4 flex flex-col space-y-8">
          <div className="flex flex-row items-center justify-start space-x-4">
            <Image className="rounded-xl w-1/12" src="/logo.png" width={500} height={500} alt="logo"/>
            <div className="font-bold text-lg">Milpitas Xtreme Robotics</div>
          </div>
          <div className="w-full flex flex-col space-y-0">
            <div className="text-md">© 2025 Milpitas Xtreme Robotics</div>
            <div className="text-md">All rights reserved</div>
            <div className="text-md">Made with ❤️ and 🧔🏽‍♀️</div>
          </div>
        </div>
        <div className="basis-3/4 font-bold flex flex-row space-x-12 items-center justify-start">
          <Link href="#home" className="text-lg">Home</Link>
          <Link href="#vex" className="text-lg">VEX</Link>
          <Link href="#ftc" className="text-lg">FTC</Link>
          <Link href="#frc" className="text-lg">FRC</Link>
        </div>
      </div>
      {/* mobile footer */}
      <div className="lg:hidden border-t-2 border-neutral-800 bg-neutral-900 w-full flex flex-col space-y-4 items-start justify-center py-8 px-12">
        <div className="font-bold text-lg">Milpitas Xtreme Robotics</div>
        <div className="w-full flex flex-col space-y-0">
          <div className="text-md">© 2025 Milpitas Xtreme Robotics</div>
          <div className="text-md">All rights reserved</div>
          <div className="text-md">Made with ❤️ and 🧔🏽‍♀️</div>
        </div>
        <div className="font-bold flex flex-row space-x-12 items-center justify-start">
          <Link href="#home" className="text-lg">Home</Link>
          <Link href="#vex" className="text-lg">VEX</Link>
          <Link href="#ftc" className="text-lg">FTC</Link>
          <Link href="#frc" className="text-lg">FRC</Link>
        </div>
      </div>
    </main>
  );
}
