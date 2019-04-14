import React from 'react';
// Styles 
import UserLayout from '../../hoc/userLayout';
import MyButton from '../Utils/button';
import UserHistoryBlock from '../Utils/User/history_block';

const UserDashboard = ({user}) => {
    return(
        <UserLayout>
            <div>
                <div className="user_nfo_panel">
                    <h1>Datos personales</h1>
                    <div>
                        <span>{user.userData.name}</span>
                        <span>{user.userData.lastname}</span>
                        <span>{user.userData.email}</span>
                    </div>
                    <MyButton
                        type="default"
                        title="Editar información"
                        linkTo="/user/user_profile"
                    />
                </div>
                {
                    user.userData.history 
                        ?
                            <div className="user_nfo_panel">
                                <h1>Historial de pedidos</h1>
                                <div className="user_product_block_wrapper">
                                    <UserHistoryBlock
                                        products = {user.userData.history}
                                    />
                                </div>
                            </div>
                        :
                            <div className="user_nfo_panel">
                            <h1>Historial de pedidos</h1>
                            <div className="user_product_block_wrapper">
                                No hay histórico de pedidos previos.
                            </div>
                        </div>
                }
            </div>
        </UserLayout>
    );
};

export default UserDashboard;