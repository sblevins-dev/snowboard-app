import "./App.css";
import { Navbar } from "./components/Navbar";
import { HeroImg } from "./components/HeroImg";
import { Products } from './components/Products';

function App() {
  return (
    <>
      <Navbar />
      <HeroImg />
      <Products />
    </>
  );
}

export default App;
