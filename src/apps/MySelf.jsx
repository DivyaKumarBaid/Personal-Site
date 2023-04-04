import React from 'react'

export const MySelf = () => {
    return (
        <>
            <div className="w-[100%] max-h-[100%] overflow-auto p-6">
                <div className="details">
                    <div className="greet">
                        Namaste,
                    </div>
                    <div className="nameNew">
                        Divya Kumar Baid
                        <span className='here'>Here</span>
                    </div>
                    <div className="occuNew">
                        I am a WEB Explorer.
                    </div>
                    <div className="desc">
                        I&apos;m a Full-Stack Developer and a Maniac when it comes to Tech. I build things for WEB and design occasionally.
                    </div>
                </div>
                <div className="text-3xl mt-16 tracking-widest">
                    ABOUT ME
                </div>
                <div className="aboutPara">
                    Hi, my name is <span className="highlight"> Divya Kumar Baid</span> and I find WEB a cause for living as it is live. I am currently pursuing <span className="highlight">B.Tech in Computer Science and Engineering</span> from Techno Main Salt Lake, India. I crave for problems related to Tech and enjoy solving them.
                    <br />
                    <br />
                    Fast Forward to today I am a working member of a student led <span className="highlight">Technical Club CUrBrain</span> of Techno Main Salt Lake. I have participated in several Hackathons and have experience in Full Stack Development using multiple tools and frameworks.
                    <br />
                    <br />
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
        </>
    )
}
