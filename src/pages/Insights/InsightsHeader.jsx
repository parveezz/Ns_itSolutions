export default function InsightsHeader() {
    return (
        <section className="relative overflow-hidden bg-black px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-[1520px] text-center">
                <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    Knowledge & Perspectives
                </span>

                <h1 className="mx-auto max-w-4xl text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-6xl">
                    Insights That Drive{" "}
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-normal text-transparent">
                        Innovation
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/60 sm:text-base lg:text-lg">
                    Explore fresh perspectives, emerging technologies, and industry
                    expertise to help your business navigate digital transformation
                    and discover new opportunities for growth.
                </p>
            </div>
        </section>
    );
}