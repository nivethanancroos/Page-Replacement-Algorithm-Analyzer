import { useState } from "react";

export default function InputForm({ onRun, onReset }) {
  const [reference, setReference] = useState("");
  const [frames, setFrames] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!reference.trim()) {
      newErrors.reference = "Reference string is required.";
    } else if (!/^(\d+\s)*\d+$/.test(reference.trim())) {
      newErrors.reference = "Only numbers separated by spaces are allowed.";
    }

    if (!frames) {
      newErrors.frames = "Number of frames is required.";
    } else if (frames <= 0) {
      newErrors.frames = "Frames must be greater than 0.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onRun(reference.trim(), parseInt(frames));
  };

  const handleReset = () => {
    setReference("");
    setFrames("");
    setErrors({});
    onReset && onReset();
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Page Replacement Algorithm Analyzer
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Simulate and compare FIFO, LRU, LFU, and MFU algorithms.
          </p>
        </div>

        {/* Reference Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Reference String
          </label>

          <input
            type="text"
            placeholder="Example: 7 0 1 2 0 3 0 4"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className={`w-full p-3 rounded-lg border transition focus:outline-none focus:ring-2
              ${
                errors.reference
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
          />

          {errors.reference && (
            <p className="text-sm text-red-500">{errors.reference}</p>
          )}

          <p className="text-xs text-gray-400">
            Enter numbers separated by spaces.
          </p>
        </div>

        {/* Frames Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Number of Frames
          </label>

          <input
            type="number"
            min="1"
            placeholder="Enter frame count"
            value={frames}
            onChange={(e) => setFrames(e.target.value)}
            className={`w-full p-3 rounded-lg border transition focus:outline-none focus:ring-2
              ${
                errors.frames
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              }`}
          />

          {errors.frames && (
            <p className="text-sm text-red-500">{errors.frames}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition shadow-md active:scale-95"
          >
            Run Simulation
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex-1 py-3 rounded-lg font-semibold 
bg-red-500 text-white 
hover:bg-gray-100 hover:text-gray-700 hover:border hover:border-red-500 
transition active:scale-95"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
