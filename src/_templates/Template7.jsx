import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template7 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white text-gray-900 font-sans text-sm leading-relaxed">
      {/* HEADER */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="italic text-sm mt-1">{resumeInfo.jobTitle}</p>
        <p className="text-xs text-gray-700 mt-2">
          {resumeInfo.address}
          {resumeInfo.phone && (
            <>
              {" "}
              •{" "}
              <a href={`tel:${resumeInfo.phone}`} className="underline">
                {resumeInfo.phone}
              </a>
            </>
          )}
          {resumeInfo.email && (
            <>
              {" "}
              •{" "}
              <a href={`mailto:${resumeInfo.email}`} className="underline">
                {resumeInfo.email}
              </a>
            </>
          )}
        </p>
        {resumeInfo.socialLinks?.length > 0 && (
          <p className="text-xs text-gray-700 mt-1">
            {resumeInfo.socialLinks.map((link, i) => (
              <span key={link.id || i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {link.name}
                </a>
                {i < resumeInfo.socialLinks.length - 1 && <> • </>}
              </span>
            ))}
          </p>
        )}
      </header>

      {/* PROFESSIONAL SUMMARY */}
      {resumeInfo.summary && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Professional Summary</h2>
          <div
            className="mt-1  prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* SKILLS */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Skills</h2>
          <div
            className={`grid gap-x-4 gap-y-2 mt-1 ${
              resumeInfo.skills.length >= 12 ? "grid-cols-4" : "grid-cols-3"
            }`}
          >
            {resumeInfo.skills.map((skill, idx) => (
              <div
                key={skill.id || idx}
                className="flex justify-between items-center"
              >
                <span>{skill.name}</span>
                {typeof skill.rating === "number" && skill.rating > 0 && (
                  <span className="text-xs text-gray-600">
                    ({skill.rating}%)
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PROFESSIONAL EXPERIENCE */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Work Experience</h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id || exp.companyName} className="mt-3">
              <p className="font-medium">
                {exp.title} — {exp.companyName}
              </p>
              <p className="text-xs text-gray-700">
                {[exp.city, exp.state].filter(Boolean).join(", ")} •{" "}
                {exp.startDate} –{" "}
                {exp.currentlyWorking ? "Present" : exp.endDate}
              </p>
              <div
                className="mt-1 text-sm prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </div>
          ))}
        </section>
      )}

      {/* EDUCATION */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Education</h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id || edu.universityName} className="mt-3">
              <p className="font-medium">{edu.universityName}</p>
              <p className="text-xs text-gray-700">
                {edu.degree}
                {edu.major ? ` in ${edu.major}` : ""} • {edu.startDate} –{" "}
                {edu.endDate}
              </p>
              <div
                className="mt-1 prose prose-gray text-sm"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </div>
          ))}
        </section>
      )}

      {/* CERTIFICATIONS */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Certifications</h2>
          <ul className="list-disc list-inside mt-1 text-sm">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name} className="mt-1">
                <span className="font-medium">{cert.name}</span> —{" "}
                {cert.authority} ({cert.issueDate}
                {cert.expiryDate ? ` – ${cert.expiryDate}` : ""})
                {cert.credentialUrl && (
                  <>
                    {" "}
                    •{" "}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      View
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
          <h2 className="font-semibold uppercase">Projects</h2>
          <ul className="mt-1 text-sm space-y-2">
            {resumeInfo.projects.map((proj, i) => (
              <li key={proj.id || i}>
                <span className="font-medium">{proj.name}</span> —{" "}
                <span className="italic">{proj.description}</span>
                {proj.liveUrl && (
                  <>
                    {" "}
                    •{" "}
                    <a
                      href={proj.liveUrl}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ACHIEVEMENTS */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Achievements</h2>
          <ul className="list-disc list-inside mt-1 text-sm space-y-1">
            {resumeInfo.achievements.map((ach) => (
              <li key={ach.id || ach.title}>
                <span className="font-medium">{ach.title}</span> —{" "}
                <span className="text-xs text-gray-700">{ach.date}</span>
                <div
                  className="mt-1 ml-4 prose prose-gray text-sm"
                  dangerouslySetInnerHTML={safeHTML(ach.description)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* LANGUAGES */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Languages</h2>
          <div className="grid grid-cols-3 gap-x-4 mt-1 text-sm">
            {resumeInfo.languages.map((lang, i) => (
              <div key={lang.id || i}>
                {lang.name}
                {lang.proficiency && ` (${lang.proficiency})`}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* JOB PREFERENCES */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-5">
          <h2 className="font-semibold uppercase">Job Preferences</h2>
          <p className="mt-1 text-sm">
            <strong>Job Type:</strong> {resumeInfo.preferences.jobType}
          </p>
          <p className="mt-1 text-sm">
            <strong>Preferred Location:</strong>{" "}
            {resumeInfo.preferences.location || "N/A"}
          </p>
          <p className="mt-1 text-sm">
            <strong>Relocation:</strong>{" "}
            {resumeInfo.preferences.relocation ? "Yes" : "No"}
          </p>
        </section>
      )}
    </div>
  );
};

export default Template7;
