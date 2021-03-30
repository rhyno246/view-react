import { Card, Col, Radio, Row } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import icon from '../../img_local/icon-payment-method-cod.svg';
import { useAuth } from "../../contexts/AuthContext";
import './index.scss'
import NotFound from '../NotFound';

function CheckOut() {

    const checkoutList = useSelector(state => state.cart.checkout)
    const totalCart = useSelector(state => state.cart.total)
    const { currentUser } = useAuth()
    const [ plain , setPlain ] = useState(10)
    const plainOptions = [
        { label : 'Standard delivery', value : 10 },
        { label : 'Delivered in 2 hours' , value : 30 }
    ]; 
    const phoneNumber = currentUser && currentUser.photoURL
    const email = currentUser && currentUser.email
    const name = currentUser && currentUser.displayName
    const totalAmout = totalCart + plain
    const hanleDelivery = (e) => {
        setPlain(e.target.value)
    }
    return (
        <div className="check-out">
            { checkoutList.length > 0 ? <div className="container">
                <h1 className="Heading">Check Out</h1>
                <p className="title"><img src={ icon } alt=""/> Cash payment on receipt of goods</p>
                <Row gutter={ 24 }>
                    <Col className="gutter-row" xs={ 24 } sm={ 24 } xl={16} style={{ marginBottom : "10px" }}>
                            <Card>
                                <Radio.Group options={plainOptions} onChange={ hanleDelivery } value={plain} style={{ marginBottom : "10px" }}/>
                                <Row gutter={ 24 }>
                                { checkoutList && checkoutList.map((item,index) => (
                                    <Col className="gutter-row" xs={ 24 } sm={ 24 } xl={12} key={ index }>
                                        
                                        <div className="box-checkout" key={ index }>
                                            <img src={ item.image[0] } alt= { item.title }/>
                                            <div className="txt">
                                                <p className="title-prod" style={{ marginBottom : "0px" }}>{ item.title }</p>
                                                <p className="title-prod" style={{ marginBottom : "0px" }}><strong>quantity : </strong>X{ item.quantity }</p>
                                                <p className="title-prod" style={{ marginBottom : "0px" }}><strong>Price : </strong>{ item.price }$</p>
                                                <p className="title-prod" style={{ marginBottom : "0px" }}><strong>size</strong> { item.sizeChose } </p>
                                            </div>
                                        </div>
                                        
                                    </Col>
                                    )) }
                                </Row>
                            </Card>
                    </Col>
                    <Col className="gutter-row" xs={ 24 } sm={ 24 } xl={8} style={{ marginBottom : "25px" }}>
                        <Card>
                            <h2 className="heading">Information</h2>
                            <ul className="information">
                                <li><strong>Name : </strong>{ name }</li>
                                <li><strong>Phone : </strong>0{ phoneNumber }</li>
                                <li><strong>Email : </strong>{ email }</li>
                            </ul>
                            <h2 className="heading">Order</h2>
                            <ul className="information">
                                <li><strong>Price : </strong>{ totalCart }$</li>
                                <li><strong>Ship : </strong>{ plain }$</li>
                            </ul>
                            <p><strong>Total Amout : </strong><span style={{ color : "red" , fontWeight : "bold" }}>{ totalAmout }$</span></p>
                        </Card>
                    </Col>
                </Row>
            </div> : <NotFound/> }
            
        </div>
    )
}

export default CheckOut
