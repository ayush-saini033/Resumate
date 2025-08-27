import React from "react";
import {
  Plus,
  Minus,
  Share2,
  ExternalLink,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@//store/resumeStore";
import { FaXTwitter } from "react-icons/fa6";

function SocialLinksForm() {
  const { resume, setResume } = useResumeStore();
  console.log(resume.socialLinks);

  const addSocialLink = () => {
    const newSocialLink = {
      id: Date.now().toString(),
      name: "",
      url: "",
    };
    setResume({
      ...resume,
      socialLinks: [...resume.socialLinks, newSocialLink],
    });
  };

  const removeSocialLink = (id) => {
    if (resume.socialLinks.length > 0) {
      setResume({
        ...resume,
        socialLinks: resume.socialLinks.filter((link) => link.id !== id),
      });
    }
  };

  const updateSocialLink = (id, field, value) => {
    setResume({
      ...resume,
      socialLinks: resume.socialLinks.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    });
  };

  const isValidUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const getSocialIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("github")) return <Github className="w-5 h-5" />;
    if (lowerName.includes("linkedin")) return <Linkedin className="w-5 h-5" />;
    if (lowerName.includes("twitter") || lowerName.includes("x.com"))
      return <Twitter className="w-5 h-5" />;
    if (lowerName.includes("instagram"))
      return <Instagram className="w-5 h-5" />;
    if (lowerName.includes("facebook")) return <Facebook className="w-5 h-5" />;
    if (lowerName.includes("youtube")) return <Youtube className="w-5 h-5" />;
    if (lowerName.includes("x")) return <FaXTwitter className="w-5 h-5" />;
    return <Globe className="w-5 h-5" />;
  };

  const getSocialColor = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("github")) return "text-gray-400";
    if (lowerName.includes("linkedin")) return "text-blue-500";
    if (lowerName.includes("twitter") || lowerName.includes("x.com"))
      return "text-sky-400";
    if (lowerName.includes("instagram")) return "text-pink-500";
    if (lowerName.includes("facebook")) return "text-blue-600";
    if (lowerName.includes("youtube")) return "text-red-500";
    return "text-cyan-400";
  };

  const popularPlatforms = [
    "LinkedIn",
    "GitHub",
    "Twitter/X",
    "Instagram",
    "Facebook",
    "YouTube",
    "Portfolio Website",
    "Personal Blog",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Header */}

          <FormHeading
            Icon={Share2}
            firstHeading={"Social"}
            secondHeading={"Links"}
            subHeading={`Connect your professional and social profiles to build your online
              presence.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Social Links List */}
              <div className="space-y-6">
                {/* Popular Platforms Suggestions */}
                <div className="bg-black/20 border border-gray-700/30 rounded-xl p-4">
                  <p className="text-gray-300 text-sm mb-3 font-medium">
                    Popular Platforms:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {popularPlatforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs hover:bg-blue-500/20 transition-colors duration-200 cursor-default"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {resume.socialLinks.map((link, index) => (
                    <div
                      key={link.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Link Number & Icon */}
                        <div className="flex-shrink-0 flex flex-col items-center space-y-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          {link.name && (
                            <div
                              className={`${getSocialColor(
                                link.name
                              )} transition-colors duration-300`}
                            >
                              {getSocialIcon(link.name)}
                            </div>
                          )}
                        </div>

                        {/* Form Fields */}
                        <div className="flex-1 space-y-4">
                          {/* Platform Name Input */}
                          <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                              Platform Name
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., LinkedIn, GitHub, Twitter, Portfolio"
                              value={link.name}
                              onChange={(e) =>
                                updateSocialLink(
                                  link.id,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                            />
                          </div>

                          {/* URL Input */}
                          <div>
                            <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Profile URL
                            </label>
                            <input
                              type="url"
                              placeholder="https://linkedin.com/in/yourprofile"
                              value={link.url}
                              onChange={(e) =>
                                updateSocialLink(link.id, "url", e.target.value)
                              }
                              className={`w-full bg-gray-800/50 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 ${
                                link.url && !isValidUrl(link.url)
                                  ? "border-red-500/50 focus:border-red-500"
                                  : "border-gray-600/50 focus:border-blue-500"
                              }`}
                            />
                            {link.url && !isValidUrl(link.url) && (
                              <p className="text-red-400 text-xs mt-1 flex items-center">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Please enter a valid URL (include https://)
                              </p>
                            )}
                            {link.url && isValidUrl(link.url) && (
                              <p className="text-green-400 text-xs mt-1 flex items-center">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Valid URL format
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeSocialLink(link.id)}
                          className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Preview Link */}
                      {link.name && link.url && isValidUrl(link.url) && (
                        <div className="mt-4 ml-14">
                          <div className="flex items-center space-x-3 p-3 bg-gray-800/30 border border-gray-700/30 rounded-lg">
                            <div className={`${getSocialColor(link.name)}`}>
                              {getSocialIcon(link.name)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-medium text-sm truncate">
                                {link.name}
                              </p>
                              <p className="text-gray-400 text-xs truncate">
                                {link.url}
                              </p>
                            </div>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Add Social Link Button */}
                <button
                  onClick={addSocialLink}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add {resume.socialLinks > 0 && "Another"} Social Link
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.socialLinks.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Links</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {
                      resume.socialLinks.filter(
                        (link) =>
                          link.name.trim() &&
                          link.url.trim() &&
                          isValidUrl(link.url)
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Valid Links</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {
                      resume.socialLinks.filter(
                        (link) =>
                          link.name.toLowerCase().includes("github") ||
                          link.name.toLowerCase().includes("linkedin") ||
                          link.name.toLowerCase().includes("portfolio")
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
}

export default SocialLinksForm;
