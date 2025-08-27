"use client";
import React, { useState } from "react";
import { BookUser } from "lucide-react";
import { inputFields } from "../constants/basic-detail-constants";
import FormHeading from "../../../../../../_shared/form-heading";
import useResumeStore from "@/store/resumeStore";

function BasicDetailsForm() {
  const { updateField, resume } = useResumeStore();
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  const handleBlur = () => setFocusedField(null);
  const handleFocus = (fieldName) => setFocusedField(fieldName);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 h-[82vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <FormHeading
          Icon={BookUser}
          firstHeading="Basic"
          secondHeading="Details"
          subHeading="Your information is secure and will be handled with complete confidentiality."
        />

        {/* Form Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-8 sm:p-12">
          <form className="space-y-8">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {inputFields.map((field) => {
                const Icon = field.icon;
                const value = resume[field.name] || "";
                const hasValue = value.length > 0;
                const isFocused = focusedField === field.name;

                return (
                  <div
                    key={field.name}
                    className={
                      field.name === "address" || field.name === "jobTitle"
                        ? "sm:col-span-2"
                        : ""
                    }
                  >
                    <div className="relative group">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl transition-opacity duration-300 ${
                          isFocused ? "opacity-100" : "opacity-0"
                        }`}
                      />
                      <div
                        className={`relative bg-gray-800/60 border rounded-xl transition-all duration-300 ${
                          isFocused || hasValue
                            ? "border-blue-500/50 shadow-blue-500/20 shadow-lg"
                            : "border-gray-600/50 hover:border-gray-500/50"
                        }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`p-4 transition-colors duration-300 ${
                              isFocused || hasValue
                                ? "text-blue-400"
                                : "text-gray-400 group-hover:text-gray-300"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 relative">
                            <input
                              type={field.type}
                              name={field.name}
                              id={field.name}
                              value={value}
                              onChange={handleInputChange}
                              onFocus={() => handleFocus(field.name)}
                              onBlur={handleBlur}
                              className="w-full bg-transparent text-white placeholder-transparent focus:outline-none py-4 pr-4 peer"
                              placeholder={field.placeholder}
                            />
                            <label
                              htmlFor={field.name}
                              className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                                hasValue || isFocused
                                  ? "top-1 text-xs font-medium text-blue-400"
                                  : "top-1/2 -translate-y-1/2 text-sm text-gray-400 peer-focus:text-blue-400"
                              }`}
                            >
                              {field.label}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicDetailsForm;
