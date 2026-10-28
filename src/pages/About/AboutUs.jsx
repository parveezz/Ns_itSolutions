
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const usHubs = [
  { id: "sf", name: "San Francisco", state: "CA", role: "Silicon Valley Tech HQ", x: 86, y: 275 },
  { id: "sea", name: "Seattle", state: "WA", role: "Cloud & Distributed Systems", x: 132, y: 98 },
  { id: "atx", name: "Austin", state: "TX", role: "Software Innovation Lab", x: 480, y: 465 },
  { id: "chi", name: "Chicago", state: "IL", role: "Midwest Operations Center", x: 585, y: 215 },
  { id: "nyc", name: "New York", state: "NY", role: "East Coast Enterprise Hub", x: 808, y: 200 },
  { id: "bos", name: "Boston", state: "MA", role: "Advanced R&D Facility", x: 842, y: 165 },
  { id: "atl", name: "Atlanta", state: "GA", role: "Southeast Regional Hub", x: 692, y: 388 },
  { id: "den", name: "Denver", state: "CO", role: "Mountain Tech Hub", x: 342, y: 260 },
];

const connections = [
  ["sf", "sea"],
  ["sf", "den"],
  ["sf", "atx"],
  ["sea", "chi"],
  ["den", "chi"],
  ["den", "atx"],
  ["atx", "chi"],
  ["atx", "atl"],
  ["chi", "nyc"],
  ["atl", "nyc"],
  ["nyc", "bos"],
];

const states = [
  { id: "WA", d: "M95 90 L190 100 L180 185 L85 170 Z" },
  { id: "OR", d: "M85 175 L180 190 L165 270 L75 255 Z" },
  { id: "CA", d: "M75 260 L165 275 L190 400 L165 430 L125 410 L95 345 Z" },
  { id: "ID", d: "M195 105 L235 110 L240 190 L215 220 L180 190 Z" },
  { id: "NV", d: "M170 280 L250 290 L230 390 L190 400 L165 275 Z" },
  { id: "MT", d: "M240 110 L350 115 L345 195 L240 190 Z" },
  { id: "WY", d: "M240 200 L340 205 L335 280 L230 275 Z" },
  { id: "UT", d: "M230 285 L300 290 L290 365 L215 360 Z" },
  { id: "AZ", d: "M195 365 L285 370 L280 440 L205 430 Z" },
  { id: "ND", d: "M355 120 L455 125 L455 190 L350 190 Z" },
  { id: "SD", d: "M350 195 L455 195 L455 260 L345 260 Z" },
  { id: "NE", d: "M345 265 L455 265 L465 320 L340 320 Z" },
  { id: "KS", d: "M340 325 L465 325 L465 370 L335 370 Z" },
  { id: "OK", d: "M335 375 L465 375 L465 420 L400 420 L390 400 L335 400 Z" },
  { id: "TX", d: "M335 405 L390 405 L400 425 L465 425 L465 470 L445 500 L420 480 L395 465 L375 480 L350 455 Z" },
  { id: "MN", d: "M460 125 L525 130 L530 205 L460 195 Z" },
  { id: "IA", d: "M460 265 L525 265 L525 320 L465 320 Z" },
  { id: "MO", d: "M465 325 L530 325 L535 380 L465 375 Z" },
  { id: "AR", d: "M470 385 L525 385 L525 430 L470 425 Z" },
  { id: "LA", d: "M470 435 L525 435 L530 465 L490 460 Z" },
  { id: "WI", d: "M535 150 L585 155 L585 220 L540 220 L530 195 Z" },
  { id: "IL", d: "M540 225 L585 225 L585 300 L545 300 Z" },
  { id: "IN", d: "M590 230 L625 230 L625 295 L590 295 Z" },
  { id: "MI", d: "M585 150 L625 145 L645 175 L630 210 L595 215 Z" },
  { id: "OH", d: "M630 230 L675 225 L680 285 L630 290 Z" },
  { id: "KY", d: "M590 305 L680 295 L695 320 L625 335 L590 325 Z" },
  { id: "TN", d: "M535 340 L625 340 L625 365 L535 365 Z" },
  { id: "MS", d: "M540 370 L580 370 L580 425 L540 425 Z" },
  { id: "AL", d: "M585 370 L625 370 L635 430 L590 430 Z" },
  { id: "GA", d: "M640 365 L690 365 L700 415 L655 435 L635 410 Z" },
  { id: "FL", d: "M650 440 L700 420 L720 470 L710 510 L695 490 L680 455 Z" },
  { id: "PA", d: "M700 225 L760 215 L770 255 L705 265 Z" },
  { id: "NY", d: "M765 200 L825 190 L840 215 L785 230 L765 220 Z" },
  { id: "MA", d: "M825 190 L855 185 L860 195 L830 202 Z" },
  { id: "VA", d: "M700 300 L780 285 L795 310 L720 325 Z" },
  { id: "NC", d: "M700 330 L790 315 L810 340 L720 350 Z" },
  { id: "SC", d: "M700 355 L745 350 L760 380 L720 390 Z" },
];

