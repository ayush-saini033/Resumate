"use client";

import React from "react";
import { ArrowRight, Star, Zap, Shield, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-24 md:mt-14">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="absolute top-1/4 left-1/4 w-[18rem] h-[18rem] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[18rem] h-[18rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-full mb-8 shadow-md shadow-blue-500/20">
          <Star className="w-4 h-4 text-yellow-400 mr-2 animate-pulse" />
          <span className="text-sm text-gray-300">
            Trusted by{" "}
            <span className="text-blue-400 font-semibold">100K+</span>{" "}
            professionals
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Build Your{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-text-shimmer">
            Dream Resume
          </span>{" "}
          in Minutes
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create stunning, professional resumes with our{" "}
          <span className="text-blue-400 font-semibold">
            AI-powered builder
          </span>
          . Stand out from the crowd and land your dream job faster{" "}
          <span className="inline-flex items-center text-blue-400">
            <Rocket className="w-6 h-6 ml-1" />
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
          <button
            onClick={() => router.push("/dashboard/create")}
            className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/40 hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-110 hover:shadow-blue-500/60"
          >
            Start Building Free
            <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          {/* <button className="px-10 py-4 border-2 border-gray-700 text-gray-300 rounded-full text-lg font-semibold hover:border-blue-400 hover:text-white hover:shadow-md hover:shadow-blue-500/30 transition-all">
            View Templates
          </button> */}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full shadow-md shadow-blue-500/40">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">5 Min</div>
              <div className="text-gray-400">Quick Setup</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full shadow-md shadow-blue-500/40">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">ATS</div>
              <div className="text-gray-400">Optimized</div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full shadow-md shadow-blue-500/40">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
