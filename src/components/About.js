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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nesciunt pariatur nihil expedita hic a ducimus. Deleniti dolorum nulla officia fugit earum iure doloribus dolorem cupiditate animi nihil! Neque, porro.
                  Minima eos accusamus deserunt quidem accusantium ducimus mollitia! Possimus nobis tempore sed alias dolores odio laudantium! Tempore animi labore inventore repellendus est? Enim aliquam adipisci odit quae accusamus consequatur vel!
                  Molestias repellat consequuntur non ipsam unde iusto distinctio quod dicta asperiores deleniti reiciendis facere assumenda, corporis perspiciatis debitis quo totam, consectetur facilis veritatis esse omnis, atque sit! Ipsum, inventore cumque!
              </div>
          </div>
          <div className='aboutImg'>
              <img src="/assets/logo.svg" alt="" />
          </div>
    </div>
  )
}
