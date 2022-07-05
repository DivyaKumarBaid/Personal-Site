import React from 'react'
import Model from './Model'

export default function About(props) {
  return (
      <div className='aboutSection' id="about">
          <div className="headingAbout">
            <div className="titleAbout">
                <div className='animateThis'>
                  <span className='aboutNo'>01.</span>
                  <span className='aboutHead'>About Me</span>
                </div>
                <div className="hrLine"></div>
            </div>
              <div className="aboutPara">
                Hi, my name is <span className="highlight"> Divya Kumar Baid</span> and I find WEB a cause for living as it is live. I am currently pursuing <span className="highlight">B.Tech in Computer Science and Engineering</span> from Techno Main Salt Lake, India. I crave for problems related to Tech and enjoy solving them.
                <br/>
                <br/>
                Fast Forward to today I am a working member of a student led <span className="highlight">Technical Club CUrBrain</span> of Techno Main Salt Lake. I have participated in several Hackathons and have experience in Full Stack Development using multiple tools and frameworks.
                <br/>
                <br/>
                Some of the Tech Stack and tools that I have worked with are :
                <br />
          <div className="toolsList">
            <ol>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
            </ol>
            <ol>
              <li>JavaScript</li>
              <li>React</li>
              <li>FastAPI</li>
              <li>Adobe Illustrator</li>
            </ol>
          </div>

          </div>
          </div>
          <div className='aboutImg'>
          <Model toggle={props.toggle} />
          </div>
    </div>
  )
}
