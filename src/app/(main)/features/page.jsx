"use client"
import React from "react";
import {
  CheckCircle,
  Zap,
  Download,
  Users,
  Shield,
  Sparkles,
  FileText,
  Target,
  Globe,
  Award,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FeaturePage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Content",
      description:
        "Generate compelling resume content with our advanced AI that adapts to your industry and role.",
      highlight: "Smart Writing Assistant",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Templates",
      description:
        "Choose from 50+ ATS-friendly templates designed by career experts and hiring managers.",
      highlight: "ATS-Optimized",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Job-Specific Optimization",
      description:
        "Tailor your resume for specific job postings with keyword optimization and role matching.",
      highlight: "Higher Success Rate",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Multiple Export Formats",
      description:
        "Download in PDF, Word, or share via direct link. Perfect formatting guaranteed every time.",
      highlight: "Universal Compatibility",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Real-Time Collaboration",
      description:
        "Get feedback from mentors, friends, or career coaches with collaborative editing features.",
      highlight: "Team Reviews",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description:
        "Your data is encrypted and secure. We never share your information with third parties.",
      highlight: "Bank-Level Security",
    },
  ];

  const stats = [
    { number: "2M+", label: "Resumes Created" },
    { number: "89%", label: "Interview Success Rate" },
    { number: "500+", label: "Company Partners" },
    { number: "4.9/5", label: "User Rating" },
  ];

  const benefits = [
    "Save 10+ hours of formatting time",
    "Increase interview callbacks by 3x",
    "Professional design guaranteed",
    "ATS compatibility ensured",
    "Expert career guidance included",
    "Unlimited revisions and updates",
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-950/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">
                Powered by Advanced AI
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-6">
              Build Resumes That
              <br />
              <span className="text-blue-400">Get You Hired</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create professional, ATS-optimized resumes in minutes with our
              AI-powered platform. Join millions who've landed their dream jobs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="text-blue-400"> Modern Job Seekers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create, optimize, and manage your
            professional resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 h-full hover:border-blue-500/30 transition-all duration-300 hover:bg-gray-900/70">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="inline-block bg-blue-500/10 text-blue-300 text-xs px-3 py-1 rounded-full mb-4">
                  {feature.highlight}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose Our
                <span className="text-blue-400"> Resume Builder?</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gray-900 border border-gray-800 rounded-3xl p-8">
                <div className="text-center">
                  <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Industry Recognition
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Trusted by Fortune 500 companies and career professionals
                    worldwide
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Used in</div>
                      <div className="font-semibold">150+ Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple <span className="text-blue-400">3-Step Process</span>
          </h2>
          <p className="text-xl text-gray-300">
            From blank page to professional resume in under 15 minutes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Choose Template",
              description:
                "Select from our collection of professional, industry-specific templates",
            },
            {
              step: "02",
              title: "Add Your Info",
              description:
                "Our AI assistant helps you write compelling content that highlights your strengths",
            },
            {
              step: "03",
              title: "Download & Apply",
              description:
                "Export your polished resume and start applying to your dream jobs immediately",
            },
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-black">
                    {step.step}
                  </span>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/20 via-black to-purple-900/20 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Land Your <span className="text-blue-400">Dream Job?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join millions of professionals who've transformed their careers with
            our resume builder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/auth")}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/25"
            >
              Start Building for Free
            </button>
            <button
              onClick={() => router.push("/dashbaord/create")}
              className="border border-gray-600 hover:border-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-500/10"
            >
              View Sample Resumes
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
