import React, { useState, useEffect } from "react";
import {
  FileText,
  Shield,
  Users,
  Zap,
  Eye,
  Lock,
  AlertCircle,
  BriefcaseBusiness,
} from "lucide-react";

function TermsService() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const sections = [
    { id: "overview", title: "Overview", icon: FileText },
    { id: "services", title: "Our Services", icon: Zap },
    { id: "accounts", title: "User Accounts", icon: Users },
    { id: "privacy", title: "Privacy & Data", icon: Eye },
    { id: "security", title: "Security", icon: Lock },
    { id: "liability", title: "Liability", icon: Shield },
    { id: "owner", title: "Owner / Co-Founder", icon: BriefcaseBusiness },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-white">
      <div className="pt-20">
        <div className="container mx-auto px-6 py-12 lg:flex lg:gap-12">
          {/* Navigation Sidebar */}
          <nav className="lg:w-80 lg:sticky lg:top-24 lg:h-fit mb-12 lg:mb-0">
            <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-800/70 p-6 shadow-lg shadow-black/40">
              {/* Header */}
              <h2 className="text-lg font-semibold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
                Table of Contents
              </h2>

              {/* Sections */}
              <div className="space-y-3">
                {sections.map(({ id, title, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full flex items-center space-x-3 px-5 py-3 rounded-xl text-left transition-all duration-300 group relative overflow-hidden border border-hidden ${
                      activeSection === id
                        ? "bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-cyan-300 border border-cyan-500/40 shadow-md shadow-cyan-500/20"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/60 hover:shadow-md hover:shadow-blue-500/10"
                    }`}
                  >
                    {/* Left Glow Accent */}
                    <span
                      className={`absolute left-0 top-0 h-full w-1 rounded-full transition-colors ${
                        activeSection === id
                          ? "bg-gradient-to-b from-cyan-400 to-blue-500"
                          : "bg-transparent group-hover:bg-gradient-to-b group-hover:from-blue-400 group-hover:to-cyan-500"
                      }`}
                    />

                    {/* Icon */}
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        activeSection === id
                          ? "text-cyan-400 scale-110"
                          : "group-hover:scale-110 group-hover:text-cyan-300"
                      }`}
                    />

                    {/* Title */}
                    <span className="font-medium">{title}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="lg:flex-1">
            <div className="max-w-4xl">
              {/* Hero Section */}
              <div className="mb-16">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-blue-600/20 p-12 text-center">
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                    Legal Information
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                    This section provides an overview of our key policies and
                    agreements, including Terms of Service, Privacy Policy,
                    Disclaimer, and related guidelines. By accessing or using
                    our platform, you acknowledge and agree to the principles
                    outlined in these documents. Please review them carefully to
                    understand your rights, responsibilities, and how we handle
                    your information.
                  </p>
                </div>
              </div>

              {/* Overview Section */}
              <section id="overview" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <FileText className="w-8 h-8 text-blue-500 mr-4" />
                    Service Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      ResumeBuilder Pro provides online resume creation,
                      editing, and formatting services. Our platform helps users
                      create professional resumes using our templates, tools,
                      and features.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                          What We Provide
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Professional resume templates</li>
                          <li>• Resume editing and formatting tools</li>
                          <li>• PDF export and download capabilities</li>
                          <li>• Content suggestions and optimization</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                          Your Responsibilities
                        </h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Provide accurate information</li>
                          <li>• Use the service lawfully</li>
                          <li>• Maintain account security</li>
                          <li>• Respect intellectual property rights</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <Zap className="w-8 h-8 text-blue-500 mr-4" />
                    Our Services
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Our platform offers comprehensive resume building services
                      designed to help you create professional, ATS-friendly
                      resumes that stand out to employers.
                    </p>
                    <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50">
                      <h3 className="text-xl font-semibold text-blue-400 mb-4">
                        Service Features
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center p-4">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">
                            Template Library
                          </h4>
                          <p className="text-sm text-gray-400">
                            Professional templates for various industries
                          </p>
                        </div>
                        <div className="text-center p-4">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Zap className="w-6 h-6 text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">
                            AI Assistance
                          </h4>
                          <p className="text-sm text-gray-400">
                            Smart content suggestions and optimization
                          </p>
                        </div>
                        <div className="text-center p-4">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Shield className="w-6 h-6 text-blue-400" />
                          </div>
                          <h4 className="font-semibold text-white mb-2">
                            Secure Storage
                          </h4>
                          <p className="text-sm text-gray-400">
                            Your data is encrypted and protected
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* User Accounts Section */}
              <section id="accounts" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <Users className="w-8 h-8 text-blue-500 mr-4" />
                    User Accounts & Registration
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      To access our full range of services, you must create and
                      maintain a user account. You are responsible for
                      maintaining the confidentiality of your account
                      credentials.
                    </p>
                    <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-blue-400 mb-4">
                        Account Requirements
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            You must be at least 16 years old to create an
                            account
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Provide accurate and complete registration
                            information
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Maintain the security of your password and account
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            One account per person - sharing accounts is
                            prohibited
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy Section */}
              <section id="privacy" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <Eye className="w-8 h-8 text-blue-500 mr-4" />
                    Privacy & Data Protection
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Your privacy is important to us. We collect and process
                      your personal information in accordance with our Privacy
                      Policy and applicable data protection laws.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                          Data We Collect
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Account information (name, email)</li>
                          <li>• Resume content and personal details</li>
                          <li>• Usage analytics and preferences</li>
                          <li>• Technical data and device information</li>
                        </ul>
                      </div>
                      <div className="bg-black/40 rounded-xl p-6 border border-gray-800/50">
                        <h3 className="text-xl font-semibold text-blue-400 mb-3">
                          Your Rights
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Access your personal data</li>
                          <li>• Correct inaccurate information</li>
                          <li>• Delete your account and data</li>
                          <li>• Export your resume data</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security Section */}
              <section id="security" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <Lock className="w-8 h-8 text-blue-500 mr-4" />
                    Security Measures
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      We implement industry-standard security measures to
                      protect your data and ensure the integrity of our
                      platform.
                    </p>
                    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-600/20 p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-white mb-2">
                            Encryption
                          </h3>
                          <p className="text-sm text-gray-400">
                            All data encrypted in transit and at rest
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-white mb-2">
                            Secure Infrastructure
                          </h3>
                          <p className="text-sm text-gray-400">
                            Protected servers and regular security audits
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-white mb-2">
                            Monitoring
                          </h3>
                          <p className="text-sm text-gray-400">
                            24/7 security monitoring and threat detection
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Liability Section */}
              <section id="liability" className="mb-16">
                <div className="bg-gray-900/30 rounded-2xl border border-gray-800/50 p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                    <Shield className="w-8 h-8 text-blue-500 mr-4" />
                    Liability & Disclaimers
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      While we strive to provide excellent service, there are
                      certain limitations to our liability that you should
                      understand when using our platform.
                    </p>
                    <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                        Important Disclaimers
                      </h3>
                      <div className="space-y-4 text-gray-300">
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">
                              Service Availability
                            </p>
                            <p className="text-sm">
                              We cannot guarantee 100% uptime and may perform
                              maintenance that temporarily affects service.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">
                              Content Accuracy
                            </p>
                            <p className="text-sm">
                              You are responsible for the accuracy and
                              truthfulness of content in your resumes.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold mb-1">
                              Employment Outcomes
                            </p>
                            <p className="text-sm">
                              We cannot guarantee that using our service will
                              result in job offers or employment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Termination Section */}
              <section
                id="owner"
                className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 p-8 text-center"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Owner / Co-Founder
                  </h3>
                  <p className="text-gray-300 mb-4">
                    This project is managed and maintained by:
                  </p>
                  <div className="flex flex-col gap-3 justify-center text-gray-200">
                    <p className="text-lg font-semibold">Ayush Saini</p>
                    <a
                      href="mailto:ayush.jslab@gmail.com"
                      className="hover:text-blue-400 transition-colors"
                    >
                      ayush.jslab@gmail.com
                    </a>
                    <a
                      href="tel:+918824415430"
                      className="hover:text-blue-400 transition-colors"
                    >
                      +91 88244 15430
                    </a>
                  </div>
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <p className="text-gray-400 text-sm">
                    © 2025 Ayush Saini. All rights reserved.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default TermsService;
