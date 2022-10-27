import NavBar from '../src/components/NavBar';
import Overlay from '../src/components/Overlay';
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Home from '../src/components/Home';
import React from 'react';
import Mobile from '../src/components/Mobile';
import About from '../src/components/About';
import Works from '../src/components/Works';
import Contact from '../src/components/Contact';
import MadeWithLove from '../src/components/MadeWithLove';
import Loader from '../src/components/Loader';
import anime from 'animejs';

export default function HomePage() {
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
      {loading && <Loader />}
      {!loading && <>
        {menu && <Mobile toggle={toggleMenu} />}
        <Overlay />
        <NavBar toggle={toggleMenu} />
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
