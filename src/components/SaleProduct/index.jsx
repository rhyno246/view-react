import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AllPageProduct, getAllOtherBrand, getAllShoelace } from '../../Slice/productSlice'
import Title from '../Title'
import './index.scss'
function SaleProduct() {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AllPageProduct("hihi"))
        dispatch(getAllOtherBrand())
        dispatch(getAllShoelace())
    }, [dispatch])
    return (
        <div className="sale-product">
            <div className="container">
                <Title title="Extra sale"/>
            </div>
        </div>
    )
}

export default SaleProduct
