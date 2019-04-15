// Login users and products
import { 
    GET_SITE_DATA
} from '../Actions/types';

export default function(state={}, action) {
    switch(action.type){
        case GET_SITE_DATA:
            return { 
                ...state, 
                siteData: action.payload 
            }
        default: 
            return state;
    }
}