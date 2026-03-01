import Simulator from "./pages/Simulator";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* ===== Compact Header ===== */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 text-center">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            EC 6110: Operating Systems
          </h1>

          <p className="text-gray-600 text-sm">Group Assignment - 2026</p>

          <div className="text-gray-700 text-xs md:text-sm mt-1">
            <span className="font-medium">A.R Nivethenan Croos</span> —
            2020/E/001 &nbsp; | &nbsp;
            <span className="font-medium">M.A Zimry</span> — 2021/E/106
          </div>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Simulator />
      </div>
    </div>
  );
}
