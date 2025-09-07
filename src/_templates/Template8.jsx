
import useResumeStore from "@/store/resumeStore";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Star,
  CheckCircle,
  Building,
} from "lucide-react";

const Template8 = () => {
  const { resume } = useResumeStore();
  const resumeInfo = resume;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white font-sans text-black shadow-xl border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-blue-600 rounded-lg p-8 mb-8 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3 tracking-wide text-gray-900">
            {resumeInfo.firstName} {resumeInfo.lastName}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl font-semibold mb-6 text-blue-700 uppercase tracking-widest">
            {resumeInfo.jobTitle}
          </p>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>{resumeInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{resumeInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>{resumeInfo.email}</span>
              </div>
            </div>

            {resumeInfo.socialLinks && resumeInfo.socialLinks.length > 0 && (
              <div className="flex flex-wrap justify-center items-center gap-4 mt-3 pt-3 border-t border-gray-200">
                {resumeInfo.socialLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      {link.name || link.url}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Objective */}
      {resumeInfo.summery && (
        <section className="mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide">
              Professional Objective
            </h2>
          </div>
          <div className="border-l-4 border-blue-200 pl-4">
            <p className="text-gray-700 leading-relaxed text-justify">
              {resumeInfo.summery}
            </p>
          </div>
        </section>
      )}

      {/* Core Competencies */}
      {resumeInfo.skills && resumeInfo.skills.length > 0 && (
        <section className="mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Star className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide">
              Core Competencies
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeInfo.skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-800">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {skill.rating}%
                  </span>
                </div>
                <SkillRating rating={skill.rating} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {resumeInfo.experience && resumeInfo.experience.length > 0 && (
        <section className="mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {resumeInfo.experience.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-6 pb-6 border-l-2 border-blue-100 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>

                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-5 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-600">
                          {exp.companyName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        <span>
                          {exp.city}, {exp.state}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-md mt-3 lg:mt-0 lg:ml-4 border border-gray-200">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {exp.startDate} -{" "}
                        {exp.currentlyWorking ? "Present" : exp.endDate}
                      </span>
                    </div>
                  </div>
                  <div
                    className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-200"
                    dangerouslySetInnerHTML={{ __html: exp.workSummery }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeInfo.education && resumeInfo.education.length > 0 && (
        <section className="mb-8 bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide">
              Education
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeInfo.education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-base font-semibold text-indigo-600 mb-1">
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
                  <p className="text-sm text-gray-700 leading-relaxed italic border-l-2 border-indigo-300 pl-3">
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
        <section className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Award className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="font-bold text-lg text-gray-900 uppercase tracking-wide">
              Notable Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeInfo.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-5 border border-orange-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                {project.liveUrl && (
                  <div className="flex items-center gap-2 pt-3 border-t border-orange-200">
                    <ExternalLink className="w-4 h-4 text-orange-600" />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-800 font-semibold text-sm transition-colors"
                    >
                      View Live Demo
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

const SkillRating = ({ rating }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 ease-out"
        style={{ width: `${rating}%` }}
      />
    </div>
  );
};

export default Template8;
