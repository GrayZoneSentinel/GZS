import React from 'react';

// Styles Awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = ({data}) => {    

    return(
        data.siteData 
            ?
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
                                            <div>{data.siteData[0].address}</div>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="icon"
                                        />
                                        <div className="nfo">
                                            <div>Teléfono</div>
                                            <div>{data.siteData[0].phone}</div>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="icon"
                                        />
                                        <div className="nfo">
                                            <div>Horario</div>
                                            <div>{data.siteData[0].workingHours}</div>
                                        </div>
                                    </div>
                                    <div className="tag">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="icon"
                                        />
                                        <div className="nfo">
                                            <div>Correo electrónico</div>
                                            <div>{data.siteData[0].email}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <h2>Síguenos la pista</h2>
                                <div>
                                    <div>
                                        Queremos formar parte de tus redes sociales; a cambio, entérate de las últimas novedades y no te pierdas nada interesante.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>   
            :
                null 
    );
}

export default Footer;