import React, { useEffect } from "react";
import {
  Navbar,
  About,
  Authors,
  Background,
  Main,
  Subscribe,
} from "./components";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="min-h-screen bg-primary relative select-black">
      <div className=" absolute top-0 left-0 z-[100] w-full ">
        <Navbar />
        <Main />
        <Authors />
        <About />
        <Subscribe />
        <ScrollToTop />
      </div>

      <Background />
    </div>
  );
};

export default App;
