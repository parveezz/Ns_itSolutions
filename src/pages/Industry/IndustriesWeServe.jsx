import {
  Activity,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Factory,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const industriesWeServe = [
  {
    id: "healthcare",
    number: "01",
    label: "Healthcare",
    path: "/industries/healthcare",
    icon: Activity,
    tagline: "Connected Clinical & Patient Ecosystems",
    description:
      "Transforming patient experiences, clinical operations, and diagnostic workflows with secure, HIPAA-compliant digital architectures and real-time health intelligence.",
    capabilities: [
      "Telehealth & Remote Care",
      "EHR & Interoperability",
      "HIPAA Cloud Security",
    ],
    accent: "from-teal-500/20 to-cyan-500/10",
  },
  {
    id: "banking-finance",
    number: "02",
    label: "Banking & Finance",
    path: "/industries/banking-finance",
    icon: Landmark,
    tagline: "Resilient BFSI & Fintech Infrastructure",
    description:
      "Engineering mission-critical banking architectures, automated compliance engines, fraud monitoring pipelines, and seamless omnichannel retail banking portals.",
    capabilities: [
      "Core Banking Modernization",
      "Fraud Prevention AI",
      "Automated Compliance",
    ],
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "education",
    number: "03",
    label: "Education",
    path: "/industries/education",
    icon: GraduationCap,
    tagline: "Next-Gen EdTech & Learning Platforms",
    description:
      "Empowering academic institutions, universities, and EdTech platforms with scalable virtual classroom tools, interactive LMS engines, and student lifecycle systems.",
    capabilities: [
      "Enterprise LMS Solutions",
      "Virtual Learning Labs",
      "Student Analytics",
    ],
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "retail",
    number: "04",
    label: "Retail & E-commerce",
    path: "/industries/retail",
    icon: ShoppingBag,
    tagline: "Omnichannel Commerce & Intelligent Logistics",
    description:
      "Creating seamless digital shopping journeys, real-time automated supply chain tracking, and predictive personalization algorithms that elevate customer loyalty.",
    capabilities: [
      "Headless E-Commerce",
      "Smart Inventory Systems",
      "Personalized Retailing",
    ],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "manufacturing",
    number: "05",
    label: "Manufacturing",
    path: "/industries/manufacturing",
    icon: Factory,
    tagline: "Industry 4.0 & Smart Shop-Floor Systems",
    description:
      "Driving smart factory excellence through Industrial IoT telemetry, predictive machinery maintenance, digital supply networks, and unified production oversight.",
    capabilities: [
      "Industrial IoT Telemetry",
      "Predictive Maintenance",
      "Supply Chain Visibility",
    ],
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "technology",
    number: "06",
    label: "Technology",
    path: "/industries/technology",
    icon: Cpu,
    tagline: "Enterprise Cloud, SaaS & Distributed Systems",
    description:
      "Partnering with tech enterprises and high-growth scale-ups to engineer high-throughput cloud architectures, microservices, secure APIs, and custom software.",
    capabilities: [
      "Cloud-Native SaaS",
      "Distributed Microservices",
      "DevSecOps Automation",
    ],
    accent: "from-purple-500/20 to-cyan-500/10",
  },
];

export default function IndustriesWeServe() {
  return (
    <section
      id="industries-we-serve"
      aria-labelledby="industries-we-serve-heading"
      className="relative isolate w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_25%,rgba(8,145,178,0.08),transparent_65%)]"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <header className="mx-auto mb-14 sm:mb-20 max-w-4xl text-center">
          <span className="mb-3.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            INDUSTRIES WE SERVE • SECTOR CAPABILITIES
          </span>

          <h2
            id="industries-we-serve-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight"
          >
            Tailored Engineering for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Key Industries
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/60 font-normal leading-relaxed max-w-3xl mx-auto">
            We deliver targeted technology solutions, deep domain understanding, and scalable
            architectures designed specifically to overcome industry bottlenecks.
          </p>
        </header>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesWeServe.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.id}
                id={industry.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f131a] via-[#0b0e13] to-[#07090d] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#131822]"
              >
                {/* Subtle card top gradient glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br ${industry.accent} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Top Row: Icon & Sector Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/20">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>

                    <span className="font-mono text-xs tracking-widest text-white/35 group-hover:text-cyan-400/60 transition-colors">
                      {industry.number}
                    </span>
                  </div>

                  {/* Industry Label & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                    {industry.label}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80 mb-3.5">
                    {industry.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/65 font-normal leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Capabilities Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {industry.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/75 transition-colors group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-white/90"
                      >
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="border-t border-white/[0.08] pt-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 transition-colors duration-200 hover:text-cyan-300 group/link"
                  >
                    <span>Consult Specialists</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
