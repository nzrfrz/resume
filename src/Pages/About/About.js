import React, { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';

import profilePic from "../../Assets/images/profile-photo.jpg";

const title = [ "A", "b", "o", "u", "t", " ", "M", "e" ];

export const About = () => {
    const [className, setClassName] = useState("initial");

    useEffect(() => {
        setTimeout(() => {
            setClassName("glitch");
        }, 2500);
    }, [className]);

    return (
        <div className="about-main-container">
            <div className="profile-pic-container">
                <div className="img-container">
                    <Tilt
                        reset={false}
                        tiltEnable={true}
                        gyroscope={true}
                    >
                        <img src={profilePic} alt="nzrfrz" />
                    </Tilt>
                </div>
            </div>
            <div className="about-content-container">
                <div className="about-title">
                    {
                        title.map((data, index) => {
                            if (data === " ") {
                                return (
                                    <span key={index}>&nbsp;</span>
                                );
                            }
                            else {
                                return (
                                    <span 
                                        key={index}
                                        className={className}
                                        style={{
                                            "--animName": "rubberBand",
                                            "--animTiming": "1s",
                                            "--animDelay": `${(index / 10)}s`,
                                            "--customFadeInDelay": `${(index / 10)}s`
                                        }}
                                    >
                                        {data}
                                    </span>
                                );
                            }
                        })
                    }
                </div>
                <div className="about-description">
                    <span>
                        I'm a Front-End and Back-End developer with javascript in Indonesia.
                    </span>
                    <span>
                        Well-organised person, problem solver, curious, high attention to detail.  Always looking for new technology to learn.  Fan of physical sports, crafting, and restoring old things.
                    </span>
                    <span>
                        Interested in frontend aspects and collaborate on ambitious projects with positive people.
                    </span>
                </div>
            </div>
        </div>
    );
};