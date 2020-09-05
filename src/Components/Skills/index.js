import React, { Fragment } from 'react';
import ReactPlayer from 'react-player/lazy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase, faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import './skills.scss';

const Skills = () => {

    const renderFrontEndLanguages = () => {
        const skills = ['React', 'React Native', 'Redux', 'Sass', 'Html', 'css', 'Bootstrap', 'Material-ui' ];
        return skills.map((skill, index) => {
            return (
                <div key={index}>{skill}</div>
            )
        });
    }
    const renderBackEndLanguage = () => {
        const skills = ['Node.js', 'Express', 'Postgres', 'Mongo', 'Python', 'Django', 'Flask' ];
        return skills.map((skill, index) => {
            return (
                <div key={index}>{skill}</div>
            )
        })
    }

    const renderDjLanguage = () => {
        return (
            <ReactPlayer
                url="https://youtu.be/HgYVylxmBT4"
                class="react-player"
            />
        )
    }



    const renderSkill = (icon, skillTitle, skillDescription, languageTitle, devType) => {
        return (
            <Fragment>
                <div className={`${icon} content`}>
                    <FontAwesomeIcon icon={icon} color="#7510F7" size='3x' />
                </div>
                <div className={`${skillTitle} content skillTitle`}>{skillTitle}</div>
                <div className={`${skillDescription} content skillDescription`}>{skillDescription}</div>
                <div className={`${languageTitle} content languageTitle`}>Language I talk</div>
                <div className={`${languageTitle} content languageDescription`}>
                    {
                        devType === 'Front-end'
                        ? renderFrontEndLanguages()
                        : devType === 'Back-end'
                        ? renderBackEndLanguage()
                            : renderDjLanguage()
                    }
                </div>
            </Fragment>
        )
    }
    return (
        <div className="skills-cont">
            <div className="front-end-developer skill">
                {renderSkill(
                    faCode,
                    'Front-end Developer',
                    'I like to code things from scratch,' +
                    ' and enjoy bringing ideas to life in the browser.',
                    '',
                    'Front-end'
                )}
            </div>
            <div className="back-end-developer skill">
                {renderSkill(
                    faDatabase,
                    'Back-end Developer',
                    'I value business logic and its ability ' +
                    'to power business activities on a day to day basis',
                    '',
                    'Back-end'
                )}
            </div>
            <div className="dj skill">
                {renderSkill(
                    faCompactDisc,
                    'Disk Jockey',
                    `When a Dj put's their hands in the
                     air the music becomes 2 times better .......................`
                )}
            </div>
        </div>
    );
}

export default Skills