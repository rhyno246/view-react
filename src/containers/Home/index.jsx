import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import ProductItem from '../../components/ProductItem';
import { getAllProduct } from '../../Slice/productSlice';
import './index.scss';
const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.product.product)
    const isLoading = useSelector(state => state.product.loading)
    const reRenderloading = useSelector(state => state.product.reRenderloading)
    useEffect(() => {
        if(reRenderloading){
            dispatch(getAllProduct())
        }
    },[dispatch , reRenderloading])   


    return (
        <>
            { isLoading ? <Loading/> : null }
            <div className="home">
                { productList.map(item => (
                    <div item xs={12} sm={6} md={3} key={ item.id }>
                        <ProductItem 
                            id={ item.id } 
                            title ={ item.title }
                            price ={ item.price }
                            image={ item.image }
                        />
                    </div>
                )) }
            </div>
        </>
    )
}

export default Home