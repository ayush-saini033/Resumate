"use client"
import React, { useState } from "react";
import {
  ArrowLeft,
  HelpCircle,
  Search,
  FileText,
  Settings,
  CreditCard,
  Download,
  MessageCircle,
  Book,
  Video,
  Mail,
  ChevronDown,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const router = useRouter();

  const supportCategories = [
    {
      icon: FileText,
      title: "Resume Building",
      description: "Learn how to create stunning resumes with our tools",
      articles: 12,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Manage your profile, settings, and preferences",
      articles: 8,
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: CreditCard,
      title: "Billing & Subscriptions",
      description: "Payment, billing, and subscription information",
      articles: 6,
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Download,
      title: "Export & Download",
      description: "Download your resumes in various formats",
      articles: 5,
      gradient: "from-cyan-600 to-blue-500",
    },
  ];

  const faqs = [
    {
      question: "How do I create my first resume?",
      answer:
        "Getting started is easy! Simply sign up for an account, choose a template, and follow our step-by-step guide. Our AI assistant will help you optimize your content for maximum impact.",
    },
    {
      question: "Can I download my resume in different formats?",
      answer:
        "Yes! You can download your resume as PDF, Word document, or plain text. Premium users also get access to additional formats and high-resolution exports.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade encryption and security measures to protect your data. Your resume information is never shared with third parties without your explicit consent.",
    },
    {
      question: "How does the AI optimization work?",
      answer:
        "Our AI analyzes your resume content and suggests improvements based on industry best practices, keyword optimization, and ATS compatibility to increase your chances of getting noticed.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all premium subscriptions. If you're not satisfied, contact our support team for a full refund.",
    },
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      href: "#",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      href: "mailto:support@resumeforge.com",
    },
    {
      icon: Book,
      title: "User Guide",
      description: "Comprehensive documentation",
      action: "View Guide",
      href: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      action: "Watch Videos",
      href: "#",
    },
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl inline-block mb-8">
            <HelpCircle className="h-16 w-16 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers, get help, and learn how to make the most of
            ResumeForge. We're here to support your career journey every step of
            the way.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get Help Instantly
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <a
                  key={action.title}
                  href={action.href}
                  className="group block"
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 text-center h-full">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {action.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {action.description}
                    </p>
                    <span className="inline-flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
                      {action.action}
                      <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className="group cursor-pointer">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 h-full">
                    <div
                      className={`bg-gradient-to-r ${category.gradient} p-3 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400 font-medium">
                        {category.articles} articles
                      </span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about ResumeForge
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-900/80 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronDown className="h-5 w-5 text-blue-400 transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl p-12">
            <MessageCircle className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Can't find what you're looking for? Our dedicated support team is
              ready to assist you with personalized help and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              >
                <Mail className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Contact Support
              </button>
              <button className="bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group border border-gray-700 hover:border-blue-500/50">
                <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Popular Help Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "How to Write an Effective Resume Summary",
                category: "Resume Building",
                readTime: "5 min read",
                views: "12.5K views",
              },
              {
                title: "Optimizing Your Resume for ATS Systems",
                category: "Resume Building",
                readTime: "8 min read",
                views: "9.2K views",
              },
              {
                title: "Choosing the Right Resume Template",
                category: "Design Tips",
                readTime: "4 min read",
                views: "8.7K views",
              },
              {
                title: "Managing Multiple Resume Versions",
                category: "Account Management",
                readTime: "6 min read",
                views: "6.3K views",
              },
              {
                title: "Downloading High-Quality PDFs",
                category: "Export & Download",
                readTime: "3 min read",
                views: "5.8K views",
              },
              {
                title: "Understanding Premium Features",
                category: "Billing & Subscriptions",
                readTime: "7 min read",
                views: "4.9K views",
              },
            ].map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 h-full">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{article.readTime}</span>
                    <span>{article.views}</span>
                  </div>
                  <div className="mt-4 flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors duration-200">
                    <span className="text-sm font-medium">Read Article</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
