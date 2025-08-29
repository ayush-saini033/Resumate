import useResumeStore from "@/store/resumeStore";
import React from "react";

const PreferencesSection = () => {
  const jobTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
    "Remote",
    "Hybrid",
  ];

  const { resume, setResume } = useResumeStore();
  console.log(resume);
  const updatePreferences = (field, value) => {
    setResume({
      ...resume,
      preferences: { ...resume.preferences, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-blue-800/30 pb-4">
        <h2 className="text-2xl font-bold text-blue-300 mb-2">
          Job Preferences
        </h2>
        <p className="text-blue-200/70">Set your job search preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-blue-300 mb-2">
            Job Type
          </label>
          <select
            value={resume.preferences.jobType}
            onChange={(e) => updatePreferences("jobType", e.target.value)}
            className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="" className="bg-gray-800">
              Select job type
            </option>
            {jobTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-800">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-300 mb-2">
            Preferred Location
          </label>
          <input
            type="text"
            value={resume.preferences.location}
            onChange={(e) => updatePreferences("location", e.target.value)}
            className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
            placeholder="e.g., New York, Remote, Worldwide"
          />
        </div>
      </div>

      <div>
        <label className="flex items-center text-sm text-blue-300">
          <input
            type="checkbox"
            checked={resume.preferences.relocation}
            onChange={(e) =>
              updatePreferences("relocation", e.target.checked)
            }
            className="mr-3 rounded border-blue-800/50 text-blue-600 focus:ring-blue-500 focus:ring-2"
          />
          <span>I am willing to relocate for the right opportunity</span>
        </label>
      </div>

      <div className="bg-black/20 border border-blue-800/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-300 mb-4">
          Preference Summary
        </h3>
        <div className="space-y-2 text-blue-200/70">
          <p>
            <span className="font-medium text-blue-300">Job Type:</span>{" "}
            {resume.preferences.jobType || "Not specified"}
          </p>
          <p>
            <span className="font-medium text-blue-300">Location:</span>{" "}
            {resume.preferences.location || "Not specified"}
          </p>
          <p>
            <span className="font-medium text-blue-300">
              Willing to relocate:
            </span>{" "}
            {resume.preferences.relocation ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreferencesSection;
