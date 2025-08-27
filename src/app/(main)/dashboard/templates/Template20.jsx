import useResumeStore from "../../../../store/resumeStore";

const Template20 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black">
      {/* Header */}
      <div className="mb-8 border border-black p-6 rounded-md shadow-sm">
        <div className="grid grid-cols-3 gap-4 items-center">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </p>
            <p className="text-xs">{resumeInfo.phone}</p>
            <p className="text-xs">{resumeInfo.email}</p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold mb-1 tracking-tight">
              {resumeInfo.firstName} {resumeInfo.lastName}
            </h1>
            <p className="text-lg font-semibold">{resumeInfo.jobTitle}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold uppercase tracking-wide">
              Location
            </p>
            <p className="text-xs">{resumeInfo.address}</p>
          </div>
        </div>
        <div className="text-center mt-4 text-xs border-t pt-3 space-x-4">
          {resumeInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Summary */}
      <Section title="Professional Summary">
        <p className="text-sm leading-relaxed text-justify px-4">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Skills with Circular Rating */}
      <Section title="Core Competencies">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 px-4">
          {resumeInfo.skills.map((skill) => (
            <CircularSkill key={skill.id} skill={skill} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        <div className="px-4 space-y-6">
          {resumeInfo.experience.map((exp) => (
            <div key={exp.id} className="border-l-4 border-gray-400 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-bold">{exp.title}</h3>
                  <p className="text-sm font-semibold">{exp.companyName}</p>
                  <p className="text-sm text-gray-600">
                    {exp.city}, {exp.state}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {exp.startDate} -{" "}
                    {exp.currentlyWorking ? "Present" : exp.endDate}
                  </p>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                className="ml-8 text-sm leading-relaxed text-justify text-gray-800"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeInfo.education.map((edu) => (
            <div key={edu.id} className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-sm font-bold">
                {edu.degree} in {edu.major}
              </h3>
              <p className="text-sm font-semibold">{edu.universityName}</p>
              <p className="text-xs text-gray-600">
                {edu.startDate} - {edu.endDate}
              </p>
              <p className="text-xs mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Key Projects">
        <div className="px-4 space-y-6">
          {resumeInfo.projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md text-center"
            >
              <h3 className="text-sm font-bold">{project.name}</h3>
              <p className="text-sm mt-2 text-justify">{project.description}</p>
              {project.liveUrl && (
                <p className="text-xs mt-3">
                  Live Demo:{" "}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition"
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
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-center mb-6 border-b-2 border-gray-800 pb-2 uppercase tracking-wide">
      {title}
    </h2>
    {children}
  </section>
);

const CircularSkill = ({ skill }) => {
  const radius = 40; // circle radius
  const stroke = 6; // circle stroke thickness
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (skill.rating / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center w-24">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#2563EB" // blue color for progress
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.7s ease",
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fontWeight="bold"
          fill="#2563EB"
        >
          {skill.rating}%
        </text>
      </svg>
      <p className="mt-2 font-semibold text-sm">{skill.name}</p>
    </div>
  );
};

export default Template20;
