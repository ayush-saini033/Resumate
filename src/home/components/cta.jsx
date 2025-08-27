import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-[#020617] to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Subtle dark blue gradient layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-800/20"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-700/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>

        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8 shadow-lg shadow-blue-500/30">
          <Sparkles className="w-8 h-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform
          <br />
          Your Career?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Join over 100,000 professionals who have built their dream careers
          with our platform. Start your success story today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30">
            Start Building Your Resume
            <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="text-gray-400 text-lg">
            No credit card required • Free forever plan
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 inline-flex items-center px-6 py-3 bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-full shadow-inner shadow-blue-900/30">
          <div className="flex -space-x-2 mr-4">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="User 1"
              className="w-8 h-8 rounded-full ring-2 ring-gray-900"
            />
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="User 2"
              className="w-8 h-8 rounded-full ring-2 ring-gray-900"
            />
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
              alt="User 3"
              className="w-8 h-8 rounded-full ring-2 ring-gray-900"
            />
          </div>
          <span className="text-sm text-gray-300">
            Trusted by 100K+ professionals worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
