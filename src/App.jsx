import './App.css'
import { Navber } from './components/commonItems/Navber'
import {HeroUIProvider} from "@heroui/react";
import { ToggleNav } from './components/commonItems/NavToggle';

function App() {

  return (
    <>
      <HeroUIProvider>
        <Navber/>
        <ToggleNav/>
      </HeroUIProvider>
    </>
  )
}

export default App
