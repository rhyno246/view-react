import { Col, Empty, Row } from 'antd';
import { db } from '../../firebase/firebase';
import { useAuth } from "../../contexts/AuthContext";
import React, { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem';
function WishList() {
    const { currentUser } = useAuth()
    const [selectedOrgList, setSelectedOrgList] = useState();
    const email = currentUser && currentUser.email
    useEffect(() => {
        const wishlist = db.collection(email).onSnapshot(record => {
            const listData = record.docs.map(item => ({
                id : item.id,
                title : item.data().title,
                image : item.data().image,
                price : item.data().price,
                size : item.data().size,
                quantity : item.data().quantity,
                sale : item.data().sale,
                isProduct : item.data().isProduct
            }))
            setSelectedOrgList(listData)
        })
        return() => wishlist();
    } , [email])
    return (
        <div className="wish-list">
            { selectedOrgList && selectedOrgList.length > 0 ? <Row gutter={ 24 }>
                { selectedOrgList.map((item , index) => (
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
                
            </Row> : <Empty/> }
        </div>
    )
}
export default WishList

