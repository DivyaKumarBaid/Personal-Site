import React from 'react';
import { IoIosGitNetwork } from 'react-icons/io'
import {VscGithubAlt} from 'react-icons/vsc'


const WorkMobileCards = (props) => {
    return (
        <div className='workMobileContainer'>
            <div className="upperCard">
                <IoIosGitNetwork className="fork"/>
                <a href={props.link}><VscGithubAlt/></a>
            </div>
            <div className="descContainer">
                <div className="projectTitleMobile">
                    {props.name}
                </div>
                <div className="projectDescMobile">
                    {props.description}
                </div>
                <div className="techStackMobile">
                    {props.tech.map((t) => {
                        return (<span className='techMobile'>{t}</span>)
                    })}
                </div>
            </div>
        </div>
    );
}

export default WorkMobileCards;
