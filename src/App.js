import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Home from './components/Home';
import React from 'react';
import Mobile from './components/Mobile';
import About from './components/About';

function App() {

  useEffect(() => {
    ScrollOut({
      targets: '.navLinks,.navLogo,.home,.aboutSection'
    });
  }, []);
  
  const [menu, setMenu] = React.useState(false);

  const toggleMenu = () => setMenu(old => !old);

  return (
    <div className="App">
      {menu && <Mobile toggle={toggleMenu} />}
      <Overlay />
      <NavBar toggle={toggleMenu} />
      <Home />
      <About/>
    </div>
  );
}

export default App;
