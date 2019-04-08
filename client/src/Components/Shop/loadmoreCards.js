import React from 'react';
// Import the cards block shop from utils
import CardBlockShop from '../Utils/card_block_shop';

const LoadmoreCards = (props) => {

    return(
        <div>
            <div>
                <CardBlockShop
                    grid = {props.grid}
                    list = {props.products}
                />
            </div>
        </div>
    );
};

export default LoadmoreCards;