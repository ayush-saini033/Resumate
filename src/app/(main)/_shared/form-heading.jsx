import React from "react";

const FormHeading = ({ Icon, firstHeading, secondHeading, subHeading }) => {
  return (
    <div className="flex items-center justify-center gap-5 mb-6">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border-2 border-blue-500 rounded-full mb-6 shadow-2xl shadow-blue-500/25">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {firstHeading}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-3">
            {secondHeading}
          </span>
        </h1>
        <p className="text-gray-400 text-sm md:text-sm max-w-lg leading-relaxed text-start">
          {subHeading}
        </p>
      </div>
    </div>
  );
};

export default FormHeading;
