import React from 'react';
import UserLayout from '../../../hoc/userLayout';
import ManageBrands from './manage_brands';
import ManageWoods from './manage_woods';

const ManageCategories = () => {

    return(
        <UserLayout>
            <ManageBrands></ManageBrands>
            <ManageWoods></ManageWoods>
        </UserLayout>
    );
};

export default ManageCategories;