"use client";

import React from "react";
import CTA from "../../home/components/cta";
import Features from "../../home/components/features";
import Footer from "../../home/components/footer";
import Header from "../../home/components/header";
import Hero from "../../home/components/hero";
import Testimonials from "../../home/components/testimonial";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header (sticky on top) */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
