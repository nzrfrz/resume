import React, { useEffect, useState } from "react";
import { 
    SiJavascript, 
    SiUnity, 
    SiNodedotjs, 
    SiReact, 
    SiHtml5,
    SiCss3,
    SiMysql,
    SiMongodb,
    SiCsharp,
    SiTypescript,
    SiExpo
} from "react-icons/si";


const listSkills = [
    {
        label: "html",
        percentage: 70,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#e44d26",
        icon: <SiHtml5 className="prologue-icon" />,
    },
    {
        label: "css",
        percentage: 60,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#167dbe",
        icon: <SiCss3 className="prologue-icon" />,
    },
    {
        label: "javascript",
        percentage: 70,
        progressStartValue: 0,
        speed: 20,
        iconColor: "gold",
        icon: <SiJavascript className="prologue-icon" />,
    },
    {
        label: "nodejs",
        percentage: 55,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#026e00",
        icon: <SiNodedotjs className="prologue-icon" />,
    },
    {
        label: "reactjs",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#61dafb",
        icon: <SiReact className="prologue-icon" />,
    },
    {
        label: "expo",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#bcc3cd",
        icon: <SiExpo className="prologue-icon" />,
    },
    {
        label: "unity3D",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#808080",
        icon: <SiUnity className="prologue-icon" />,
    },
    {
        label: "Csharp",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#722173",
        icon: <SiCsharp className="prologue-icon" />,
    },
    {
        label: "typescript",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#0074c2",
        icon: <SiTypescript className="prologue-icon" />,
    },
    {
        label: "mySql",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#00758f",
        icon: <SiMysql className="prologue-icon" />,
    },
    {
        label: "mongoDB",
        percentage: 75,
        progressStartValue: 0,
        speed: 20,
        iconColor: "#589636",
        icon: <SiMongodb className="prologue-icon" />,
    },
];

const greeting = [ "H", "i", "!" ];
const introduction = ["N","i","z","a","r"," ","F","a","r","i","z","i"];
const position = ["Web", " ", "&", " ", "Mobile", " ", "Developer"];

export const Home = () => {
    const [className, setClassName] = useState("initial");

    useEffect(() => {
        setTimeout(() => {
            setClassName("glitch");
        }, 2500);
    }, [className]);

    return (
        <div className="home-container">
            <div className="intro-wrapper">
                <div>
                    {
                        greeting.map((data, index) => 
                            <span 
                                key={index}
                                className={className}
                                style={{
                                    "--animName": "tilt-in-fwd-tr",
                                    "--animTiming": "0.6s",
                                    "--animEase": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                                    "--animDelay": `${index / 10}s`,
                                }}
                            >
                                {data}
                            </span>
                        )
                    }
                </div>
                <div>
                    <span className={className}>I'm</span>
                    <span>&nbsp;</span>
                    {
                        introduction.map((data, index) => {
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
                                            "--animDelay": `${(index / 10) + 0.5}s`,
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
                <div>
                    {
                        position.map((data, index) => {
                            if (data === " ") {
                                return (
                                    <span key={index}>&nbsp;</span>
                                );
                            }
                            else {
                                return (
                                    <span 
                                        key={index}
                                        style={{
                                            "--animName": "bounce-in-right",
                                            "--animTiming": "1.1s",
                                            "--animDelay": `${(index / 10) + 2}s`,
                                        }}
                                    >{
                                        data}
                                    </span>
                                );
                            }
                        })
                    }
                </div>
                <div>
                    <span>reactJS / react native expo</span>
                </div>
            </div>
            <div className="home-ring-wrapper">
                <div className="ring-effects">
                    {
                        listSkills.map((data, index) => 
                            <div 
                                key={index} 
                                className={`icon-wrapper`}
                                style={{
                                    "--iconColor": data.iconColor,
                                    "--itemIndex": index
                                }}
                            >
                                {data.icon}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};