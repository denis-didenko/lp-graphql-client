import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import HomePage from '../Routes/HomePage';
import GeneratorPage from '../Routes/GeneratorPage';
import BlocksPage from '../Routes/BlocksPage';

import './app.css';

const App = () => {
    return (
        <>
            <aside>
                <Sidebar />
            </aside>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/generator" component={GeneratorPage} />
                <Route path="/blocks" component={BlocksPage} />
            </Switch>
        </>
    );
};

export default App;
