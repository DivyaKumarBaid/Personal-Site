import React from 'react';
import { BsGithub ,BsLinkedin} from 'react-icons/bs';
import { MdEmail} from 'react-icons/md';

export default function Contact() {
  return (
    <div className='contactSection'>
          <div className="contactMe">
              04. Wanna Know more?
          </div>
          <div className="touch">
              GET IN TOUCH
          </div>
          <div className="getDesc">
              If you have made it so far, just ping me up on any of the socials or email to get in touch and I would try to reply as soon as possible.
          </div>
          <div className="socials">
              <a href="www.google.com"><BsGithub /></a>
              <a href=""><BsLinkedin/></a>
              <a href=""><MdEmail className='socialEmail'/></a>
          </div>
    </div>
  )
}
