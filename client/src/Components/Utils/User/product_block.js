import React from 'react';

const UserProductBlock = ({products, removeItem}) => {

    const renderCartImage = (images) => {
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_available.png'
        }
    }

    const renderItems = () => (
        products.cartDetail
            ?
                products.cartDetail.map(product => (
                    <div className="user_product_block" key={product._id}>
                        <div className="item">
                            <div 
                                className="image"
                                style={{background: `url(${renderCartImage(product.images)}) no-repeat`}}
                            ></div>
                        </div>
                        <div className="item">
                            <h4>Artículo seleccionado: </h4>
                            <div>
                                {product.brand.name} {product.name}
                            </div>
                        </div>
                        <div className="item">
                            <h4>Cantidad: </h4>
                            <div>
                                {product.quantity}
                            </div>
                        </div>
                        <div className="item">
                            <h4>Precio: </h4>
                            <div>
                                {product.price} Euros
                            </div>
                        </div>
                        <div className="item btn">
                            <div 
                                className="cart_remove_btn"
                                onClick={() => removeItem(product._id)}
                            >
                                Eliminar
                            </div>
                        </div>
                    </div>
                ))
            :
                null
    )

    return(
        <div>
            {renderItems()}
        </div>
    );
};

export default UserProductBlock;