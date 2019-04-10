import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/main';
import Box from './components/box';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/boxes" component={Box}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;