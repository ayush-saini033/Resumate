import React from "react";
import {
  FileText,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg shadow-lg shadow-blue-500/30">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                ResumeBuilder Pro
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The most advanced resume builder designed to help you land your
              dream job faster.
            </p>
            <div className="flex space-x-4">
              {[Twitter, LinkedIn, Instagram, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Product</h3>
            <ul className="space-y-3">
              {[
                "Resume Builder",
                "Templates",
                "Cover Letters",
                "LinkedIn Optimizer",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Resources</h3>
            <ul className="space-y-3">
              {[
                "Career Guide",
                "Resume Examples",
                "Interview Tips",
                "Salary Guide",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Pricing", "Contact", "Support"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 ResumeBuilder Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
