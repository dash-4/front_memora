// import { Search } from "lucide-react";

// export default function SearchBar({ searchQuery, onSearchChange }) {
//   return (
//     <div className="space-y-4">
//       <div className="flex flex-col sm:flex-row gap-3">
//         <div className="flex-1 relative">
//           <Search
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//             size={20}
//           />
//           <input
//             type="text"
//             placeholder="Поиск колод по названию..."
//             value={searchQuery}
//             onChange={(e) => onSearchChange(e.target.value)}
//             className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//           />
//           {searchQuery && (
//             <button
//               onClick={() => onSearchChange("")}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//             >
//               ×
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Search, X, Command } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SearchBar({ searchQuery, onSearchChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200">
          <Search size={18} strokeWidth={2.5} />
        </div>

        <input
          ref={inputRef}
          type="text"
          placeholder="Поиск колод или тегов..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-12 py-3 bg-white border-2 border-gray-100 rounded-2xl shadow-sm 
                     outline-none transition-all duration-200
                     placeholder:text-gray-400 placeholder:font-medium
                     hover:border-gray-200
                     focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:shadow-md"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          {searchQuery ? (
            <button
              onClick={() => onSearchChange("")}
              className="p-1.5 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all active:scale-90"
              title="Очистить поиск"
            >
              <X size={18} strokeWidth={2.5} />
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-tighter select-none">
              <Command size={10} />
              <span>/</span>
            </div>
          )}
        </div>
      </div>
      
      {searchQuery && (
        <p className="mt-2 ml-2 text-xs font-medium text-gray-400 animate-in fade-in slide-in-from-top-1">
          Найдено по запросу: <span className="text-blue-600">"{searchQuery}"</span>
        </p>
      )}
    </div>
  );
}
