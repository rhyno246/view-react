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
        const url = `shoes?sex=${ val }`
        return axiosClient.get(url)
    },


    getProductWomen : (val) => {
        const url = `shoes?sex=${ val }`  
        return axiosClient.get(url)
    },


    getSearch : (val) => {
        const url = `/shoes?q=${ val }`
        return axiosClient.get(url)
    },


    sortProduct : (data) => {
        let order = data.order
        let name = data.name
        const url = `/shoes?_sort=${ name }&_order=${ order }`
        return axiosClient.get(url)
    },

    filterProduct : (val) => {
        const url = `shoes?category=${ val }`
        return axiosClient.get(url)
    },


    getShoesPage : (data) => {
        const page = data.page
        const limit = data.limit
        const url = `shoes?_page=${ page }&_limit=${ limit }`
        return axiosClient.get(url)
    },

    loadMoreShoes : (data) => {
        const page = data.page
        const limit = data.limit
        const url = `shoes?_page=${ page }&_limit=${ limit }`
        return axiosClient.get(url)
    }
}

export default productApi;