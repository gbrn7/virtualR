import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorlflowSection from "./components/WorlflowSection";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorlflowSection />
        <PricingSection />
        <TestimonialSection />
        <FooterSection />
      </div>
    </>
  );
};

export default App;
