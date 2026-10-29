
import { useState } from "react";
import {
    ArrowUpRight,
    ArrowRight,
    Clock3,
    Search,
    BookOpen,
    Lightbulb,
    TrendingUp,
} from "lucide-react";

const categories = [
    "All Insights",
    "Technology",
    "Web Development",
    "Business",
    "Innovation",
];

const insights = [
    {
        id: 1,
        category: "Technology",
        date: "October 24, 2026",
        readTime: "6 min read",
        title: "How AI Is Transforming the Future of Digital Business",
        description:
            "Discover how emerging AI technologies are helping businesses improve workflows, make informed decisions, and create better digital experiences.",
        icon: Lightbulb,
        featured: true,
    },
    {
        id: 2,
        category: "Web Development",
        date: "October 18, 2026",
        readTime: "5 min read",
        title: "Building Scalable Web Applications with Modern React",
        description:
            "Explore the principles behind maintainable frontend architecture, reusable components, and high-performance web experiences.",
        icon: BookOpen,
    },
    {
        id: 3,
        category: "Business",
        date: "October 12, 2026",
        readTime: "4 min read",
        title: "Turning Digital Transformation into Business Growth",
        description:
            "Learn how thoughtful technology decisions can streamline operations and support sustainable business growth.",
        icon: TrendingUp,
    },
    {
        id: 4,
        category: "Innovation",
        date: "October 5, 2026",
        readTime: "7 min read",
        title: "From Ideas to Products: A Practical Innovation Strategy",
        description:
            "A closer look at validating ideas, building prototypes, and developing digital products around real user needs.",
        icon: Lightbulb,
    }
];

function InsightCard({ insight, featured = false }) {
    const Icon = insight.icon;

    return (
        <article
            className={`group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:p-8 ${featured ? "lg:p-10" : ""
                }`}
        >
            <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-400">
                    {insight.category}
                </span>

                <Icon
                    size={featured ? 28 : 22}
                    strokeWidth={1.5}
                    className="shrink-0 text-white/50 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400"
                />
            </div>

            <div className="relative mt-7 flex flex-1 flex-col">
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-light text-white/40">
                    <span>{insight.date}</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="inline-flex items-center gap-1.5">
                        <Clock3 size={13} />
                        {insight.readTime}
                    </span>
                </div>

                <h3
                    className={`font-light leading-snug tracking-tight text-white transition-colors ${featured
                        ? "text-2xl sm:text-3xl lg:text-4xl"
                        : "text-xl sm:text-2xl"
                        }`}
                >
                    {insight.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/70 font-normal">
                    {insight.description}
                </p>

                <a
                    href={`#insight-${insight.id}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 transition-colors hover:text-cyan-300"
                    aria-label={`Read more: ${insight.title}`}
                >
                    Read article
                    <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </a>
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

    return (
        <main className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white">
            {/* ─── Directional Black Gradient Overlays (Matching Hero) ─── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/80 via-50% to-black/35"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 via-35% to-transparent"
            />

            <div className="mx-auto max-w-[1520px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                {/* Insights heading and search */}
                <section className="mt-8 sm:mt-12" aria-labelledby="latest-heading">
                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                        <div>
                            <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                                Explore Our Thinking
                            </p>

                            <h2
                                id="latest-heading"
                                className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-light tracking-tight leading-[1.15] text-white"
                            >
                                Latest Insights
                            </h2>
                        </div>

                        <label className="relative block w-full lg:max-w-[320px]">
                            <span className="sr-only">Search insights</span>
                            <Search
                                size={18}
                                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                            />
                            <input
                                type="search"
                                value={searchQuery}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Search insights..."
                                className="h-12 w-full rounded-full border border-white/15 bg-white/[0.04] pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-cyan-400/70 transition-colors"
                            />
                        </label>
                    </div>

                    {/* Category filters */}
                    <div className="mt-7 flex gap-2 overflow-x-auto pb-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={activeCategory === category}
                                className={`shrink-0 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${activeCategory === category
                                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                                    : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/25 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Insight cards */}
                    {filteredInsights.length > 0 ? (
                        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {filteredInsights
                                .filter((insight) => !insight.featured)
                                .map((insight) => (
                                    <InsightCard key={insight.id} insight={insight} />
                                ))}
                        </div>
                    ) : (
                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
                            <p className="text-base font-light text-white">No insights found.</p>
                            <p className="mt-2 text-sm text-white/50">
                                Try another search term or category.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All Insights");
                                }}
                                className="mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-cyan-400 hover:text-cyan-300 cursor-pointer"
                            >
                                Clear filters <ArrowRight size={15} />
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
