import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout hoc
import Layout from './hoc/layout';
// Components
import Home from './Components/index';
import RegisterLogin from './Components/Register_Login';
import Register from './Components/Register_Login/register';

import UserDashboard from './Components/User';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/user/dashboard" exact component={UserDashboard}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/register_login" exact component={RegisterLogin}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;
