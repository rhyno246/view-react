import { Col, Row } from 'antd';
import { db } from '../../firebase/firebase';
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { setWishlist } from '../../Slice/authSlice';
function WishList() {
    const { currentUser } = useAuth()
    const email = currentUser && currentUser.email
    const dispatch = useDispatch()
    const wishlist = useSelector(state => state.auth.wishList)
    useEffect(() => {
        db.collection(email).get().then(data => {
            data.forEach(user => {
                const userdata = user.data()
                dispatch(setWishlist(userdata))
            })
        })
    } , [email , dispatch])
    return (
        <div className="wish-list">
            { wishlist ? <Row gutter={ 24 }>
                { wishlist.map((item , index) => (
                    <Col className="gutter-row" xs={ 24 } sm={ 12 } xl={8} key={ index } style={{ marginBottom : "25px" }}>
                        <ProductItem 
                            id={ item.id } 
                            title ={ item.title }
                            price ={ item.price }
                            image={ item.image }
                            size = { item.size }
                            quantity = { item.quantity }
                            sale = { item.sale }
                            isProduct = { item.isProduct }
                        />
                    </Col>
                )) }
                
            </Row> : null }
        </div>
    )
}
export default WishList

