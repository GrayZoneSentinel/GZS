import React, { Component } from 'react';

// Styles Awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

class Footer extends Component {
    render() {
        return(
            <footer className="bck_b_dark">
                 <div className="container">
                    <div className="logo">
                        Gray Zone Sentinel
                    </div>
                    <div className="wrapper">
                        <div className="left">
                            <h2>Contacto</h2>
                            <div className="business_nfo">
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Dirección</div>
                                        <div>Av. Posse, 11</div>
                                        <div>15160 - Sada</div>
                                        <div>A Coruña</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Teléfono</div>
                                        <div>+34 674 724 288</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Horario</div>
                                        <div>L, M, X, J: 9.00 a 21.00</div>
                                        <div>V: 9.00 a 17.30</div>
                                    </div>
                                </div>
                                <div className="tag">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="icon"
                                    />
                                    <div className="nfo">
                                        <div>Correo electrónico</div>
                                        <div>grayzonesentinel@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <h2>Sígue la pista</h2>
                            <div>
                                <div>
                                    Queremos formar parte de tus redes sociales; a cambio, entérate de las últimas novedades y no te pierdas nada interesante.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>    
        );
    }
}

export default Footer;