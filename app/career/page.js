import CareerCTA from "@app/components/CareerCTA";
import CareerHeading from "@app/components/CareerHeading";
import EngagedPeople from "@app/components/EngagedPeople";
import React from "react";

const Career = () => {
  return (
    <section className="w-full">
      <CareerHeading />
      <CareerCTA />
      <EngagedPeople />
    </section>
  );
};

export default Career;
