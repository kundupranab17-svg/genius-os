export default function TopBar({ theme, setTheme }) {
  const versions = [
    { name: "Genius 5.0", price: "$19" },
    { name: "Destroyer 10.0", price: "$499" },
    { name: "ULTRON PRO-MAX", price: "$1000", premium: true }
  ];

  return (
    <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="group cursor-pointer relative">
        <h2 className="text-xl font-bold tracking-widest text-cyan-400">GENIUS OS</h2>
        {/* Dropdown for Versions */}
        <div className="hidden group-hover:block absolute top-full left-0 bg-black border border-gray-700 p-4 rounded-xl shadow-2xl w-64">
           {versions.map(v => (
             <div key={v.name} className="p-3 hover:bg-gray-900 rounded-lg flex justify-between items-center transition-all">
               <span className={v.premium ? "text-gold font-bold" : "text-white"}>{v.name}</span>
               <span className="text-xs text-gray-400">{v.price}</span>
             </div>
           ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Manual Theme Toggle */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 bg-gray-800 rounded-full border border-gray-600 hover:scale-110 transition"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="px-3 py-1 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-500">
          SECURE_NODE_ACTIVE
        </div>
      </div>
    </div>
  );
}
