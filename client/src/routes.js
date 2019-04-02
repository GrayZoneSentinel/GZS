import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout hoc
import Layout from './hoc/layout';
// Components
import Home from './Components/index';
import RegisterLogin from './Components/Register_Login';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/register_login" exact component={RegisterLogin}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;