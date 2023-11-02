import { motion } from "framer-motion";
import { ProductBrowser } from "@ecwid/nextjs-ecwid-plugin";

export default function Store() {
  return (
    <div className="flex w-full grow pt-16 justify-center items-center">
      <motion.div className="max-w-screen-xl">
        <ProductBrowser storeId="94325276" />
      </motion.div>
    </div>
  );
}
