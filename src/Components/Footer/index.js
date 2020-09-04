import React from 'react';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeComponent from "../../helper";
import './footer.scss';

const socialIcons = [
    ['http://linkedin.com/in/michaelnthiwamutua/mynetwork', faLinkedin],
    ['https://github.com/mikenthiwa', faGithub],
    ['https://twitter.com/Michael19289994', faTwitter]
];

const Footer = () => {

    const renderSocialIcons = () => {
        return socialIcons.map((icon, index ) => {
            return (
                <FontAwesomeComponent icon={icon[1]} color='white' size='2x' link={icon[0]} key={index} />
            )
        })
    };

    const renderCopyrightIcon = () => {
        return (
            <div className='copyright-icon'>
                <FontAwesomeComponent icon={faCopyright} color='white' size='1x' />
            </div>
        )
    }

    return (
        <div className="footer-cont">
            <div className="icon-cont">
                {renderSocialIcons()}
            </div>
            <div className='copyright-cont'>
                {renderCopyrightIcon()}
                mike.nthiwa@gmail.com
            </div>
        </div>
    );
}

export default Footer;
