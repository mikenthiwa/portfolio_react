import React from 'react';
import Travel from '../../Assets/images/travela.png';
import Dashboard from '../../Assets/images/dashboard.png';
import Covid from '../../Assets/images/covidChallenge.png';
import {socialLinks} from "../Description/socialLinks";
import './projects.scss'


class Projects extends React.Component{

    renderCards = (name, brandImage, link) => {
        return (
            <div className='card-cont' onClick={() => socialLinks(link)}>
                <div className={`image-cont ${name}`}>
                    <img src={brandImage} alt='brand'/>
                </div>
                <div className='project-name'>{name}</div>
            </div>
        )
    }
    render() {
        return (
            <div className='project-cont'>
                <div className='project-title'>
                    <div className="title1">My Recent work</div>
                    <div className="title2">Here are some of the sample projects that I have worked on</div>
                </div>
                <div className='card-section'>
                    {this.renderCards('Travela', Travel, 'https://travela.andela.com/')}
                    {this.renderCards('Sample analytics', Dashboard, 'https://access-afya-challenge.herokuapp.com/')}
                    {this.renderCards('Covid-challenge', Covid, 'http://dry-temple-26977.herokuapp.com/')}
                </div>
            </div>
        );
    }
}

export default Projects