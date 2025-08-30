"use client"

import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "hello@resumeforge.com",
      action: "mailto:ayush.jslab@gmail.com",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+91 8824415430",
      action: "tel:+91 8824415430",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help with our live chat support",
      contact: "Available 24/7",
      action: "#",
      gradient: "from-blue-600 to-cyan-500",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl inline-block mb-8">
            <Mail className="h-16 w-16 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need assistance? We're here to help you
            succeed. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.title}
                  href={method.action}
                  className="group block"
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 text-center">
                    <div
                      className={`bg-gradient-to-r ${method.gradient} p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <p className="text-blue-400 font-medium group-hover:text-cyan-400 transition-colors duration-200">
                      {method.contact}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Send className="h-8 w-8 mr-3 text-blue-400" />
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <MapPin className="h-8 w-8 mr-3 text-cyan-400" />
                  Our Office
                </h2>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Headquarters
                      </h3>
                      <p className="text-gray-300">
                        NIT Hamirpur
                        <br />
                        Hamirpur,177005 
                        <br />
                        Himanchal Pradesh
                      </p>
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Office Hours
                      </h3>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0"
                          >
                            <span className="text-gray-300 font-medium">
                              {schedule.day}
                            </span>
                            <span className="text-blue-400">
                              {schedule.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-400" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push("/support")}
                    className="block p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 group"
                  >
                    <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-200">
                      Technical Support →
                    </span>
                  </button>
                  <button
                    onClick={() => router.push("/about")}
                    className="block p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg hover:bg-cyan-500/20 transition-colors duration-200 group"
                  >
                    <span className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-200">
                      Learn About Us →
                    </span>
                  </button>
                  <a
                    href="mailto:careers@resumeforge.com"
                    className="block p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 group"
                  >
                    <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-200">
                      Join Our Team →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
            <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              We're Here to Help
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We typically respond to all inquiries within 24 hours during
              business days. For urgent technical issues, our support team is
              available 24/7 through live chat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
