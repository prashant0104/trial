
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About/about';
import Homepage from '../Homepgae/home';

const routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/about' exact component={About} />
        </Switch>

    )
}

export default routes;