import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import CardSection from "./CardSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div>
      {/* <h1>Homepage</h1> */}
      <NavBar />
      <Main />
      <CardSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
