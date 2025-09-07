import useResumeStore from "../store/resumeStore";

const Template4 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-10 bg-white font-sans text-black shadow-lg border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 items-center mb-8 border-b-2 border-gray-300 pb-4">
        <div className="text-left text-xs space-y-1">
          <p>{resumeInfo.phone}</p>
          <p>{resumeInfo.email}</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide">
            {resumeInfo.firstName} {resumeInfo.lastName}
          </h1>
          <p className="text-sm font-medium mt-1 uppercase tracking-wide text-gray-700">
            {resumeInfo.jobTitle}
          </p>
        </div>
        <div className="text-right text-xs">
          <p>{resumeInfo.address}</p>
        </div>
      </div>

      {/* Professional Profile */}
      <Section title="Professional Profile">
        <p className="text-sm leading-relaxed text-justify">
          {resumeInfo.summery}
        </p>
      </Section>

      {/* Skills Summary with Circular Rating */}
      <Section title="Skills Summary">
        <div className="grid grid-cols-3 gap-8">
          {resumeInfo.skills.map((skill) => {
            const radius = 20;
            const circumference = 2 * Math.PI * radius;
            const progress = (skill.rating / 100) * circumference;
            const dashOffset = circumference - progress;

            return (
              <div
                key={skill.id}
                className="flex items-center gap-3"
                title={`${skill.name}: ${skill.rating}%`}
              >
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 50 50"
                  aria-label={`${skill.name} skill rating`}
                >
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
                    {skill.rating}%
                  </text>
                </svg>
                <span className="font-semibold text-gray-800">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-sm">{exp.title}</h3>
                <p className="text-xs italic">{exp.companyName}</p>
              </div>
              <div className="text-right text-xs">
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
              className="ml-8 text-gray-700"
            />
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {resumeInfo.education.map((edu) => (
          <div key={edu.id} className="mb-3">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-sm">
                  {edu.degree} in {edu.major}
                </h3>
                <p className="text-xs">{edu.universityName}</p>
              </div>
              <p className="text-xs">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            {edu.description && (
              <p className="text-xs mt-1 text-gray-700">{edu.description}</p>
            )}
          </div>
        ))}
      </Section>

      {/* Key Projects */}
      <Section title="Key Projects">
        {resumeInfo.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold text-sm">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="text-xs text-gray-700">{project.description}</p>
          </div>
        ))}
      </Section>

      {/* Contact Links */}
      <div className="mt-6 text-center border-t pt-3 text-xs text-gray-600">
        {resumeInfo.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            {link.name}
            {index < resumeInfo.socialLinks.length - 1 && " | "}
          </a>
        ))}
      </div>
    </div>
  );
};

// Section helper
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-lg font-bold bg-gray-100 px-2 py-1 mb-3 uppercase tracking-wide border-l-4 border-blue-500">
      {title}
    </h2>
    <div className="pl-2">{children}</div>
  </div>
);

export default Template4;
