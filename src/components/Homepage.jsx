import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import CardSection from "./CardSection";

export default function Homepage() {
  return (
    <div>
      {/* <h1>Homepage</h1> */}
      <NavBar />
      <Main />
      <CardSection />
    </div>
  );
}
