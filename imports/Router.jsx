import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Index from "./ui/pages/Index";
import Messaging from "./ui/pages/Messaging";
import Contacts from "./ui/pages/Contacts";
import Account from "./ui/pages/Account";
import Billing from "./ui/pages/Billing";
import Files from "./ui/pages/Files";
import PhoneNumbers from "./ui/pages/Phonenumbers";
import Login from "./ui/pages/Login";
import Signup from "./ui/pages/Signup";
import Tools from "./ui/pages/Tools";
import KnowledgeBase from "./ui/pages/Knowledgebase";
import Assistant from "./ui/pages/Assistant";
import Widgetconfiguration from "./ui/pages/Widgetconfiguration";
import Dashboard from "./ui/pages/Dashboard";
import Buzzbuilderhub from "./ui/pages/Buzzbuilderhub";
import Attractshoppers from "./ui/pages/Attractshoppers";
import Convertbuyers from "./ui/pages/Convertbuyers";
import Buildloyalty from "./ui/pages/Buildloyalty";
import Contentlibrary from "./ui/pages/Contentlibrary";
import Objectionfeed from "./ui/pages/Objectionfeed";
import Customermemorycenter from "./ui/pages/Customermemorycenter";
import Dataenrichment from "./ui/pages/Dataenrichment";
import Writeblog from "./ui/pages/Writeblog";
import Posttosocial from "./ui/pages/Posttosocial";
import Createpodcast from "./ui/pages/Createpodcast";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/login'
                    element={<PublicRoute><Login /></PublicRoute>}
                />
                <Route
                    path='/signup'
                    element={<PublicRoute><Signup /></PublicRoute>}
                />
                <Route
                    path='/'
                    element={<PrivateRoute><Index /></PrivateRoute>}
                />
                <Route
                    path='/messaging'
                    element={<PrivateRoute><Messaging /></PrivateRoute>}
                />
                <Route
                    path='/contacts'
                    element={<PrivateRoute><Contacts /></PrivateRoute>}
                />
                <Route
                    path='/journey/dashboard'
                    element={<PrivateRoute><Dashboard /></PrivateRoute>}
                />
                <Route
                    path='/journey/buzz-builder-hub'
                    element={<PrivateRoute><Buzzbuilderhub /></PrivateRoute>}
                />
                <Route
                    path='/journey/write-blog'
                    element={<PrivateRoute><Writeblog /></PrivateRoute>}
                />
                <Route
                    path='/journey/post-to-social'
                    element={<PrivateRoute><Posttosocial /></PrivateRoute>}
                />
                <Route
                    path='/journey/create-podcast'
                    element={<PrivateRoute><Createpodcast /></PrivateRoute>}
                />
                <Route
                    path='/journey/attract-shoppers'
                    element={<PrivateRoute><Attractshoppers /></PrivateRoute>}
                />
                <Route
                    path='/journey/convert-buyers'
                    element={<PrivateRoute><Convertbuyers /></PrivateRoute>}
                />
                <Route
                    path='/journey/build-loyalty'
                    element={<PrivateRoute><Buildloyalty /></PrivateRoute>}
                />
                <Route
                    path='/journey/content-library'
                    element={<PrivateRoute><Contentlibrary /></PrivateRoute>}
                />
                <Route
                    path='/journey/objection-feed'
                    element={<PrivateRoute><Objectionfeed /></PrivateRoute>}
                />
                <Route
                    path='/journey/customer-memory-center'
                    element={<PrivateRoute><Customermemorycenter /></PrivateRoute>}
                />
                <Route
                    path='/settings/data-enrichment'
                    element={<PrivateRoute><Dataenrichment /></PrivateRoute>}
                />
                <Route
                    path='/account'
                    element={<PrivateRoute><Account /></PrivateRoute>}
                />
                <Route
                    path='/assistant'
                    element={<PrivateRoute><Assistant /></PrivateRoute>}
                />
                <Route
                    path='/billing'
                    element={<PrivateRoute><Billing /></PrivateRoute>}
                />
                <Route
                    path='/files'
                    element={<PrivateRoute><Files /></PrivateRoute>}
                />
                <Route
                    path='/tools'
                    element={<PrivateRoute><Tools /></PrivateRoute>}
                />
                <Route
                    path='/knowledge-base'
                    element={<PrivateRoute><KnowledgeBase /></PrivateRoute>}
                />
                <Route
                    path='/widget-configuration'
                    element={<PrivateRoute><Widgetconfiguration /></PrivateRoute>}
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