import { axiosClient } from './axiosClient.js';

const CategoryAPI = {
    getAll() {
        const url = `/api/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/api/category/${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `/api/category`;
        return axiosClient.post(url, category);
    },
    remove(id) {
        const url = `/api/category/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/api/category/${id}`;
        return axiosClient.put(url, data);
    },
}
export default CategoryAPI;