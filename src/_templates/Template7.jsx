import useResumeStore from "../store/resumeStore";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  User,
} from "lucide-react";

const Template7 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black shadow-lg border border-gray-200">
      {/* Header Section */}
      <header className="text-center mb-10 pb-8 border-b-2 border-gray-800">
        <div className="relative">
          <h1 className="text-4xl font-bold mb-3 tracking-wide text-gray-900">
            {resumeInfo.firstName} {resumeInfo.lastName}
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl font-semibold mb-6 text-blue-700 uppercase tracking-widest">
            {resumeInfo.jobTitle}
          </p>

          {/* Contact Information with Icons */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{resumeInfo.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{resumeInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{resumeInfo.address}</span>
            </div>
            {resumeInfo.socialLinks.map((link, index) => (
              <div key={link.id || index} className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {link.name || link.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      {resumeInfo.summery && (
        <section className="mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-l-4 border-blue-600 rounded-r-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                Professional Summary
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              {resumeInfo.summery}
            </p>
          </div>
        </section>
      )}

      {/* Core Qualifications */}
      {resumeInfo.skills && resumeInfo.skills.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Core Qualifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {resumeInfo.skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
              >
                <span className="text-sm font-medium text-gray-800">
                  {skill.name}
                </span>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1 block">
                    {skill.rating}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {resumeInfo.experience && resumeInfo.experience.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-8">
            {resumeInfo.experience.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.companyName}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>
                          {exp.city}, {exp.state}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md mt-3 lg:mt-0 lg:ml-4">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {exp.startDate} -{" "}
                        {exp.currentlyWorking ? "Present" : exp.endDate}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-gray-700 leading-relaxed text-sm pl-4 border-l-2 border-gray-100"
                    dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education & Credentials */}
      {resumeInfo.education && resumeInfo.education.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Education & Credentials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeInfo.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-blue-600 mb-1">
                  {edu.major}
                </p>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {edu.universityName}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                {edu.description && (
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Notable Projects */}
      {resumeInfo.projects && resumeInfo.projects.length > 0 && (
        <section>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Notable Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeInfo.projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.liveUrl && (
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Template7;
