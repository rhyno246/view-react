import axiosClient from "./axiosClient";


const productApi =  {
    getAll : () => {
        const url = '/products';
        return axiosClient.get(url)
    },
    getDetailProduct : (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url)
    }
}

export default productApi;