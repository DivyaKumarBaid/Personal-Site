import React from 'react';
import WorkCard from './WorkCard';

const Works = () => {
    return (
        <div className='workSection'>
            <div className="titleWork">
                <div className='animateThisWork'>
                  <span className='workNo'>02.</span>
                  <span className='workHead'>Some of My Creations</span>
                </div>
                <div className="hrLineWork"></div>
            </div>
            <div className="workCardContainer">
                <WorkCard name={"Discord-Bot"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat magni quis, odio cupiditate consequuntur magnam! Excepturi laudantium similique facere voluptates. Amet illo sit sunt perspiciatis officiis culpa aliquid quaerat porro."} tech={["VS-CODE", "Python", "Discord"]} link={"www.google.com"} />
                
            </div>
        </div>
    );
}

export default Works;
