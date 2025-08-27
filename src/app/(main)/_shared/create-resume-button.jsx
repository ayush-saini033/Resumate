"use client";
import React, { useState } from "react";
import { FileText, Edit3, X, Trash2 } from "lucide-react";

function CreateResumeButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [title, setTitle] = useState("");

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setTitle("");
  };

  const handleEdit = () => {
    console.log("Editing resume with title:", title);
    // Add your edit logic here
    closeDialog();
  };

  const handleDiscard = () => {
    setTitle("");
    closeDialog();
  };

  return (
    <>
      <div>
        <button
          onClick={openDialog}
          className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold  rounded-xl shadow-2xl px-5 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25 focus:outline-none focus:ring-4 focus:ring-pink-500/50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center space-x-3">
            <FileText className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            <span>Create Resume</span>
          </div>
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] skew-x-12 transition-transform duration-700"></div>
        </button>
      </div>

      {/* Dialog Modal */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleDiscard}
          ></div>

          {/* Modal */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700/50 rounded-3xl shadow-2xl shadow-pink-500/20 p-8 w-full max-w-md transform animate-in zoom-in duration-300">
            {/* Close button */}
            <button
              onClick={handleDiscard}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl">Resumate</h1>
              <p className="text-gray-200 text-sm">Build your dream resume in minutes, get noticed in seconds</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Title Input */}
              <div>
                <label
                  htmlFor="title"
                  className="block font-medium text-gray-300 mb-2"
                >
                  Resume Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Frontend Developer Resume"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500/50 transition-all duration-200"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                {/* Edit Button */}
                <button
                  onClick={handleEdit}
                  disabled={!title.trim()}
                  className="flex-1 group relative overflow-hidden bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="relative flex items-center justify-center space-x-2">
                    <Edit3 className="w-5 h-5" />
                    <span>Edit</span>
                  </div>
                </button>

                {/* Discard Button */}
                <button
                  onClick={handleDiscard}
                  className="flex-1 cursor-pointer group relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg border border-gray-600/50 transform transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:border-red-500/50 focus:outline-none focus:ring-2 focus:ring-gray-500/50"
                >
                  <div className="relative flex items-center justify-center space-x-2">
                    <Trash2 className="w-5 h-5" />
                    <span>Discard</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreateResumeButton;
