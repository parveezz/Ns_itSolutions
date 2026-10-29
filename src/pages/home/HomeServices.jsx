import {
  Code2,
  Cloud,
  Cpu,
  ShieldCheck,
  RefreshCw,
  Server,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "software-engineering",
    number: "01",
    title: "Custom Software & SaaS Engineering",
    icon: Code2,
    tagline: "Scalable Full-Stack Web & Mobile Architectures",
    description:
      "We design and build high-throughput digital platforms, multi-tenant SaaS products, and distributed software solutions engineered for peak concurrency, clean codebases, and seamless UX.",
    tags: ["React 19 & Next.js", "Distributed Microservices", "High-Throughput APIs"],
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    id: "cloud-devops",
    number: "02",
    title: "Enterprise Cloud & DevOps",
    icon: Cloud,
    tagline: "Kubernetes, Multi-Cloud & CI/CD Pipelines",
    description:
      "Accelerate delivery cycles with containerized infrastructure, automated CI/CD deployment pipelines, multi-region failovers, and Infrastructure-as-Code across AWS, Azure, and Google Cloud.",
    tags: ["Kubernetes & Docker", "Terraform & IaC", "Zero-Downtime Blue/Green"],
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "ai-automation",
    number: "03",
    title: "AI Workflows & Agentic Systems",
    icon: Cpu,
    tagline: "Autonomous Agent Orchestration & Predictive ML",
    description:
      "Integrate intelligent cognitive automation into your enterprise workflows. We build custom agentic pipelines, predictive data models, and automated processes that elevate operational efficiency.",
    tags: ["Autonomous Multi-Agents", "Real-Time Telemetry", "Custom LLM Integrations"],
    accent: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "Cybersecurity & Zero-Trust Governance",
    icon: ShieldCheck,
    tagline: "End-to-End Encryption, SOC2 & Threat Detection",
    description:
      "Protect your enterprise perimeter with modern zero-trust security. We implement continuous vulnerability scanning, micro-segmentation, identity access governance, and HIPAA/SOC2 compliance.",
    tags: ["Zero-Trust Security", "Automated Compliance", "Penetration Testing"],
    accent: "from-purple-500/20 to-cyan-500/10",
  },
  {
    id: "legacy-modernization",
    number: "05",
    title: "Legacy Modernization & Data Migration",
    icon: RefreshCw,
    tagline: "Monolith to Microservices & Database Optimization",
    description:
      "De-risk your digital infrastructure by safely refactoring legacy technical debt. We decouple legacy monolithic applications into maintainable microservices with zero operational downtime.",
    tags: ["Monolith Decomposition", "Schema Optimization", "Database Modernization"],
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    id: "managed-ops",
    number: "06",
    title: "24/7 Managed IT & Site Reliability",
    icon: Server,
    tagline: "Proactive SRE, Incident Management & Disaster Recovery",
    description:
      "Ensure uninterrupted business operations with continuous infrastructure monitoring, automated disaster recovery failovers, latency optimization, and dedicated enterprise support teams.",
    tags: ["Site Reliability (SRE)", "Proactive Monitoring", "Global SLAs"],
    accent: "from-teal-500/20 to-emerald-500/10",
  },
];

export default function HomeServices() {
  return (
    <section
      id="home-services"
      aria-labelledby="home-services-heading"
      className="relative isolate w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-32 text-white"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_20%,rgba(8,145,178,0.08),transparent_65%)]"
      />

      <div className="mx-auto max-w-[1520px] px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <header className="mx-auto mb-16 sm:mb-20 max-w-4xl text-center">
          <span className="mb-3.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            CORE CAPABILITIES • TECHNICAL EXCELLENCE
          </span>

          <h2
            id="home-services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight"
          >
            Engineering Enterprise Solutions Across The{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Digital Lifecycle
            </span>
            .
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/60 font-normal leading-relaxed max-w-3xl mx-auto">
            From initial system architecture to continuous production deployment, our multidisciplinary
            engineering teams deliver reliable, maintainable software and cloud platforms.
          </p>
        </header>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f131a] via-[#0b0e13] to-[#07090d] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#131822]"
              >
                {/* Glow accent in corner */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-gradient-to-br ${service.accent} blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Top Row: Icon & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/20">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>

                    <span className="font-mono text-xs tracking-widest text-white/35 group-hover:text-cyan-400/70 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-400/80 mb-3.5">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/65 font-normal leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/75 transition-colors group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-white/90"
                      >
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="border-t border-white/[0.08] pt-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 transition-colors duration-200 hover:text-cyan-300 group/link"
                  >
                    <span>Request Architecture Proposal</span>
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

