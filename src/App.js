import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navnew from "./components/Navnew";
import Projects from "./components/Projects";



export default function App(){
  return(
    <main clasName="text-gray-400 bg-gray-900 body-font">
      <Navnew />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
