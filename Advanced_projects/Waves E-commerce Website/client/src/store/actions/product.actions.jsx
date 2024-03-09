import * as actions from './index';
import axios from 'axios';

export const productsBySort = ({ limit, sortBy, order, where }) => async dispatch => {
    try {
        const products = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/api/products/all`, {
            params: {
                limit,
                sortBy,
                order,
            },
        });
        switch (where) {
            case 'bySold':
                dispatch(actions.productsBySold(products.data));
                break;
            case 'byDate':
                dispatch(actions.productsByDate(products.data));
                break;
            default:
                return false;

        }
    } catch (error) {
        dispatch(actions.errorGlobal(error.response.data.message))
    }
};
