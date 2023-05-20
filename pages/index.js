import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const textSlide = {
  initial: {
    opacity: 0,
    y: "4rem",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export default function Home() {
  const heroRef = useRef(null);

  // onload calls
  useEffect(() => {}, []);

  return (
    <>
      {/* Hero Header */}
      <div
        ref={heroRef}
        className="relative flex flex-col justify-center items-center w-full h-[calc(100vh-64px)] overflow-none"
      >
        {/* Logo and Title */}
        <div className="absolute z-40 flex flex-col justify-center items-center">
          <div className="relative w-32 h-32">
            <Image
              src="/media/img/logo_white.png"
              alt="Logo"
              fill
              loading="eager"
            />
          </div>
        </div>
        <div className="absolute z-30 w-full h-full select-none">
          <div className="w-full h-full bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300 animate-[gradient-xy_10s_ease_infinite]" />
        </div>
        <div className="absolute z-40 bottom-8">
          <ScrollLink
            spy={true}
            duration={1000}
            to={"home"}
            offset={-32}
            smooth={"easeInOutQuint"}
          >
            <span className="flex flex-row justify-center items-center">
              <p className="flex font-sans font-normal text-4xl text-white hover:text-white/50 animate-colors animate-bounce-x transition-all ease-in-out duration-200 cursor-pointer">
                ↓
              </p>
            </span>
          </ScrollLink>
        </div>
      </div>

      {/* Main Content */}
      <div
        id="home"
        className="flex flex-col w-full justify-center items-center"
      >
        {/* About Us */}
        <section className="flex justify-center items-center w-screen h-auto md:h-screen max-w-4xl px-8 py-16 md:py-0">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <motion.div variant={textSlide} className="flex flex-col">
              <motion.h1
                className="font-display font-bold text-3xl md:text-5xl text-black mb-4 sm:mb-8"
                variants={textSlide}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                Who are we?
              </motion.h1>
              <motion.p
                className="font-sans font-normal text-2xl md:text-4xl text-black mb-4 leading-relaxed"
                variants={textSlide}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {[
                  "We are the Taiwanese American Student Club at UIUC. Since our founding in 1992, our mission has been to build a community that ",
                  <span key={Math.random()} className="font-semibold">
                    appreciates
                  </span>,
                  " and ",
                  <span key={Math.random()} className="font-semibold">
                    celebrates
                  </span>,
                  " the diverse experience of Taiwanese American culture.",
                ].flatMap((part) => {
                  let content =
                    typeof part === "string" ? part.split(" ") : [part];
                  return content.map((word) => {
                    return (
                      <motion.span
                        key={Math.random()}
                        variants={textSlide}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                      >
                        {word}{" "}
                      </motion.span>
                    );
                  });
                })}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Events */}
        <section
          id="events"
          className="flex flex-col justify-center items-center w-full"
        >
          {/* <div className="flex flex-col">
              <h1 className="font-display font-black text-4xl text-neutral-900 mb-4 uppercase">
                Our Events
              </h1>
              <p className="font-sans font-regular text-3xl text-neutral-900 mb-4 leading-loose">
                TASC organizes and hosts a variety of events throughout the
                year. From our annual Night Market to our Lunar New Year
                celebration, we strive to provide a space for members to connect
                with each other and learn about Taiwanese American culture.
              </p>
              <div className="flex flex-row w-full">
                <Link
                  className="flex shrink font-sans font-medium text-3xl text-neutral-800 hover:text-neutral-600 hover:cursor-pointer transition-colors duration-200 select-none drag-none"
                  href="/"
                >
                  See our events ⟶
                </Link>
              </div>
            </div> */}
          <div className="grid grid-cols-3 w-full grow">
            <div className="relative flex col-span-2 aspect-[2/1]">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/tUF--C9oOuE/download?ixid=MnwxMjA3fDB8MXxhbGx8MTZ8fHx8fHwyfHwxNjY5MDgwNzkw&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-1 aspect-square">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/t55GeRpETn0/download?ixid=MnwxMjA3fDB8MXxhbGx8NDl8fHx8fHwyfHwxNjY5MDgzMTM3&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-1 aspect-square">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/DX7pT_guAyE/download?ixid=MnwxMjA3fDB8MXxhbGx8NDh8fHx8fHwyfHwxNjY5MDgzMTM3&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-1 aspect-square">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/h2R6C7bVzDc/download?ixid=MnwxMjA3fDB8MXxhbGx8MTd8fHx8fHwyfHwxNjY5MDgwNzkw&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-1 aspect-square">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/Kd2MCCeEhrc/download?ixid=MnwxMjA3fDB8MXxhbGx8MTh8fHx8fHwyfHwxNjY5MDgwNzkw&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-1 aspect-square">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/HE1_K4_-QT8/download?ixid=MnwxMjA3fDB8MXxhbGx8NTh8fHx8fHwyfHwxNjY5MDgzMTM4&force=true"
                alt="Test"
                fill
              />
            </div>
            <div className="relative flex col-span-2 aspect-[2/1]">
              <Image
                className="object-cover w-auto h-full"
                src="https://unsplash.com/photos/nY14Fs8pxT8/download?ixid=MnwxMjA3fDB8MXxhbGx8MTEzfHx8fHx8Mnx8MTY2OTA4MzMxNA&force=true"
                alt="Test"
                fill
              />
            </div>
          </div>
        </section>

        {/* Join/Contact */}
        <section
          id="contact"
          className="flex justify-center items-start w-full h-full max-w-screen-lg px-8 py-16 md:py-32"
        >
          <motion.div
            className="flex flex-col h-full gap-y-4"
            variants={textSlide}
            viewport={{ once: true }}
          >
            <motion.h1
              className="font-display font-bold text-3xl md:text-5xl text-black"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              Get in touch, stay in touch.
            </motion.h1>
            <motion.p
              className="font-sans font-normal text-2xl md:text-4xl text-black"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                "If you are interested in joining or have any inquiries, you can reach us through any of our social accounts or by",
                <a
                  key={Math.random()}
                  className="underline hover:text-neutral-600 transition-colors duration-200"
                  href="mailto:tasc.uiuc+website@gmail.com"
                >
                  {" "}
                  email
                </a>,
                ".",
              ].flatMap((part) => {
                let content =
                  typeof part === "string" ? part.split(" ") : [part];
                return content.map((word) => {
                  return (
                    <motion.span
                      key={Math.random()}
                      variants={textSlide}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                    >
                      {word}{" "}
                    </motion.span>
                  );
                });
              })}
            </motion.p>
            <motion.p
              className="font-sans font-normal text-2xl md:text-4xl text-black"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
            >
              {[
                "To stay updated on our events and activities, follow us on",
                <Link
                  key={Math.random()}
                  className="underline hover:text-neutral-600 transition-colors duration-200"
                  href="https://www.instagram.com/tascuiuc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </Link>,
                "and",
                <Link
                  key={Math.random()}
                  className="underline hover:text-neutral-600 transition-colors duration-200"
                  href="https://www.facebook.com/tasc.uiuc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </Link>,
                ".",
              ].flatMap((part) => {
                let content =
                  typeof part === "string" ? part.split(" ") : [part];
                return content.map((word) => {
                  return (
                    <motion.span
                      key={Math.random()}
                      variants={textSlide}
                      initial="initial"
                      whileInView="whileInView"
                    >
                      {word}{" "}
                    </motion.span>
                  );
                });
              })}
            </motion.p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
