import Hero from "../../Components/Hero";
import AboutUs from "../About/AboutUs";
import Industries from "../../Components/Industries";
import Insights from "../../Components/Insights";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <>
      {/* Full-Screen Hero Section with 2-Image Slider */}
      <Hero />

      {/* Corporate Technology About Us Section */}
      <AboutUs />

      {/* Premium Dark Technology Industries Section */}
      <Industries />

      {/* Insights Section */}
      <Insights />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
