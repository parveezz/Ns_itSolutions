import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const insights = [
    {
        category: "Digital Transformation",
        title: "Building Smarter Digital Experiences for Modern Businesses",
        description:
            "Discover how customer-centric technology, intelligent automation, and scalable digital platforms are transforming business operations.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        readTime: "8 min read",
        path: "/insights/digital-transformation",
    },
    {
        category: "Artificial Intelligence",
        title: "Turning AI Innovation into Business Value",
        description:
            "Explore practical ways organizations can use AI to improve workflows, decision-making, and customer experiences.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
        readTime: "6 min read",
        path: "/insights/artificial-intelligence",
    },
    {
        category: "Cloud & Engineering",
        title: "Engineering Scalable Solutions for the Future",
        description:
            "Learn how modern cloud architectures help businesses build resilient, flexible, and scalable technology ecosystems.",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=85",
        readTime: "5 min read",
        path: "/insights/cloud-engineering",
    },
];

function ReadTime({ children }) {
    return (
        <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
            <Clock3 size={14} />
            {children}
        </span>
    );
}

export default function InsightsShowcase() {
    const featured = insights[0];
    const secondary = insights.slice(1);

    return (
        <section className="bg-black px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[1520px]">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-cyan-400">
                            Featured Perspectives
                        </p>
                        <h2 className="text-2xl font-light tracking-tight sm:text-3xl lg:text-4xl">
                            Explore Our Latest Thinking
                        </h2>
                    </div>

                    <Link
                        to="/insights"
                        className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-cyan-400"
                    >
                        View all insights
                        <ArrowUpRight
                            size={17}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Featured Insight */}
                    <Link
                        to={featured.path}
                        className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#10141b] sm:min-h-[500px] lg:col-span-7"
                    >
                        <img
                            src={featured.image}
                            alt="Modern business workspace"
                            className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

                        <div className="relative z-10 p-6 sm:p-9 lg:p-10">
                            <span className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                                {featured.category}
                            </span>

                            <h3 className="max-w-2xl text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
                                {featured.title}
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                                {featured.description}
                            </p>

                            <div className="mt-6 flex items-center justify-between gap-4">
                                <ReadTime>{featured.readTime}</ReadTime>

                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                                    <ArrowUpRight size={20} />
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Secondary Insights */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                        {secondary.map((insight) => (
                            <Link
                                to={insight.path}
                                key={insight.title}
                                className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1016] transition-colors duration-300 hover:border-cyan-400/30 sm:grid-cols-2"
                            >
                                <div className="min-h-[190px] overflow-hidden sm:min-h-[220px]">
                                    <img
                                        src={insight.image}
                                        alt=""
                                        className="h-full min-h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:min-h-[220px]"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="flex flex-col justify-center p-5 sm:p-6">
                                    <span className="mb-3 text-xs font-medium uppercase tracking-wider text-cyan-400">
                                        {insight.category}
                                    </span>

                                    <h3 className="text-lg font-medium leading-snug transition-colors group-hover:text-cyan-300 sm:text-xl">
                                        {insight.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/55">
                                        {insight.description}
                                    </p>

                                    <div className="mt-5 flex items-center justify-between">
                                        <ReadTime>{insight.readTime}</ReadTime>
                                        <ArrowUpRight
                                            size={18}
                                            className="text-white/60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}