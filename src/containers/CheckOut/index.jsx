import { Card, Col, Radio, Row } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import icon from '../../img_local/icon-payment-method-cod.svg';
import { useAuth } from "../../contexts/AuthContext";
import './index.scss'

function CheckOut() {

    const checkoutList = useSelector(state => state.cart.checkout)
    const { currentUser } = useAuth()
    const [ plain , setPlain ] = useState("Standard delivery")
    const plainOptions = ['Standard delivery', 'Delivered in 2 hours']; 

    const hanleDelivery = (e) => {
        setPlain(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="check-out">
            <div className="container">
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
                            asadsasdsasad
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CheckOut
