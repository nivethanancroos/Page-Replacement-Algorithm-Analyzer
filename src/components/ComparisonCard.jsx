export default function ComparisonCard({ results }) {
  if (!results) return null;

  const best = results.reduce((min, curr) =>
    curr.pageFaults < min.pageFaults ? curr : min,
  );

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Algorithm Comparison
        </h2>

        <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Best: {best.name}
        </span>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {results.map((algo) => {
          const isBest = algo.name === best.name;

          return (
            <div
              key={algo.name}
              className={`p-6 rounded-2xl shadow-md border transition hover:shadow-lg
                ${
                  isBest
                    ? "bg-green-50 border-green-300"
                    : "bg-white border-gray-200"
                }`}
            >
              {/* Algorithm Name */}
              <h3
                className={`text-lg font-semibold mb-3 ${
                  isBest ? "text-green-700" : "text-gray-800"
                }`}
              >
                {algo.name}
              </h3>

              {/* Page Fault Count */}
              <div className="text-3xl font-bold mb-2">{algo.pageFaults}</div>

              <p className="text-sm text-gray-500">Total Page Faults</p>

              {/* Best Badge */}
              {isBest && (
                <div className="mt-4 text-xs font-semibold text-green-700 bg-green-200 px-3 py-1 rounded-full inline-block">
                  Best Performance
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
