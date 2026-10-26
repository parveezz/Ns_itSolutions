import { useState } from "react";
import { FaPlay, FaCheckCircle, FaSpinner, FaMicrochip, FaNetworkWired, FaCheck } from "react-icons/fa";

export default function LiveCableSimulator({ onOpenQuote }) {
  const [selectedCable, setSelectedCable] = useState("cat6a");
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const cableProfiles = {
    cat6a: {
      name: "NS Cat6A Pure Copper Shielded Cable",
      type: "Ethernet Copper",
      speed: "10 Gbps (Certified)",
      frequency: "500 MHz",
      latency: "0.6 ms",
      health: "100%",
      status: "Optimal Performance"
    },
    fiber: {
      name: "NS Ultra-Armored Fiber Optic Patch Line",
      type: "Optical Core",
      speed: "40 Gbps Uplink",
      frequency: "Light Pulse (850nm)",
      latency: "0.2 ms",
      health: "100%",
      status: "Zero Loss / Zero Interference"
    },
    tagged: {
      name: "NS Smart Barcode-Tagged Patch Cord",
      type: "Pre-Labeled Cat6",
      speed: "1 Gbps / 10 Gbps",
      frequency: "250 MHz",
      latency: "0.8 ms",
      health: "99.8%",
      status: "Synced with Asset Tracker"
    }
  };

  const runDiagnostic = () => {
    setTesting(true);
    setTestResult(null);

    setTimeout(() => {
      setTesting(false);
      setTestResult(cableProfiles[selectedCable]);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
      {/* Simulator Header */}
      <div className="bg-brand-brown text-white p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-950">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-orange text-white rounded-lg">
            <FaNetworkWired className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-white">
              Live Software & Cable Diagnostic Demo
            </h3>
            <p className="text-xs text-gray-300">
              See how our software monitors physical cable health in real time
            </p>
          </div>
        </div>
        <span className="text-[11px] font-bold bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full border border-brand-orange/40">
          ● Diagnostic Engine v3.1
        </span>
      </div>

      {/* Simulator Body */}
      <div className="p-5 sm:p-8">
        <div className="mb-6">
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            1. Select Physical Cable to Test:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedCable("cat6a");
                setTestResult(null);
              }}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCable === "cat6a"
                  ? "border-brand-orange bg-amber-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 bg-gray-50"
              }`}
            >
              <div className="font-bold text-sm text-brand-brown">Cat6A Copper Wire</div>
              <div className="text-xs text-gray-500 mt-0.5">10Gbps Shielded LAN</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedCable("fiber");
                setTestResult(null);
              }}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCable === "fiber"
                  ? "border-brand-orange bg-amber-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 bg-gray-50"
              }`}
            >
              <div className="font-bold text-sm text-brand-brown">Armored Fiber Optic</div>
              <div className="text-xs text-gray-500 mt-0.5">Ultra-Fast Optical Core</div>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedCable("tagged");
                setTestResult(null);
              }}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCable === "tagged"
                  ? "border-brand-orange bg-amber-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300 bg-gray-50"
              }`}
            >
              <div className="font-bold text-sm text-brand-brown">Barcode Smart Cable</div>
              <div className="text-xs text-gray-500 mt-0.5">Pre-Tagged Asset Wire</div>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-b border-gray-100">
          <p className="text-xs text-gray-500">
            Click to simulate software checking physical wire resistance, signal latency, and speed.
          </p>
          <button
            type="button"
            onClick={runDiagnostic}
            disabled={testing}
            className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow cursor-pointer whitespace-nowrap"
          >
            {testing ? (
              <>
                <FaSpinner className="w-4 h-4 animate-spin" />
                <span>Reading Cable Signal...</span>
              </>
            ) : (
              <>
                <FaPlay className="w-3.5 h-3.5" />
                <span>Run Cable Diagnostic</span>
              </>
            )}
          </button>
        </div>

        {/* Live Result Display */}
        {testResult && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm sm:text-base">
                <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Diagnostic Passed: {testResult.name}</span>
              </div>
              <span className="text-xs font-mono bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-bold">
                SIGNAL 100% HEALTHY
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-[11px] text-gray-500 block">Bandwidth Throughput</span>
                <span className="font-extrabold text-sm sm:text-base text-brand-brown">{testResult.speed}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-[11px] text-gray-500 block">Signal Latency</span>
                <span className="font-extrabold text-sm sm:text-base text-brand-orange">{testResult.latency}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-[11px] text-gray-500 block">Frequency Rating</span>
                <span className="font-extrabold text-sm sm:text-base text-brand-brown">{testResult.frequency}</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-200">
                <span className="text-[11px] text-gray-500 block">Cable Status</span>
                <span className="font-extrabold text-sm sm:text-base text-green-600">{testResult.status}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-gray-600">
              <span>
                💡 <strong>Why this sells hardware:</strong> Clients buy our cables because our software certifies performance for 10 years.
              </span>
              <button
                type="button"
                onClick={onOpenQuote}
                className="bg-brand-brown hover:bg-black text-white px-4 py-2 rounded-md font-bold transition-colors whitespace-nowrap cursor-pointer"
              >
                Order This Cable Roll
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
