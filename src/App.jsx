import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./layout/Hero.jsx";

function App() {
  return (
    <>
      <Nav />
      <div className="pt-20"> 
        <Hero />
      </div>
    </>
  );
}

export default App;
