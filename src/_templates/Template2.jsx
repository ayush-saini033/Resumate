import useResumeStore from "../store/resumeStore";

const Template2 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-serif text-black shadow-md border border-gray-300 rounded-lg">
      {/* Header */}
      <header className="text-center mb-12 border-b-4 border-black pb-6">
        <h1 className="text-5xl font-bold uppercase tracking-wide">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-2xl mt-3 mb-4 font-semibold text-gray-700">
          {resumeInfo.jobTitle}
        </p>
        <div className="text-base text-gray-700 space-y-1">
          <p>{resumeInfo.address}</p>
          <p>
            {resumeInfo.phone} | {resumeInfo.email}
          </p>
          <div className="flex justify-center gap-6 mt-3 flex-wrap">
            {resumeInfo.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {resumeInfo.summary && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-4">
            Professional Summary
          </h2>
          <div
            className="prose prose-gray max-w-none text-base text-black leading-relaxed"
            dangerouslySetInnerHTML={{ __html: resumeInfo.summary }}
          />
        </section>
      )}

      {/* Professional Experience */}
      {resumeInfo.experience?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Professional Experience
          </h2>
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id} className="mb-8">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-semibold text-xl">{exp.title}</h3>
                <span className="text-sm font-medium text-gray-600">
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </span>
              </div>
              <p className="font-medium mb-2 text-gray-700">
                {exp.companyName}, {exp.city}, {exp.state}
              </p>
              <div
                className="ml-6 prose prose-gray max-w-none text-base text-black"
                dangerouslySetInnerHTML={{ __html: exp.workSummary }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resumeInfo.education?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Education
          </h2>
          {resumeInfo.education.map((edu) => (
            <div key={edu.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-lg">
                  {edu.degree} in {edu.major}
                </h3>
                <span className="text-sm font-medium text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <p className="font-medium mb-1 text-gray-700">
                {edu.universityName}
              </p>
              <div
                className="prose prose-gray max-w-none text-base text-black"
                dangerouslySetInnerHTML={{ __html: edu.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {resumeInfo.certifications?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {resumeInfo.certifications.map((cert) => (
              <div key={cert.id} className="mb-4">
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-sm text-gray-700">
                  {cert.authority} | {cert.issueDate} -{" "}
                  {cert.expiryDate || "No Expiry"}
                </p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Skills */}
      {resumeInfo.skills?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
            {resumeInfo.skills.map((skill, index) => {
              const radius = 20;
              const circumference = 2 * Math.PI * radius;
              const progress = (skill.rating / 10) * circumference;
              const dashOffset = circumference - progress;

              return (
                <div
                  key={skill.id || index}
                  className="flex items-center gap-4"
                >
                  <svg className="w-14 h-14" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="5"
                      fill="none"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#2563eb"
                      strokeWidth="5"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      transform="rotate(-90 25 25)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#1e40af"
                      fontWeight="700"
                    >
                      {skill.rating}
                    </text>
                  </svg>
                  <span className="text-base font-medium text-gray-800">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Projects */}
      {resumeInfo.projects?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Projects
          </h2>
          {resumeInfo.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
              <p className="text-gray-700 mb-1 italic">{project.description}</p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Live URL
                </a>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {resumeInfo.achievements?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Achievements
          </h2>
          {resumeInfo.achievements.map((ach) => (
            <div key={ach.id} className="mb-4">
              <h3 className="font-semibold text-lg">{ach.title}</h3>
              <p className="text-sm text-gray-600">{ach.date}</p>
              <div
                className="prose prose-gray max-w-none text-base text-black"
                dangerouslySetInnerHTML={{ __html: ach.description }}
              />
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {resumeInfo.languages?.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-base text-gray-800">
            {resumeInfo.languages.map((lang, index) => (
              <div key={index} className="flex items-center">
                <span className="font-medium">{lang.name}</span>
                <span className="ml-2 text-gray-600 italic">
                  ({lang.proficiency})
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Preferences */}
      {resumeInfo.preferences && (
        <section>
          <h2 className="text-2xl font-bold uppercase border-b-2 border-black pb-2 mb-6">
            Preferences
          </h2>
          <p>
            <span className="font-semibold">Job Type:</span>{" "}
            {resumeInfo.preferences.jobType}
          </p>
          <p>
            <span className="font-semibold">Preferred Location:</span>{" "}
            {resumeInfo.preferences.location}
          </p>
          <p>
            <span className="font-semibold">Open to Relocation:</span>{" "}
            {resumeInfo.preferences.relocation ? "Yes" : "No"}
          </p>
        </section>
      )}
    </div>
  );
};

export default Template2;
