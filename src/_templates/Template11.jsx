import useResumeStore from "../store/resumeStore";
const Template11 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black text-sm leading-normal">
      {/* Header - Simple and Clean */}
      <header className="mb-8 pb-4 border-b border-gray-400">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          {resumeInfo.jobTitle}
        </h2>
        <div className="text-sm text-gray-600 mb-2">
          <p>{resumeInfo.address}</p>
          <p className="mt-1">
            {resumeInfo.phone} • {resumeInfo.email}
          </p>
        </div>
        {resumeInfo.socialLinks && resumeInfo.socialLinks.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm mt-2">
            {resumeInfo.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Professional Summary */}
      <Section title="PROFESSIONAL SUMMARY">
        <p className="text-gray-800 leading-relaxed">{resumeInfo.summery}</p>
      </Section>

      {/* Technical Skills - Simple List Format */}
      <Section title="TECHNICAL SKILLS">
        <div className="space-y-2">
          {resumeInfo.skills.map((skill, index) => (
            <div
              key={skill.id || index}
              className="flex justify-between items-center border-b border-gray-200 pb-1"
            >
              <span className="font-medium text-gray-800">{skill.name}</span>
              <span className="text-sm text-gray-600">
                {getSkillLevel(skill.rating)}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Professional Experience - Left Aligned */}
      <Section title="PROFESSIONAL EXPERIENCE">
        {resumeInfo.experience.map((exp, index) => (
          <div key={exp.id || index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900">
                  {exp.title}
                </h3>
                <h4 className="text-sm font-semibold text-gray-700">
                  {exp.companyName}
                </h4>
              </div>
              <div className="text-right text-sm text-gray-600 ml-4">
                <p className="font-medium">
                  {exp.city}, {exp.state}
                </p>
                <p>
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
              </div>
            </div>
            <div
              className="text-gray-800 leading-relaxed ml-0"
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
            />
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        {resumeInfo.education.map((edu, index) => (
          <div key={edu.id || index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900">
                  {edu.degree} in {edu.major}
                </h3>
                <h4 className="text-sm font-semibold text-gray-700">
                  {edu.universityName}
                </h4>
                {edu.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {edu.description}
                  </p>
                )}
              </div>
              <div className="text-right text-sm text-gray-600 ml-4">
                <p className="font-medium">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Section>

      {/* Projects */}
      {resumeInfo.projects && resumeInfo.projects.length > 0 && (
        <Section title="KEY PROJECTS">
          {resumeInfo.projects.map((project, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-bold text-gray-900 flex-1">
                  {project.name}
                </h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm font-medium ml-4"
                  >
                    View Project
                  </a>
                )}
              </div>
              <p className="text-gray-800 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </Section>
      )}

      {/* Additional Sections for FAANG Requirements */}
      <Section title="CERTIFICATIONS & ACHIEVEMENTS">
        <div className="text-sm text-gray-500 italic">
          Add relevant certifications, awards, publications, or notable
          achievements here
        </div>
      </Section>

      <Section title="LANGUAGES">
        <div className="text-sm text-gray-500 italic">
          List programming languages and spoken languages with proficiency
          levels
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-6 last:mb-0">
    <h2 className="text-base font-bold text-gray-900 mb-3 pb-1 border-b border-gray-300 uppercase tracking-wide">
      {title}
    </h2>
    <div>{children}</div>
  </section>
);

// Helper function to convert skill rating to text
const getSkillLevel = (rating) => {
  if (!rating) return "Proficient";
  if (rating >= 90) return "Expert";
  if (rating >= 75) return "Advanced";
  if (rating >= 50) return "Intermediate";
  return "Beginner";
};

export default Template11;
