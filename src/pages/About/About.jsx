import ContactCTA from "../../Components/ContactCTA";
import AboutHero from "./AboutHero";
import AboutUs from "./AboutUs";
import CoreValues from "./CoreValues";
import Journey from "./Journey";

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Detailed Company Overview & Innovation Network */}
      <AboutUs />

      {/* 3. Our Core Values Section */}
      <CoreValues />

      <ContactCTA />

      <Journey />
    </div>
  );
}
