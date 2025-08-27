import useResumeStore from "../../../../store/resumeStore";

const Template13 = () => {
   const { resume } = useResumeStore();
   const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-mono text-black text-sm shadow-lg rounded-lg">
      {/* Header */}
      <div className="border-4 border-black p-6 mb-8 rounded-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3 tracking-widest">
            {resumeInfo.firstName.toUpperCase()}{" "}
            {resumeInfo.lastName.toUpperCase()}
          </h1>
          <div className="border-t border-b border-black py-3 mb-3">
            <p className="text-lg font-bold">
              {resumeInfo.jobTitle.toUpperCase()}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-1 text-xs text-gray-900">
            <p>{resumeInfo.address}</p>
            <p>
              {resumeInfo.phone} | {resumeInfo.email}
            </p>
            <div className="mt-2">
              {resumeInfo.socialLinks.map((link, index) => (
                <span key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    {link.name}
                  </a>
                  {index < resumeInfo.socialLinks.length - 1 && " | "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Profile */}
      <Section title="PROFESSIONAL PROFILE">
        <p className="text-xs leading-relaxed text-justify">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Technical Skills with Rating Bars */}
      <Section title="TECHNICAL SKILLS">
        <div className="space-y-4 max-w-xl mx-auto">
          {resumeInfo.skills.map((skill) => (
            <SkillRating key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Work Experience */}
      <Section title="WORK EXPERIENCE">
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-6 border-l-4 border-black pl-4">
            <div className="grid grid-cols-2 mb-2">
              <div>
                <h3 className="font-bold text-base">{exp.title}</h3>
                <p className="text-sm font-semibold">{exp.companyName}</p>
              </div>
              <div className="text-right text-xs text-gray-800">
                <p>
                  {exp.city}, {exp.state}
                </p>
                <p>
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
              className="ml-6 text-xs leading-relaxed"
            />
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="EDUCATION">
        <div className="grid grid-cols-2 gap-5">
          {resumeInfo.education.map((edu) => (
            <div key={edu.id} className="border border-black p-3 rounded-sm">
              <h3 className="font-bold text-xs">{edu.degree}</h3>
              <p className="text-xs font-semibold">{edu.major}</p>
              <p className="text-xs">{edu.universityName}</p>
              <p className="text-xs">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="PROJECTS">
        <div className="grid grid-cols-1 gap-4">
          {resumeInfo.projects.map((project, index) => (
            <div key={index} className="border border-black p-3 rounded-sm">
              <h3 className="font-bold text-xs">{project.name}</h3>
              <p className="text-xs">{project.description}</p>
              {project.liveUrl && (
                <p className="text-xs mt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-base font-bold mb-3 text-center border-b-2 border-black pb-1">
      {title}
    </h2>
    {children}
  </section>
);

const SkillRating = ({ skill }) => {
  // rating out of 100, capped
  const rating = Math.min(Math.max(skill.rating || 0, 0), 100);

  return (
    <div className="flex items-center space-x-4">
      <span className="w-28 font-semibold text-gray-900">{skill.name}</span>
      <div className="flex-1 h-4 bg-gray-300 rounded-full overflow-hidden shadow-inner">
        <div
          className="bg-black h-4 rounded-full transition-all duration-500"
          style={{ width: `${rating}%` }}
        />
      </div>
      <span className="w-12 text-right font-mono font-semibold">{rating}%</span>
    </div>
  );
};

export default Template13;
