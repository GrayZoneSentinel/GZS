import React from 'react';
// Styles 
import UserLayout from '../../hoc/userLayout';
import MyButton from '../Utils/button';

const UserDashboard = () => {
    return(
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1>Información de mi cuenta</h1>
                    <div>
                        <span>Nombre</span>
                        <span>Apellidos</span>
                        <span>Email</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Editar información"
                        linkTo="/user/user_profile"
                    />
                </div>
                <div className="user_nfo_panel">
                    <h1>Historial de pedidos</h1>
                    <div className="user_product_block_wrapper">
                        Historial de compras y pedidos
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default UserDashboard;