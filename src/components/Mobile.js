import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FiLinkedin } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

const Mobile = (props) => {

    return (
        <div className='mobileMenu'>
            <div className="closeContainer">
                <IoClose onClick={() => { props.toggle() }} className="navClose" />
            </div>
            <div className="mobileList">
                    <a href="#about" className="mobileLinks aboutMobile">
                        <span className="numbering">01.</span>
                        <span className="listItem">About</span>
                    </a>
                    <a href="#work" className="mobileLinks worksMobile">
                        <span className="numbering">02.</span>
                        <span className="listItem">Works</span>
                    </a>
                    <a href="#contact" className="mobileLinks contactMobile">
                        <span className="numbering">03.</span>
                        <span className="listItem">Contact</span>
                    </a>
                    <a href="/assets/Divya_Kumar_Baid.pdf" className="mobileLinks resumeMobile">
                        <span className="numbering">04.</span>
                        <span className="listItem">Resume</span>
                </a>
                <div className="profileLinks">
                    <a href='https://github.com/DivyaKumarBaid'>
                        <VscGithubAlt className="profileIcons" />
                    </a>
                    <a href="https://www.linkedin.com/in/divya-kumar-baid-98a087200/">
                        <FiLinkedin className="profileIcons" />
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Mobile;
