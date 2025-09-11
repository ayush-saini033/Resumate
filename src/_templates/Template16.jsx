import useResumeStore from "../store/resumeStore";
import DOMPurify from "dompurify";

const Template16 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume || {};

  const safeHTML = (html) => ({
    __html: DOMPurify.sanitize(html || ""),
  });

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white font-sans text-gray-900 text-xs leading-tight">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight leading-none">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="font-semibold text-gray-700">{resumeInfo.jobTitle}</p>
        <p className="text-gray-600 mt-1">
          {resumeInfo.address}
          {(resumeInfo.phone || resumeInfo.email) && " | "}
          {resumeInfo.phone && (
            <a href={`tel:${resumeInfo.phone}`} className="hover:underline">
              {resumeInfo.phone}
            </a>
          )}
          {resumeInfo.email && (
            <>
              {" | "}
              <a
                href={`mailto:${resumeInfo.email}`}
                className="hover:underline"
              >
                {resumeInfo.email}
              </a>
            </>
          )}
        </p>
      </header>

      {/* Summary */}
      {resumeInfo.summary && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-2 text-xs">
            Summary
          </h2>
          <div
            className="pl-3 prose prose-gray"
            dangerouslySetInnerHTML={safeHTML(resumeInfo.summary)}
          />
        </section>
      )}

      {/* Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-2 text-xs">
            Skills
          </h2>
          <ul className="grid grid-cols-3 gap-x-2 gap-y-1 list-disc list-inside pl-3">
            {resumeInfo.skills.map((skill, i) => (
              <li key={skill.id || i} className="truncate">
                {skill.name} {skill.rating ? `(${skill.rating}%)` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-3 text-xs">
            Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <article key={exp.id || exp.companyName} className="mb-3 pl-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{exp.companyName}</h3>
                <time className="text-gray-600 text-xs whitespace-nowrap">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </time>
              </div>
              <p className="italic text-xs text-gray-700">{exp.title}</p>
              <p className="text-gray-600 text-xs mb-1">
                {[exp.city, exp.state].filter(Boolean).join(", ")}
              </p>
              <div
                className="text-xs text-gray-800 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(exp.workSummary)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-3 text-xs">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <article key={edu.id || edu.universityName} className="mb-3 pl-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm">{edu.universityName}</h3>
                <time className="text-gray-600 text-xs whitespace-nowrap">
                  {edu.startDate} - {edu.endDate}
                </time>
              </div>
              <p className="italic text-xs text-gray-700">
                {edu.degree} {edu.major && `in ${edu.major}`}
              </p>
              <div
                className="text-xs text-gray-800 prose prose-gray"
                dangerouslySetInnerHTML={safeHTML(edu.description)}
              />
            </article>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-3 text-xs">
            Certifications
          </h2>
          <ul className="list-disc list-inside pl-3 text-xs space-y-1">
            {resumeInfo.certifications.map((cert) => (
              <li key={cert.id || cert.name}>
                <strong>{cert.name}</strong> — {cert.authority} |{" "}
                {cert.issueDate}
                {cert.expiryDate && ` - ${cert.expiryDate}`}
                {cert.credentialUrl && (
                  <>
                    {" | "}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
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

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-3 text-xs">
            Languages
          </h2>
          <ul className="list-disc list-inside pl-3 text-xs space-y-1">
            {resumeInfo.languages.map((lang, i) => (
              <li key={lang.id || i}>
                {lang.name} {lang.proficiency ? `(${lang.proficiency})` : ""}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Job Preferences */}
      {resumeInfo.preferences?.jobType && (
        <section className="mb-4">
          <h2 className="uppercase font-semibold border-b border-gray-400 pb-1 mb-2 text-xs">
            Job Preferences
          </h2>
          <dl className="pl-3 text-xs space-y-1">
            <div>
              <dt className="font-semibold inline">Job Type:</dt>{" "}
              <dd className="inline">{resumeInfo.preferences.jobType}</dd>
            </div>
            {resumeInfo.preferences.location && (
              <div>
                <dt className="font-semibold inline">Preferred Location:</dt>{" "}
                <dd className="inline">{resumeInfo.preferences.location}</dd>
              </div>
            )}
            <div>
              <dt className="font-semibold inline">Willing to Relocate:</dt>{" "}
              <dd className="inline">
                {resumeInfo.preferences.relocation ? "Yes" : "No"}
              </dd>
            </div>
          </dl>
        </section>
      )}
    </div>
  );
};

export default Template16;
