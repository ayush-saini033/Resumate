"use client"

import React from "react";
import { Shield, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPolicy = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => {router.push("/")}}
          className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg inline-block mb-6">
            <Shield className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-8 md:p-12">
          <div className="prose prose-invert prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At ResumeForge, we respect your privacy and are committed to
                protecting your personal data. This privacy policy explains how
                we collect, use, and safeguard your information when you use our
                resume building platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you create an account, we collect information such as
                    your name, email address, and any information you choose to
                    include in your resume or profile.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">
                    Usage Data
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We automatically collect information about how you interact
                    with our platform, including pages visited, features used,
                    and time spent on the platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">
                    Device Information
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    We collect information about the device you use to access
                    our platform, including browser type, operating system, and
                    IP address.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  To provide and maintain our resume building services
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  To improve and personalize your experience on our platform
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  To communicate with you about updates, features, and support
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  To analyze usage patterns and improve our services
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                  To comply with legal obligations and protect our rights
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Data Protection & Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your
                personal information, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium mb-2">Encryption</h4>
                  <p className="text-gray-400 text-sm">
                    All data is encrypted in transit and at rest
                  </p>
                </div>
                <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium mb-2">
                    Access Controls
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Strict access controls and authentication
                  </p>
                </div>
                <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium mb-2">
                    Regular Audits
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Regular security audits and monitoring
                  </p>
                </div>
                <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium mb-2">
                    Data Backup
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Secure, redundant data backup systems
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-400 font-medium">Access:</span>
                  <span className="text-gray-300 ml-2">
                    Request access to your personal data
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-400 font-medium">Correction:</span>
                  <span className="text-gray-300 ml-2">
                    Request correction of inaccurate data
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-400 font-medium">Deletion:</span>
                  <span className="text-gray-300 ml-2">
                    Request deletion of your personal data
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <span className="text-blue-400 font-medium">
                    Portability:
                  </span>
                  <span className="text-gray-300 ml-2">
                    Request a copy of your data in a portable format
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact our Data Protection Officer
                at:
              </p>
              <div className="mt-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-blue-400">Email: privacy@resumeforge.com</p>
                <p className="text-blue-400">
                  Address: 123 Privacy Street, Data City, DC 12345
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
