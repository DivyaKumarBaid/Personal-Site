import React from 'react';
import { CgMenuRightAlt} from 'react-icons/cg'

const NavBar = (props) => {

    const [width, setWidth] = React.useState(window.innerWidth);

// listen to window resize for mobile view
    React.useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    })
// listen to window resize for mobile view


    return (
        <div className='navbar'>
            <img src="/assets/logo.svg" alt="" className='navLogo' />
            {width>600 ? <div className="navSections">
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
                    <a href="/assets/Divya_Kumar_Baid.pdf" className="navLinks resume">
                        <span className="numbering">    04.
                        </span>
                        <span className="listItem">
                            Resume
                        </span>
                    </a>
            </div> :
            <CgMenuRightAlt className='menuBtn' onClick={() => {props.toggle()}}/>
            }
        </div>
    );
}

export default NavBar;
