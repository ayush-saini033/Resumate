"use client";
import { useState } from "react";
import { Shield, Lock, CreditCard, Star, Zap, Crown } from "lucide-react";
import { useRouter } from "next/navigation";

const dummyPlan = {
  id: "pro",
  name: "Professional",
  price: { monthly: 19, yearly: 179 },
  description: "Most popular choice for serious professionals",
  features: [
    "15+ Premium Templates",
    "Advanced ATS Optimization",
    "Unlimited PDF Downloads",
  ],
  icon: Zap,
  gradient: "from-blue-600 to-cyan-600",
};

const CheckoutPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(dummyPlan);
  const [billingType, setBillingType] = useState("monthly");
  const [currentPage, setCurrentPage] = useState("checkout");

  const router = useRouter();

  if (currentPage !== "checkout") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1 className="text-2xl">Redirected to {currentPage} page</h1>
        <button
          className="ml-4 px-4 py-2 bg-blue-600 rounded"
          onClick={() => setCurrentPage("checkout")}
        >
          Go Back to Checkout
        </button>
      </div>
    );
  }

  const Icon = selectedPlan.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/pricing")}
            className="text-blue-400 hover:text-blue-300 mb-4 flex items-center"
          >
            ← Back to Pricing
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Complete Your Order
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Order Summary */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedPlan.gradient} flex items-center justify-center mr-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{selectedPlan.name} Plan</h3>
                    <p className="text-gray-400 text-sm">
                      Billed {billingType}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">
                    ₹{selectedPlan.price[billingType]}
                  </div>
                  <div className="text-gray-400 text-sm">
                    /{billingType === "monthly" ? "month" : "year"}
                  </div>
                </div>
              </div>

              {billingType === "yearly" && (
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-400">
                      Annual Discount (30%)
                    </span>
                    <span className="text-green-400 font-semibold">
                      -₹
                      {Math.round(
                        selectedPlan.price.monthly * 12 -
                          selectedPlan.price.yearly
                      )}
                    </span>
                  </div>
                </div>
              )}

              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹ {selectedPlan.price[billingType]}</span>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm">
                    30-day money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-blue-400" />
              Secure Payment
            </h2>

            <div className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-400">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Billing Type Selector */}
              <div className="flex space-x-4">
                <button
                  className={`px-4 py-2 rounded-xl ${
                    billingType === "monthly" ? "bg-blue-600" : "bg-gray-800"
                  }`}
                  onClick={() => setBillingType("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-4 py-2 rounded-xl ${
                    billingType === "yearly" ? "bg-blue-600" : "bg-gray-800"
                  }`}
                  onClick={() => setBillingType("yearly")}
                >
                  Yearly
                </button>
              </div>

              {/* Continue Button */}
              <button
                onClick={() => alert("Proceeding to payment...")}
                className="w-full mt-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
