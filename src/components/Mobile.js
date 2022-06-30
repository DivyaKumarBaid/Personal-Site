import React from 'react';
import { IoClose } from 'react-icons/io5';

const Mobile = (props) => {
    return (
        <div className='mobileMenu'>
            <div className="closeContainer">
                <IoClose onClick={() => { props.toggle() }} className="navClose" />
            </div>
            <div className="mobileList">
                    <a href="www.google.com" className="mobileLinks aboutMobile">
                        <span className="numbering">01.</span>
                        <span className="listItem">About</span>
                    </a>
                    <a href="" className="mobileLinks worksMobile">
                        <span className="numbering">02.</span>
                        <span className="listItem">Works</span>
                    </a>
                    <a href="" className="mobileLinks contactMobile">
                        <span className="numbering">03.</span>
                        <span className="listItem">Contact</span>
                    </a>
                    <a href="/assets/Divya_Kumar_Baid.pdf" className="mobileLinks resumeMobile">
                        <span className="numbering">04.</span>
                        <span className="listItem">Resume</span>
                    </a>
            </div>
        </div>
    );
}

export default Mobile;
