import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import ProductItem from '../../components/ProductItem';
import { Col, Row } from 'antd';
const SearchPage = () => {
    const search = useSelector(state => state.product.search)
    return (
        <>
            { search.length <= 0  ? <div className="cannot-find"> Can not find product !!! </div> :  
                <div className="search-page">
                    <div className="container">
                        <Row gutter={ 24 }>
                            { search.map(item => (
                                <Col className="gutter-row" xs={ 24 } sm={ 12 } xl={6} key={ item.id } style={{ marginBottom : "25px" }}>
                                    <ProductItem 
                                        id={ item.id } 
                                        title ={ item.title }
                                        price ={ item.price }
                                        image={ item.image }
                                        quantity = {item.quantity}
                                    />
                                </Col>
                                )) }
                        </Row>
                    </div>
                </div>
            }
        </>
    )
}


export default SearchPage