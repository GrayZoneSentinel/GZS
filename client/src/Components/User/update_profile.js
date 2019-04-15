import React from 'react';
import UserLayout from '../../hoc/userLayout';
import UpdatePersonalNfo from './update_personal_Nfo';

const UpdateProfile = () => {

    return(
        <UserLayout>
            <h1>Modificar mis datos personales</h1>
            <h4>NOTA: Los pedidos en curso mantendrán los datos existentes al tiempo ser ejecutada la orden de compra.</h4>
            <UpdatePersonalNfo
            
            />
        </UserLayout>
    );
};

export default UpdateProfile;