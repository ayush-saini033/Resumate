import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template5 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white font-serif text-sm text-gray-800 leading-normal">
      {/* Header */}
      <header className="border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-base font-medium text-gray-700">
          {resumeInfo.jobTitle}
        </p>
        <div className="text-xs text-gray-600 mt-1 space-x-2">
          <span>{resumeInfo.address}</span>
          {resumeInfo.phone && (
            <span>
              •{" "}
              <a href={`tel:${resumeInfo.phone}`} className="underline">
                {resumeInfo.phone}
              </a>
            </span>
          )}
          {resumeInfo.email && (
            <span>
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
                  className="text-blue-700 hover:underline"
                >
                  {link.name}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && <span> • </span>}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      {resumeInfo.summary && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Professional Summary
          </h2>
          <div
            className="ml-3 text-sm  prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Technical Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-y-1 gap-x-6 ml-3">
            {resumeInfo.skills.map((skill, idx) => (
              <div key={skill.id || idx} className="flex justify-between">
                <span>{skill.name}</span>
                {skill.rating !== 0 && (
                  <span className="text-gray-500 text-xs">
                    ({skill.rating}%)
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Professional Experience
          </h2>
          <div className="space-y-4 ml-3">
            {resumeInfo.experience.map((exp) => (
              <div key={exp.id || exp.companyName}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="font-semibold">{exp.companyName}</p>
                    <p className="italic text-sm">{exp.title}</p>
                    {exp.city || exp.state ? (
                      <p className="text-xs text-gray-600">
                        {[exp.city, exp.state].filter(Boolean).join(", ")}
                      </p>
                    ) : null}
                  </div>
                  <p className="text-xs text-gray-600">
                    {exp.startDate} –{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
                <div
                  className="text-sm mt-1 ml-4  prose prose-gray"
                  dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Education
          </h2>
          <div className="space-y-3 ml-3">
            {resumeInfo.education.map((edu) => (
              <div key={edu.id || edu.universityName}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="font-semibold">{edu.universityName}</p>
                    <p className="italic text-sm">
                      {edu.degree} {edu.major && `in ${edu.major}`}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600">
                    {edu.startDate} – {edu.endDate}
                  </p>
                </div>
                <div
                  className="text-sm mt-1 ml-4  prose prose-gray"
                  dangerouslySetInnerHTML={safeHTML(edu.description)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-4 ml-3">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id || cert.name} className="p-2 border rounded">
                <p className="font-medium">{cert.name}</p>
                <p className="text-xs text-gray-600">
                  {cert.authority} | {cert.issueDate}
                  {cert.expiryDate && ` – ${cert.expiryDate}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-xs"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Key Projects
          </h2>
          <div className="space-y-3 ml-3">
            {resumeInfo.projects.map((proj, i) => (
              <div key={proj.id || i}>
                <p className="font-medium">{proj.name}</p>
                <p className="text-sm italic ml-2">{proj.description}</p>
                {proj.liveUrl && (
                  <p className="ml-2 mt-1">
                    <a
                      href={proj.liveUrl}
                      className="text-blue-600 text-xs underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Project
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
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Achievements
          </h2>
          <div className="space-y-3 ml-3">
            {resumeInfo.achievements.map((ach) => (
              <div key={ach.id || ach.title}>
                <div className="flex justify-between">
                  <p className="font-medium">{ach.title}</p>
                  <p className="text-xs text-gray-600">{ach.date}</p>
                </div>
                <div
                  className="italic text-sm mt-1 ml-3  prose prose-gray"
                  dangerouslySetInnerHTML={safeHTML(ach.description)}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-y-1 ml-3 text-sm">
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
        <section className="mb-4">
          <h2 className="text-base font-semibold border-l-4 border-gray-400 pl-2 mb-2">
            Job Preferences
          </h2>
          <div className="ml-3 text-sm space-y-1">
            <p>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </p>
            <p>
              <strong>Preferred Location:</strong>{" "}
              {resumeInfo.preferences.location || "-"}
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

export default Template5;
