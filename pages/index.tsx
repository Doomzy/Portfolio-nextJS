import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { cn } from "@/lib/utils";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const vt323 = VT323({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={cn("w-full", vt323.className)}>
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <Analytics />
    </div>
  );
}
