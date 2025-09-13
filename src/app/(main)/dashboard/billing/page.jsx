import { DollarSign, Download, FileText, Users } from 'lucide-react';
import React from 'react'

const BillingPage = () => {
  return (
    <div className="space-y-6 ml-28 mt-10">
      <h2 className="text-2xl font-bold">Billing & Subscription</h2>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="text-gray-300">Advanced features for professionals</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              $29<span className="text-lg text-gray-400">/month</span>
            </p>
            <p className="text-sm text-gray-400">Next billing: Jan 15, 2025</p>
          </div>
        </div>
      </div>

      {/* Usage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Resumes Created</h4>
            <FileText className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-2xl font-bold">
            12<span className="text-lg text-gray-400">/50</span>
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: "24%" }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Downloads</h4>
            <Download className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-2xl font-bold">
            156<span className="text-lg text-gray-400">/1000</span>
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "15.6%" }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Templates</h4>
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-2xl font-bold">∞</p>
          <p className="text-sm text-gray-400 mt-2">Unlimited access</p>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Payment History</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium">Pro Plan - January 2025</p>
                <p className="text-sm text-gray-400">Jan 15, 2025</p>
              </div>
            </div>
            <span className="font-semibold">$29.00</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-medium">Pro Plan - December 2024</p>
                <p className="text-sm text-gray-400">Dec 15, 2024</p>
              </div>
            </div>
            <span className="font-semibold">$29.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingPage