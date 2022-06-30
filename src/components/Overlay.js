import React from 'react'
import {VscGithubAlt} from 'react-icons/vsc'
import { FiLinkedin } from 'react-icons/fi'

export default function Overlay() {
  return (
    <div className='overlay'>
      <div className="overlayLeft">
            <a href='https://github.com/DivyaKumarBaid'>
              <VscGithubAlt className="overlayIcons"/></a>
              <a href="https://www.linkedin.com/in/divya-kumar-baid-98a087200/"><FiLinkedin className="overlayIcons"/></a>
              <div className='verticleLine'></div>
          </div>      

          <div className="overlayRight">
              <div className="emailAdd">
                <a href="mailto:divyakrbaid@gmail.com">
                  divyakrbaid@gmail.com
                </a>
              </div>
              <div className='verticleLineRight'></div>
          </div>
    </div>
  )
}
