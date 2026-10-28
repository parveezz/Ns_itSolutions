import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const usHubs = [
  { id: "sf", name: "San Francisco, CA", role: "Silicon Valley Tech HQ", x: 86, y: 275, ping: true },
  { id: "sea", name: "Seattle, WA", role: "Cloud & Distributed Systems", x: 132, y: 98 },
  { id: "atx", name: "Austin, TX", role: "Software Innovation Lab", x: 480, y: 465, ping: true },
  { id: "chi", name: "Chicago, IL", role: "Midwest Operations Center", x: 585, y: 215 },
  { id: "nyc", name: "New York, NY", role: "East Coast Enterprise Hub", x: 808, y: 200, ping: true },
  { id: "bos", name: "Boston, MA", role: "Advanced R&D Facility", x: 842, y: 165 },
  { id: "atl", name: "Atlanta, GA", role: "Southeast Regional Hub", x: 692, y: 388 },
  { id: "den", name: "Denver, CO", role: "Mountain Tech Hub", x: 342, y: 260 },
];

export default function AboutUs() {
  const [selectedHub, setSelectedHub] = useState(usHubs[0]);

  const stats = [
    { value: "120+", label: "US & Global Projects" },
    { value: "35+", label: "Enterprise Clients" },
    { value: "8+", label: "Years of Innovation" },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-[720px] bg-black overflow-hidden flex items-center py-16 sm:py-20 lg:py-24"
      aria-label="About Us"
    >
      {/* ─── Directional Black Gradient Overlays (Matching Hero) ─── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 via-50% to-black/35 pointer-events-none z-10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-35% to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* ─── Main Content Container ─── */}
      <div className="relative z-20 max-w-[1520px] w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 xl:gap-10 items-center">

          {/* LEFT COLUMN (5 cols on xl, 6 cols on lg): Company Information */}
          <div className="min-w-0 text-left">
            {/* Eyebrow Label */}
            <span className="inline-block text-xs sm:text-sm font-medium text-cyan-400 tracking-[0.25em] uppercase mb-3 sm:mb-4">
              WHO WE ARE • AMERICAN ENTERPRISE
            </span>

            {/* Main Heading — exact Hero typography: font-light, leading-[1.15], tracking-tight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-light text-white tracking-tight leading-[1.15] mb-5 sm:mb-6">
              About Our Company
            </h2>

            {/* Supporting Statement — font-light text-white/90 */}
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-white/90 leading-snug tracking-tight mb-5 sm:mb-6">
              Empowering American enterprises with next-generation digital technology.
            </p>

            {/* Supporting Body Text — font-normal text-white/70 */}
            <p className="text-sm sm:text-base lg:text-lg font-normal text-white/70 leading-relaxed mb-8 sm:mb-10">
              Headquartered in the United States, our team combines world-class engineering,
              strategic thinking, and modern digital architecture to solve mission-critical
              challenges. From nationwide infrastructure deployment to scalable cloud applications,
              we deliver resilient solutions that fuel business growth coast-to-coast.
            </p>

            {/* Hero-matched CTA Button */}
            <div className="mb-10 sm:mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-teal-950/40 transition-all duration-300 hover:shadow-xl hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Horizontal Statistics */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 items-center">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="flex items-center">
                    <div className="flex-1">
                      <div className="text-3xl sm:text-4xl lg:text-[40px] font-light text-cyan-400 tracking-tight leading-none mb-2">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm font-normal text-white/70 leading-snug">
                        {stat.label}
                      </div>
                    </div>

                    {/* Thin vertical divider between items */}
                    {idx < stats.length - 1 && (
                      <div
                        className="hidden sm:block h-12 w-[1px] bg-white/15 mx-3 lg:mx-4 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (7 cols on xl, 6 cols on lg): United States Map & Technology Network */}
          <div className="min-w-0 w-full">
            <div className="relative w-full overflow-hidden p-0">



              {/* High-Tech USA Vector Map Graphic */}
              <div className="relative w-full aspect-[960/590] my-2">
                <svg
                  viewBox="0 0 960 590"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Tech Background Grid Pattern */}
                    <pattern id="usTechGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path
                        d="M 30 0 L 0 0 0 30"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.03)"
                        strokeWidth="0.8"
                      />
                    </pattern>

                    {/* Subtle Landmass Fill Gradient */}
                    <linearGradient id="usLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.14" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.03" />
                    </linearGradient>

                    {/* Network Connection Line Glow Gradient */}
                    <linearGradient id="usLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Ambient Tech Grid */}
                  <rect width="960" height="590" fill="url(#usTechGrid)" />

                  {/* ─── Continental United States Silhouette ─── */}
                  <path
                    d="M 115,75
                       C 135,76 175,78 220,79
                       L 310,81 L 415,84 L 490,86
                       C 502,86 508,74 518,70
                       C 525,72 529,81 538,87
                       L 555,89
                       C 568,98 578,94 595,94
                       C 615,89 628,103 642,112
                       C 656,108 670,117 685,126
                       C 705,131 720,126 735,136
                       C 745,126 760,116 780,121
                       C 800,116 814,102 828,88
                       C 842,78 862,73 872,83
                       C 878,92 873,112 863,126
                       C 854,141 844,155 839,170
                       C 847,175 857,180 851,187
                       C 844,190 834,185 829,183
                       C 824,190 819,200 814,210
                       C 807,215 814,223 824,223
                       C 819,230 804,230 799,235
                       C 794,245 789,265 784,280
                       C 794,295 804,315 804,330
                       C 799,340 784,350 774,360
                       C 764,375 754,400 749,420
                       C 754,435 764,455 774,485
                       C 781,510 784,535 774,550
                       C 764,560 749,545 744,525
                       C 739,495 734,465 729,445
                       C 714,445 694,450 674,445
                       C 659,445 644,455 634,465
                       C 624,475 619,495 609,500
                       C 599,500 589,480 574,475
                       C 554,470 534,475 519,490
                       C 504,510 489,535 474,560
                       C 464,560 454,540 444,525
                       C 434,510 409,500 389,490
                       C 374,483 359,490 349,475
                       C 339,460 324,450 304,435
                       L 229,433
                       C 209,430 189,430 164,430
                       C 139,430 119,415 104,390
                       C 101,380 94,370 89,360
                       C 81,340 84,315 77,295
                       C 69,275 64,255 64,235
                       C 59,210 61,190 67,170
                       C 71,145 74,125 77,105
                       C 81,90 87,80 94,77
                       Z"
                    fill="url(#usLandGradient)"

                  />

                  {/* Internal Regional Technology Grid Lines (US State Divisions) */}
                  <g stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.1" strokeDasharray="3 6">
                    {/* West Coast / Pacific boundaries */}
                    <line x1="77" y1="120" x2="200" y2="120" />
                    <line x1="67" y1="175" x2="210" y2="175" />
                    <line x1="210" y1="175" x2="140" y2="370" />
                    {/* Mountain region lines */}
                    <line x1="200" y1="80" x2="200" y2="240" />
                    <line x1="200" y1="240" x2="310" y2="240" />
                    <line x1="310" y1="81" x2="310" y2="340" />
                    <line x1="310" y1="340" x2="440" y2="340" />
                    <line x1="440" y1="85" x2="440" y2="340" />
                    {/* Texas boundary box */}
                    <line x1="350" y1="370" x2="490" y2="370" />
                    <line x1="490" y1="370" x2="490" y2="440" />
                    {/* Midwest & Great Lakes boundaries */}
                    <line x1="555" y1="90" x2="555" y2="340" />
                    <line x1="555" y1="250" x2="680" y2="250" />
                    <line x1="680" y1="126" x2="680" y2="380" />
                    {/* East Coast / Southern boundaries */}
                    <line x1="680" y1="320" x2="800" y2="320" />
                    <line x1="680" y1="390" x2="760" y2="390" />
                    <line x1="740" y1="180" x2="840" y2="180" />
                  </g>

                  {/* ─── Glowing Inter-Hub Network Arcs ─── */}
                  <g stroke="url(#usLineGlow)" strokeWidth="1.5" strokeDasharray="4 6" className="network-arcs">
                    {/* SF to Seattle */}
                    <path d="M 86 275 Q 98 180 132 98" />
                    {/* SF to Denver */}
                    <path d="M 86 275 Q 210 240 342 260" />
                    {/* SF to Austin */}
                    <path d="M 86 275 Q 270 410 480 465" />
                    {/* Seattle to Chicago */}
                    <path d="M 132 98 Q 360 120 585 215" />
                    {/* Denver to Chicago */}
                    <path d="M 342 260 Q 460 210 585 215" />
                    {/* Denver to Austin */}
                    <path d="M 342 260 Q 410 370 480 465" />
                    {/* Austin to Chicago */}
                    <path d="M 480 465 Q 540 330 585 215" />
                    {/* Austin to Atlanta */}
                    <path d="M 480 465 Q 590 440 692 388" />
                    {/* Chicago to New York */}
                    <path d="M 585 215 Q 700 180 808 200" />
                    {/* Atlanta to New York */}
                    <path d="M 692 388 Q 770 290 808 200" />
                    {/* New York to Boston */}
                    <path d="M 808 200 Q 825 180 842 165" />
                  </g>

                  {/* ─── Hub Nodes with Pulsing Radar Rings ─── */}
                  {usHubs.map((hub) => {
                    const isSelected = selectedHub.id === hub.id;
                    return (
                      <g
                        key={hub.id}
                        className="cursor-pointer group/hub transition-all"
                        onClick={() => setSelectedHub(hub)}
                        onMouseEnter={() => setSelectedHub(hub)}
                      >
                        {/* Animated Radar Pulse ring for active hubs */}
                        {(hub.ping || isSelected) && (
                          <circle
                            cx={hub.x}
                            cy={hub.y}
                            r={isSelected ? "18" : "12"}
                            fill="#22d3ee"
                            fillOpacity={isSelected ? "0.35" : "0.2"}
                            className="animate-ping"
                          />
                        )}

                        {/* Outer Glow Halo */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isSelected ? "9" : "6"}
                          fill="#0d9488"
                          fillOpacity="0.8"
                          stroke={isSelected ? "#22d3ee" : "#ffffff"}
                          strokeWidth={isSelected ? "2" : "1"}
                          className="transition-all duration-300"
                        />

                        {/* Center White Core */}
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isSelected ? "4" : "2.5"}
                          fill={isSelected ? "#22d3ee" : "#ffffff"}
                        />

                        {/* Hub Text Label */}
                        <text
                          x={hub.x + (hub.x > 750 ? -12 : 12)}
                          y={hub.y + 4}
                          textAnchor={hub.x > 750 ? "end" : "start"}
                          className={`text-[11px] font-sans transition-all duration-300 ${isSelected
                            ? "fill-cyan-400 font-semibold"
                            : "fill-white/70 font-light group-hover/hub:fill-white"
                            }`}
                        >
                          {hub.name.split(",")[0]}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Card Footer: Selected Hub Quick Info & Key Metrics */}


            </div>
          </div>

        </div>
      </div>

      {/* Network Animation Style */}
      <style>{`
        @keyframes networkFlow {
          from {
            stroke-dashoffset: 40;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .network-arcs {
          animation: networkFlow 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
}
