
const milestones = [
    {
        year: "1987–1990s",
        title: "Foundation & Early Years",
        description:
            "Team Computers was founded in 1987 by IIT-Kanpur alumnus Ranjan Chopra, beginning as a hardware reseller in New Delhi.",
    },
    {
        year: "2000s",
        title: "Expansion into IT Solutions",
        description:
            "The company grew into system integration, partnering with global technology giants and building a nationwide presence.",
    },
    {
        year: "2010–2015",
        title: "Diversification into Managed Services & Cloud",
        description:
            "It launched cloud services and managed IT operations, while also investing in data and analytics practices.",
    },
    {
        year: "2016–2020",
        title: "Digital Transformation Era",
        description:
            "Team Computers positioned itself as a digital transformation partner, expanding into AI, mobility, and enterprise security.",
    },
    {
        year: "2021–2023",
        title: "Scaling Up & New Offerings",
        description:
            "With revenues crossing ₹2,800 crores by FY2023, it expanded cloud-native, cybersecurity, and analytics offerings.",
    },
    {
        year: "2025",
        title: "Future Ready",
        description:
            "The company drove AI-powered automation, GenAI solutions, and international expansion.",
    },
    {
        year: "2026",
        title: "Revenue Growth & AI Innovation",
        description:
            "With revenue reaching ₹4,700 crores, Team Computers continues to expand its AI, cloud, and cybersecurity capabilities.",
    },
];

export default function Journey() {
    return (
        <section
            id="journey"
            className="relative w-full overflow-hidden bg-black text-white"
        >
            {/* Heading */}
            <header className="relative z-10 mx-auto max-w-[1520px] px-5 pb-8 pt-10 text-center sm:px-8 sm:pb-10 sm:pt-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                    The Adventures That Shaped Us
                </p>

                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                    <span className="bg-gradient-to-r from-emerald-400 to-yellow-300 bg-clip-text text-transparent">
                        Our Journey
                    </span>
                </h2>
            </header>

            {/* Timeline and road image */}
            <div className="relative isolate">
                {/* Background image fills the timeline area and bottom space */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10"
                >
                    <img
                        src="/journey-road.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center"
                    />

                    {/* Dark overlay behind the timeline text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-transparent" />
                </div>

                {/* Desktop: straight horizontal timeline */}
                <div className="relative z-10 mx-auto hidden w-full max-w-[1700px] px-6 pb-8 lg:block xl:px-10">
                    <div className="relative">
                        {/* One continuous line */}
                        <div
                            aria-hidden="true"
                            className="absolute left-[2%] right-[2%] top-[230px] h-px bg-white/35"
                        />

                        {/* Seven milestones */}
                        <div className="grid grid-cols-7 gap-4 xl:gap-6">
                            {milestones.map((item, index) => {
                                const isAbove = index % 2 === 0;

                                return (
                                    <article
                                        key={item.year}
                                        className="grid min-w-0 grid-rows-[210px_40px_minmax(170px,auto)]"
                                    >
                                        {/* Text above the timeline */}
                                        <div className="flex min-w-0 items-end pb-5">
                                            {isAbove && (
                                                <div className="w-full">
                                                    <span className="mb-1.5 block text-[10px] font-medium text-cyan-300 xl:text-xs">
                                                        {item.year}
                                                    </span>

                                                    <h3 className="text-xs font-semibold leading-relaxed text-white xl:text-sm">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-1.5 break-words text-[10px] leading-relaxed text-white/90 xl:text-xs">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Marker aligned with the straight line */}
                                        <div className="relative z-10 flex items-center justify-center">
                                            <span className="h-3 w-3 shrink-0 rounded-full border border-white/50 bg-gradient-to-br from-emerald-300 to-orange-300 shadow-[0_0_12px_rgba(52,211,153,0.35)]" />
                                        </div>

                                        {/* Text below the timeline */}
                                        <div className="min-w-0 pt-5">
                                            {!isAbove && (
                                                <div>
                                                    <span className="mb-1.5 block text-[10px] font-medium text-cyan-300 xl:text-xs">
                                                        {item.year}
                                                    </span>

                                                    <h3 className="text-xs font-semibold leading-relaxed text-white xl:text-sm">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-1.5 break-words text-[10px] leading-relaxed text-white/90 xl:text-xs">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile and tablet: vertical timeline */}
                <div className="relative z-10 mx-auto max-w-3xl px-5 pb-8 lg:hidden">
                    <div className="relative flex flex-col gap-6">
                        <div
                            aria-hidden="true"
                            className="absolute bottom-2 left-[5px] top-2 w-px bg-white/35"
                        />

                        {milestones.map((item) => (
                            <article
                                key={item.year}
                                className="relative min-w-0 pl-7"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 top-1.5 h-3 w-3 rounded-full border border-white/50 bg-gradient-to-br from-emerald-300 to-orange-300"
                                />

                                <span className="text-xs font-medium text-cyan-300">
                                    {item.year}
                                </span>

                                <h3 className="mt-1 text-sm font-semibold leading-relaxed text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-xs leading-relaxed text-white/90">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Image-only bottom half */}
                <div
                    aria-hidden="true"
                    className="relative h-[35vh] min-h-[220px] w-full sm:h-[45vh] lg:h-[50vh]"
                />
            </div>
        </section>
    );
}
