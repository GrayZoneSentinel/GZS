import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout hoc
import Layout from './hoc/layout';
// Auth filtering
import Auth from './hoc/auth';
// Components
import Home from './Components/Home';
import Shop from './Components/Shop';
import RegisterLogin from './Components/Register_Login';
import Register from './Components/Register_Login/register';
import ManageCategories from './Components/User/Admin/manage_categories';
import ProductPage from './Components/Product';
import UserCart from './Components/User/cart';
import UpdateProfile from './Components/User/update_profile';
import ManageSite from './Components/User/Admin/manage_site';

import UserDashboard from './Components/User';
import AddProduct from './Components/User/Admin/add_products';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)}/>
                <Route path="/admin/site_info" exact component={Auth(ManageSite, true)}/>
                <Route path="/user/user_profile" exact component={Auth(UpdateProfile, true)}/>
                <Route path="/admin/add_products" exact component={Auth(AddProduct, true)}/>
                <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)}/>
                <Route path="/user/cart" exact component={Auth(UserCart, true)}/>
                <Route path="/register" exact component={Auth(Register, false)}/>
                <Route path="/register_login" exact component={Auth(RegisterLogin, false)}/>
                <Route path="/product_detail/:id" exact component={Auth(ProductPage, null)}/>
                <Route path="/shop" exact component={Auth(Shop, null)}/>
                <Route path="/" exact component={Auth(Home, null)}/>
            </Switch>
        </Layout>
    )
}

export default Routes;
