import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Offer } from "@/components/sections/Offer";
import { FAQ } from "@/components/sections/FAQ";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="min-h-screen text-starlight selection:bg-ai-blue/30">
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Offer />
      <FAQ />
      <Portfolio />
      <Contact />
    </main>
  );
}
