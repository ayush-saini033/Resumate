import useResumeStore from "@//store/resumeStore";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Award,
  Languages,
  Settings,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const Preview = () => {
  const { resume } = useResumeStore();
  const data = resume;

  const renderSkillRating = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < rating ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700/40 to-blue-800/60 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {data.firstName} {data.lastName}
            </h1>
            <h2 className="text-xl font-light mb-4">{data.jobTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center space-x-2 md:col-span-2">
                <MapPin className="w-4 h-4" />
                <span>{data.address}</span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="space-y-1">
              {data.socialLinks?.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end space-x-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <a href={link.url} className="hover:underline">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Summary
          </h3>
          <div
            className="prose prose-gray max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {exp.title}
                    </h4>
                    <h5 className="text-lg font-medium text-blue-600">
                      {exp.companyName}
                    </h5>
                    <p className="text-gray-600">
                      {exp.city}, {exp.state}
                    </p>
                  </div>
                  <div className="text-right text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.startDate} -{" "}
                        {exp.currentlyWorking ? "Present" : exp.endDate}
                      </span>
                    </div>
                    {exp.currentlyWorking && (
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                        Current Position
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="prose prose-gray max-w-none text-black"
                  dangerouslySetInnerHTML={{ __html: exp.workSummary }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2" />
            Education
          </h3>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {edu.degree} in {edu.major}
                    </h4>
                    <h5 className="text-blue-600 font-medium">
                      {edu.universityName}
                    </h5>
                  </div>
                  <div className="text-gray-600 flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>
                <div
                  className="prose prose-gray max-w-none text-black"
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <span className="font-medium text-gray-800">{skill.name}</span>
                {renderSkillRating(skill.rating)}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.map((cert) => (
              <div
                key={cert.id}
                className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                <p className="text-blue-600 font-medium">{cert.authority}</p>
                <div className="text-sm text-gray-600 mt-2">
                  <p>Issued: {cert.issueDate}</p>
                  <p>Expires: {cert.expiryDate}</p>
                </div>
                <a
                  href={cert.credentialUrl}
                  className="text-blue-500 hover:underline text-sm mt-1 inline-block"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Key Projects
          </h3>
          <div className="space-y-4">
            {data.projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 p-4 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {project.name}
                  </h4>
                  <a
                    href={project.liveUrl}
                    className="text-blue-500 hover:underline text-sm flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
            Achievements & Recognition
          </h3>
          <div className="space-y-4">
            {data.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
              >
                <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-700 mt-1">
                    {achievement.description}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {achievement.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Languages */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
              <Languages className="w-5 h-5 mr-2" />
              Languages
            </h3>
            <div className="space-y-3">
              {data.languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {language.name}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {language.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Preferences */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Job Preferences
            </h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-700">Job Type: </span>
                <span className="text-gray-600">
                  {data.preferences.jobType}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Location: </span>
                <span className="text-gray-600">
                  {data.preferences.location}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">
                  Open to Relocation:{" "}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    data.preferences.relocation
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {data.preferences.relocation ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        <p>
          Resume Title: {data.title} | Generated on{" "}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Preview;
