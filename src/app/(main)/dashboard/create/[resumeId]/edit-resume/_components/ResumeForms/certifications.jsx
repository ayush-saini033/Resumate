import React from "react";
import { Plus, Minus, Award, Calendar, ExternalLink } from "lucide-react";
import FormHeading from "@//app/(main)/_shared/form-heading";
import useResumeStore from "@/store/resumeStore";

function CertificationForm() {
  const { resume, setResume } = useResumeStore();
  console.log(resume.education);

  const addCertification = () => {
    const newCertification = {
      id: Date.now().toString(),
      name: "",
      authority: "",
      issueDate: "",
      expiryDate: "",
      credentialUrl: "",
    };
    setResume({
      ...resume,
      certifications: [...resume.certifications, newCertification],
    });
  };

  const removeCertification = (id) => {
    if (resume.certifications.length > 0) {
      setResume({
        ...resume,
        certifications: resume.certifications.filter((cert) => cert.id !== id),
      });
    }
  };

  const updateCertification = (id, field, value) => {
    setResume({
      ...resume,
      certifications: resume.certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      ),
    });
  };

  const isValidUrl = (url) => {
    if (!url) return true; // Empty URL is valid (optional field)
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(today.getMonth() + 6);
    return expiry <= sixMonthsFromNow && expiry >= today;
  };

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    return expiry < today;
  };

  return (
    <div className=" relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <FormHeading
            Icon={Award}
            firstHeading={"Professional"}
            secondHeading={"Certifications"}
            subHeading={`Manage and showcase your professional certifications and
                credentials with style.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Certifications List */}
              <div className="space-y-6">
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {resume.certifications.map((cert, index) => (
                    <div
                      key={cert.id}
                      className="group bg-black/40 border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:bg-black/60"
                    >
                      {/* Header with number and remove button */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <h3 className="text-white font-medium text-lg">
                            Certification Details
                          </h3>
                        </div>

                        <button
                          onClick={() => removeCertification(cert.id)}
                          className="flex-shrink-0 w-10 h-10 bg-red-600/20 hover:bg-red-600/40 border border-red-500/30  rounded-xl flex items-center justify-center text-red-400  hover:text-red-300 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Form Fields Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Certification Name */}
                        <div className="md:col-span-2">
                          <label className="text-gray-300 text-sm font-medium mb-2">
                            Certification Name *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., AWS Certified Solutions Architect"
                            value={cert.name}
                            onChange={(e) =>
                              updateCertification(
                                cert.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                          />
                        </div>

                        {/* Issuing Authority */}
                        <div className="md:col-span-2">
                          <label className="text-gray-300 text-sm font-medium mb-2 ">
                            Issuing Authority *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., Amazon Web Services"
                            value={cert.authority}
                            onChange={(e) =>
                              updateCertification(
                                cert.id,
                                "authority",
                                e.target.value
                              )
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                          />
                        </div>

                        {/* Issue Date */}
                        <div>
                          <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Issue Date
                          </label>
                          <input
                            type="date"
                            value={cert.issueDate}
                            onChange={(e) =>
                              updateCertification(
                                cert.id,
                                "issueDate",
                                e.target.value
                              )
                            }
                            className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300"
                          />
                        </div>

                        {/* Expiry Date */}
                        <div>
                          <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Expiry Date
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              value={cert.expiryDate}
                              onChange={(e) =>
                                updateCertification(
                                  cert.id,
                                  "expiryDate",
                                  e.target.value
                                )
                              }
                              className={`w-full bg-gray-800/50 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 ${
                                isExpired(cert.expiryDate)
                                  ? "border-red-500/50 focus:border-red-500"
                                  : isExpiringSoon(cert.expiryDate)
                                  ? "border-yellow-500/50 focus:border-yellow-500"
                                  : "border-gray-600/50 focus:border-blue-500"
                              }`}
                            />
                            {isExpired(cert.expiryDate) && (
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              </div>
                            )}
                            {isExpiringSoon(cert.expiryDate) &&
                              !isExpired(cert.expiryDate) && (
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                                </div>
                              )}
                          </div>
                          {isExpired(cert.expiryDate) && (
                            <p className="text-red-400 text-xs mt-1">
                              This certification has expired
                            </p>
                          )}
                          {isExpiringSoon(cert.expiryDate) &&
                            !isExpired(cert.expiryDate) && (
                              <p className="text-yellow-400 text-xs mt-1">
                                Expires within 6 months
                              </p>
                            )}
                        </div>

                        {/* Credential URL */}
                        <div className="md:col-span-2">
                          <label className="text-gray-300 text-sm font-medium mb-2 flex items-center">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Credential URL (Optional)
                          </label>
                          <input
                            type="url"
                            placeholder="https://example.com/credential"
                            value={cert.credentialUrl}
                            onChange={(e) =>
                              updateCertification(
                                cert.id,
                                "credentialUrl",
                                e.target.value
                              )
                            }
                            className={`w-full bg-gray-800/50 border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 ${
                              cert.credentialUrl &&
                              !isValidUrl(cert.credentialUrl)
                                ? "border-red-500/50 focus:border-red-500"
                                : "border-gray-600/50 focus:border-blue-500"
                            }`}
                          />
                          {cert.credentialUrl &&
                            !isValidUrl(cert.credentialUrl) && (
                              <p className="text-red-400 text-xs mt-1">
                                Please enter a valid URL
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Certification Button */}
                <button
                  onClick={addCertification}
                  className="w-full bg-gray-800/50 hover:bg-gray-700/50 border-2 border-dashed border-gray-600/50 hover:border-blue-500/50 rounded-2xl py-6 px-6 text-gray-400 hover:text-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 group-hover:bg-blue-500/30 rounded-full flex items-center justify-center transition-all duration-300">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    <span className="text-lg font-medium">
                      Add{resume.certifications.length > 0 ? " Another " : " "}
                      Certification
                    </span>
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-gray-800/50">
                <div className="text-center p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {resume.certifications.length}
                  </div>
                  <p className="text-gray-400 text-sm">Total Certs</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {
                      resume.certifications.filter(
                        (cert) => cert.expiryDate && !isExpired(cert.expiryDate)
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Active</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {
                      resume.certifications.filter((cert) =>
                        isExpiringSoon(cert.expiryDate)
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Expiring Soon</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    {
                      resume.certifications.filter((cert) =>
                        isExpired(cert.expiryDate)
                      ).length
                    }
                  </div>
                  <p className="text-gray-400 text-sm">Expired</p>
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

export default CertificationForm;
