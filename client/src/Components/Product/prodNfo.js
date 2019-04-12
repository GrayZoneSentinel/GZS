import React from 'react';
import MyButton from '../Utils/button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

const ProdNfo = (props) => {

    const detail = props.detail

    // showProdTags
    const showProdTags = (detail) => (
        <div className="product_tags">
            { 
                detail.shipping
                    ?
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faTruck}/></div> 
                            <div className="tag_text">
                                <div>Envío y devolución</div>
                                <div>sin cargo</div>
                            </div>
                        </div>
                    :
                        null
            }
            { 
                detail.available
                    ?
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faCheck}/></div> 
                            <div className="tag_text">
                                <div>Disponible</div>
                                <div>en Stock</div>
                            </div>
                        </div>
                    :
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faTimes}/></div> 
                            <div className="tag_text">
                                <div>No disponible</div>
                                <div>Reserva abierta</div>
                            </div>
                        </div>
            }
            
        </div>
    )

    // showProdActions
    const showProdActions = (detail) => (
        <div className="product_actions">
            <div className="price">{detail.price} Euros</div>
            <div className="cart">
                <MyButton
                    type = "add_to_cart_link"
                    runAction = { () => {
                        console.log('add to cart')
                    }}
                />
            </div>
        </div>
    )

    // showProdSpecs
    const showProdSpecs = (detail) => (
        <div className="product_specifications">
            <h2>Características del producto</h2>
            <div>
                <div className="item">
                    <strong>Frets: </strong> {detail.frets}
                </div>
                <div className="item">
                <strong>Material: </strong> {detail.wood.name}
                </div>
            </div>
        </div>
    )

    return(
        <div>
            <h1>{detail.brand.name} {detail.name}</h1>
            <p>
                {detail.description}
            </p>
            {showProdTags(detail)}
            {showProdActions(detail)}
            {showProdSpecs(detail)}
        </div>
    );
};

export default ProdNfo;