import axiosClient from "./axiosClient";


const productApi =  {
    getAll : () => {
        const url = '/shoes';
        return axiosClient.get(url)
    },
    getDetailProduct : (id) => {
        const url = `/shoes/${id}`
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


    getProductMen : (val) => {
        const url = `product?sex=${ val }`
        return axiosClient.get(url)
    },


    getProductWomen : (val) => {
        const url = `product?sex=${ val }`  
        return axiosClient.get(url)
    },


    getSearch : (val) => {
        const url = `/product?q=${ val }`
        return axiosClient.get(url)
    },


    sortProduct : (data) => {
        let order = data.order
        let name = data.name
        const url = `/product?_sort=${ name }&_order=${ order }`
        return axiosClient.get(url)
    },

    filterProduct : (val) => {
        const url = `product?category=${ val }`
        return axiosClient.get(url)
    }
}

export default productApi;