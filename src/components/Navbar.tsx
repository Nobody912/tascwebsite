"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

const routes = [
  {
    name: "Us",
    type: "route",
    path: "/",
  },
  {
    name: "Events",
    type: "route",
    path: "/events",
  },
  {
    name: "Shop",
    type: "route",
    path: "/shop",
  },
];

interface MenuItemProps {
  url: {
    path: string;
  };
  text: string;
  type: string;
  selected: boolean;
}

const MenuItem = ({ url, text, type, selected }: MenuItemProps) => (
  <motion.div>
    <Link href={url.path} target={type === "link" ? "_blank" : ""}>
      <h1 className="text-base md:text-lg text-black leading-6 md:leading-6 select-none">
        {text}
      </h1>
      {selected && (
        <motion.div
          className="border-b-2 border-black"
          layoutId="underline-group"
        />
      )}
    </Link>
  </motion.div>
);

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <>
      <motion.nav className="fixed top-0 z-40 flex w-full justify-center items-center h-16 bg-white/50 backdrop-blur-md">
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
                  src="/media/img/logo_black.png"
                  alt="TASC Logo"
                  fill
                />
              </div>
            </Link>
          </div>

          {/* Navigation Menu (screen-sm and larger) */}
          <div className="flex flex-row space-x-4">
            <AnimatePresence>
              <AnimatePresence>
                {routes.map((route, index) => {
                  return (
                    <MenuItem
                      key={index}
                      url={route}
                      type={route.type}
                      text={route.name}
                      selected={pathname === route.path}
                    />
                  );
                })}
              </AnimatePresence>
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
