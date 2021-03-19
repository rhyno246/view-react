import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import ProductItem from '../../components/ProductItem';
const SearchPage = () => {
    const search = useSelector(state => state.product.search)
    return (
        <>
            { search.length <= 0  ? <div className="cannot-find"> Can not find product !!! </div> :  
                <div className="search-page">
                    <div>
                        <div>
                            { search.map(item => (
                                <div key={ item.id }>
                                    <ProductItem 
                                        id={ item.id } 
                                        title ={ item.title }
                                        price ={ item.price }
                                        image={ item.image }
                                    />
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


export default SearchPage