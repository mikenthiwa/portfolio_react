import React, {Component} from 'react';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import FontAwesomeComponent from "../../helper";
import './footer.scss';

class Footer extends Component{
    render() {
        return (
            <div className="footer-cont">
                <div className="icon-cont">
                    <FontAwesomeComponent
                        icon={faLinkedin}
                        color='white'
                        size='2x'
                        link='http://linkedin.com/in/michaelnthiwamutua/mynetwork' />
                    <FontAwesomeComponent
                        icon={faGithub}
                        color='white'
                        size='2x'
                        link='https://github.com/mikenthiwa'
                    />
                    <FontAwesomeComponent
                        icon={faTwitter}
                        color='white'
                        size='2x'
                        link='https://twitter.com/Michael19289994'
                    />
                </div>
                <div className='copyright-cont'>
                    <div className='copyright-icon'>
                        <FontAwesomeComponent
                            icon={faCopyright}
                            color='white'
                            size='1x'
                        />
                    </div>
                    mike.nthiwa@gmail.com
                </div>
            </div>
        );
    }
}

export default Footer
