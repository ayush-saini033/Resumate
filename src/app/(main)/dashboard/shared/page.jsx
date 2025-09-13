import { ExternalLink, Eye, Share2 } from 'lucide-react';
import React from 'react'

 const sharedLinks = [
   {
     id: "1",
     resumeTitle: "Software Engineer Resume",
     url: "https://resumova.com/share/abc123",
     views: 247,
     createdAt: "2 days ago",
     expiresAt: "28 days remaining",
   },
   {
     id: "2",
     resumeTitle: "Marketing Manager CV",
     url: "https://resumova.com/share/def456",
     views: 156,
     createdAt: "5 days ago",
     expiresAt: "25 days remaining",
   },
 ];


const SharedLinksPage = () => {
  return (
    <div className="space-y-6 mt-10 ml-28">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Shared Links</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Create Link</span>
        </button>
      </div>

      <div className="space-y-4">
        {sharedLinks.map((link) => (
          <div
            key={link.id}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  {link.resumeTitle}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Created {link.createdAt}</span>
                  <span>•</span>
                  <span>{link.expiresAt}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{link.views} views</span>
                  </span>
                </div>
                <div className="mt-3 p-3 bg-gray-800/50 rounded-lg flex items-center justify-between">
                  <code className="text-blue-400 text-sm">{link.url}</code>
                  <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharedLinksPage