import React from 'react';
import WorkCard from './WorkCard';
import {project,teamProject} from './project';
import WorkMobileCards from './WorkMobileCards'

const Works = () => {

    
    const [width, setWidth] = React.useState(window.innerWidth);

// listen to window resize for mobile view
    React.useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
          window.removeEventListener('resize', handleResize)
        }
    })
// listen to window resize for mobile view

    return (
        <div className='workSection' id="work">
            <div className="titleWork">
                <div className='animateThisWork'>
                  <span className='workNo'>02.</span>
                  <span className='workHead'>Some of My Creations</span>
                </div>
                <div className="hrLineWork"></div>
            </div>
            <div className="workCardContainer">
                {width>900?project.map((data, idx) => {
                    return (
                        <WorkCard name={data.name} description={data.description} tech={data.tech} link={data.link} left={idx % 2 === 0 ? false : true} image={data.image} />
                    )
                }) :
                project.map((data, idx) => {
                    return (
                        <WorkMobileCards name={data.name} description={data.description} tech={data.tech} link={data.link} left={idx % 2 === 0 ? false : true} image={data.image} />
                    )
                })}
            </div>
            <div className="titleWork">
                <div className='animateThisWork'>
                  <span className='workHead'>Team Projects</span>
                </div>
                <div className="hrLineWork"></div>
            </div>
            <div className="workCardContainer">
                {width>900?teamProject.map((data, idx) => {
                    return (
                        <WorkCard name={data.name} description={data.description} tech={data.tech} link={data.link} left={idx % 2 === 0 ? false : true} image={data.image} />
                    )
                }) :
                teamProject.map((data, idx) => {
                    return (
                        <WorkMobileCards name={data.name} description={data.description} tech={data.tech} link={data.link} left={idx % 2 === 0 ? false : true} image={data.image} />
                    )
                })}
            </div>
        </div>
    );
}

export default Works;
