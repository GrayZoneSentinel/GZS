import React from 'react';
// MOMENT
import moment from 'moment';

const UserHistoryBlock = (props) => {

    // Get History information
    const rederBlocks = () => (
        props.products
            ?
                props.products.map((product, i) => (
                    <tr key={i}>
                        <td>{moment(product.dateOfPurchase).format("DD MMMM YYYY")}</td>
                        <td><strong>{product.brand}</strong> {product.name}</td>
                        <td>{product.price}.-€</td>
                        <td>{product.quantity}</td>
                    </tr>
                ))
            :
                null
    )

    return(
        <div>
            <div className="history_blocks">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de compra</th>
                            <th>Artículo</th>
                            <th>Precio de compra</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rederBlocks() }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserHistoryBlock;