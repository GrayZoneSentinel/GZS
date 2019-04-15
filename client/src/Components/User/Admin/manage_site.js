import React from 'react';
//Layout
import UserLayout from '../../../hoc/userLayout';
import UpdateSiteNfo from './update_site_nfo';

const ManageSite = () => {

    return(
        <UserLayout>
            <UpdateSiteNfo/>
        </UserLayout>
    );
};

export default ManageSite;