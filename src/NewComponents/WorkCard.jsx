import React from 'react'
import { VscGithubAlt } from 'react-icons/vsc'

export const WorkCard = (props) => {
    return (
        <div className="w-[100%] max-h-[100%] overflow-auto p-6 flex flex-row">
            <div className='cardWrapperNew'>
                <div className='projectDetailsLeftNew'>
                    <div className="featured">Featured Project</div>
                    <div className="projectName">
                        {props.name}
                    </div>
                    <div className="projectDescriptionNew shadow-xl tracking-wider">
                        {props.description}
                    </div>
                    <div className="techStack">
                        {props.tech.map((x, idx) => <span key={idx} className='tech'>{x}</span>)}
                    </div>
                    <div className="workLinks">
                        <a href={props.link}><VscGithubAlt /></a>
                    </div>
                </div>
                <div className='projectImageNew' style={{ backgroundImage: `url("${props.image}")` }}>
                </div>
            </div>
        </div>
    )
}
