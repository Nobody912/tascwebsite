import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function MagicGalleryRow(props) {
  const galleryRef = useRef(null);
  const [galleryScrollData, setGalleryScrollData] = useState(0);
  const galleryScrollYProgress = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  })?.scrollYProgress;

  useMotionValueEvent(galleryScrollYProgress, "change", (latest) => {
    setGalleryScrollData(latest);
  });

  return (
    <>
      <div
        className="flex flex-row"
        ref={galleryRef}
        style={{
          height: props.size * 128,
          transform: `translateX(${-100 + galleryScrollData * 100}%)`,
        }}
      >
        {props.children}
      </div>
    </>
  );
}
