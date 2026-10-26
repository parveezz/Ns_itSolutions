export const stats = [
  { label: "Cables Deployed", value: "250K+ m" },
  { label: "Cables Monitored", value: "15,000+" },
  { label: "Offices Wired", value: "350+" },
  { label: "Signal Reliability", value: "99.9%" },
];

export const hardwareProducts = [
  {
    id: 1,
    title: "Cat6A Shielded Network Cable",
    type: "Copper Cable",
    spec: "10 Gbps • Pure Copper",
    description: "Commercial-grade shielded LAN cable for offices and server racks.",
    softwareBonus: "Includes NS Speed Monitor"
  },
  {
    id: 2,
    title: "Fiber Optic Patch Cord",
    type: "Optical Cable",
    spec: "Single/Multi-Mode • Ultra-Low Loss",
    description: "High-speed armored fiber lines for high-throughput connectivity.",
    softwareBonus: "Includes Signal Loss Alert"
  },
  {
    id: 3,
    title: "Barcode-Tagged Patch Cable",
    type: "Smart Hardware",
    spec: "Pre-labeled QR / Barcode",
    description: "Network patch cords that sync directly with asset tracking software.",
    softwareBonus: "Instant Barcode Scan"
  }
];

export const softwareSolutions = [
  {
    id: 1,
    title: "Cable Speed & Health Tester",
    icon: "💻",
    description: "Software that tests throughput (10Gbps) and alerts when a cable is damaged.",
    features: ["Real-time Speed Measurement", "Cable Fault Detection"]
  },
  {
    id: 2,
    title: "Rack & Port Mapping Tool",
    icon: "🌐",
    description: "Interactive visual map showing which cable connects each port to each desk.",
    features: ["Visual 2D Rack View", "Floor Plan Routing"]
  },
  {
    id: 3,
    title: "Cable Barcode Scanner",
    icon: "🏷️",
    description: "Scan cable barcodes to view installation date, length, and warranty instantly.",
    features: ["QR / Barcode Scanning", "Asset Inventory Sync"]
  }
];

export const downloads = [
  {
    id: 1,
    title: "NS Cable Speed Tester",
    type: "exe",
    version: "v3.1",
    size: "18 MB",
    description: "Test throughput and signal latency on any Cat6/Cat7 cable connected to your PC.",
    link: "#download"
  },
  {
    id: 2,
    title: "Cable & Hardware Catalog",
    type: "pdf",
    version: "2024",
    size: "5 MB",
    description: "Full product specifications, wire gauge charts, and wholesale pricing.",
    link: "#download"
  }
];

export const services = softwareSolutions;
export const jobOpenings = [];