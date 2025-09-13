import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const pricingTiers = [
  {
    name: "Free",
    price: "₹0",
    period: "", // No period for one-time plans
    description: "Get started with essential resume features",
    features: [
      "Create up to 3 resumes",
      "Live URL for each resume",
      "Access 5 templates",
      "Basic AI resume suggestions",
      "Download as PDF",
      "Basic ATS optimization",
      "Community support",
    ],
    icon: <Star className="w-6 h-6" />,
    buttonText: "Start for Free",
  },
  {
    name: "Pro",
    price: "₹49",
    period: "",
    description: "Ideal for students and frequent job seekers",
    features: [
      "Create up to 6 resumes",
      "Live URL for each resume",
      "Access 10 templates",
      "Enhanced AI suggestions for resume & cover letter",
      "Advanced ATS optimization",
      "Export as PDF & DOCX",
      "Email support",
    ],
    popular: true,
    icon: <Zap className="w-6 h-6" />,
    buttonText: "Upgrade for ₹49",
  },
  {
    name: "Premium",
    price: "₹99",
    period: "",
    description: "Best for professionals aiming to stand out",
    features: [
      "Create up to 12 resumes",
      "Live URL for each resume",
      "Access all 20 templates",
      "Advanced AI for resume, cover letter & job targeting",
      "AI resume scoring & feedback",
      "Multi-language resumes",
      "Priority customer support",
      "Early access to new features",
    ],
    premium: true,
    icon: <Crown className="w-6 h-6" />,
    buttonText: "Go Premium for ₹99",
  },
];


export default function PricingCards() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the full potential of your projects with our flexible pricing options
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`
                relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 group
                ${tier.popular 
                  ? 'bg-gradient-to-b from-blue-900/50 to-gray-900/50 shadow-2xl shadow-blue-500/20' 
                  : tier.premium
                  ? 'bg-gradient-to-b from-purple-900/30 to-gray-900/50 shadow-xl shadow-purple-500/10'
                  : 'bg-gradient-to-b from-gray-800/50 to-gray-900/50  hover:border-gray-600'
                }
                backdrop-blur-sm
              `}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Premium Badge */}
              {tier.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Enterprise
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="text-center mb-8">
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4
                  ${tier.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black' 
                    : tier.premium
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-700 text-gray-300'
                  }
                `}>
                  {tier.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-1">{tier.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className={`
                      w-5 h-5 mr-3 flex-shrink-0
                      ${tier.popular 
                        ? 'text-blue-400' 
                        : tier.premium
                        ? 'text-purple-400'
                        : 'text-green-400'
                      }
                    `} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`
                w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105
                ${tier.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black hover:from-blue-600 hover:to-cyan-500 shadow-lg shadow-blue-500/25' 
                  : tier.premium
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25'
                  : 'bg-white text-black hover:bg-gray-200 shadow-lg'
                }
              `}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans come with in no refund policy
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </div>
  );
}