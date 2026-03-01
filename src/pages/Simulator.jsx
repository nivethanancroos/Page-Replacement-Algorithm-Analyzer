import { useState } from "react";
import InputForm from "../components/InputForm";
import AlgorithmTable from "../components/AlgorithmTable";
import ComparisonCard from "../components/ComparisonCard"; //  fixed name

import { fifo } from "../algorithms/fifo";
import { lru } from "../algorithms/lru";
import { lfu } from "../algorithms/lfu";
import { mfu } from "../algorithms/mfu";
import { parseReferenceString } from "../utils/parseInput";

export default function Simulator() {
  const [results, setResults] = useState(null);

  const runSimulation = (referenceStr, frames) => {
    const reference = parseReferenceString(referenceStr);

    const fifoResult = fifo(reference, frames);
    const lruResult = lru(reference, frames);
    const lfuResult = lfu(reference, frames);
    const mfuResult = mfu(reference, frames);

    setResults([
      { name: "FIFO", ...fifoResult },
      { name: "LRU", ...lruResult },
      { name: "LFU", ...lfuResult },
      { name: "MFU", ...mfuResult },
    ]);
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Input Form */}
      <InputForm onRun={runSimulation} onReset={handleReset} />

      {/* ✅ Show Comparison Card First */}
      {results && <ComparisonCard results={results} />}

      {/* Then Show Detailed Algorithm Tables */}
      {results &&
        results.map((algo) => (
          <AlgorithmTable key={algo.name} name={algo.name} result={algo} />
        ))}
    </div>
  );
}
