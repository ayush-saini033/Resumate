import React from 'react'

const SettingsPage = () => {
  return (
    <div className="space-y-6 ml-24">
      <h2 className="text-2xl font-bold">Account Settings</h2>

      {/* Profile Settings */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-gray-400">
                Receive updates about your resumes
              </p>
            </div>
            <button className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Marketing Emails</h4>
              <p className="text-sm text-gray-400">Tips and product updates</p>
            </div>
            <button className="w-12 h-6 bg-gray-600 rounded-full relative">
              <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage