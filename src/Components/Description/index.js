import React, { Component } from 'react';
import './description.scss';

class Description extends Component{
    render() {
        return (
            <div className='desc-cont'>
                <h1 className="desc-title"> Nice to meet you.</h1>
                <div className="desc-body">
                Since beginning my journey as a Software Engineer nearly 3 years ago,
                I've worked in a top technology company in Africa, I have done remote work,
                and collaborated with talented people to create digital products for both business and consumer use.
                I'm quietly confident, naturally curious, and perpetually working on
                improving my skills one bug at a time.
                </div>
            </div>
        );
    }
}

export default Description