import { Compass, Code, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Architectural Blueprint",
    icon: Compass,
    description:
      "We analyze your business objectives, dissect technical requirements, map data models, and create a comprehensive system architecture blueprint before writing a single line of code.",
    deliverable: "Architecture Spec & Tech Stack Roadmap",
  },
  {
    step: "02",
    title: "Agile Sprints & Prototyping",
    icon: Code,
    description:
      "Our cross-functional squads execute in structured two-week agile sprints. You receive staging access, automated test reports, and interactive demos at every milestone.",
    deliverable: "Bi-Weekly Production Demos",
  },
  {
    step: "03",
    title: "Rigorous QA & Security Auditing",
    icon: ShieldCheck,
    description:
      "Every release undergoes automated integration testing, vulnerability penetration scans, concurrency load benchmarking, and zero-trust security checks.",
    deliverable: "SOC2/HIPAA & QA Compliance Report",
  },
  {
    step: "04",
    title: "Zero-Downtime Launch & Scaling",
    icon: Rocket,
    description:
      "We orchestrate blue-green canary deployments to transition live traffic with zero interruption, followed by 24/7 proactive SRE monitoring and continuous optimization.",
    deliverable: "Live Cluster & 24/7 SLA Support",
  },
];

export default function HomeProcess() {
  return (
    <section
      id="home-process"
      aria-labelledby="home-process-heading"
      className="relative isolate w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-32 text-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_35%,rgba(8,145,178,0.08),transparent_65%)]"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <header className="mx-auto mb-16 sm:mb-20 max-w-4xl text-center">
          <span className="mb-3.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            HOW WE DELIVER • SYSTEMATIC EXECUTION
          </span>

          <h2
            id="home-process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight"
          >
            A Transparent, Battle-Tested{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Engineering Lifecycle
            </span>
            .
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/60 font-normal leading-relaxed max-w-3xl mx-auto">
            We replace unpredictability with disciplined engineering frameworks that de-risk development,
            optimize costs, and guarantee on-time delivery.
          </p>
        </header>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f131a] via-[#0b0e13] to-[#07090d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#131822]"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-light text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-400/15 group-hover:text-cyan-300">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-light text-white mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/65 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Deliverable Tag */}
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Key Deliverable</p>
                  <p className="text-xs font-medium text-cyan-300/90">{item.deliverable}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

