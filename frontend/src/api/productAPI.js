import { axiosClient } from './axiosClient.js';
import { isAuthenticated } from '../auth'

const { token } = isAuthenticated();

const ProductAPI = {
    getAll() {
        const url = `/api/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/api/product/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/api/product`;
        return axiosClient.post(url, product, {
            // headers: {
            //     'Authorization': `Bearer ${token}`
            // }
        });
    },
    remove(id) {
        const url = `/api/product/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/api/product/${id}`;
        return axiosClient.put(url, data);
    },
    getProductByCateId(id) {
        const url = `/api/categoryPage/${id}`;
        return axiosClient.get(url);
    }
}
export default ProductAPI;