import NavBar from '../components/NavBar';
import Overlay from '../components/Overlay';
import ScrollOut from "scroll-out";
import { useEffect } from "react";
import Head from 'next/head'
import Home from '../components/Home';
import React from 'react';
import Mobile from '../components/Mobile';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import MadeWithLove from '../components/MadeWithLove';
import Loader from '../components/Loader';
import anime from 'animejs';

export default function Old() {
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
            <Head>
                <title>Divyakr Baid - Developer</title>
                <meta name="description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta name="keywords" content="developer, portfolio, web development, mobile development, programming" />
                <meta name="author" content="Divyakr Baid" />
                <link rel="canonical" href="https://divyakrbaid.tech" />
                <meta property="og:title" content="Divyakr Baid - Developer" />
                <meta property="og:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta property="og:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
                <meta property="og:url" content="https://divyakrbaid.tech" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Divyakr Baid - Developer" />
                <meta name="twitter:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta name="twitter:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/assets/Logo.png" />
            </Head>

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
