import HomeHero from "./HomeHero";
import AboutUs from "../About/AboutUs";
import Industries from "../../Components/Industries";
import Insights from "../Insights/Insights";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* First Hero Component (Invertio Digital Engineering & ZeroQueries AI Slider) */}
      <HomeHero />

      {/* Corporate Technology About Us Section */}
      <AboutUs />

      {/* Premium Dark Technology Industries Section */}
      <Industries />

      {/* Insights Section */}
      <Insights />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
