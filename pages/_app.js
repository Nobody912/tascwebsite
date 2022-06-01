import "../styles/globals.css"
import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax"

async function loadPolyfills() {
  if (typeof window.IntersectionObserver === "undefined") {
    await import("intersection-observer")
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp
