import IndustryHero from "./IndustryHero";
import IndustriesWeServe from "./IndustriesWeServe";
import IndustryShowcase from "./IndustryShowcase";
import OurCustomers from "./OurCustomers";
import Insights from "../../Components/Insights";
import ContactCTA from "../../Components/ContactCTA";

const Industry = () => {
    return (
        <div className="bg-black text-white">
            <IndustryHero />
            <OurCustomers />
            <IndustriesWeServe />
            <IndustryShowcase />
            <Insights />
            <ContactCTA />
        </div>
    );
};

export default Industry;
