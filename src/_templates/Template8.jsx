import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template8 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-8 bg-white font-serif text-gray-900 leading-relaxed text-sm">
      {/* Header */}
      <header className="mb-4 border-b border-gray-400 pb-4 text-center">
        <h1 className="text-3xl font-bold tracking-wide">
          {resumeInfo.firstName || ""} {resumeInfo.lastName || ""}
        </h1>
        <p className="mt-1 font-medium">{resumeInfo.jobTitle || ""}</p>
        <p className="mt-1 text-gray-700">
          {resumeInfo.address || ""}
          {(resumeInfo.phone || resumeInfo.email) && " | "}
          {resumeInfo.phone && (
            <a href={`tel:${resumeInfo.phone}`} className="hover:underline">
              {resumeInfo.phone}
            </a>
          )}
          {resumeInfo.phone && resumeInfo.email && " | "}
          {resumeInfo.email && (
            <a href={`mailto:${resumeInfo.email}`} className="hover:underline">
              {resumeInfo.email}
            </a>
          )}
        </p>
        {resumeInfo.socialLinks?.length > 0 && (
          <p className="mt-1 text-blue-700 text-sm">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a
                  href={link.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.name || "Link"}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && " • "}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* PROFESSIONAL SUMMARY */}
      {resumeInfo.summary && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-2">
            Professional Summary
          </h2>
          <div
            className=" prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* TECHNICAL SKILLS */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-1">
            {resumeInfo.skills.map((skill, i) => (
              <li key={skill.id || i}>
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PROFESSIONAL EXPERIENCE */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mb-4 ml-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{exp.companyName || ""}</h3>
                  <p className="italic text-gray-700">{exp.title || ""}</p>
                </div>
                <div className="text-sm text-gray-600 whitespace-nowrap">
                  <p>{[exp.city, exp.state].filter(Boolean).join(", ")}</p>
                  <p>
                    {exp.startDate || ""} -{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate || ""}
                  </p>
                </div>
              </div>
              <div
                className="mt-1 ml-2 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mb-4 ml-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{edu.universityName || ""}</h3>
                  <p className="italic text-gray-700">
                    {edu.degree || ""} {edu.major && `in ${edu.major}`}
                  </p>
                </div>
                <p className="text-sm text-gray-600 whitespace-nowrap">
                  {edu.startDate || ""} - {edu.endDate || ""}
                </p>
              </div>
              <div
                className="mt-1 ml-2 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICATIONS */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Certifications
          </h2>
          <ul className="ml-4 space-y-2">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name}>
                <p className="font-semibold">{cert.name || ""}</p>
                <p className="text-gray-700 text-sm">
                  {cert.authority || ""} | {cert.issueDate || ""}{" "}
                  {cert.expiryDate && `- ${cert.expiryDate}`}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-xs"
                  >
                    View Certificate
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PROJECTS */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Key Projects
          </h2>
          {resumeInfo.projects.map((project, i) => (
            <div key={project.id || i} className="mb-4 ml-4">
              <h3 className="font-semibold">{project.name || ""}</h3>
              <p className="italic text-gray-700 text-sm">
                {project.description || ""}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-xs"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* ACHIEVEMENTS */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id || ach.title} className="mb-4 ml-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{ach.title || ""}</h3>
                <p className="text-gray-600 text-xs">{ach.date || ""}</p>
              </div>
              <p
                className="italic text-gray-700 mt-1 ml-2 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(ach.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* LANGUAGES */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Languages
          </h2>
          <ul className="list-disc list-inside ml-4 flex flex-wrap gap-x-6 gap-y-1">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i} className="mr-4">
                <span className="font-medium">{lang.name}</span>
                {lang.proficiency && (
                  <span className="italic text-gray-700 text-xs ml-1">
                    ({lang.proficiency})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* JOB PREFERENCES */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-6">
          <h2 className="border-b border-gray-400 font-semibold uppercase pb-1 mb-4">
            Job Preferences
          </h2>
          <ul className="ml-4 space-y-1 text-gray-700">
            <li>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </li>
            {resumeInfo.preferences.location && (
              <li>
                <strong>Preferred Location:</strong>{" "}
                {resumeInfo.preferences.location}
              </li>
            )}
            <li>
              <strong>Willing to Relocate:</strong>{" "}
              {resumeInfo.preferences.relocation ? "Yes" : "No"}
            </li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default Template8;
