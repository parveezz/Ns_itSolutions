import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Clock3,
  Search,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Cloud,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All Insights",
  "Technology",
  "Web Development",
  "Business & Strategy",
  "Innovation & AI",
  "Cloud & DevOps",
];

const insights = [
  {
    id: 1,
    category: "Innovation & AI",
    date: "October 24, 2026",
    readTime: "6 min read",
    title: "How Agentic AI Is Transforming Enterprise Digital Workflows",
    description:
      "Discover how emerging multi-agent architectures and autonomous AI workflows are enabling organizations to automate complex tasks, optimize resource allocation, and enhance decision accuracy.",
    icon: Lightbulb,
    featured: true,
    highlights: ["Autonomous Agents", "Workflow Orchestration", "Enterprise Safety"],
  },
  {
    id: 2,
    category: "Web Development",
    date: "October 18, 2026",
    readTime: "5 min read",
    title: "Building Scalable Web Applications with Modern React & Vite",
    description:
      "Explore the principles behind maintainable frontend architecture, modular component hierarchies, tree-shaking, and high-performance user experiences.",
    icon: BookOpen,
    featured: false,
    highlights: ["React 19 Architecture", "Performance Profiling", "State Management"],
  },
  {
    id: 3,
    category: "Business & Strategy",
    date: "October 12, 2026",
    readTime: "4 min read",
    title: "Turning Digital Transformation into Measurable Enterprise Growth",
    description:
      "Learn how thoughtful technology decisions, strategic legacy modernization, and KPI-aligned engineering streamline operations and unlock new revenue streams.",
    icon: TrendingUp,
    featured: false,
    highlights: ["ROI Metrics", "Legacy Modernization", "Operational Agility"],
  },
  {
    id: 4,
    category: "Cloud & DevOps",
    date: "October 5, 2026",
    readTime: "7 min read",
    title: "Zero-Downtime Migration: Moving Legacy Systems to Cloud-Native",
    description:
      "A practical blueprint for architecting multi-region failovers, containerized microservices, and continuous delivery pipelines without disrupting customer operations.",
    icon: Cloud,
    featured: false,
    highlights: ["Kubernetes", "Multi-Region Cloud", "Blue-Green Deployment"],
  },
  {
    id: 5,
    category: "Technology",
    date: "September 28, 2026",
    readTime: "5 min read",
    title: "Zero-Trust Cybersecurity for Distributed Enterprise Networks",
    description:
      "An in-depth look at enforcing identity verification, micro-segmentation, and encrypted communications across remote and hybrid enterprise workforces.",
    icon: ShieldCheck,
    featured: false,
    highlights: ["Zero-Trust Identity", "Micro-Segmentation", "Threat Detection"],
  },
  {
    id: 6,
    category: "Innovation & AI",
    date: "September 20, 2026",
    readTime: "6 min read",
    title: "From POC to Production: A Practical Digital Innovation Playbook",
    description:
      "A systematic methodology for validating emerging technologies, building rapid functional prototypes, and successfully scaling production-ready digital products.",
    icon: Cpu,
    featured: false,
    highlights: ["Agile Prototyping", "MVP Validation", "Production Scaling"],
  },
];

