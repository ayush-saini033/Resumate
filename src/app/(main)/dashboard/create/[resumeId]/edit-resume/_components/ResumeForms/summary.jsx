import React, { useState } from "react";
import { BookUser} from "lucide-react";
import RichTextEditor from "../../../../../../_shared/rich-text-editor";
import FormHeading from "../../../../../../_shared/form-heading";
import useResumeStore from "@/store/resumeStore";

function SummaryForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const {resume, setResume} = useResumeStore();

  console.log(resume.summary)

  const handleGenerate = async () => {
    if (!summary.trim()) return;

    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      // Here you would typically call your AI service
    }, 2000);
  };

  function handleSummaryChange (content) {
    setResume({...resume, summary: content})
  }

  return (
    <div className=" relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <FormHeading
            Icon={BookUser}
            firstHeading={"Professional"}
            secondHeading={"Summary"}
            subHeading={`  Your information is secure and will be handled with complete
              confidentiality.`}
          />

          {/* Form Card */}
          <div>
            <div className="space-y-8">
              {/* Input Field */}
              <div className="space-y-4">
                <div className="relative">
                  <RichTextEditor
                    content={resume.summary || ""}
                    onChange={handleSummaryChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryForm;
