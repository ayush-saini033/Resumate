"use client"
import React from "react";
import {
  ArrowLeft,
  Users,
  Target,
  Zap,
  Award,
  Heart,
  Lightbulb,
  Globe,
  TrendingUp,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Former HR executive with 15+ years of experience in talent acquisition and resume optimization.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Tech visionary who led engineering teams at Fortune 500 companies, passionate about AI-driven solutions.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Award-winning UX designer with expertise in creating intuitive, user-centered digital experiences.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack engineer specializing in scalable web applications and machine learning integration.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every feature we build is designed to help you land your dream job faster.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "User-Centric",
      description:
        "Your success is our success. We prioritize user experience in everything we do.",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI and design trends to stay ahead of the curve.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description:
        "Professional resume building should be accessible to everyone, everywhere.",
      gradient: "from-cyan-600 to-blue-500",
    },
  ];

  const stats = [
    { number: "500K+", label: "Resumes Created", icon: FileText },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "150+", label: "Countries Served", icon: Globe },
    { number: "4.9/5", label: "User Rating", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-200 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl inline-block mb-8 animate-pulse">
            <Users className="h-16 w-16 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About ResumeForge
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize career success by making
            professional resume creation accessible, intelligent, and incredibly
            effective for job seekers worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  ResumeForge was born from a simple observation: talented
                  individuals were being overlooked because their resumes didn't
                  effectively showcase their potential. Our founders, having
                  experienced this challenge firsthand, set out to create a
                  solution that would level the playing field.
                </p>
                <p>
                  What started as a weekend project in 2020 has evolved into a
                  comprehensive platform that has helped over 500,000
                  professionals land their dream jobs. We combine cutting-edge
                  AI technology with proven recruitment insights to create
                  resumes that not only look stunning but also pass through
                  applicant tracking systems with ease.
                </p>
                <p>
                  Today, we're proud to serve job seekers in over 150 countries,
                  from recent graduates to C-level executives, helping them tell
                  their professional stories in the most compelling way
                  possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="rounded-xl w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the
              experience we create for our users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="group">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 h-full">
                    <div
                      className={`bg-gradient-to-r ${value.gradient} p-3 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate individuals behind ResumeForge, dedicated to
              transforming how people present their professional stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-500/30 group-hover:border-cyan-500/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1 text-center group-hover:text-blue-400 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-sm font-medium text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed text-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl inline-block mb-8">
            <Zap className="h-12 w-12 text-black" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            To empower every professional with the tools and confidence they
            need to showcase their unique value proposition and secure
            opportunities that align with their career aspirations.
          </p>
          <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-8">
            <blockquote className="text-2xl font-medium text-blue-400 italic">
              "Every great career starts with a great resume. We're here to make
              sure yours stands out."
            </blockquote>
            <cite className="text-gray-400 text-sm mt-4 block">
              - Ayush Saini, CEO & Founder
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
