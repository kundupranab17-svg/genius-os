export default function InputDock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative flex items-center bg-black/90 border border-gray-800 rounded-2xl p-2 pl-4 shadow-2xl backdrop-blur-2xl">
          
          <button className="p-2 text-gray-400 hover:text-cyan-400 transition text-xl font-light">+</button>
          
          <input 
            type="text" 
            placeholder="Command Genius OS..." 
            className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-gray-200 placeholder:text-gray-600"
          />

          <div className="flex items-center space-x-3 px-2">
            <div className="flex flex-col items-center">
              <span className="text-[8px] text-gray-500 font-bold uppercase">Deep Research</span>
              <div className="w-8 h-4 bg-gray-800 rounded-full relative cursor-pointer border border-gray-700">
                <div className="absolute left-1 top-1 w-2 h-2 bg-cyan-500 rounded-full shadow-neon"></div>
              </div>
            </div>
            <button className="bg-cyan-600 hover:bg-cyan-500 p-2.5 rounded-xl transition shadow-lg">
              <span className="text-white text-xs font-black">SEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
