import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template2 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white text-gray-900 font-serif leading-tight">
      {/* Header */}
      <header className="text-center mb-4 pb-2 border-b">
        <h1 className="text-2xl font-bold">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="text-md italic mt-1">{resumeInfo.jobTitle || ""}</p>
        <p className="text-sm mt-1">
          {resumeInfo.address || ""}
          {resumeInfo.phone && (
            <>
              {" "}
              | <a href={`tel:${resumeInfo.phone}`}>{resumeInfo.phone}</a>
            </>
          )}
          {resumeInfo.email && (
            <>
              {" "}
              | <a href={`mailto:${resumeInfo.email}`}>{resumeInfo.email}</a>
            </>
          )}
        </p>
        {(resumeInfo.socialLinks || []).length > 0 && (
          <p className="text-sm mt-1">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a
                  href={link.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name || "Link"}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && " • "}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg border-b pb-1">
            Professional Summary
          </h2>
          <div
            className="prose text-sm mt-1"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills */}
      {(resumeInfo.skills || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg">Technical Competencies</h2>
          <div className="text-sm mt-1">
            {resumeInfo.skills.map((skill, idx) => (
              <span key={skill.id || idx} className="mr-2 mb-1 inline-block">
                {skill.name}
                {skill.rating ? ` (${skill.rating}%)` : ""}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {(resumeInfo.experience || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg border-b pb-1">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mt-2">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{exp.companyName || ""}</p>
                  <p className="text-sm italic">{exp.title || ""}</p>
                </div>
                <div className="text-sm text-gray-700 text-right">
                  <p>{[exp.city, exp.state].filter(Boolean).join(", ")}</p>
                  <p>
                    {exp.startDate || ""} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate || ""}
                  </p>
                </div>
              </div>
              <div
                className="prose text-sm mt-1 ml-4"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {(resumeInfo.education || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg border-b pb-1">Education</h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mt-2">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{edu.universityName || ""}</p>
                  <p className="text-sm italic">
                    {edu.degree || ""}
                    {edu.major ? ` in ${edu.major}` : ""}
                  </p>
                </div>
                <p className="text-sm text-gray-700">
                  {edu.startDate || ""} – {edu.endDate || ""}
                </p>
              </div>
              <div
                className="text-sm mt-1 ml-4"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {(resumeInfo.certifications || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg">Certifications</h2>
          {resumeInfo.certifications.map((cert) => (
            <div key={cert.id || cert.name} className="mt-1 ml-4">
              <p className="font-semibold">{cert.name || ""}</p>
              <p className="text-sm">
                {cert.authority || ""} | {cert.issueDate || ""}
                {cert.expiryDate ? ` – ${cert.expiryDate}` : ""}
              </p>
              {cert.credentialUrl && (
                <p className="text-sm">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    View Certificate
                  </a>
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {(resumeInfo.projects || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg">Key Projects</h2>
          {resumeInfo.projects.map((proj, idx) => (
            <div key={proj.id || idx} className="mt-1 ml-4">
              <p className="font-semibold">{proj.name || ""}</p>
              <p className="text-sm italic">{proj.description || ""}</p>
              {proj.liveUrl && (
                <p className="text-sm">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    View Project
                  </a>
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {(resumeInfo.achievements || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg">Achievements</h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="mt-1 ml-4">
              <div className="flex justify-between">
                <p className="font-semibold">{ach.title || ""}</p>
                <p className="text-sm text-gray-700">{ach.date || ""}</p>
              </div>
              <div
                className="text-sm italic mt-1"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {(resumeInfo.languages || []).length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg border-b pb-1">Languages</h2>
          <p className="text-sm mt-1 ml-4">
            {resumeInfo.languages.map((lang, i) => (
              <span key={lang.id || i} className="mr-2">
                {lang.name}
                {lang.proficiency ? ` (${lang.proficiency})` : ""}
              </span>
            ))}
          </p>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-3">
          <h2 className="font-semibold text-lg border-b pb-1">
            Job Preferences
          </h2>
          <div className="text-sm mt-1 ml-4">
            <p>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </p>
            <p>
              <strong>Preferred Location:</strong>{" "}
              {resumeInfo.preferences.location || ""}
            </p>
            <p>
              <strong>Willing to Relocate:</strong>{" "}
              {resumeInfo.preferences.relocation ? "Yes" : "No"}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Template2;
