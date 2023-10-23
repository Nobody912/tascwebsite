import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import * as Icon from "react-feather";

const MenuItem = ({ route, text, selected }) => (
  <motion.div>
    <Link href={route.path}>
      <h1 className="text-base md:text-lg text-white leading-6 md:leading-6 select-none">
        {text}
      </h1>
      {selected && (
        <motion.div
          className="border-b-2 border-white"
          layoutId="underline-group"
        />
      )}
    </Link>
  </motion.div>
);

export default function Navbar(props) {
  const router = useRouter();
  const routes = props?.routes;
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  // const scroll = useScroll();

  // const { scrollYProgress } = useScroll();
  // const [scrollData, setScrollData] = useState(0);

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   setScrollData(latest);
  // });

  return (
    <>
      <motion.nav className="fixed top-0 z-40 flex w-full justify-center items-center h-16 bg-transparent">
        {/* <div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300"
          style={{ transform: `translateX(-${100 - scrollData * 100}%)` }}
        ></div> */}
        <div className="relative z-50 flex justify-start items-center w-full h-full max-w-screen-xl space-x-8 px-4">
          {/* Logo */}
          <div className="flex grow justify-start items-center">
            <Link
              href="/"
              className="flex flex-row justify-center items-center space-x-2 opacity-100 hover:opacity-50 transition-opacity duration-150"
            >
              <div className="relative w-12 h-12">
                <Image
                  className="object-contain"
                  src="/media/img/logo_white.png"
                  alt="TASC Logo"
                  fill
                />
              </div>
            </Link>
          </div>
          {/* Navigation Menu Button */}
          <div className="flex sm:hidden shrink h-full justify-end items-center">
            <button
              className="flex justify-center items-center w-6 h-6"
              type="button"
              onClick={() => {
                setMobileNavbarOpen(!mobileNavbarOpen);
              }}
            >
              <Icon.Menu className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Menu (screen-sm and larger) */}
          <div className="flex flex-row space-x-4">
            <AnimatePresence>
              {routes.map((route, index) => {
                return (
                  <MenuItem
                    key={index}
                    route={route}
                    text={route.name}
                    selected={router.pathname === route.path}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        {/* Navigation Menu (screen-sm and smaller) */}
        <AnimatePresence>
          {mobileNavbarOpen && (
            <motion.div
              className="absolute top-0 bottom-0 z-40 flex w-full h-screen justify-center items-center bg-black/80 backdrop-blur-md overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setMobileNavbarOpen(false);
              }}
            >
              <div className="flex flex-col sm:hidden shrink h-full justify-center items-center space-y-4">
                {routes?.map((route, index) => {
                  return (
                    <MenuItem
                      key={index}
                      route={route}
                      text={route.name}
                      selected={router.pathname === route.path}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
