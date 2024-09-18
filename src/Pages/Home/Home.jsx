import React from "react";
import { Main } from "../../Components/Main/Main";
import { Footer } from "../../Components/Footer/Footer";
import { SignUp } from "../../Components/Main/Cards/SignUp";

export const Home = () => {
  return (
    <React.Fragment>
        <SignUp />
        <Main />
      <Footer />
    </React.Fragment>
  );
};