"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Community from "@/components/Community";
import CoreFeatures from "@/components/CoreFeatures";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Maps from "@/components/Maps";
import Pricing from "@/components/Pricing";
import QualityFeatures from "@/components/QualityFeatures";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <div className='flex flex-col gap-16 md:gap-32'>
        <Head></Head>
        <HeroSection />
        <QualityFeatures />
        <Features />
        {/* <Services /> */}
        {/* <CoreFeatures /> */}
        <Work />
        <Community />

        <Pricing />
        <Team />
        
        <Subscribe />
        <Maps />
        <Testimonials />
      </div>
    </>
  );
}
