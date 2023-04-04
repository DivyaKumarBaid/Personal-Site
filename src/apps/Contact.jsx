import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Contact = () => {
    return (
        <div className='contactSectionNew' id='contact'>
            <div className="contactMe">
                Wanna Know more?
            </div>
            <div className="touch">
                GET IN TOUCH
            </div>
            <div className="getDescNew">
                If you have made it so far, just ping me up on any of the socials or email to get in touch and I would try to reply as soon as possible.
            </div>
            <div className="socials">
                <a href="https://github.com/DivyaKumarBaid"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/divya-kumar-baid-98a087200/"><BsLinkedin /></a>
                <a href="mailto:divyakrbaid@gmail.com"><MdEmail className='socialEmail' /></a>
            </div>
            <div className="contactDetails">
                <span>divyakrbaid@gmail.com</span>
                <span>+91 9123065471</span>
            </div>
        </div>
    )
}
