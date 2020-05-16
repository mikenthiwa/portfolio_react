import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {socialLinks} from "../Components/Description/socialLinks";

class FontAwesomeComponent extends React.Component{
    followLink = (link) => {
        return socialLinks(link)
    }
    render() {
        const { icon, color, size, link } = this.props;
        return (
            <div>
                <FontAwesomeIcon
                    icon={ icon }
                    color={ color }
                    size={ size }
                    onClick = {() => this.followLink(link)}
                />
            </div>
        );
    }
}

export default FontAwesomeComponent