"use client";
import { useState } from "react";
import { Crown, Star, Zap, Shield, Check, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: { monthly: 99, yearly: 79 },
    description: "Perfect for job seekers starting their career",
    features: [
      "3 Professional Templates",
      "Basic ATS Optimization",
      "PDF Downloads",
      "Email Support",
      "1 Resume Version",
    ],
    icon: Star,
    popular: false,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: "pro",
    name: "Professional",
    price: { monthly: 199, yearly: 179 },
    description: "Most popular choice for serious professionals",
    features: [
      "15+ Premium Templates",
      "Advanced ATS Optimization",
      "Unlimited PDF Downloads",
      "Cover Letter Builder",
      "LinkedIn Optimization",
      "Priority Support",
      "Unlimited Resume Versions",
      "Real-time Collaboration",
    ],
    icon: Zap,
    popular: true,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "executive",
    name: "Executive",
    price: { monthly: 399, yearly: 349 },
    description: "Premium features for C-level executives",
    features: [
      "All Pro Features",
      "Executive Templates",
      "Personal Branding Kit",
      "1-on-1 Career Coaching",
      "Interview Preparation",
      "Salary Negotiation Guide",
      "Executive Summary Writer",
      "White-glove Service",
    ],
    icon: Crown,
    popular: false,
    gradient: "from-purple-600 to-pink-600",
  },
];

const PricingPage = () => {
  const [billingType, setBillingType] = useState("monthly");

  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
      <button
        onClick={() => router.push("/")}
        className="inline-flex items-center text-blue-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Home
      </button>
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Build professional resumes that get you hired. Start your career
            transformation today.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-2 rounded-full border border-gray-700">
            <button
              onClick={() => setBillingType("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingType === "monthly"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingType("yearly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                billingType === "yearly"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                Save 30%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-b from-gray-900 to-black border rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? "border-blue-500 shadow-lg shadow-blue-500/20 transform scale-105"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">
                    ₹{plan.price[billingType]}
                  </span>
                  <span className="text-gray-400 ml-2">
                    /{billingType === "monthly" ? "mo" : "yr"}
                  </span>
                  {billingType === "yearly" && (
                    <div className="text-sm text-green-400 mt-1">
                      ${Math.round(plan.price.yearly / 12)}/month billed
                      annually
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => router.push("/checkout")}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl shadow-blue-600/30"
                      : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              <span>1M+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
