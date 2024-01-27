import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Interests from "./components/interests/Interests";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Interests />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
