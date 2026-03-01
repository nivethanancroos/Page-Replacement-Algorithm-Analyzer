export default function AlgorithmTable({ name, result }) {
  if (!result) return null;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {name} Algorithm
        </h2>

        <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
          Faults: {result.pageFaults}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[400px]">
        <table className="w-full text-sm text-center border-collapse">
          <thead className="sticky top-0 bg-gray-50 text-gray-600 shadow-sm">
            <tr>
              <th className="py-2 px-3 font-medium">Step</th>
              <th className="py-2 px-3 font-medium">Page</th>
              <th className="py-2 px-3 font-medium">Frames</th>
              <th className="py-2 px-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {result.steps.map((step, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 transition">
                <td className="py-2 px-3">{index + 1}</td>

                <td className="py-2 px-3 font-medium">{step.page}</td>

                <td className="py-2 px-3">
                  <div className="flex justify-center gap-2">
                    {step.frames.map((frame, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium"
                      >
                        {frame}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="py-2 px-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      step.status === "Fault"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {step.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
