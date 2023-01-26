import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SiExpo } from "react-icons/si";

import logo from "../Assets/images/logo.png";

import iconH from "../Assets/images/mobile-link-icon-H.png";
import iconA from "../Assets/images/mobile-link-icon-A.png";
import iconS from "../Assets/images/mobile-link-icon-S.png";
import iconP from "../Assets/images/mobile-link-icon-P.png";
import iconC from "../Assets/images/mobile-link-icon-C.png";

import githubIcon from "../Assets/images/icons8-github-480.png";
import googlePlayIcon from "../Assets/images/icons8-google-play-480.png";
import linkedinIcon from "../Assets/images/icons8-linkedin-2-480.png";
import cvIcon from "../Assets/images/icons8-cv-96.png";

import myCV from "../Assets/pdf/nizar-farizi-CV.pdf";

const socialLink = [
    {
        label: "LinkedIn",
        iconType: "image",
        icon: linkedinIcon,
        url: "https://www.linkedin.com/in/nzrfrz/",
    },
    {
        label: "Github",
        iconType: "image",
        icon: githubIcon,
        url: "https://github.com/nzrfrz",
    },
    {
        label: "Expo",
        iconType: "icon",
        icon: <SiExpo className="socmed-icon" />,
        url: "https://expo.dev/accounts/nzrfrz/snacks",
    },
    {
        label: "GooglePlay",
        iconType: "image",
        icon: googlePlayIcon,
        url: "https://play.google.com/store/apps/developer?id=Zarrgh+Studio",
    },
    {
        label: "Resume",
        iconType: "image",
        icon: cvIcon,
        url: "",
    },
]

export const Layout = () => {
    const [fabOpen,  setFabOpen] = useState(false);

    return (
        <div className="layout-container">

            <div className="stars" style={{ "--zIndex": fabOpen === true ? 5 : 0 }} />
            <div className="twinkling" />
            <div 
                className="clouds" 
                style={{ 
                    "--zIndex": fabOpen === true ? 5 : 0, 
                    "--opacity": fabOpen === true ? 0.7 : 0.3 
                }} 
                onClick={() => setFabOpen(false)}
            />

            <div className="side-menu-container">
                <div className="logo-wrapper">
                    <NavLink className="logo" to={"/"}>
                        <img src={logo} alt="nzrfrz" className="logoIcon" />
                    </NavLink>
                </div>
                <div className="route-link-wrapper">
                    <NavLink to={"/about"} rel="noopener noreferrer">
                        <span>About</span>
                        <span></span>
                    </NavLink>
                    <NavLink to={"/skills"} rel="noopener noreferrer">
                        <span>Skills</span>
                        <span></span>
                    </NavLink>
                    <NavLink to={"/projects"} rel="noopener noreferrer">
                        <span>Projects</span>
                        <span></span>
                    </NavLink>
                    <NavLink to={"/contact"} rel="noopener noreferrer">
                        <span>Contact</span>
                        <span></span>
                    </NavLink>
                    <a href={myCV} without rel="noopener noreferrer" target="_blank">
                        <span>Resume</span>
                    </a>
                </div>
                <div className="sidemenu-socmed-container">
                    {
                        socialLink.slice(0, -1).map((data, index) => 
                        <a 
                            key={index}
                            // className={fabOpen ? "soc-btn-show" : "soc-btn-hidden"}
                            href={data.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{
                                "--translateY": (index * 150) + 150,
                            }}
                        >
                            {
                                data.iconType === "image" ?
                                <img src={data.icon} alt="nzrfrz" className="socmed-image" />
                                :
                                data.icon
                            }
                        </a>
                        )
                    }
                </div>
            </div>

            <div className="body-container" style={{ "--opacity": fabOpen === true ? 0.3 : 1 }} >
                <Outlet />
            </div>

            {/* mobile & tab menu */}
            <div className="mobile-menu-container">
                <div className="mobile-menu">
                    <NavLink to={"/"} onClick={() => setFabOpen(false)}>
                        <img src={iconH} alt="nzrfrz" className="home-icon" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink to={"/about"} onClick={() => setFabOpen(false)}>
                        <img src={iconA} alt="nzrfrz" />
                        <span>About</span>
                    </NavLink>
                    <NavLink to={"/skills"} onClick={() => setFabOpen(false)}>
                        <img src={iconS} alt="nzrfrz" />
                        <span>Skills</span>
                    </NavLink>
                    <NavLink to={"/projects"} onClick={() => setFabOpen(false)}>
                        <img src={iconP} alt="nzrfrz" />
                        <span>Projects</span>
                    </NavLink>
                    <NavLink to={"/contact"} onClick={() => setFabOpen(false)}>
                        <img src={iconC} alt="nzrfrz" />
                        <span>Contact</span>
                    </NavLink>
                    <div className="indicator">
                        <div className="indicator-inset"></div>
                    </div>
                </div>
            </div>
            {/* mobile & tab menu */}

            {/* social media */}
            <div className="fab-button">
                <button
                    className="fab-btn-init"
                    onClick={() => {
                        setFabOpen(!fabOpen);
                    }}
                >
                    <img src={logo} alt="nzrfrz" className="socmed-image" />
                </button>

                {
                    socialLink.map((data, index) => 
                    <a 
                        key={index}
                        className={fabOpen ? "soc-btn-show" : "soc-btn-hidden"}
                        href={data.url}
                        rel="noopener noreferrer"
                        target="_blank" 
                        style={{
                            "--translateY": (index * 150) + 150,
                        }}
                    >
                        {
                            data.iconType === "image" ?
                            <img src={data.icon} alt="nzrfrz" className="socmed-image" />
                            :
                            data.icon
                        }
                    </a>
                    )
                }

            </div>
            {/* social media */}
        </div>
    );
};