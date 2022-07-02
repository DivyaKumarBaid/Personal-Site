import React from 'react';
import WorkCard from './WorkCard';
import project from './project';

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
                {project.map((data, idx) => {
                    return (
                        <WorkCard name={data.name} description={data.description} tech={data.tech} link={data.link} left={idx % 2 === 0 ? false : true} image={data.image} />
                    )
                })}
            </div>
        </div>
    );
}

export default Works;
