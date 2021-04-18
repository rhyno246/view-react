import { Card, Col, Radio, Row , Button , Modal , Select  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img_local/icon-payment-method-cod.svg';
import { useAuth } from "../../contexts/AuthContext";
import './index.scss'
import NotFound from '../NotFound';
import { getAllCity, removeAllCart } from '../../Slice/cartSlice';
import { useHistory } from 'react-router-dom';

function CheckOut() {
    const { Option } = Select;
    const checkoutList = useSelector(state => state.cart.checkout)
    const totalCart = useSelector(state => state.cart.total)
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = useAuth()
    const [ plain , setPlain ] = useState(10)
    const [modal, setModal] = useState(false)
    const plainOptions = [
        { label : 'Standard delivery ( 2 days )', value : 10 },
        { label : 'Delivered in 2 hour' , value : 30 }
    ]; 
    const phoneNumber = currentUser && currentUser.photoURL
    const email = currentUser && currentUser.email
    const name = currentUser && currentUser.displayName
    const totalAmout = totalCart + plain
    const shipper = Math.floor((Math.random() * 100) + 1)

    useEffect(() => {
        dispatch(getAllCity())
    } , [dispatch])

    const hanleDelivery = (e) => {
        setPlain(e.target.value)
    }

    const handleShowModal = () => {
        setModal(true)
    }
    const handleHideModal = () => {
        dispatch(removeAllCart())
        history.push('/')
        setModal(false)
    }
    const handleChangeSelect = (val) => {
        console.log(val);
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
                                        
                                        <div className="box-checkout">
                                            <img src={ item.image[0] } alt= { item.title }/>
                                            <div className="txt">
                                                <p className="title-prod" style={{ marginBottom : "0px" }}>{ item.title }</p>
                                                <p className="title-prod" style={{ marginBottom : "0px" }}><strong>quantity : </strong>X{ item.quantity }</p>
                                                <p className="title-prod" style={{ marginBottom : "0px" }}><strong>Price : </strong>{ parseFloat(item.price).toFixed(2) }$</p>
                                                { item.sizeChose  ? <p className="title-prod" style={{ marginBottom : "0px" }}><strong>size</strong> { item.sizeChose } </p> : null }
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
                                <Select
                                    showSearch
                                    style={{ width: "100%" , margin: "10px 0" }}
                                    placeholder="Choose your city"
                                    onChange={ handleChangeSelect }
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </ul>
                            <h2 className="heading">Order</h2>
                            <ul className="information">
                                <li><strong>Price : </strong>{ totalCart }$</li>
                                <li><strong>Ship : </strong>{ plain }$</li>
                            </ul>
                            <p><strong>Total Amout : </strong><span style={{ color : "red" , fontWeight : "bold" }}>{ totalAmout }$</span></p>
                        </Card>
                        
                        <Button type="primary" style={{ marginTop : "15px" , width : "100%" }} onClick={ handleShowModal }>Buy Now</Button>

                    </Col>
                </Row>

                <Modal 
                    title="Successful "
                    visible = { modal }
                    //okText="OK"
                    footer={[ <Button type="primary" key={ 1 } onClick={ handleHideModal }>Continue Shopping ...</Button> ]}
                >
                    <div className="buy-success">
                        <p>Total : { totalAmout }$ </p>
                        <p>
                            You bought success !!! NVS-{ shipper } will delivery in { plain === 10 ? "2 days" : "2 hours" }
                        </p>
                        <p>Please check your phone and email !!!</p>
                    </div>
                </Modal> 

            </div> : <NotFound/> }
            
        </div>
    )
}

export default CheckOut
