
"use client";

import { useState } from "react";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Leaf,
  ArrowUpRight,
} from "lucide-react";

const coreValues = [
  {
    id: "01",
    title: "Innovation",
    description:
      "We encourage creativity to develop advanced, cutting-edge solutions that drive industry progress. By fostering a culture of continuous learning and experimentation, we empower our teams to challenge the status quo and pioneer new technologies.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and ethical practices in all our business dealings. Trust is the foundation of our relationships, and we are committed to doing what is right, even when no one is watching.",
    icon: ShieldCheck,
  },
  {
    id: "03",
    title: "Teamwork",
    description:
      "We collaborate effectively, leveraging diverse skills to achieve common goals and exceed expectations. We believe that the best solutions emerge when different perspectives are brought together in an environment of mutual respect.",
    icon: Users,
  },
  {
    id: "04",
    title: "Sustainability",
    description:
      "We are committed to eco-friendly practices, ensuring responsible resource management and environmental stewardship. Our engineering standards prioritize long-term ecological balance alongside technological advancement.",
    icon: Leaf,
  },
];

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeValue = coreValues[activeIndex];
  const ActiveIcon = activeValue.icon;

  return (
    <section
      id="core-values"
      aria-labelledby="core-values-heading"
      className="relative isolate w-full overflow-hidden bg-black py-10 text-white sm:py-14 lg:py-16"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(8,145,178,0.08),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* Section heading */}
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-3 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-cyan-400 sm:text-xs">
            <span className="h-px w-6 bg-cyan-400/50" />
            What Guides Us
            <span className="h-px w-6 bg-cyan-400/50" />
          </span>

          <h2
            id="core-values-heading"
            className="text-3xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our Core{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Values
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            The principles that anchor our culture, drive our engineering
            standards, and govern our partnerships across every engagement.
          </p>
        </header>

        {/* Main layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Circular navigation */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative aspect-square w-full max-w-[430px]">
              {/* Circular orbit */}
              <div
                aria-hidden="true"
                className="absolute inset-[10%] rounded-full border border-cyan-400/25"
              />

              <div
                aria-hidden="true"
                className="absolute inset-[3%] rounded-full border border-dashed border-cyan-400/20"
              />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-white/30">
                    Our
                  </span>
                  <span className="mt-1 block text-xl font-light tracking-wide text-white/70 sm:text-2xl">
                    Principles
                  </span>
                  <span className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-cyan-400/60" />
                </div>
              </div>

              {/* Circular value buttons */}
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                const isActive = index === activeIndex;

                const positions = [
                  "left-1/2 top-[4%] -translate-x-1/2",
                  "right-[2%] top-1/2 -translate-y-1/2",
                  "left-1/2 bottom-[4%] -translate-x-1/2",
                  "left-[2%] top-1/2 -translate-y-1/2",
                ];

                return (
                  <button
                    key={value.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    aria-label={`Show ${value.title}`}
                    className={`group absolute z-10 flex w-[100px] -translate-y-0 flex-col items-center gap-2 rounded-xl p-2 text-center transition-all duration-300 sm:w-[120px] sm:p-3 ${positions[index]}`}
                  >
                    <span
                      className={`flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 sm:h-20 sm:w-20 ${isActive
                          ? "scale-105 border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                          : "border-slate-700 bg-[#0b0c0f] text-slate-400 group-hover:border-cyan-400/60 group-hover:text-cyan-300"
                        }`}
                    >
                      <Icon className="h-7 w-7 stroke-[1.5] sm:h-8 sm:w-8" />
                    </span>

                    <span
                      className={`text-xs font-medium transition-colors sm:text-sm ${isActive
                          ? "text-cyan-300"
                          : "text-slate-400 group-hover:text-white"
                        }`}
                    >
                      {value.title}
                    </span>
                  </button>
                );
              })}

              {/* Active indicator */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[1%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
              />
            </div>
          </div>

          {/* Right: Dynamic content panel */}
          <div className="min-w-0 lg:col-span-7">
            <article
              key={activeValue.id}
              className="relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-[#111419] via-[#0c0e12] to-[#080a0d] p-5 transition-colors duration-300 sm:p-8 lg:min-h-[390px] lg:p-10"
            >
              {/* Subtle decorative glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-3xl"
              />

              {/* Top row */}
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.07] text-cyan-300 sm:h-14 sm:w-14">
                    <ActiveIcon className="h-6 w-6 stroke-[1.5] sm:h-7 sm:w-7" />
                  </span>

                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-xs">
                    Core Value
                  </span>
                </div>

                <span className="font-mono text-lg tracking-widest text-slate-500 sm:text-xl">
                  {activeValue.id}
                </span>
              </div>

              {/* Selected value content */}
              <div
                key={activeValue.id}
                className="relative mt-7 flex-1 animate-in fade-in slide-in-from-bottom-2 duration-300 sm:mt-9"
              >
                <h3 className="text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {activeValue.title}
                </h3>

                <div className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 sm:mt-5" />

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                  {activeValue.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="relative mt-8 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                <div className="flex items-center gap-3">
                  <span className="h-1 w-7 rounded-full bg-cyan-400 sm:w-9" />
                  <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-slate-500 sm:text-[10px]">
                    Our Standard
                  </span>
                </div>

                <span className="flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
                  {String(activeIndex + 1).padStart(2, "0")} / 04
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>

            {/* Navigation indicators */}
            <div className="mt-4 flex justify-center gap-2 lg:justify-start">
              {coreValues.map((value, index) => (
                <button
                  key={value.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Select ${value.title}`}
                  aria-pressed={activeIndex === index}
                  className={`h-1 rounded-full transition-all duration-300 ${activeIndex === index
                      ? "w-8 bg-cyan-400"
                      : "w-3 bg-slate-700 hover:bg-slate-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
