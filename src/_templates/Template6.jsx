import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template6 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};
  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white font-serif text-gray-900 text-sm leading-relaxed tracking-normal">
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-sm font-medium">{resumeInfo.jobTitle}</p>
        <div className="text-xs text-gray-700 mt-1 space-y-0.5">
          <p>{resumeInfo.address}</p>
          <p>
            {resumeInfo.email && (
              <a href={`mailto:${resumeInfo.email}`} className="underline">
                {resumeInfo.email}
              </a>
            )}
            {resumeInfo.phone && (
              <>
                {" "}
                |{" "}
                <a href={`tel:${resumeInfo.phone}`} className="underline">
                  {resumeInfo.phone}
                </a>
              </>
            )}
          </p>
          {resumeInfo.socialLinks?.length > 0 && (
            <p className="flex flex-wrap gap-2">
              {resumeInfo.socialLinks.map((link, i) => (
                <a
                  key={link.id || i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline text-xs"
                >
                  {link.name}
                </a>
              ))}
            </p>
          )}
        </div>
      </header>

      {/* PROFESSIONAL SUMMARY */}
      {resumeInfo.summary && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">
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
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">
            Technical Skills
          </h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-6">
            {resumeInfo.skills.map((skill, idx) => (
              <li key={skill.id || idx}>
                {skill.name}
                {skill.rating ? ` (${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* EXPERIENCE */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mb-3">
              <h3 className="font-semibold text-sm">
                {exp.title} — {exp.companyName}
              </h3>
              <p className="text-xs text-gray-700">
                {[exp.city, exp.state].filter(Boolean).join(", ")} |{" "}
                {exp.startDate} –{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
              <div
                className="mt-1 text-sm  prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">Education</h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mb-2">
              <h3 className="font-semibold text-sm">{edu.universityName}</h3>
              <p className="text-xs text-gray-700">
                {edu.degree} {edu.major && `in ${edu.major}`} | {edu.startDate}{" "}
                – {edu.endDate}
              </p>
              <div
                className="mt-1 text-sm  prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICATIONS */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name}>
                <span className="font-medium">{cert.name}</span> —{" "}
                {cert.authority} ({cert.issueDate}
                {cert.expiryDate ? ` - ${cert.expiryDate}` : ""})
                {cert.credentialUrl && (
                  <>
                    {" "}
                    |{" "}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline text-xs"
                    >
                      View Certificate
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* PROJECTS */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">Projects</h2>
          <ul className="space-y-2">
            {resumeInfo.projects.map((project, i) => (
              <li key={project.id || i}>
                <strong>{project.name}</strong> —{" "}
                <span className="italic">{project.description}</span>
                {project.liveUrl && (
                  <span className="ml-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline text-xs"
                    >
                      Live Link
                    </a>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ACHIEVEMENTS */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">Achievements</h2>
          <ul className="list-disc list-inside">
            {resumeInfo.achievements.map((ach) => (
              <li key={ach.id || ach.title}>
                <strong>{ach.title}</strong> — <em>{ach.date}</em>
                <div
                  dangerouslySetInnerHTML={safeHTML(ach.description)}
                  className="ml-4  prose prose-gray"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* LANGUAGES */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase text-sm mb-1">Languages</h2>
          <ul className="list-disc list-inside">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name} {lang.proficiency && `(${lang.proficiency})`}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* JOB PREFERENCES */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-2">
          <h2 className="font-semibold uppercase text-sm mb-1">
            Job Preferences
          </h2>
          <ul className="list-inside list-disc">
            <li>
              <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
            </li>
            <li>
              <strong>Location:</strong>{" "}
              {resumeInfo.preferences.location || "N/A"}
            </li>
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

export default Template6;
