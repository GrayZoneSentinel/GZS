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
            {/* Load more button appears if there are products to show; conversely the button disappears */}
            {
                props.size > 0 && props.size >= props.limit
                    ?
                        <div className="load_more_container">
                            <span onClick={() => props.loadMore()}>
                                Load more
                            </span>
                        </div> 
                    :
                        null
            }      
        </div>
    );
};

export default LoadmoreCards;