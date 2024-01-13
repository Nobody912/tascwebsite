import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TASC | Taiwanese American Student's Club at UIUC",
  description:
    "The official website of the Taiwanese American Student's Club at the University of Illinois at Urbana-Champaign.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <div className="flex flex-col min-w-[100dvw] min-h-[100dvh]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
