import React from 'react';
import { BsGithub ,BsLinkedin} from 'react-icons/bs';
import { MdEmail} from 'react-icons/md';

export default function Contact() {
  return (
    <div className='contactSection' id='contact'>
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
              <a href="https://github.com/DivyaKumarBaid"><BsGithub /></a>
              <a href="https://www.linkedin.com/in/divya-kumar-baid-98a087200/"><BsLinkedin/></a>
              <a href="mailto:divyakrbaid@gmail.com"><MdEmail className='socialEmail'/></a>
          </div>
    </div>
  )
}
