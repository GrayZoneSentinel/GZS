import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout hoc
import Layout from './hoc/layout';
// Components
import Home from './Components/index';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;
