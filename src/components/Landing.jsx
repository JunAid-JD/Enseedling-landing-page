import React from "react";
import Home from "./Hero/Home";
import Corporate from "./Core_Values/Corporate";
import Services from "./Services/Services";
import Question from "./Questions/Question";

const Landing = () => {
  return (
    <div>
      <Home />
      <Corporate />
      <Services />
      <Question />
    </div>
  );
};

export default Landing;
