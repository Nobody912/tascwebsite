import { useRouter } from "next/router";
import Head from "next/head";
import { ArrowUpRight } from "react-feather";
import { ScrollerMotion } from "scroller-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  const router = useRouter();

  return (
    <>
      {/* Navbar */}
      <Head>
        <title>{`TASC @ UIUC`}</title>
      </Head>

      <ScrollerMotion spring={{ mass: 1.2, stiffness: 400, damping: 50 }}>
        <main className="relative flex flex-col min-w-[100dvw] min-h-[100dvh] overflow-auto">
          <Navbar />
          {{ ...props.children }}
          <Footer />
        </main>
      </ScrollerMotion>
    </>
  );
}
