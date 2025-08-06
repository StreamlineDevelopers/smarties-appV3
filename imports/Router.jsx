import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./ui/App";
import Assistant from "./ui/pages/Assistant";
import PublicRoute from "./PublicRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<PublicRoute><Assistant /></PublicRoute>}
                />
                {/* <Route
                    path='/'
                    element={<PrivateRoute><App /></PrivateRoute>}
                /> */}
                <Route path='*' element={<>NOT FOUND</>} />
            </Routes>
        </BrowserRouter>
    );
}