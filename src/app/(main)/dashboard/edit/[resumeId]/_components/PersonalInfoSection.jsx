import React from "react";
import useResumeStore from "@/store/resumeStore"

const PersonalInfoSection = () => {
  const { updateField, resume } = useResumeStore();

  const handleInputChange = (field, value) => {
    updateField(field, value);
  };


  return (
    <div className="space-y-6">
      <div className="border-b border-blue-500/20 pb-4">
        <h2 className="text-2xl font-bold text-blue-300 mb-2">
          Personal Information
        </h2>
        <p className="text-blue-300/60">Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-300/90 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={resume?.firstName ?? ""}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-300/90 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={resume?.lastName ?? ""}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-300/90 mb-2">
          Job Title
        </label>
        <input
          type="text"
          value={resume?.jobTitle ?? ""}
          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
          placeholder="e.g., Senior Software Engineer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-300/90 mb-2">
          Address
        </label>
        <input
          type="text"
          value={resume?.address ?? ""}
          onChange={(e) => handleInputChange("address", e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
          placeholder="Enter your address"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-300/90 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={resume?.phone ?? ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-300/90 mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={resume?.email ?? ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-black/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-blue-300/40 transition-all duration-300 hover:border-blue-400/50"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoSection;
