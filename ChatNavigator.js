import React, { useState } from 'react';

export default function ChatNavigator() {
  const [activeMenu, setActiveMenu] = useState(null);

  const chats = ["Physics Quantum Law", "Maths 20-Year Pattern", "Organic Chemistry"];

  return (
    <div className="fixed top-20 right-6 w-72 bg-black/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-4 shadow-2xl z-40">
      <h3 className="text-[10px] font-black text-gray-500 tracking-[0.2em] mb-4">YOUR CHATS</h3>
      <div className="space-y-3">
        {chats.map((chat, idx) => (
          <div key={idx} className="relative group flex items-center justify-between p-3 bg-gray-900/40 rounded-xl hover:border-gray-600 border border-transparent transition">
            <span className="text-xs text-gray-300 truncate pr-4">{chat}</span>
            
            {/* The 3-Dot Menu */}
            <button onClick={() => setActiveMenu(activeMenu === idx ? null : idx)} className="text-gray-500 hover:text-white">⋮</button>
            
            {activeMenu === idx && (
              <div className="absolute right-0 top-10 w-32 bg-[#111] border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                {['Rename', 'Share', 'Delete', 'Archive'].map(opt => (
                  <button key={opt} className="w-full text-left px-3 py-2 text-[10px] hover:bg-gray-800 text-gray-300 uppercase tracking-tighter border-b border-gray-800 last:border-0">
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
