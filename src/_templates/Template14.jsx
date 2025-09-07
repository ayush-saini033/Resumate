import useResumeStore from "../store/resumeStore";

const Template14 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-serif text-black">
      {/* Header */}
      <div className="text-left mb-8">
        <h1 className="text-3xl font-bold mb-1">
          {resumeInfo.firstName} {resumeInfo.lastName}
        </h1>
        <p className="text-lg mb-3">{resumeInfo.jobTitle}</p>
        <div className="text-sm mb-2">
          <p>{resumeInfo.address}</p>
          <p>
            {resumeInfo.phone} • {resumeInfo.email}
          </p>
        </div>
        <div className="text-sm mb-2 space-x-3">
          {resumeInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              title={link.url}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="w-full h-px bg-black mt-4"></div>
      </div>

      {/* Objective */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">OBJECTIVE</h2>
        <p className="text-sm leading-relaxed text-justify">
          {resumeInfo.summery}
        </p>
      </div>

      {/* Skills with Circular Rating and Percentage */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">TECHNICAL SKILLS</h2>
        <div className="flex flex-wrap gap-4">
          {resumeInfo.skills.map((skill) => (
            <SkillWithCircleRating key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">EXPERIENCE</h2>
        {resumeInfo.experience.map((exp) => (
          <div key={exp.id} className="mb-6">
            <div className="mb-2">
              <h3 className="text-base font-bold">{exp.title}</h3>
              <div className="flex justify-between text-sm">
                <span className="font-semibold">
                  {exp.companyName}, {exp.city}, {exp.state}
                </span>
                <span>
                  {exp.startDate} -{" "}
                  {exp.currentlyWorking ? "Present" : exp.endDate}
                </span>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: exp.workSummery }}
              className="ml-8"
            />
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">EDUCATION</h2>
        {resumeInfo.education.map((edu) => (
          <div key={edu.id} className="mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold">
                  {edu.degree} in {edu.major}
                </h3>
                <p className="text-sm font-semibold">{edu.universityName}</p>
                <p className="text-sm">{edu.description}</p>
              </div>
              <p className="text-sm">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-lg font-bold mb-3">PROJECTS</h2>
        {resumeInfo.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-sm font-bold">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
            {project.liveUrl && (
              <p className="text-sm font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  URL
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Skill with circular rating progress bar + percentage text
const SkillWithCircleRating = ({ skill }) => {
  const rating = Math.min(Math.max(skill.rating || 0, 0), 100);

  // Circle parameters
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (rating / 100) * circumference;

  return (
    <div
      className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 shadow-sm cursor-default group"
      title={`${skill.name}: ${rating}%`}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
        aria-hidden="true"
      >
        <circle
          stroke="#d1d5db"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#2563eb"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <span className="text-xs font-semibold">{skill.name}</span>
      <span className="text-xs font-mono text-gray-700">{rating}%</span>
    </div>
  );
};

export default Template14;
