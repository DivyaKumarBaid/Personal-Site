import React from 'react'

export default function About() {
  return (
      <div className='aboutSection'>
          <div className="headingAbout">
            <div className="titleAbout">
                <div>
                <span className='aboutNo'>01.</span>
                <span className='aboutHead'>About Me</span>
                </div>
                <div className="hrLine"></div>
            </div>
              <div className="aboutPara">
                Hi, my name is <span className="highlight"> Divya Kumar Baid</span> and I find WEB a cause for living as it is live. I am currently pursuing B.Tech in Computer Science and Engineering from Techno Main Salt Lake, India. I crave for problems related to Tech and enjoy solving them. I found my passion right when we were being taught HTML & CSS in Middle School. Back then I really did wonder how google works.
                <br/>
                <br/>
          Fast Forward to today I am a working member of a student led Technical Club CUrBrain of Techno Main Salt Lake. I have participated in several Hackathons and have experience in Full Stack Development using multiple tools and frameworks.
          <br/>
          <br/>
          Some of the Tech Stack that I have worked with are :
          <br />
          <div className="toolsList">
            <ol>
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </ol>
            <ol>
              <li>JavaScript</li>
              <li>React</li>
              <li>FastAPI</li>
            </ol>
          </div>

          </div>
          </div>
          <div className='aboutImg'>
              <img src="/assets/logo.svg" alt="" />
          </div>
    </div>
  )
}
