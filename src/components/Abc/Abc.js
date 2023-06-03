import React from "react";
import TeamHero from "../TeamHero/TeamHero";
import Services from "../Services/Services";
import Team from "../Team/Team";
import ContactUs from "../ContactUs/ContactUs"
import ImageWithTitle from "../ImageWithTitle/ImageWithTitle";

const Abc = () => {
  return (
    <div>
      <TeamHero />
      <ImageWithTitle/>
      <Services />
      <Team />
      <ContactUs />
    </div>
  );
};

export default Abc;
