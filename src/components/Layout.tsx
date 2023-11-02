import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-w-[100dvw] min-h-[100dvh]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
