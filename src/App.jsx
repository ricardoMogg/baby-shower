import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Info } from "./components/info";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <Info/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
