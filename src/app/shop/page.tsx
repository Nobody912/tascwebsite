"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductBrowser from "@/components/Shop";

export default function Store() {
  return (
    <div className="flex flex-col w-full grow justify-start items-center">
      <section className="relative flex justify-center items-end w-full h-auto aspect-[2/1] md:aspect-[5/1] pt-16 pb-4 bg-gradient-to-r from-indigo-300 via-pink-300 to-yellow-300 animate-[gradient-xy_10s_ease_infinite]">
        <div className="relative z-10 w-full max-w-screen-xl px-4">
          <h1 className="text-6xl text-white font-black">Shop</h1>
        </div>
        <Image
          className="z-0 object-cover"
          src="/media/img/gallery/DSC_2730.jpg"
          alt="Banner image showing crowd at TASC Night Market 2023"
          fill
        />
      </section>
      <motion.div className="max-w-screen-xl">
        <ProductBrowser storeId={94325276} />
      </motion.div>
    </div>
  );
}
