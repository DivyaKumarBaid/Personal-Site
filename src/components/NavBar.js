import React from 'react';


const NavBar = () => {
    return (
        <div className='navbar'>
            <img src="/assets/logo.svg" alt="" className='navLogo' />
            <div className="navSections">
                    <a href="www.google.com" className="navLinks about">
                        <span className="numbering">    01.
                        </span>
                        <span className="listItem">
                            About
                        </span>
                    </a>
                    <a href="" className="navLinks works">
                        <span className="numbering">    02.
                        </span>
                        <span className="listItem">
                            Works
                        </span>
                    </a>
                    <a href="" className="navLinks contact">
                        <span className="numbering">    03.
                        </span>
                        <span className="listItem">
                            Contact
                        </span>
                    </a>
                    <a href="" className="navLinks resume">
                        <span className="numbering">    04.
                        </span>
                        <span className="listItem">
                            Resume
                        </span>
                    </a>
            </div>
        </div>
    );
}

export default NavBar;
