import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";

import React, { useState, useEffect, useRef, createRef } from "react";

import "animate.css/animate.min.css"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { Link as ScrollLink } from "react-scroll"
import { Parallax } from "react-scroll-parallax"
import { useScrollPercentage } from "react-scroll-percentage"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Home() {
  // HERO FADE
  const [heroRef, heroPercentage] = useScrollPercentage()
  let heroOpacityThreshold = 0.8
  let heroOpacityPreDelta = 0.05
  let heroOpacity = Math.max((heroPercentage > heroOpacityThreshold ? 1 - ((heroPercentage - heroOpacityThreshold) / (1 - heroOpacityThreshold - heroOpacityPreDelta)) : 1).toPrecision(2), 0);

  const heroOpacityStyle = {
    "opacity": heroOpacity,
    "transitionProperty": "opacity",
    "transitionDuration": "0.125s",
    "transitionTimingFunction": "ease-out"
  }

  const navbarOpacityStyle = {
    "opacity": 1 - heroOpacity,
    "transitionProperty": "opacity",
    "transitionDuration": "0.125s",
    "transitionTimingFunction": "ease-out"
  }

  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false)

  return (
    <main className="flex flex-col justify-center items-center w-full h-full min-w-screen min-h-screen bg-zinc-50 scroll-smooth">
      {/* HERO HEADER */}
      <section className="relative flex flex-col justify-center items-center w-full h-full min-w-screen min-h-screen">
        {/* Logo and Title */}
        <div className="absolute z-40 flex flex-col justify-center items-center animate__animated animate__fadeInUp">
          <div className="w-32 h-32 mx-auto mb-4">
            <Image
              src="/media/img/logo_white.png"
              alt="Logo"
              width={1448}
              height={1399}
              layout="responsive"
              loading="eager"
            />
          </div>
          <div className="hidden sm:flex shrink h-16 mb-4">
            <div className="flex grow-0 h-full">
              <Image
                className="object-contain w-full h-full text-zinc-50 stroke-zinc-50"
                src="/media/img/tasctempwordmark_wide.svg"
                alt="TASC Wordmark Wide"
                layout="raw"
                width="652"
                height="67"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex sm:hidden shrink h-24 sm:h-32 mb-4">
            <div className="flex grow-0 h-full">
              <Image
                className="object-contain w-full h-full text-zinc-50 stroke-zinc-50"
                src="/media/img/tasctempwordmark.svg"
                alt="TASC Wordmark"
                layout="raw"
                width="322"
                height="138"
                loading="eager"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-sans font-medium text-xs sm:text-xl text-center text-white uppercase tracking-[0.125em] px-8">
              Taiwanese American Student Club
            </h2>
          </div>
        </div>
        <div ref={heroRef} className="absolute z-30 w-screen h-screen object-fit overflow-hidden select-nones" style={heroOpacityStyle}>
          {/* <Parallax className="relative w-screen h-screen" speed={-40}>
            <Image
              className="scale-110 blur-[4px]"
              src="/media/img/heroimage.jpg"
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
            />
          </Parallax> */}
          <div className="w-full h-full bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300 animate-[gradient-xy_10s_ease_infinite]" />
        </div>
        <div className="absolute z-40 bottom-8">
          {/* MEGA BRAIN ARROW ANIMATION STRAT (FIX LATER LOL) */}
          <ScrollLink
            spy={true}
            duration={1000}
            to={"content"}
            offset={-80}
            smooth={"easeInOutQuint"}
          >
            <span className="flex flex-row justify-center items-centers animate__animated animate__fadeInDown">
              <p className="flex font-sans font-normal text-4xl text-zinc-50 hover:text-zinc-200 animate-colors animate-bounce-x ease-in-out duration-500 cursor-pointer">↓</p>
            </span>
          </ScrollLink>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="flex flex-col w-full justify-center items-center">
        {/* Navbar */}
        <navbar className="sticky top-0 z-10 flex w-full justify-center items-center h-16 sm:h-20 bg-zinc-50" style={navbarOpacityStyle}>
          <div className="flex flex-row justify-start items-center w-full h-full max-w-screen-xl space-x-8 px-4">
            {/* Logo */}
            <div className="flex grow justify-stretch items-center h-12">
              <div className="relative flex h-full aspect-square">
                <Image
                  src="/media/img/logo_black.svg"
                  alt="TASC Logo"
                  layout="fill"
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>
            {/* Navigation Menu Button */}
            <div className="flex sm:hidden shrink h-full justify-end items-center">
              <button type="button" onClick={() => { setMobileNavbarOpen(!mobileNavbarOpen) }}>
                <FontAwesomeIcon className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200" size={"xl"} icon={solid("bars")} />
              </button>
            </div>

            {/* Navigation Menu (screen-sm and larger) */}
            <div className="hidden sm:flex shrink h-full justify-end items-center space-x-8">
              <Link href="/">
                <a className="font-display font-bold text-xl text-zinc-900 hover:text-zinc-600 transition-colors duration-200 uppercase">
                  About
                </a>
              </Link>
              <Link href="/">
                <a className="font-display font-bold text-xl text-zinc-900 hover:text-zinc-600 transition-colors duration-200 uppercase">
                  Events
                </a>
              </Link>
              <Link href="/">
                <a className="font-display font-bold text-xl text-zinc-900 hover:text-zinc-600 transition-colors duration-200 uppercase">
                  Join Us
                </a>
              </Link>
            </div>
          </div>
        </navbar>

        {/* About Us */}
        <section id="content" className="flex justify-center items-start w-full h-full max-w-screen-lg px-8 py-16 md:py-24">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <div className="flex flex-col h-full">
              <h1 className="font-display font-bold text-4xl text-zinc-900 uppercase mb-4 sm:mb-8">
                About Us
              </h1>
              <p className="font-sans font-regular text-2xl sm:text-3xl text-zinc-900 mb-4">
                We are the Taiwanese American Student Club at UIUC. Since our founding in 1992, our mission has been to build a community that <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-medium">appreciates</span> and <span className="bg-gradient-to-r from-red-400 to-amber-500 bg-clip-text text-transparent font-medium">celebrates</span> Taiwanese-American culture.
              </p>
              <div className="flex flex-row w-full">
                <Link
                  href="/"
                >
                  <a className="font-sans font-medium text-2xl sm:text-3xl text-zinc-800 hover:text-zinc-600 hover:cursor-pointer transition-colors duration-200 select-none drag-none">
                    Meet our board ⟶
                    {/* MEGA BRAIN ARROW ANIMATION STRAT (FIX LATER LOL) */}
                    {/* <span className="ml-2">
                      <span className="flex flex-row absolute">
                        <span className="translate-y-[-0.01em]">—</span>
                        <span className="animate-bounce-y ease-in-out -ml-8">⟶</span>
                      </span>
                    </span> */}
                  </a>
                </Link>
              </div>
            </div>
          </AnimationOnScroll>
        </section>

        {/* Board Gallery */}
        <section className="flex flex-col grow space-y-4 w-full max-w-screen-xl px-4">
          <div className="flex flex-col grow sm:flex-row sm:h-[18em] lg:h-[24em] space-y-4 sm:space-x-4 sm:space-y-0">
            <div className="flex grow aspect-[4/3] sm:aspect-auto justify-center items-center bg-gradient-to-r from-red-500 to-red-300">
              <span className="font-display font-bold text-8xl text-zinc-50">1</span>
            </div>
            <div className="flex aspect-[4/3] sm:aspect-square justify-center items-center bg-gradient-to-r from-amber-500 to-amber-300">
              <span className="font-display font-bold text-8xl text-zinc-50">2</span>
            </div>
          </div>
        </section>

        <section id="content" className="flex justify-center items-start w-full h-full max-w-screen-lg px-8 py-16 md:py-24">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
            <div className="flex flex-col h-full">
              <h1 className="font-display font-bold text-4xl text-zinc-900 uppercase mb-4 sm:mb-8">
                Our events
              </h1>
              <p className="font-sans font-regular text-2xl sm:text-3xl text-zinc-900 mb-4">
                TASC organizes and hosts a variety of events throughout the year. IDK y&rsquo;all gotta help me out here. I suck at writing LMAO. Something mentioning all the biggest events we have.
              </p>
              <div className="flex flex-row w-full">
                <Link
                  href="/"
                >
                  <a className="flex shrink font-sans font-medium text-2xl sm:text-3xl text-zinc-800 hover:text-zinc-600 hover:cursor-pointer transition-colors duration-200 select-none drag-none">
                    See our events ⟶
                  </a>
                </Link>
              </div>
            </div>
          </AnimationOnScroll>
        </section>

        {/* Board Gallery */}
        <section className="flex flex-col grow space-y-4 w-full max-w-screen-xl px-4">
          <div className="flex flex-col grow sm:flex-row sm:h-[18em] lg:h-[24em] space-y-4 sm:space-x-4 sm:space-y-0">
            <div className="flex grow aspect-[4/3] sm:aspect-auto justify-center items-center bg-gradient-to-r from-red-500 to-red-300">
              <span className="font-display font-bold text-8xl text-zinc-50">1</span>
            </div>
            <div className="flex aspect-[4/3] sm:aspect-square justify-center items-center bg-gradient-to-r from-amber-500 to-amber-300">
              <span className="font-display font-bold text-8xl text-zinc-50">2</span>
            </div>
          </div>
          <div className="flex flex-col grow sm:flex-row sm:h-[18em] lg:h-[24em] space-y-4 sm:space-x-4 sm:space-y-0">
            <div className="flex aspect-[4/3] sm:aspect-square justify-center items-center bg-gradient-to-r from-green-500 to-green-300">
              <span className="font-display font-bold text-8xl text-zinc-50">3</span>
            </div>
            <div className="flex grow aspect-[4/3] sm:aspect-auto justify-center items-center bg-gradient-to-r from-blue-500 to-blue-300">
              <span className="font-display font-bold text-8xl text-zinc-50">4</span>
            </div>
          </div>
          <div className="flex flex-col grow sm:flex-row sm:h-[18em] lg:h-[24em] space-y-4 sm:space-x-4 sm:space-y-0">
            <div className="flex grow aspect-[4/3] sm:aspect-auto justify-center items-center bg-gradient-to-r from-purple-500 to-purple-300">
              <span className="font-display font-bold text-8xl text-zinc-50">5</span>
            </div>
            <div className="flex aspect-[4/3] sm:aspect-square justify-center items-center bg-gradient-to-r from-rose-500 to-rose-300">
              <span className="font-display font-bold text-8xl text-zinc-50">6</span>
            </div>
          </div>
        </section>
      </section>

      {/* FOOTER */}
      <section className="flex flex-col grow w-full max-w-screen-xl px-4 py-16">
        <div className="flex flex-col sm:flex-row justify-stretch items-center sm:items-start w-full py-8 border-t-2 border-zinc-900 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex flex-row grow justify-center sm:justify-start self-stretch h-12 divide-x-2 divide-zinc-900 select-none">
            <div className="flex aspect-square mr-4">
              <div className="relative flex w-full h-full">
                <Image
                  src="/media/img/logo_black.svg"
                  alt="TASC Logo"
                  layout="fill"
                  width={100}
                  height={100}
                  object-fit="contain"
                />
              </div>
            </div>
            <div className="flex aspect-[4/1] pl-4">
              <div className="relative flex w-full h-full">
                <Image
                  src="/media/img/uiuc_wordmark.svg"
                  alt="UIUC Logo and Wordmark"
                  layout="fill"
                  width={400}
                  height={100}
                  object-fit="contain"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-row grow justify-center sm:justify-start sm:items-start w-full space-x-4 select-none">
              <Link
                href="https://www.facebook.com/TASCUIUC"
              >
                <a target="_blank">
                  <FontAwesomeIcon className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200" size={"lg"} icon={brands("facebook-f")} />
                </a>
              </Link>
              <Link
                href="https://www.instagram.com/tascuiuc/"
                target="_blank"
              >
                <a target="_blank">
                  <FontAwesomeIcon className="text-zinc-900 hover:text-zinc-600 transition-colors duration-200" size={"xl"} icon={brands("instagram")} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow w-full max-w-screen-xl justify-start">
          <p className="font-sans font-normal text-xs sm:text-sm text-zinc-600">
            Copyright © 2022 Taiwanese American Student Club
          </p>
          <p className="font-sans font-normal text-xs sm:text-sm text-zinc-600">
            UIUC logo and wordmark are trademarks of the University of Illinois Urbana-Champaign.
          </p>
        </div>
      </section>
    </main >
  )
}
