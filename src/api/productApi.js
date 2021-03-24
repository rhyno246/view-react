import axiosClient from "./axiosClient";


const productApi =  {
    getAll : () => {
        const url = '/product';
        return axiosClient.get(url)
    },
    getDetailProduct : (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url)
    }
}

export default productApi;