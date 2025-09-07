import useResumeStore from "../store/resumeStore";

const Template10 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-mono text-black text-xs rounded-lg shadow-md border border-gray-300">
      {/* Header */}
      <div className="text-center mb-6 border border-black p-4 rounded-md bg-gray-100">
        <h1 className="text-2xl font-bold mb-1 tracking-widest">
          {resumeInfo.firstName.toUpperCase()}{" "}
          {resumeInfo.lastName.toUpperCase()}
        </h1>
        <p className="text-sm font-bold mb-3 tracking-wide text-gray-700">
          {resumeInfo.jobTitle.toUpperCase()}
        </p>
        <div className="grid grid-cols-3 gap-3 text-xs text-gray-800">
          <p>{resumeInfo.phone}</p>
          <p>{resumeInfo.email}</p>
          <p>{resumeInfo.address}</p>
        </div>
        <div className="mt-3 text-xs">
          {resumeInfo.socialLinks.map((link, index) => (
            <span key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline font-semibold"
              >
                {link.name}
              </a>
              {index < resumeInfo.socialLinks.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>

      {/* Executive Summary */}
      <SectionWrapper bg="bg-gray-50" title="EXECUTIVE SUMMARY">
        <p className="leading-tight text-justify text-gray-900">
          {resumeInfo.summery}
        </p>
      </SectionWrapper>

      {/* Technical Expertise */}
      <SectionWrapper bg="bg-gray-100" title="TECHNICAL EXPERTISE">
        <div className="grid grid-cols-3 gap-4">
          {resumeInfo.skills.map((skill) => (
            <SkillCircleRating key={skill.id} skill={skill} />
          ))}
        </div>
      </SectionWrapper>

      {/* Career History */}
      <SectionWrapper bg="bg-gray-50" title="CAREER HISTORY">
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-5 border-l-4 border-black pl-4">
            <div className="grid grid-cols-2 mb-1">
              <div>
                <h3 className="font-bold text-sm">{exp.title}</h3>
                <p className="font-semibold">{exp.companyName}</p>
              </div>
              <div className="text-right text-xs text-gray-600">
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
              className="ml-8 text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
            />
          </div>
        ))}
      </SectionWrapper>

      {/* Academic Credentials */}
      <SectionWrapper bg="bg-gray-100" title="ACADEMIC CREDENTIALS">
        <div className="grid grid-cols-2 gap-6">
          {resumeInfo.education.map((edu) => (
            <div
              key={edu.id}
              className="border p-3 rounded-md shadow-sm bg-white"
            >
              <h3 className="font-bold text-sm mb-1">
                {edu.degree} - {edu.major}
              </h3>
              <p className="font-semibold mb-1">{edu.universityName}</p>
              <p className="text-xs mb-2 text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-xs italic text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Portfolio Projects */}
      <SectionWrapper bg="bg-gray-50" title="PORTFOLIO PROJECTS">
        <div className="space-y-3">
          {resumeInfo.projects.map((project, index) => (
            <div
              key={index}
              className="border p-3 rounded-md shadow-sm bg-white"
            >
              <h3 className="font-bold mb-1 text-sm">{project.name}</h3>
              <p className="leading-tight mb-1 text-gray-900">
                {project.description}
              </p>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:underline text-xs"
                >
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

const SectionWrapper = ({ title, bg, children }) => (
  <section className={`${bg} p-5 mb-6 rounded-md shadow-inner`}>
    <h2 className="font-bold text-sm mb-3 bg-black text-white px-3 py-1 inline-block rounded">
      {title}
    </h2>
    {children}
  </section>
);

const SkillCircleRating = ({ skill }) => {
  // rating out of 100, convert to percentage
  const percentage = skill.rating || 0;

  return (
    <div className="flex items-center space-x-3">
      <svg
        className="w-12 h-12"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="text-gray-300"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="text-blue-600"
          strokeWidth="3"
          strokeLinecap="round"
          stroke="currentColor"
          fill="none"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text
          x="18"
          y="20.35"
          className="text-xs font-semibold fill-current text-gray-900"
          textAnchor="middle"
        >
          {percentage}%
        </text>
      </svg>
      <span className="font-semibold text-gray-900">{skill.name}</span>
    </div>
  );
};

export default Template10;
