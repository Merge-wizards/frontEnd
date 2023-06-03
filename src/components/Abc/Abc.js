import React from "react";
import TeamHero from "../TeamHero/TeamHero";
import Team from "../Team/Team";
import ContactUs from "../ContactUs/ContactUs"
import ImageWithTitle from "../ImageWithTitle/ImageWithTitle";

const Abc = () => {
  return (
    <div>
      <TeamHero />
      <ImageWithTitle/>
     
      <Team />
      <ContactUs />
    </div>
  );
};

export default Abc;