function InsightCard({ insight }) {
  const Icon = insight.icon;

  return (
    <article
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#10141b] via-[#0b0e13] to-[#07090d] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-[#131822] hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]"
    >
      <div>
        {/* Top Meta row */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300">
            {insight.category}
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
            <Icon size={18} strokeWidth={1.75} />
          </span>
        </div>

        {/* Date & Read time */}
        <div className="mb-3.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-light text-white/40">
          <span>{insight.date}</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="inline-flex items-center gap-1.5 text-white/50">
            <Clock3 size={13} />
            {insight.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-light leading-snug tracking-tight text-white mb-3 group-hover:text-white transition-colors">
          {insight.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/65 font-normal mb-6">
          {insight.description}
        </p>

        {/* Highlight tags */}
        {insight.highlights && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {insight.highlights.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-white/60 bg-white/[0.03] border border-white/[0.08] rounded-md px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Read link */}
      <div className="border-t border-white/[0.08] pt-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors group/link"
        >
          <span>Read Full Article</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInsights = insights.filter((insight) => {
    const matchesCategory =
      activeCategory === "All Insights" ||
      insight.category === activeCategory;

    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !query ||
      insight.title.toLowerCase().includes(query) ||
      insight.description.toLowerCase().includes(query) ||
      insight.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredInsight = insights.find((item) => item.featured) || insights[0];
  const isFiltering = activeCategory !== "All Insights" || searchQuery.trim() !== "";

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white">
      {/* ─── Directional Black Gradient Overlays (Matching Website Standard) ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/85 via-50% to-black/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-3xl"
      />

      {/* ─── Hero / Header Section ─── */}
      <section
        id="insights-hero"
        aria-labelledby="insights-hero-heading"
        className="relative z-10 mx-auto w-full max-w-[1520px] px-6 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 sm:px-10 lg:px-16"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="mb-3.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            PERSPECTIVES & THOUGHT LEADERSHIP • TECH INSIGHTS
          </span>

          {/* Heading */}
          <h1
            id="insights-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-light text-white tracking-tight leading-[1.15] mb-6"
          >
            Engineering Perspectives, Architecture Strategy &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
              Digital Innovation
            </span>
            .
          </h1>

          {/* Two-tone accent line with subtitle */}
          <div className="flex items-stretch gap-5 sm:gap-6 mt-6 sm:mt-8">
            <div
              className="w-[2.5px] rounded-full flex flex-col shrink-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="h-8 sm:h-10 bg-cyan-400 w-full shrink-0" />
              <div className="flex-1 bg-white/70 w-full" />
            </div>

            <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed text-white/75 max-w-2xl">
              In-depth technical analysis, architectural frameworks, and industry research from
              NS IT Solutions&apos; senior engineering architects and technology strategists.
            </p>
          </div>
        </div>

        {/* ─── Featured Article Banner (Shown when not actively filtering) ─── */}
        {!isFiltering && featuredInsight && (
          <div className="mt-12 sm:mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#10141c] via-[#090c10] to-[#05070a] p-7 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 right-1/4 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl"
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-cyan-300">
                      <Sparkles size={13} className="text-cyan-400" />
                      FEATURED INSIGHT
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                      {featuredInsight.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-snug mb-4">
                    {featuredInsight.title}
                  </h2>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl mb-6">
                    {featuredInsight.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 mb-6">
                    <span>{featuredInsight.date}</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {featuredInsight.readTime}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]"
                  >
                    <span>Read Full Analysis</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="lg:col-span-4 flex items-center justify-center">
                  <div className="relative flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-md">
                    <Lightbulb className="h-20 w-20 text-cyan-300 stroke-[1.25] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Search & Category Filters Bar ─── */}
        <div className="mt-14 sm:mt-18 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 mb-1">
                Curated Knowledge Base
              </p>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                All Articles & Briefings
              </h2>
            </div>

            {/* Search Input */}
            <label className="relative block w-full lg:max-w-[340px]">
              <span className="sr-only">Search insights</span>
              <Search
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search topics, keywords..."
                className="h-11 w-full rounded-full border border-white/15 bg-white/[0.04] pl-11 pr-4 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-cyan-400/70 transition-colors"
              />
            </label>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "border-cyan-400/60 bg-cyan-400/15 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/25 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ─── Articles Grid ─── */}
          {filteredInsights.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredInsights.map((insight) => (
                <InsightCard key={insight.id} insight={insight} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
              <p className="text-lg font-light text-white">No articles matched your criteria.</p>
              <p className="mt-2 text-sm text-white/50">
                Try searching with different keywords or reset your category filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All Insights");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-xs sm:text-sm font-medium text-cyan-300 hover:bg-cyan-400/20 cursor-pointer transition-colors"
              >
                <span>Reset Filters</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* ─── Bottom Discussion CTA ─── */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-950/20 via-black to-emerald-950/20 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-3">
            Have a Complex Engineering Challenge?
          </h3>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-8 font-normal">
            Our principal architects and digital strategists are ready to evaluate your enterprise
            infrastructure and design your future-state roadmap.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0d9488] hover:bg-[#0f766e] text-white px-8 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,148,136,0.4)]"
          >
            <span>Schedule an Architectural Briefing</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
