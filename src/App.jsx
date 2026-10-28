import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Industries from "./Components/Industries";
import ContactUs from "./Components/ContactUs";
import Insights from "./Components/Insights";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black font-sans antialiased text-white selection:bg-cyan-500 selection:text-black">
      {/* 1. Transparent Floating Corporate Navbar */}
      <div className="absolute top-0 inset-x-0 z-30">
        <Navbar />
      </div>

      {/* 2. Main Page Sections */}
      <main>
        {/* Full-Screen Hero Section with 2-Image Slider */}
        <Hero />

        {/* Separate Corporate Technology About Us Section */}
        <AboutUs />

        {/* Premium Dark Technology Industries Section */}
        <Industries />

        <Insights />

        {/* Premium Redesigned Split-Screen Contact Us Section */}
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}