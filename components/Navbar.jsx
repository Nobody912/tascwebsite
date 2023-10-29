// import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "react-feather";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

import * as Icon from "react-feather";

// const routes = [
//   {
//     name: "Us",
//     path: "/",
//   },
//   {
//     name: <span className="inline-flex items-center">Shop <ArrowUpRight /></span>,
//     path: "https://forms.gle/3nh8qRxLGfMYN3ef7",
//   },
// ];

// const MenuItem = ({ route, text, selected }) => (
//   <motion.div>
//     <Link href={route.path}>
//       <h1 className="text-base md:text-lg text-white leading-6 md:leading-6 select-none">
//         {text}
//       </h1>
//       {selected && (
//         <motion.div
//           className="border-b-2 border-white"
//           layoutId="underline-group"
//         />
//       )}
//     </Link>
//   </motion.div>
// );

export default function Navbar(props) {
  const router = useRouter();
  const routes = props?.routes;
  // const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
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
            {/* <Link
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
            </Link> */}
          </div>

          {/* Navigation Menu (screen-sm and larger) */}
          <div className="flex flex-row space-x-4">
            <AnimatePresence>
              <motion.div>
                <Link href={"/"}>
                  <h1 className="text-base md:text-lg text-white leading-6 md:leading-6 select-none">
                    Home
                  </h1>
                  {router.pathname === "/" ? (
                    <motion.div
                      className="border-b-2 border-white"
                      layoutId="underline-group"
                    />
                  ) : (
                    <motion.div
                      className="border-b-2 border-transparent"
                      layoutId="underline-group"
                    />
                  )}
                </Link>
              </motion.div>
              <motion.div>
                <Link
                  href={"https://forms.gle/3nh8qRxLGfMYN3ef7"}
                  target="_blank"
                >
                  <h1 className="text-base md:text-lg text-white leading-6 md:leading-6 select-none">
                    <span className="inline-flex items-center">
                      Shop <ArrowUpRight className="w-6 h-6 md:w-6 md:h-6" />
                    </span>
                  </h1>

                  <motion.div
                    className="border-b-2 border-transparent"
                    layoutId="underline-group"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
