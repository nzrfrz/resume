import React, { useEffect, useState } from "react";
import { 
    SiJavascript,
    SiNodedotjs, 
    SiReact, 
    SiHtml5,
    SiCss3,
    SiMysql,
    SiMongodb,
    SiTypescript,
    SiExpo
} from "react-icons/si";

const titleTextAbove = ["S", "k", "i", "l", "l", "s", " ", "&"];
const titleTextBelow = ["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"];
const listSkills = [
    {
        label: "html",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#e44d26",
        icon: <SiHtml5 className="experience-skill-icon" />,
    },
    {
        label: "css",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#167dbe",
        icon: <SiCss3 className="experience-skill-icon" />,
    },
    {
        label: "javascript",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "gold",
        icon: <SiJavascript className="experience-skill-icon" />,
    },
    {
        label: "nodejs",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#026e00",
        icon: <SiNodedotjs className="experience-skill-icon" />,
    },
    {
        label: "reactjs",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#61dafb",
        icon: <SiReact className="experience-skill-icon" />,
    },
    {
        label: "expo",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#bcc3cd",
        icon: <SiExpo className="experience-skill-icon" />,
    },
    {
        label: "typescript",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#0074c2",
        icon: <SiTypescript className="experience-skill-icon" />,
    },
    {
        label: "mongoDB",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#589636",
        icon: <SiMongodb className="experience-skill-icon" />,
    },
    {
        label: "mySql",
        percentage: 100,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#00758f",
        icon: <SiMysql className="experience-skill-icon" />,
    },
];

export const Skills = () => {
    const [className, setClassName] = useState("initial");

    useEffect(() => {
        setTimeout(() => {
            setClassName("glitch");
        }, 2500);
    }, [className]);

    return (
        <div className="skills-main-container">
            <div className="skills-content">
                <div className="skills-title">
                    <div className="skills-title-above tab">
                        {
                            titleTextAbove.map((data, index) => {
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
                    <div className="skills-title-below">
                        {
                            titleTextBelow.map((data, index) => {
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
                                                "--animDelay": `${(index / 10) + 0.8}s`,
                                                "--customFadeInDelay": `${(index / 10) + 0.8}s`
                                            }}
                                        >
                                            {data}
                                        </span>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
                <div className="skills-desc">
                    <span>
                        Started the journey as a coder about 4 years ago.  First thing i learn is PHP with CI and Laravel at no code experience at all.  Then i took those course at local University.  Then i tried to learn game development, with Unity 3D and C#.
                    </span>
                    <span>
                        After that, i decided to go to bootcamp on my local site.  From there i managed to learn Microservice, ReactJS for frontend, nodejs for backend, react native with Expo for mobile.  Database like MongoDB, postgreSQL, and SQLite for mobile.  Also i got my first professional project, create a budgeting web app for all Islamic boarding school in Indonesia.
                    </span>
                </div>
            </div>
            <div className="skills-list">
                {
                    listSkills.map((data, index) => 
                        <div 
                            key={index} 
                            className="circle-progress"
                            style={{ 
                                "--conicGradient": `conic-gradient(${data.iconColor} ${data.percentage * 3.6}deg, #191919 0deg)`,
                                "--iconColor": data.iconColor,
                                "--animationDuration": `2s`,
                                "--percentage": data.percentage,
                                "--90deg": 25,
                                "--180deg": 50,
                                "--270deg": 75,
                                "--conicGradientDeg": `${data.percentage * 3.6}deg`,
                                "--conicGradientDegDelay": `${4 + (index / 5)}s`
                            }}
                        >
                            <div className="circle-progress-circleLayer" style={{ "--animateDotDelay": `${2.7 + (index / 5)}s` }}>
                                <div className="rotate-dot"></div>
                            </div>
                            <div className="circle-progress-circleLayer90" style={{ "--animateDotDelay": `${2.7 + (index / 5)}s` }}>
                                <div className="rotate-dot"></div>
                            </div>
                            <div className="circle-progress-circleLayer180" style={{ "--animateDotDelay": `${2.7 + (index / 5)}s` }}>
                                <div className="rotate-dot"></div>
                            </div>
                            <div className="circle-progress-circleLayer270" style={{ "--animateDotDelay": `${2.7 + (index / 5)}s` }}>
                                <div className="rotate-dot"></div>
                            </div>
                            {data.icon}
                        </div>
                    )
                }
            </div>
        </div>
    );
};