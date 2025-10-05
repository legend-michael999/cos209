import React from "react";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Services from "./components/Services";
import Contact  from  "./components/Contact";

const App = () => {
  return (
    <div>
      <h2>My APP components</h2>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;