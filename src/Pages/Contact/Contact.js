import React, { useEffect, useRef, useState } from "react";

import { GlobeGL } from "./Globe";

import whatsAppIcon from "../../Assets/images/icons8-whatsapp-480.png";
import telegramIcon from "../../Assets/images/icons8-telegram-app-480.png";
import gmailIcon from "../../Assets/images/icons8-gmail-480.png";

const title = [ "C", "o", "n", "t", "a", "c", "t", " ", "M", "e" ];

const contactPerson = [
    {
        label: "whatsApp",
        image: whatsAppIcon,
        href: "https://wa.me/6282166311116",
    },
    {
        label: "telegram",
        image: telegramIcon,
        href: "https://t.me/+62895353541114",
    },
    {
        label: "gmail",
        image: gmailIcon,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=nzr.frz@gmail.com",
    },
]

export const Contact = () => {
    const containerRef = useRef();
    const [containerWidth, setContainerWidth] = useState();
    const [className, setClassName] = useState("initial");

    useEffect(() => {
        setTimeout(() => {
            setClassName("glitch");
        }, 2500);

        setContainerWidth(containerRef.current.clientWidth);
    }, [className, containerRef]);

    return (
        <div className="contact-main-container">
            <div className="contact-content-container">
                <div className="contact-title">
                    {
                        title.map((data, index) => 
                            {
                                if (data === ' ') {
                                    return (
                                        <span key={index}>&nbsp;</span>
                                    )
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
                                    )
                                }
                            }
                        )
                    }
                </div>
                <div className="contact-description">
                    <span>Available to work on site or remotely.  Also interested in freelance opportunities and involved in large projects.  Want to know more about me, please feel free to contact me.</span>
                </div>
                <div className="contact-link">
                    {
                        contactPerson.map((data, index) => 
                        <a key={index} href={data.href} target="_blank"  rel="noreferrer noopener">
                            <div className="cp-glitch" style={{ backgroundImage: `url(${data.image})` }} >
                            {
                                [...Array(5).keys()].map((imgCloneData, imgCloneIndex) => 
                                    <div key={imgCloneIndex} className="cp-glitch-img" style={{ backgroundImage: `url(${data.image})` }} />
                                )
                            }
                            </div>
                        </a>
                        )
                    }
                </div>
            </div>
            <div ref={containerRef} className="contact-location-container">
                <GlobeGL 
                    width={containerWidth}
                />
            </div>
            <div className="contact-margin-bottom" />
        </div>
    );
};