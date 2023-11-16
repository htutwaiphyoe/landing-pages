import React from "react";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";
import { Download } from "@/components/organisms/Download";
import { Faq } from "@/components/organisms/Faq";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export function HomeTemplate(): JSX.Element {
  return (
    <>
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
