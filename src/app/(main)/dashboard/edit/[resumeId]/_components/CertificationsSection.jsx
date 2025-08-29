import React from "react";
import { Plus, Trash2, Award } from "lucide-react";
import useResumeStore from "@/store/resumeStore";

const CertificationsSection = () => {
   const { resume, setResume } = useResumeStore();
   console.log(resume)
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
          certifications: resume.certifications.filter(
            (cert) => cert.id !== id
          ),
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
  return (
    <div className="space-y-6">
      <div className="border-b border-blue-800/30 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-2">
              Certifications
            </h2>
            <p className="text-blue-200/70">
              Add your professional certifications
            </p>
          </div>
          <button
            onClick={addCertification}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            <Plus size={18} />
            Add Certification
          </button>
        </div>
      </div>

      {resume.certifications.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-blue-800/30 rounded-lg">
          <Award size={48} className="mx-auto text-blue-400/50 mb-4" />
          <p className="text-blue-200/70 mb-4">No certifications added yet</p>
          <button
            onClick={addCertification}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
          >
            Add Your First Certification
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resume.certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-black/20 border border-blue-800/30 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-300">
                  Certification #{index + 1}
                </h3>
                <button
                  onClick={() => removeCertification(cert.id)}
                  className="p-2 text-red-400 hover:bg-red-400/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Certification Name
                  </label>
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      updateCertification(cert.id, "name", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="e.g., AWS Certified Solutions Architect"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    value={cert.authority}
                    onChange={(e) =>
                      updateCertification(cert.id, "authority", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-blue-200/40"
                    placeholder="e.g., Amazon Web Services"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    value={cert.issueDate}
                    onChange={(e) =>
                      updateCertification(cert.id, "issueDate", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Expiry Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={cert.expiryDate}
                    onChange={(e) =>
                      updateCertification(cert.id, "expiryDate", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-blue-300 mb-2">
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
                    className="w-full px-4 py-3 bg-black/30 border border-blue-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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

export default CertificationsSection;
