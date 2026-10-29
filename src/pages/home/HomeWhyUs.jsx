import { Shield, Cpu, Zap, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeWhyUs() {
  const pillars = [
    {
      icon: Layers,
      title: "Senior Architectural Leadership",
      description:
        "Every engagement is led by veteran principal architects, ensuring your systems are modular, future-proof, and decoupled from single points of failure.",
    },
    {
      icon: Cpu,
      title: "Zero Technical Debt Standard",
      description:
        "We enforce rigorous test-driven development (TDD), automated CI/CD static analysis, and peer-reviewed standards to deliver clean, maintainable codebases.",
    },
    {
      icon: Shield,
      title: "Military-Grade Security & Compliance",
      description:
        "Security is never an afterthought. We implement zero-trust access, end-to-end encryption, and full compliance readiness for SOC2, HIPAA, and GDPR.",
    },
    {
      icon: Zap,
      title: "Rapid High-Velocity Sprints",
      description:
        "Accelerate time-to-market with transparent 2-week agile delivery cycles, automated staging environments, and direct engineer-to-engineer communication.",
    },
  ];

  return (
    <section
      id="home-why-us"
      aria-labelledby="home-why-us-heading"
      className="relative isolate w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-32 text-white"
    >
      {/* Background ambient gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/[0.05] blur-3xl"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">

          {/* Left Column: Heading & Company Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <span className="mb-3.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              WHY ENTERPRISES CHOOSE US • OUR ADVANTAGE
            </span>

            <h2
              id="home-why-us-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight mb-6"
            >
              Engineering Precision Built For{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
                High-Stakes
              </span>{" "}
              Environments.
            </h2>

            <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed mb-6">
              In mission-critical enterprise environments, system outages and fragile software are
              unacceptable. We build resilient digital foundations that allow our clients to
              outpace competitors with uncompromising speed and stability.
            </p>

            <ul className="space-y-3.5 mb-8 text-sm text-white/80 font-normal">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Dedicated US & Global cross-functional delivery squads</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Transparent fixed-price or flexible agile sprint contracts</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                <span>Full intellectual property & source code handover</span>
              </li>
            </ul>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]"
            >
              <span>Learn More About Our Journey</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: 4 Strategic Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f131a] via-[#0b0e13] to-[#07090d] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#131822]"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-5 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-400/20">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-light text-white mb-2.5 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/65 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

