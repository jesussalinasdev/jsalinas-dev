import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jsalinas.dev | AI Web Developer in Vancouver",
  description: "Jesus Salinas is an AI Web Developer based in Vancouver, specializing in high-performance websites and custom SaaS applications. Expert in Next.js, React, TypeScript, and AI integration for entrepreneurs and businesses looking to accelerate their digital growth.",
  keywords: ["AI Web Developer", "Vancouver Web Design", "Next.js Developer", "React Expert", "SaaS Development", "Software Engineer Vancouver", "Custom Websites", "Jesus Salinas"],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-void`}
      >
        <NextIntlClientProvider messages={messages}>
          <NeuralBackground />
          <div className="relative z-10">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
