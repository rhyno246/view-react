import axiosClient from "./axiosClient";


const productApi =  {
    getAll : () => {
        const url = '/product';
        return axiosClient.get(url)
    },
    getDetailProduct : (id) => {
        const url = `/product/${id}`
        return axiosClient.get(url)
    },



    getAllOtherBrand : () => {
        const url =`/otherbrand`
        return axiosClient.get(url)
    },

    getDetailOtherBrand : (id) => {
        const url =`/otherbrand/${ id }`
        return axiosClient.get(url)
    },



    getAllShoelace : () => {
        const url =`/Shoelace`;
        return axiosClient.get(url)
    },

    getDetailShoelace : (id) => {
        const url =`/Shoelace/${ id }`
        return axiosClient.get(url)
    },


    getSearch : (val) => {
        const url = `/product?q=${ val }`
        return axiosClient.get(url)
    }
}

export default productApi;