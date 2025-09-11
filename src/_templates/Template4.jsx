import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template4 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto px-6 py-5 bg-white text-gray-800 font-serif text-sm leading-relaxed shadow-sm">
      {/* Header */}
      <header className="text-center mb-4 border-b pb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="text-base italic mt-1">{resumeInfo.jobTitle || ""}</p>
        <div className="text-xs text-gray-600 mt-2">
          <span>{resumeInfo.address || ""}</span>
          {resumeInfo.phone && (
            <span>
              {" "}
              •{" "}
              <a href={`tel:${resumeInfo.phone}`} className="underline">
                {resumeInfo.phone}
              </a>
            </span>
          )}
          {resumeInfo.email && (
            <span>
              {" "}
              •{" "}
              <a href={`mailto:${resumeInfo.email}`} className="underline">
                {resumeInfo.email}
              </a>
            </span>
          )}
        </div>
        {resumeInfo.socialLinks?.length > 0 && (
          <div className="mt-1 text-xs">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {link.name}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && <span> · </span>}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Summary
          </h2>
          <div
            className="ml-2  prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-2 ml-2">
            {resumeInfo.skills.map((skill, idx) => (
              <div key={skill.id || idx} className="flex justify-between">
                <span>{skill.name}</span>
                {skill.rating ? (
                  <span className="text-gray-500">({skill.rating}%)</span>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Experience
          </h2>
          <div className="space-y-3">
            {resumeInfo.experience.map((exp) => (
              <div key={exp.id || exp.companyName} className="ml-2">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium">{exp.companyName}</p>
                  <p className="text-xs text-gray-600">
                    {exp.startDate} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
                <p className="italic text-sm ml-2">{exp.title}</p>
                {exp.city || exp.state ? (
                  <p className="text-xs ml-2 text-gray-600">
                    {[exp.city, exp.state].filter(Boolean).join(", ")}
                  </p>
                ) : null}
                <div
                  className="ml-4  prose prose-gray text-sm mt-1  prose prose-gray"
                  dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Education
          </h2>
          <div className="space-y-3">
            {resumeInfo.education.map((edu) => (
              <div key={edu.id || edu.universityName} className="ml-2">
                <div className="flex justify-between items-baseline">
                  <p className="font-medium">{edu.universityName}</p>
                  <p className="text-xs text-gray-600">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
                <p className="italic text-sm ml-2">
                  {edu.degree}
                  {edu.major ? ` in ${edu.major}` : ""}
                </p>
                <div
                  className="ml-4  prose prose-gray text-sm mt-1"
                  dangerouslySetInnerHTML={safeHTML(edu.description)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-3 ml-2">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id || cert.name} className="p-2 border rounded-sm">
                <p className="font-medium">{cert.name}</p>
                <p className="text-xs text-gray-600">
                  {cert.authority} | {cert.issueDate}
                  {cert.expiryDate ? ` – ${cert.expiryDate}` : ""}
                </p>
                {cert.credentialUrl && (
                  <p className="mt-1">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-600 underline"
                    >
                      Certificate
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Projects
          </h2>
          <div className="space-y-3 ml-2">
            {resumeInfo.projects.map((proj, idx) => (
              <div key={proj.id || idx}>
                <p className="font-medium">{proj.name}</p>
                <p className="italic text-sm ml-2">{proj.description}</p>
                {proj.liveUrl && (
                  <p className="text-xs ml-2 mt-1">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      View Live
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Achievements
          </h2>
          <div className="space-y-3 ml-2">
            {resumeInfo.achievements.map((ach) => (
              <div key={ach.id || ach.title}>
                <div className="flex justify-between items-baseline">
                  <p className="font-medium">{ach.title}</p>
                  <p className="text-xs text-gray-600">{ach.date}</p>
                </div>
                <div
                  className="italic  prose prose-gray text-sm ml-4 mt-1"
                  dangerouslySetInnerHTML={safeHTML(ach.description)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-3">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Languages
          </h2>
          <div className="grid grid-cols-2 ml-2 gap-y-1 text-sm">
            {resumeInfo.languages.map((lang, i) => (
              <div key={lang.id || i}>
                {lang.name} {lang.proficiency && `(${lang.proficiency})`}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Job Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-1">
          <h2 className="font-semibold text-base uppercase border-b pb-1 mb-2">
            Preferences
          </h2>
          <div className="ml-2 text-sm space-y-1">
            <p>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </p>
            <p>
              <strong>Location:</strong>{" "}
              {resumeInfo.preferences.location || "-"}
            </p>
            <p>
              <strong>Relocate:</strong>{" "}
              {resumeInfo.preferences.relocation ? "Yes" : "No"}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Template4;
