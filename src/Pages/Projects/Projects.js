import React, { useCallback, useState } from "react";
import { 
    SiUnity, 
    SiReact, 
    SiCsharp,
    SiExpo,
    SiYoutube,
    SiGoogleplay,
    SiAntdesign,
    SiTailwindcss,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import { 
    Navigation, 
    Pagination, 
    EffectFlip,
    EffectFade,
    A11y 
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const projectsData = [
    {
        projectName: "Bubble Space",
        projectType: "game",
        imageMode: "portrait",
        imageThumb: require("../../Assets/images/bubble-space/bubble-space-thumbV2.png"),
        imageCarousels: [
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space-thumbV2.png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (2).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (3).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (4).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (5).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (6).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (7).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (8).png")},
            {alt: "bubble-space", image: require("../../Assets/images/bubble-space/bubble-space (9).png")},
        ],
        imagePlacement: "left",
        imageWidth: 203,
        imageHeight: 438,
        projectsLink: [
            {
                target: "playStore",
                icon: <SiGoogleplay className="projects-link-icon" />,
                iconColor: "white",
                url: "https://play.google.com/store/apps/details?id=com.zarrghstudio.bubblespace",
            },
            {
                target: "youtube",
                icon: <SiYoutube className="projects-link-icon" />,
                iconColor: "#FF0000",
                url: "https://www.youtube.com/watch?v=1-UiFuFUpsg&ab_channel=zarrghstudio",
            }
        ],
        projectsDescription: "My first personal projects while learning how to code.  With help from unity asset store for the code to learn and some free assets.  The is a casual game, where you need to pop the meteor which has same color more than 3.  Also include in game purchase and some ads to get free item.  The game has more than thousand level to play.",
        projectsTech: [
            {
                techName: "cSharp",
                iconColor: "#722173",
                icon: <SiCsharp className="projects-technology-icon" />
            },
            {
                techName: "unity3D",
                iconColor: "#808080",
                icon: <SiUnity className="projects-technology-icon" />
            }
        ]
    },
    {
        projectName: "Missing Alphabet",
        projectType: "game",
        imageMode: "landscape",
        imageThumb: require("../../Assets/images/missing-alphabet/ma-thumbV2.png"),
        imageCarousels: [
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/ma-thumbV2.png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (1).png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (2).png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (3).png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (4).png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (5).png")},
            {alt: "bubble-space", image: require("../../Assets/images/missing-alphabet/missing-alphabet (6).png")},
        ],
        imagePlacement: "right",
        imageWidth: 588,
        imageHeight: 353,
        projectsLink: [
            {
                target: "playStore",
                icon: <SiGoogleplay className="projects-link-icon" />,
                iconColor: "white",
                url: "https://play.google.com/store/apps/details?id=com.zarrghstudio.MissingAlphabet",
            },
            {
                target: "youtube",
                icon: <SiYoutube className="projects-link-icon" />,
                iconColor: "#FF0000",
                url: "https://www.youtube.com/watch?v=1-UiFuFUpsg&ab_channel=zarrghstudio",
            }
        ],
        projectsDescription: "My second game i've made.  This is the first time i build a game from scratch. This game is targeted for a children, but grown ups people can also play this game, because this game is a brain training game.  You need to guest what alphabet is missing from given random alphabet by pressing the button.  Also there is a time limit to guest.",
        projectsTech: [
            {
                techName: "cSharp",
                iconColor: "#722173",
                icon: <SiCsharp className="projects-technology-icon" />
            },
            {
                techName: "unity3D",
                iconColor: "#808080",
                icon: <SiUnity className="projects-technology-icon" />
            }
        ]
    },
    {
        projectName: "RKAM",
        projectType: "webApp",
        imageMode: "landscape",
        imageThumb: require("../../Assets/images/erkam-ss1.png"),
        imageCarousels: [],
        imagePlacement: "left",
        imageWidth: 538,
        imageHeight: "auto",
        projectsLink: [
            {
                target: "externalLink",
                icon: <FiExternalLink className="projects-link-icon" />,
                iconColor: "white",
                url: "https://erkam.kemenag.go.id/login",
            },
            {
                target: "youtube",
                icon: <SiYoutube className="projects-link-icon" />,
                iconColor: "#FF0000",
                url: "https://www.youtube.com/watch?v=OoxYznQrdGM",
            }
        ],
        projectsDescription: "Projects from Ministry of Religion, and the app is part of EMIS 4.0. This app is to record all Madrasah budget work plan.  This app is targeted for all Madrasah in Indonesia. There is 3 main feature of the app, like Planning, Realization and Report.",
        projectsTech: [
            {
                techName: "reactjs",
                iconColor: "#61dafb",
                icon: <SiReact className="projects-technology-icon" />
            },
            {
                techName: "antd",
                iconColor: "white",
                icon: <SiAntdesign className="projects-technology-icon" />
            },
            {
                techName: "tailwindcss",
                iconColor: "#38bdf8",
                icon: <SiTailwindcss className="projects-technology-icon" />
            }
        ]
    },
    {
        projectName: "iBoost Admin",
        projectType: "webApp",
        imageMode: "landscape",
        imageThumb: require("../../Assets/images/iboost-web/iboost-web (2).png"),
        imageCarousels: [
            {alt: "bubble-space", image: require("../../Assets/images/iboost-web/iboost-web (1).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-web/iboost-web (2).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-web/iboost-web (3).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-web/iboost-web (4).png")},
        ],
        imagePlacement: "right",
        imageWidth: 538,
        imageHeight: "auto",
        projectsLink: [],
        projectsDescription: "Dashboard web app for iBoost. iBoost is an app to blast message, to any phone muber via sms, mms and other messaging platform. In this dashoard, user can configure any feature related to messaging platform, like content, price and much more.",
        projectsTech: [
            {
                techName: "reactjs",
                iconColor: "#61dafb",
                icon: <SiReact className="projects-technology-icon" />
            },
            {
                techName: "antd",
                iconColor: "white",
                icon: <SiAntdesign className="projects-technology-icon" />
            }
        ]
    },
    {
        projectName: "iBoost Mobile",
        projectType: "game",
        imageMode: "portrait",
        imageThumb: require("../../Assets/images/iboost-mobile/iboost-mobile (1).png"),
        imageCarousels: [
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (1).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (2).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (3).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (4).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (5).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (6).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (7).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (8).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (9).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (10).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (11).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (12).png")},
            {alt: "bubble-space", image: require("../../Assets/images/iboost-mobile/iboost-mobile (13).png")},
        ],
        imagePlacement: "left",
        imageWidth: 188,
        imageHeight: 438,
        projectsLink: [],
        projectsDescription: "iBoost mobile app, this application is the essence of iboost, where users can create message content, then choose the target to be blasted. many platforms allow for blasted messages.",
        projectsTech: [
            {
                techName: "rnExpo",
                iconColor: "#bcc3cd",
                icon: <SiExpo className="projects-technology-icon" />
            },
        ]
    },
    {
        projectName: "Digitren Admin",
        projectType: "webApp",
        imageMode: "landscape",
        imageThumb: require("../../Assets/images/digitren-web/digitren-web-thumb.png"),
        imageCarousels: [
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (1).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (2).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (3).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (4).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (5).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (6).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (7).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (8).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (9).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (10).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-web/digitren-web (11).png")},
        ],
        imagePlacement: "right",
        imageWidth: 538,
        imageHeight: "auto",
        projectsLink: [],
        projectsDescription: "This project is in collaboration with Gadjah Mada University. This application aims to record student payment obligations at Islamic boarding schools. And send notifications to the mobile application after the payment obligation turns into a payment bill.",
        projectsTech: [
            {
                techName: "reactjs",
                iconColor: "#61dafb",
                icon: <SiReact className="projects-technology-icon" />
            },
            {
                techName: "antd",
                iconColor: "white",
                icon: <SiAntdesign className="projects-technology-icon" />
            }
        ]
    },
    {
        projectName: "Digitren Mobile",
        projectType: "mobile app",
        imageMode: "portrait",
        imageThumb: require("../../Assets/images/digitren-mobile/digitren-mobile-thumb.png"),
        imageCarousels: [
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-mobile/digitren-mobile-thumb.png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-mobile/digitren-mobile (1).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-mobile/digitren-mobile (2).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-mobile/digitren-mobile (3).png")},
            {alt: "digitren-admin", image: require("../../Assets/images/digitren-mobile/digitren-mobile (4).png")},
        ],
        imagePlacement: "left",
        imageWidth: 188,
        imageHeight: 438,
        projectsLink: [],
        projectsDescription: "Digitren mobile application, to receive notifications and to see what bills must be paid, and payment history, as well as any bills that have not been paid yet",
        projectsTech: [
            {
                techName: "rnExpo",
                iconColor: "#bcc3cd",
                icon: <SiExpo className="projects-technology-icon" />
            },
        ]
    },
];

export const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(undefined);

    const imageMargin = useCallback((data) => {
        switch (true) {
            // case data.imagePlacement === "left" && data.imageMode === "portrait":
            //     return 20;
            // case data.imagePlacement === "left" && data.imageMode === "landscape":
            //     return 0;
            // case data.imagePlacement === "right" && data.imageMode === "landscape":
            //     return "none";
            case data.imagePlacement === "right" && data.imageMode === "portrait":
                return 25;
            case data.imagePlacement === "right" && data.imageMode === "landscape":
                return 0;
            case data.imagePlacement === "left" && data.imageMode === "portrait":
                return 20;
            case data.imagePlacement === "left" && data.imageMode === "landscape":
                return 0;
            default:
                return 0;
        }
    }, [projectsData]);

    const marginAtViewMore = useCallback((data) => {
        switch (true) {
            case data.imagePlacement === "right" && data.imageMode === "portrait":
                return 40;
            case data.imagePlacement === "right" && data.imageMode === "landscape":
                return -25;
            case data.imagePlacement === "left" && data.imageMode === "portrait":
                return 40;
            case data.imagePlacement === "left" && data.imageMode === "landscape":
                return 25;
            default:
                return 0;
        }
    }, [projectsData]);

    return (
        <div className="projects-main-container">
            {
                projectsData.map((data, index) => 
                    <div 
                        key={index} 
                        className="project-item-container"
                        style={{
                            "--justify": data.imagePlacement === "left" ? "flex-start" : "flex-end"
                        }}
                    >

                        <div 
                            className={selectedIndex === index ? "project-image-container-exit" : "project-image-container"}
                            style={{
                                "--imageContainerWidth": data.imageWidth,
                                "--imageContainerHeight": data.imageHeight,
                                "--leftys": imageMargin(data),
                                "--imageLeft": imageMargin(data),
                                "--imageRight": imageMargin(data),
                                "--viewMoreImageLeft": marginAtViewMore(data),
                                "--viewMoreImageRight": marginAtViewMore(data),
                            }}
                        >
                            {
                                selectedIndex === index && data.imageCarousels.length > 0 ?
                                <Swiper
                                    modules={[Navigation, Pagination, EffectFade, EffectFlip, A11y]}
                                    slidesPerView={1}
                                    navigation
                                    style={{
                                        width: "100%"  
                                    }}
                                    effect="flip"
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: false }}
                                >
                                    {
                                        data.imageCarousels.map((item, index) => 
                                            <SwiperSlide key={index}>
                                                <img src={item.image} alt={item.alt} />
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                                :
                                <img src={data.imageThumb} alt="portrait-image" />
                            }
                        </div>

                        <div 
                            className={selectedIndex === index ? "project-content-container-exit" : "project-content-container"}
                            style={{
                                "--align": data.imagePlacement === "left" ? "flex-end" : "flex-start",
                                "--imageContainerHeight": data.imageHeight,
                                "--exitAnimation": data.imagePlacement === "left" ? "slide-out-right" : "slide-out-left",
                                "--entranceAnimation": data.imagePlacement === "left" ? "slide-in-right" : "slide-in-left",
                            }}
                        >
                            <div className="project-title">
                                <span>{data.projectName}</span>
                            </div>
                            <div className="project-link">
                                <button className="cta" onClick={() => {setSelectedIndex(index)}}>
                                    <span>View More</span>
                                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                                {
                                    data.projectsLink.map((linkItem, linkIndex) => 
                                    <a 
                                        key={linkIndex} 
                                        href={linkItem.url} 
                                        target="_blank" 
                                        style={{
                                            "--iconColor": linkItem.iconColor
                                        }}
                                    >
                                        {linkItem.icon}
                                    </a>
                                    )
                                }
                            </div>
                            <div 
                                className="project-description"
                                style={{
                                    "--textAlign": data.imagePlacement === "left" ? "right" : "left"
                                }}
                            >
                                <span>{data.projectsDescription}</span>
                            </div>
                            <div className="project-content-tech">
                            {
                                data.projectsTech.map((techList, techIndex) => 
                                <div
                                    key={techIndex}
                                    style={{
                                        "--iconcolor": techList.iconColor
                                    }}
                                >
                                    {techList.icon}
                                </div>
                                )
                            }
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="bottom-margin" />
        </div>
    );
};