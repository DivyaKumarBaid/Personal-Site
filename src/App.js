import './App.css';
import NavBar from './components/NavBar';
import Overlay from './components/Overlay';
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Home from './components/Home';
import React from 'react';
import Mobile from './components/Mobile';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import MadeWithLove from './components/MadeWithLove';
import Loader from './components/Loader';
import anime from 'animejs';


function App() {
  const [loading, setLoading] = React.useState(true);
  const toggleLoading = () => { setLoading(false); }
  
  useEffect(() => {
    anime({ 
      loop: true,
      targets: ".p1,.p2,.p3",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 1500,
      direction: 'alternate',
      loop: true
  })
    ScrollOut({
      targets: '.navLinks,.navLogo,.home,.aboutSection,.workSection,.projectDetailsLeft,.projectDetails,.projectImageLeft,.projectImage,.workMobileContainer,.contactSection'
    });
  }, [loading]);

  
  const [menu, setMenu] = React.useState(false);
  const toggleMenu = () => setMenu(old => !old);

  return (
      <div className="App">
      {loading && <Loader/>}
      {!loading && <>
        {menu && <Mobile toggle={toggleMenu}/>}
        <Overlay />
        <NavBar toggle={toggleMenu}  />
        <Home />
        </>}
      <About toggle={toggleLoading} />
      {!loading && <>
        <Works />
        <Contact />
        <MadeWithLove />
      </>}
      
      </div>
    
  );
}

export default App;
