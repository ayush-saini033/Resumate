import React from 'react'
import RichTextEditor from "@/app/(main)/_shared/rich-text-editor"
import useResumeStore from '@/store/resumeStore';
function SummarySection() {
      const { resume, setResume } = useResumeStore();

     function handleSummaryChange(content) {
       setResume({ ...resume, summary: content });
     }
  return (
    <div>
      <RichTextEditor
        content={resume.summary || ""}
        onChange={handleSummaryChange}
      />
    </div>
  );
}

export default SummarySection
