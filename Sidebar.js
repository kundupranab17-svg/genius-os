import React from 'react';

const features = [
  "Vision Matrix", "20-Year Pattern", "Diagram Studio", 
  "Global Board Sync", "Multi-Lang Brain", "Analytics Hub",
  "Recall Vault", "Deep Research", "3D Solvers", "Group Chat"
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#0a0a0a] border-r border-gray-800 flex flex-col pt-20 pb-6 fixed left-0">
      <div className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
        {features.map((item) => (
          <button key={item} className="w-full text-left p-3 rounded-lg text-gray-400 hover:bg-gray-900 hover:text-cyan-400 transition-all text-sm font-medium flex items-center space-x-3 group">
            <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-cyan-500 shadow-neon"></div>
            <span>{item}</span>
          </button>
        ))}
      </div>

      {/* Account Section with Upgrade Bar */}
      <div className="px-4 mt-4 border-t border-gray-800 pt-4">
        <div className="flex items-center space-x-3 p-2 bg-gray-900/50 rounded-xl border border-gray-800">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
          <div>
            <p className="text-xs font-bold">Genius User</p>
            <p className="text-[10px] text-gold uppercase tracking-widest">Ultron Pro-Max</p>
          </div>
        </div>
        <button className="w-full mt-3 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg text-xs font-black hover:scale-105 transition shadow-lg">
          UPGRADE NODE
        </button>
      </div>
    </div>
  );
}
