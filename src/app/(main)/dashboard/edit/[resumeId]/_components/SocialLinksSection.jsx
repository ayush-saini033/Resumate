import React from "react";
import { Plus, Trash2, ExternalLink } from "lucide-react";
import useResumeStore from "@/store/resumeStore";

const SocialLinksSection = () => {
  const { resume, setResume } = useResumeStore();

  // ✅ Add a new social link
  const addSocialLink = () => {
    const newSocialLink = {
      id: Date.now(), // safer unique ID
      name: "",
      url: "",
    };
    setResume((prev) => ({
      ...prev,
      socialLinks: [...(prev.socialLinks ?? []), newSocialLink],
    }));
  };

  // ✅ Remove a social link by ID
  const removeSocialLink = (id) => {
    setResume((prev) => ({
      ...prev,
      socialLinks: (prev.socialLinks ?? []).filter((link) => link.id !== id),
    }));
  };

  // ✅ Update a specific field
  const updateSocialLink = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      socialLinks: (prev.socialLinks ?? []).map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    }));
  };

  const socialLinks = resume.socialLinks ?? [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">
              Social Links
            </h2>
            <p className="text-blue-200/70">
              Add your professional social links
            </p>
          </div>
          <button
            onClick={addSocialLink}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Social Link
          </button>
        </div>
      </div>

      {/* Empty State */}
      {socialLinks.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <ExternalLink size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No social links added yet</p>
          <button
            onClick={addSocialLink}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your First Social Link
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((link, index) => (
            <div
              key={link.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-4"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-300">
                  Social Link #{index + 1}
                </span>
                <button
                  onClick={() => removeSocialLink(link.id)}
                  className="p-1 text-red-400 hover:bg-red-400/20 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                {/* Platform Name */}
                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">
                    Platform
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., LinkedIn, GitHub, Twitter, Portfolio"
                    value={link.name}
                    onChange={(e) =>
                      updateSocialLink(link.id, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40 text-sm"
                  />
                </div>

                {/* URL */}
                <div>
                  <label className="block text-xs font-medium text-blue-300 mb-1">
                    URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={link.url}
                    onChange={(e) =>
                      updateSocialLink(link.id, "url", e.target.value.trim())
                    }
                    className="w-full px-3 py-2 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40 text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialLinksSection;
