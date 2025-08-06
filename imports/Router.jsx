import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./ui/App";
import Assistant from "./ui/pages/Assistant";
import PublicRoute from "./PublicRoute";
import Messaging from "./ui/pages/Messaging";
import Objectionfeed from "./ui/pages/Objectionfeed";
import Contentlibrary from "./ui/pages/Contentlibrary";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<PublicRoute><Contentlibrary /></PublicRoute>}
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