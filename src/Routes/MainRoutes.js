import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "../Pages";

import { routeRegistry } from "./RouteRegistry";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {
                    routeRegistry.map((data, index) => 
                        <Route 
                            key={index}
                            {...data.isIndex === true ? index : null}
                            path={data.path}
                            element={data.element}
                        />
                    )
                }
            </Route>
        </Routes>
    );
};