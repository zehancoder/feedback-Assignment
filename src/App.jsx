import "./App.css";
import { Navber } from "./components/commonItems/Navber";
import { HeroUIProvider } from "@heroui/react";
import { ToggleNav } from "./components/commonItems/NavToggle";
import { LinksItem } from "./components/Links";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeroUIProvider>
          <Navber />
          <ToggleNav />
          <LinksItem />
        </HeroUIProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
