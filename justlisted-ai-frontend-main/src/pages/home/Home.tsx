import React from "react";
import Slide from "./components/Slide";
import Finddream from "./components/Finddream";
import About from "./components/About";
import Connecting from "./components/Connecting";
import Howwork from "./components/Howwork";
import Agents from "./components/Agents";
import KeyFeature from "./components/KeyFeature";

function Home() {
  return (
    <div className="home">
      <Slide />
      <div style={{marginTop:-400}} className="keyfeature">
        <h2>
        Key Features
        </h2>
     
    </div>
      {/* <Finddream /> */}
      <About />
      <KeyFeature/>
      <Connecting />
      {/* <Howwork /> */}
      <Agents />
    </div>
  );
}

export default Home;
