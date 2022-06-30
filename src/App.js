import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import ScrollOut from "scroll-out";
import { useEffect } from "react"
import Home from './components/Home'



function App() {

  useEffect(() => {
    ScrollOut({
      targets: '.navLinks,.navLogo,.home'
    });
  },[]);

  return (
    <div className="App">
      <Overlay />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
