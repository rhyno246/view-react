import React from 'react'
import ProductItem from '../ProductItem'
import Title from '../Title'
import ArrowSlide from '../../components/ArrowSlide';
import Slider from 'react-slick';
import './index.scss'
function SaleProduct(props) {
    const { allproduct } = props
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow : <ArrowSlide to="prev" />,
        nextArrow : <ArrowSlide to="next" />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <div className="sale-product">
            <div className="container">
                    <Title title="Extra sale"/>
                    <Slider { ...settings }>
                        { allproduct.map((item) => {
                            if(item.sale){
                                return <ProductItem
                                    key={ item.id }
                                    id={ item.id } 
                                    title ={ item.title }
                                    price ={ item.price }
                                    image={ item.image }
                                    size = { item.size || null }
                                    quantity = { item.quantity }
                                    sale = { item.sale }
                                    status = { item.status }
                                />
                            } 
                            return false
                        }) }
                    </Slider>
            </div>
        </div>
    )
}
export default SaleProduct
