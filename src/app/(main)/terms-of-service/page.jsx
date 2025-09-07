"use client"
import React from "react";
import { Scale, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const TermsOfService = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg inline-block mb-6">
            <Scale className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using ResumeForge, you accept and agree to be
                bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Use License
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Permission is granted to temporarily download one copy of
                  ResumeForge per device for personal, non-commercial transitory
                  viewing only. This is the grant of a license, not a transfer
                  of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-gray-300 ml-4">
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    modify or copy the materials
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    use the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    attempt to reverse engineer any software contained on the
                    platform
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                User Accounts
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  When you create an account with us, you must provide accurate,
                  complete, and up-to-date information. You are responsible for
                  safeguarding your account credentials and all activities that
                  occur under your account.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="text-blue-400 font-medium mb-2">
                    Account Responsibilities:
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Maintain the security of your login credentials</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>
                      • Ensure all information provided is accurate and current
                    </li>
                    <li>• Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Service Availability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to provide continuous access to ResumeForge, but we
                cannot guarantee uninterrupted service. We reserve the right to
                modify, suspend, or discontinue any part of our service with or
                without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Intellectual Property
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The content you create using ResumeForge remains your
                intellectual property. However, you grant us a limited license
                to process and store your content to provide our services.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-cyan-400 text-sm font-medium">
                  Your resume content belongs to you. We simply provide the
                  tools to create and format it.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall ResumeForge or its suppliers be liable for any
                damages arising out of the use or inability to use the platform,
                even if ResumeForge or its authorized representative has been
                notified of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Changes to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to update these terms at any time. Changes
                will be effective immediately upon posting. Your continued use
                of the service constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-cyan-500 pl-4">
                Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-cyan-400">Email: ayush.jslab@gmail.com</p>
                <p className="text-cyan-400">
                  Address: NIT Hamirpur , Himanchal Pradesh
                </p>
              </div>

              <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Owner</h4>
                <p className="text-cyan-400">Ayush Saini</p>
                <p className="text-gray-400 text-sm mt-2">
                  All sales are final. We do not offer refunds.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
