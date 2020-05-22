import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncidents';

export default function Routes(){
    return(
        <ToastProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Logon}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/incidents/new" component={NewIncident}/>
                </Switch>
            </BrowserRouter>
        </ToastProvider>
    )
}