const stateLabels = [
  { name: "CA", x: 135, y: 340 },
  { name: "WA", x: 140, y: 130 },
  { name: "OR", x: 125, y: 220 },
  { name: "NV", x: 205, y: 325 },
  { name: "ID", x: 210, y: 160 },
  { name: "MT", x: 290, y: 155 },
  { name: "WY", x: 285, y: 240 },
  { name: "UT", x: 255, y: 325 },
  { name: "AZ", x: 240, y: 405 },
  { name: "ND", x: 405, y: 155 },
  { name: "SD", x: 405, y: 230 },
  { name: "NE", x: 400, y: 295 },
  { name: "KS", x: 400, y: 350 },
  { name: "OK", x: 400, y: 395 },
  { name: "TX", x: 395, y: 445 },
  { name: "MN", x: 495, y: 170 },
  { name: "IA", x: 495, y: 290 },
  { name: "MO", x: 500, y: 350 },
  { name: "WI", x: 560, y: 185 },
  { name: "IL", x: 560, y: 265 },
  { name: "IN", x: 608, y: 265 },
  { name: "MI", x: 610, y: 180 },
  { name: "OH", x: 655, y: 255 },
  { name: "KY", x: 640, y: 315 },
  { name: "TN", x: 580, y: 355 },
  { name: "AR", x: 500, y: 410 },
  { name: "LA", x: 500, y: 450 },
  { name: "MS", x: 560, y: 400 },
  { name: "AL", x: 610, y: 400 },
  { name: "GA", x: 670, y: 400 },
  { name: "FL", x: 695, y: 465 },
  { name: "PA", x: 735, y: 245 },
  { name: "NY", x: 800, y: 210 },
  { name: "VA", x: 750, y: 305 },
  { name: "NC", x: 755, y: 335 },
  { name: "SC", x: 730, y: 370 },
];

