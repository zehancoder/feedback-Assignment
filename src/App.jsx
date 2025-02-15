import "./App.css";
import { Navber } from "./components/commonItems/Navber";
import { HeroUIProvider } from "@heroui/react";
import { ToggleNav } from "./components/commonItems/NavToggle";
import { LinksItem } from "./components/Links";
import { BrowserRouter } from "react-router-dom";
import { HeadingOne } from "./components/commonItems/Title";
import { Cards } from "./components/commonItems/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeroUIProvider>
          <Navber />
          <ToggleNav />
          <LinksItem />
          <HeadingOne/>
          <Cards/>
        </HeroUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
