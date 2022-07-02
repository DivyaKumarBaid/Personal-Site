import React from 'react';
import {VscGithubAlt} from 'react-icons/vsc'

const WorkCard = (props) => {
    return (
        <div className='cardWrapper'>
            <div className={props.left ? 'projectImageLeft' : 'projectImage'} style={{backgroundImage:`url("${props.image}")`}}>
            </div>
            <div className={props.left?'projectDetailsLeft':'projectDetails'}>    
                <div className="featured">Featured Project</div>
                <div className="projectName">
                    {props.name}
                </div>
                <div className="projectDescription">
                    {props.description}
                </div>
                <div className="techStack">
                    {props.tech.map((x) =><span className='tech'>{x}</span>)}
                </div>
                <div className="workLinks">
                    <a href={props.link}><VscGithubAlt/></a>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;
