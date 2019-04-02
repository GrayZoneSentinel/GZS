import React from 'react';
// Custom button
import MyButton from '../Utils/button';
// Reference to login component
import Login from './login';


const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <h2>Alta de nuevo usuario</h2>
                            <p>Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro.</p>
                            <p>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe</p>
                            <MyButton
                                type="default"
                                title="Crear mi cuenta"
                                linkTo="/register"
                                addStyles={{
                                    margin:'16px 0px 0px 18px'
                                }}
                            />
                        </div>
                        <div className="right">
                            <h2>Acceso usuarios registrados</h2>
                            <p>Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe</p>
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RegisterLogin;