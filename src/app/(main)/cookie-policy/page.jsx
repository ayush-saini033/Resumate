"use client"
import React from "react";
import { Cookie, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const CookiePolicy = () => {
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
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg inline-block mb-6">
            <Cookie className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
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
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your computer or
                mobile device when you visit our website. They help us provide
                you with a better experience by remembering your preferences and
                improving the functionality of our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-blue-400 mb-3">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are necessary for the website to function and
                    cannot be switched off. They enable core functionality such
                    as security, network management, and accessibility.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Examples:</strong> Session management,
                    authentication, security tokens
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-cyan-400 mb-3">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously. This helps us improve our platform.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Examples:</strong> Google Analytics, usage
                    statistics, performance monitoring
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-blue-400 mb-3">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies enable enhanced functionality and
                    personalization. They may be set by us or by third-party
                    providers whose services we have added to our pages.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Examples:</strong> Language preferences, theme
                    settings, resume auto-save
                  </div>
                </div>

                <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-cyan-400 mb-3">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies track your online activity to help advertisers
                    deliver more relevant advertising or to limit how many times
                    you see an ad.
                  </p>
                  <div className="text-sm text-gray-400">
                    <strong>Examples:</strong> Advertising networks, social
                    media tracking, remarketing
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="text-blue-400 font-medium mb-2">
                    Browser Settings
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Most browsers allow you to control cookies through their
                    settings preferences
                  </p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium mb-2">
                    Opt-Out Tools
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Use industry opt-out tools to manage advertising cookies
                  </p>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-400 text-sm font-medium mb-2">
                  ⚠️ Important Note:
                </p>
                <p className="text-gray-300 text-sm">
                  Disabling certain cookies may impact the functionality of our
                  platform and your user experience.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Some cookies on our site are set by third-party services. We use
                these services to:
              </p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <span className="text-blue-400 font-medium min-w-[100px]">
                    Analytics:
                  </span>
                  <span className="text-gray-300">
                    Google Analytics for website performance insights
                  </span>
                </div>
                <div className="flex items-center p-3 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <span className="text-cyan-400 font-medium min-w-[100px]">
                    Support:
                  </span>
                  <span className="text-gray-300">
                    Customer support chat and help desk functionality
                  </span>
                </div>
                <div className="flex items-center p-3 bg-gray-800/30 border border-gray-700 rounded-lg">
                  <span className="text-blue-400 font-medium min-w-[100px]">
                    Security:
                  </span>
                  <span className="text-gray-300">
                    Fraud detection and prevention services
                  </span>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Cookie Retention
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Different types of cookies are stored for different periods:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-blue-400 font-medium">
                        Cookie Type
                      </th>
                      <th className="px-4 py-3 text-left text-blue-400 font-medium">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 text-gray-300">
                        Session Cookies
                      </td>
                      <td className="px-4 py-3 text-gray-300">
                        Until browser is closed
                      </td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 text-gray-300">
                        Persistent Cookies
                      </td>
                      <td className="px-4 py-3 text-gray-300">Up to 2 years</td>
                    </tr>
                    <tr className="bg-gray-900/30">
                      <td className="px-4 py-3 text-gray-300">
                        Analytics Cookies
                      </td>
                      <td className="px-4 py-3 text-gray-300">26 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
                Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please
                contact us:
              </p>
              <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                <p className="text-blue-400">Email: cookies@resumeforge.com</p>
                <p className="text-blue-400">Phone: +1 (555) 123-4567</p>
                <p className="text-blue-400">
                  Address: 789 Cookie Lane, Web City, WC 98765
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
