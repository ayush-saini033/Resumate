import React from "react";
import { Edit3, Trash2, Palette } from "lucide-react";

const ResumeCard = ({
  title,
  jobTitle,
  firstName,
  lastName,
  onEdit,
  onDelete,
  onChangeTemplate,
}) => {
  return (
    <div className="relative group">
      {/* Card Container */}
      <div className="w-80 h-56 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-blue-800/40 backdrop-blur-2xl border border-blue-400/20 shadow-2xl hover:shadow-blue-400/30 transition-all duration-500 hover:scale-105">
        {/* Background Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-blue-700/20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.2),transparent_50%)] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 z-10">
          {/* Header Section */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold leading-tight bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
              {title}
            </h2>
            <p className="text-blue-300/90 text-sm font-medium tracking-wide filter drop-shadow-sm">
              {jobTitle?.length > 0 ? jobTitle : "Untitled Position"}
            </p>
            <div className="px-4 py-2 w-fit mt-1 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 via-blue-600/15 to-blue-500/10 border border-blue-400/30 text-blue-100 font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-400/30 transition-all duration-300">
              {firstName || "First"} {lastName || "Last"}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/15 to-blue-600/10 blur-2xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-12 right-12 w-10 h-10 rounded-full bg-gradient-to-br from-blue-300/30 to-blue-500/20 blur-lg pointer-events-none"></div>
          <div className="absolute top-16 left-16 w-6 h-6 rounded-full bg-blue-400/20 blur-md pointer-events-none"></div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6 relative z-20">
            <div className="flex space-x-3">
              <button
                onClick={onEdit}
                className="group/btn flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 hover:from-blue-400/30 hover:to-blue-500/20 border border-blue-400/30 hover:border-blue-300/50 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-blue-500/10"
              >
                <Edit3 className="w-4 h-4 text-blue-300 group-hover/btn:text-blue-100 transition-colors duration-300 drop-shadow-sm" />
              </button>

              <button
                onClick={onDelete}
                className="group/btn flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-700/20 to-slate-800/10 hover:from-slate-600/30 hover:to-slate-700/20 border border-slate-400/30 hover:border-slate-300/50 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-slate-500/10"
              >
                <Trash2 className="w-4 h-4 text-slate-300 group-hover/btn:text-slate-100 transition-colors duration-300 drop-shadow-sm" />
              </button>

              <button
                onClick={onChangeTemplate}
                className="group/btn flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-700/10 hover:from-blue-500/30 hover:to-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-blue-600/10"
              >
                <Palette className="w-4 h-4 text-blue-400 group-hover/btn:text-blue-200 transition-colors duration-300 drop-shadow-sm" />
              </button>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-400/20">
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse"></div>
              <span className="text-xs text-blue-200/80 font-medium">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/0 via-transparent to-blue-600/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-400/15 group-hover:to-blue-600/15 pointer-events-none transition-all duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
      </div>

      {/* External Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 blur-xl opacity-0 group-hover:opacity-50 pointer-events-none transition-opacity duration-500 -z-10"></div>
    </div>
  );
};

export default ResumeCard;