export default function AboutUs() {
  const [selectedHub, setSelectedHub] = useState(usHubs[0]);

  const stats = [
    { value: "120+", label: "US & Global Projects" },
    { value: "35+", label: "Enterprise Clients" },
    { value: "8+", label: "Years of Innovation" },
  ];

  const hubMap = Object.fromEntries(usHubs.map((hub) => [hub.id, hub]));

  return (
    <section
      id="about"
      aria-label="About Us"
      className="relative w-full overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/80 to-black/35"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent"
      />

      <div className="relative z-20 mx-auto w-full max-w-[1520px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[48%_52%] xl:gap-12">

          {/* LEFT SIDE */}
          <div className="min-w-0 text-left">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm">
              WHO WE ARE • AMERICAN ENTERPRISE
            </span>

            <h2 className="mb-5 text-3xl font-light leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[42px] xl:text-[48px]">
              About Our Company
            </h2>

            <p className="mb-6 text-lg font-light leading-snug tracking-tight text-white/90 sm:text-xl lg:text-2xl">
              Empowering American enterprises with next-generation digital technology.
            </p>

            <p className="mb-8 text-sm font-normal leading-relaxed text-white/70 sm:text-base lg:text-lg">
              Headquartered in the United States, our team combines world-class
              engineering, strategic thinking, and modern digital architecture
              to solve mission-critical challenges. From nationwide infrastructure
              deployment to scalable cloud applications, we deliver resilient
              solutions that fuel business growth coast-to-coast.
            </p>

            <div className="mb-10 sm:mb-12">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0d9488] px-7 py-3 text-xs font-medium tracking-wide text-white shadow-lg shadow-teal-950/40 transition-all duration-300 hover:translate-x-1 hover:bg-[#0f766e] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black sm:text-sm"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center">
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 text-3xl font-light leading-none tracking-tight text-cyan-400 sm:text-4xl lg:text-[40px]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-normal leading-snug text-white/70 sm:text-sm">
                        {stat.label}
                      </div>
                    </div>

                    {index < stats.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="mx-3 hidden h-12 w-px shrink-0 bg-white/15 sm:block lg:mx-4"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — POLITICAL-STYLE US MAP */}
          <div className="min-w-0 w-full">
            <div className="relative w-full overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px]"
              />

              <svg
                viewBox="0 0 960 590"
                className="relative z-10 h-auto w-full select-none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="United States state map and technology hubs"
              >
                <defs>
                  <linearGradient id="landGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity=".24" />
                    <stop offset="55%" stopColor="#0369a1" stopOpacity=".18" />
                    <stop offset="100%" stopColor="#082f49" stopOpacity=".3" />
                  </linearGradient>

                  <filter id="hubGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* State-shaped polygons, with state boundaries */}
                <g
                  fill="url(#landGradient)"
                  stroke="#22d3ee"
                  strokeOpacity=".75"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                >
                  {states.map((state) => (
                    <path key={state.id} d={state.d} />
                  ))}
                </g>

                {/* State abbreviations */}
                <g
                  fill="#38bdf8"
                  fontSize="12"
                  fontFamily="Arial, sans-serif"
                  textAnchor="middle"
                >
                  {stateLabels.map((state) => (
                    <text key={state.name} x={state.x} y={state.y}>
                      {state.name}
                    </text>
                  ))}
                </g>

                {/* Animated network connections */}
                <g
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="1.6"
                  strokeDasharray="5 7"
                  className="network-arcs"
                >
                  {connections.map(([from, to]) => {
                    const a = hubMap[from];
                    const b = hubMap[to];

                    return (
                      <path
                        key={`${from}-${to}`}
                        d={`M ${a.x} ${a.y} Q ${(a.x + b.x) / 2} ${Math.min(a.y, b.y) - 35
                          } ${b.x} ${b.y}`}
                      />
                    );
                  })}
                </g>

                {/* Clickable city hubs */}
                {usHubs.map((hub) => {
                  const active = selectedHub.id === hub.id;

                  return (
                    <g
                      key={hub.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${hub.name}: ${hub.role}`}
                      onClick={() => setSelectedHub(hub)}
                      onMouseEnter={() => setSelectedHub(hub)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedHub(hub);
                        }
                      }}
                      className="cursor-pointer outline-none"
                    >
                      {active && (
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="15"
                          fill="#22d3ee"
                          fillOpacity=".25"
                          className="animate-ping"
                        />
                      )}

                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={active ? "8" : "6"}
                        fill="#0d9488"
                        fillOpacity=".95"
                        stroke="#67e8f9"
                        strokeWidth={active ? "2" : "1"}
                        filter="url(#hubGlow)"
                      />

                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="2.5"
                        fill="#ffffff"
                      />

                      <text
                        x={hub.x + (hub.x > 750 ? -12 : 12)}
                        y={hub.y - 11}
                        textAnchor={hub.x > 750 ? "end" : "start"}
                        fill={active ? "#67e8f9" : "#ffffff"}
                        fontSize="12"
                        fontWeight={active ? "600" : "400"}
                      >
                        {hub.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes networkFlow {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }

        .network-arcs {
          animation: networkFlow 3s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .network-arcs,
          .animate-ping,
          .animate-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
