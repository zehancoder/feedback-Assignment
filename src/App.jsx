import "./App.css";
import { Navber } from "./components/commonItems/Navber";
import { HeroUIProvider } from "@heroui/react";
import { ToggleNav } from "./components/commonItems/NavToggle";
import { LinksItem } from "./components/Links";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadingOne } from "./components/commonItems/Title";
import { Cards } from "./components/commonItems/Card";
import { LandingPages } from "./components/homePage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber/>
        <HeroUIProvider>
          <Routes>
            <Route path="/" element = {<LandingPages/>}/>
          </Routes>
        </HeroUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
