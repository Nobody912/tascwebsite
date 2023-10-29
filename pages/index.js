import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowDown, ArrowRight } from "react-feather";

import { Link as ScrollLink } from "react-scroll";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  // Hero Animation
  const heroRef = useRef(null);
  const [heroScrollData, setHeroScrollData] = useState(0);
  const heroScrollYProgress = useScroll({
    target: heroRef,
    offset: ["end start", "end end"],
  })?.scrollYProgress;

  useMotionValueEvent(heroScrollYProgress, "change", (latest) => {
    setHeroScrollData(latest);
  });

  // gallery animations
  const galleryRef = useRef(null);
  const [galleryScrollData, setGalleryScrollData] = useState(0);
  const galleryScrollYProgress = useScroll({
    target: galleryRef,
    offset: ["end start", "start end"],
  })?.scrollYProgress;

  useMotionValueEvent(galleryScrollYProgress, "change", (latest) => {
    setGalleryScrollData(latest);
  });

  return (
    <>
      {/* Hero Header */}
      <div
        ref={heroRef}
        className="relative flex flex-col justify-center items-center w-full h-[calc(100dvh)] overflow-none"
      >
        {/* Logo */}
        <div className="absolute z-[35] flex flex-col justify-center items-center">
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
          <div
            className="w-full h-full bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300 animate-[gradient-xy_10s_ease_infinite]"
            style={{ opacity: heroScrollData }}
          />
        </div>
        <div className="absolute z-40 bottom-8">
          <ScrollLink
            spy={true}
            duration={1000}
            to={"home"}
            smooth={"easeInOutQuint"}
          >
            <span className="flex flex-row justify-center items-center">
              <p className="flex font-normal text-4xl text-white animate-colors animate-bounce-x transition-all ease-in-out duration-200 cursor-pointer opacity-100 hover:opacity-50">
                <ArrowDown />
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
        <section className="flex justify-center items-center w-screen h-auto max-w-4xl px-8 py-16  md:py-32">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <motion.div variants={textSlide} className="flex flex-col">
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
                className="font-normal text-2xl md:text-4xl text-black mb-4 leading-relaxed"
                variants={textSlide}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                We are the Taiwanese American Student Club at UIUC. Since our
                founding in 1992, our mission has been to build a community that{" "}
                <span className="font-bold">appreciates</span> and{" "}
                <span className="font-bold">celebrates</span> the diverse
                experience of Taiwanese American culture.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Events */}
        <section
          id="events"
          ref={galleryRef}
          className="flex flex-col w-screen overflow-hidden"
        >
          <>
            <div
              className="flex flex-row h-96"
              style={{
                transform: `translateX(${-50 + galleryScrollData * 50}%)`,
              }}
            >
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_1847.jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_2203.jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_2325-Enhanced-NR.jpg"
                  alt="Test"
                  fill
                />
              </div>
            </div>
            <div
              className="flex flex-row h-96"
              style={{
                transform: `translateX(${0 + galleryScrollData * -50}%)`,
              }}
            >
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_7065-2(1).jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_9827(1).jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/DSC_9869(1).jpg"
                  alt="Test"
                  fill
                />
              </div>
            </div>
            <div
              className="flex flex-row h-96"
              style={{
                transform: `translateX(${-50 + galleryScrollData * 50}%)`,
              }}
            >
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-auto h-full"
                  src="/media/img/gallery/IMG_6065.jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-auto h-full"
                  src="/media/img/gallery/IMG_5992.jpg"
                  alt="Test"
                  fill
                />
              </div>
              <div className="relative flex shrink-0 w-[50dvw] h-full">
                <Image
                  className="object-cover w-full h-full"
                  src="/media/img/gallery/IMG_5921.jpg"
                  alt="Test"
                  fill
                />
              </div>
            </div>
          </>
        </section>

        {/* Join/Contact */}
        <section className="flex justify-center items-start w-full min-h-[70dvh] max-w-4xl px-8 py-16 md:py-32">
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
            {/* <motion.p
              className="font-normal text-2xl md:text-4xl text-black"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              If you are interested in joining or have any inquiries, you can
              reach us through any of our social accounts or by{" "}
              <a
                className="underline hover:text-neutral-600 transition-colors duration-200"
                href="mailto:tasc.uiuc+website@gmail.com"
              >
                email
              </a>
              .
            </motion.p> */}
            <motion.p
              className="font-normal text-2xl md:text-4xl text-black"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              To stay updated on our events and activities, follow us on{" "}
              <Link
                className="underline hover:text-neutral-600 transition-colors duration-200"
                href="https://www.instagram.com/tascuiuc/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </Link>
              ,{" "}
              <Link
                className="underline hover:text-neutral-600 transition-colors duration-200"
                href="https://www.facebook.com/tasc.uiuc/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </Link>
              , or sign up for our{" "}
              <Link
                className="underline hover:text-neutral-600 transition-colors duration-200"
                href="https://advent.endevre.com/@tasc/interestform"
                target="_blank"
                rel="noreferrer"
              >
                newsletter
              </Link>
              .
            </motion.p>
            <motion.div
              className="flex flex-row justify-start"
              variants={textSlide}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <Link
                className="font-normal text-2xl md:text-4xl hover:text-neutral-600 transition-colors duration-200"
                href="https://forms.gle/3nh8qRxLGfMYN3ef7"
                target="_blank"
              >
                <span className="inline-flex items-center underline">
                  Check out the shop{" "}
                  <ArrowRight className="w-6 h-6 md:w-10 md:h-10" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
