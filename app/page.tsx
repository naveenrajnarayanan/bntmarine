import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { Statement } from "@/components/sections/Statement";
import { PageTransition } from "@/components/system/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <>
        <a
          href="#statement"
          className="sr-only focus:not-sr-only focus:absolute focus:left-space-24 focus:top-space-24 focus:z-50 focus:bg-background-primary focus:px-space-16 focus:py-space-8 focus:text-text-primary"
        >
          Skip to content
        </a>
        <Hero />
        <Statement />
        <About />
        <ContactSection />
      </>
    </PageTransition>
  );
}
