
import { useMemo, useState } from "react";
import us from "us-atlas/states-10m.json";
import { feature } from "topojson-client";
import { geoAlbersUsa, geoPath } from "d3-geo";

const hubs = [
    { id: "sea", name: "Seattle", role: "Cloud & Distributed Systems", coordinates: [-122.3321, 47.6062] },
    { id: "sf", name: "San Francisco", role: "Silicon Valley Tech HQ", coordinates: [-122.4194, 37.7749] },
    { id: "den", name: "Denver", role: "Mountain Tech Hub", coordinates: [-104.9903, 39.7392] },
    { id: "chi", name: "Chicago", role: "Midwest Operations Center", coordinates: [-87.6298, 41.8781] },
    { id: "atx", name: "Austin", role: "Software Innovation Lab", coordinates: [-97.7431, 30.2672] },
    { id: "atl", name: "Atlanta", role: "Southeast Regional Hub", coordinates: [-84.388, 33.749] },
    { id: "nyc", name: "New York", role: "East Coast Enterprise Hub", coordinates: [-74.006, 40.7128] },
    { id: "bos", name: "Boston", role: "Advanced R&D Facility", coordinates: [-71.0589, 42.3601] },
];

const connections = [
    ["sf", "sea"], ["sf", "den"], ["sf", "atx"],
    ["sea", "chi"], ["den", "chi"], ["den", "atx"],
    ["atx", "chi"], ["atx", "atl"], ["chi", "nyc"],
    ["atl", "nyc"], ["nyc", "bos"],
];

const stateAbbreviations = {
    "01": "AL", "04": "AZ", "05": "AR", "06": "CA",
    "08": "CO", "09": "CT", "10": "DE", "12": "FL",
    "13": "GA", "16": "ID", "17": "IL", "18": "IN",
    "19": "IA", "20": "KS", "21": "KY", "22": "LA",
    "23": "ME", "24": "MD", "25": "MA", "26": "MI",
    "27": "MN", "28": "MS", "29": "MO", "30": "MT",
    "31": "NE", "32": "NV", "33": "NH", "34": "NJ",
    "35": "NM", "36": "NY", "37": "NC", "38": "ND",
    "39": "OH", "40": "OK", "41": "OR", "42": "PA",
    "44": "RI", "45": "SC", "46": "SD", "47": "TN",
    "48": "TX", "49": "UT", "50": "VT", "51": "VA",
    "53": "WA", "54": "WV", "55": "WI", "56": "WY",
};

export default function USPoliticalMap() {
    const [selectedHub, setSelectedHub] = useState(hubs[0]);

    const map = useMemo(() => {
        const states = feature(us, us.objects.states).features.filter(
            (state) => state.id !== "02" && state.id !== "15" && state.id !== "72"
        );

        const projection = geoAlbersUsa().fitSize(
            [960, 590],
            { type: "FeatureCollection", features: states }
        );

        const path = geoPath(projection);

        return {
            states,
            projection,
            path,
        };
    }, []);

    const positions = useMemo(
        () =>
            Object.fromEntries(
                hubs.map((hub) => [
                    hub.id,
                    map.projection(hub.coordinates),
                ])
            ),
        [map]
    );

    return (
        <div className="w-full">
            <div className="relative overflow-hidden rounded-xl">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:30px_30px]"
                />

                <svg
                    viewBox="0 0 960 590"
                    className="relative z-10 h-auto w-full"
                    role="img"
                    aria-label="Interactive political map of the contiguous United States"
                >
                    <defs>
                        <linearGradient id="usPoliticalFill" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#0d9488" stopOpacity=".3" />
                            <stop offset="100%" stopColor="#0369a1" stopOpacity=".15" />
                        </linearGradient>

                        <filter id="usHubGlow" x="-200%" y="-200%" width="400%" height="400%">
                            <feGaussianBlur stdDeviation="4" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Real US state outlines */}
                    <g>
                        {map.states.map((state) => {
                            const abbreviation = stateAbbreviations[
                                String(state.id).padStart(2, "0")
                            ];

                            const centroid = map.path.centroid(state);
                            const validCentroid = centroid.every(Number.isFinite);

                            return (
                                <g key={state.id}>
                                    <path
                                        d={map.path(state)}
                                        fill="url(#usPoliticalFill)"
                                        stroke="#22d3ee"
                                        strokeWidth="1.1"
                                        strokeOpacity=".8"
                                        strokeLinejoin="round"
                                        className="transition-colors duration-200 hover:fill-cyan-400/30"
                                    />

                                    {abbreviation && validCentroid && (
                                        <text
                                            x={centroid[0]}
                                            y={centroid[1]}
                                            fill="#38bdf8"
                                            fontSize="11"
                                            textAnchor="middle"
                                            dominantBaseline="central"
                                            pointerEvents="none"
                                        >
                                            {abbreviation}
                                        </text>
                                    )}
                                </g>
                            );
                        })}
                    </g>

                    {/* Network connection lines */}
                    <g
                        fill="none"
                        stroke="#22d3ee"
                        strokeWidth="1.6"
                        strokeDasharray="5 7"
                        className="us-network-lines"
                    >
                        {connections.map(([from, to]) => {
                            const a = positions[from];
                            const b = positions[to];

                            if (!a || !b) return null;

                            const middleX = (a[0] + b[0]) / 2;
                            const middleY = (a[1] + b[1]) / 2 - 25;

                            return (
                                <path
                                    key={`${from}-${to}`}
                                    d={`M ${a[0]} ${a[1]} Q ${middleX} ${middleY} ${b[0]} ${b[1]}`}
                                />
                            );
                        })}
                    </g>

                    {/* Interactive city hubs */}
                    {hubs.map((hub) => {
                        const point = positions[hub.id];

                        if (!point) return null;

                        const active = selectedHub.id === hub.id;
                        const rightSide = point[0] > 760;
                        const labelX = point[0] + (rightSide ? -12 : 12);

                        return (
                            <g
                                key={hub.id}
                                role="button"
                                tabIndex={0}
                                aria-label={`${hub.name}: ${hub.role}`}
                                className="cursor-pointer outline-none"
                                onClick={() => setSelectedHub(hub)}
                                onMouseEnter={() => setSelectedHub(hub)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        setSelectedHub(hub);
                                    }
                                }}
                            >
                                {active && (
                                    <circle
                                        cx={point[0]}
                                        cy={point[1]}
                                        r="14"
                                        fill="#22d3ee"
                                        fillOpacity=".2"
                                        className="animate-ping"
                                    />
                                )}

                                <circle
                                    cx={point[0]}
                                    cy={point[1]}
                                    r={active ? 7 : 5}
                                    fill="#0d9488"
                                    stroke="#67e8f9"
                                    strokeWidth="2"
                                    filter="url(#usHubGlow)"
                                />

                                <circle
                                    cx={point[0]}
                                    cy={point[1]}
                                    r="2"
                                    fill="white"
                                />

                                <text
                                    x={labelX}
                                    y={point[1] - 11}
                                    textAnchor={rightSide ? "end" : "start"}
                                    fill={active ? "#67e8f9" : "#ffffff"}
                                    fontSize="12"
                                    fontWeight={active ? 600 : 400}
                                    pointerEvents="none"
                                >
                                    {hub.name}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>



            <style>{`
        @keyframes usNetworkFlow {
          from { stroke-dashoffset: 48; }
          to { stroke-dashoffset: 0; }
        }

        .us-network-lines {
          animation: usNetworkFlow 3s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .us-network-lines,
          .animate-ping {
            animation: none !important;
          }
        }
      `}</style>
        </div>
    );
}
