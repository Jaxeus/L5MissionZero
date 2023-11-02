import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import CardSection from "./CardSection";
import AboutSection from "./AboutSection";
import Footer from "./Footer";
import NavTry from "./NavTry";

// This is the main page that has all of the sub-components in it. This component is in App.js.
export default function Homepage() {
  return (
    <div>
      <NavBar />
      <Main />
      <CardSection />
      <AboutSection />
      <Footer />
      <NavTry />
    </div>
  );
}
