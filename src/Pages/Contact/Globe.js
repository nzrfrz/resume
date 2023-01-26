import React, { useEffect, useRef } from "react";

import Globe from 'react-globe.gl';
// import {globe} from "globe.gl";

// import nightMap from "../../../Assets/images/earth-night.jpg";
import earthBlueMarble from "../../Assets/images/earth-blue-marble.jpg";

export const GlobeGL = ({width}) => {
    const earthRef = useRef(null);

    const N = 10;
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        maxR: Math.random() * 20 + 3,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200
    }));

    const colorInterpolator = t => `rgba(255,100,50,${Math.sqrt(1-t)})`;

    useEffect(() => {
        earthRef.current.controls().autoRotate = true;
        earthRef.current.controls().autoRotateSpeed = 0.5;
        earthRef.current.controls().enableZoom = false;
    }, []);
    
    return (
        <div>
            <Globe 
                ref={earthRef}
                width={width}
                height={width}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl={earthBlueMarble}
                ringsData={gData}
                ringLat={-7.795308}
                ringLng={110.366317}
                ringResolution={[64]}
                ringAltitude={0.0015}
                ringColor={() => colorInterpolator}
                ringMaxRadius={25}
                ringPropagationSpeed={5}
                ringRepeatPeriod={500}
            />
        </div>
    );
};