import { Card, Col, Radio, Row , Button , Modal  } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import icon from '../../img_local/icon-payment-method-cod.svg';
import { useAuth } from "../../contexts/AuthContext";
import './index.scss'
import NotFound from '../NotFound';
import { getCountry, removeAllCart } from '../../Slice/cartSlice';
import { useHistory } from 'react-router-dom';
import { Formik, Form , FastField } from 'formik';
import * as Yup from 'yup';
import SelectField from '../../components/InputField/SelectField';

function CheckOut() {
    const checkoutList = useSelector(state => state.cart.checkout)
    const totalCart = useSelector(state => state.cart.total)
    const address = useSelector(state => state.cart.address)
    const setAddress = useSelector(state => state.cart.setAddress)
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser } = useAuth()
    const [ plain , setPlain ] = useState(10)
    const [modal, setModal] = useState(false)
    const plainOptions = [
        { label : 'Standard delivery ( 2 days )', value : 10 },
        { label : 'Delivered in 2 hours' , value : 30 }
    ]; 
    const phoneNumber = currentUser && currentUser.photoURL
    const email = currentUser && currentUser.email
    const name = currentUser && currentUser.displayName
    const totalAmout = totalCart + plain
    const shipper = Math.floor((Math.random() * 100) + 1)
    const hanleDelivery = (e) => {
        setPlain(e.target.value)
    }

    const handleSubmitCheckout = () => {
        setModal(true)
    }
    const handleHideModal = () => {
        dispatch(removeAllCart())
        history.push('/')
        setModal(false)
    }
    
    useEffect(() => {
        dispatch(getCountry())
    } , [dispatch])


    const initialValues ={ 
        select : '',
    }
    const CheckoutSchema = Yup.object().shape({
        select: Yup.string().required('Address is required!'),
    });

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
                                <Formik
                                    initialValues = { initialValues }
                                    validationSchema = { CheckoutSchema }
                                    onSubmit ={ (values) => handleSubmitCheckout(values) }
                                >
                                    <Form>
                                        <FastField 
                                            name="select" 
                                            component = { SelectField } 
                                            placeholder="Choose your city"
                                            options={ address }
                                        />
                                        <Button type="primary" style={{ marginTop : "15px" , width : "100%" }} htmlType="submit">Buy Now</Button>
                                    </Form>
                                    
                                </Formik>
                            </ul>
                            <h2 className="heading">Order</h2>
                            <ul className="information">
                                <li><strong>Price : </strong>{ totalCart.toFixed(2) }$</li>
                                <li><strong>Ship : </strong>{ plain }$</li>
                            </ul>
                            <p><strong>Total Amout : </strong><span style={{ color : "red" , fontWeight : "bold" }}>{ totalAmout.toFixed(2) }$</span></p>
                        </Card>
                        
                        

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
                            You bought success !!! <span style={{ color : "red" }}>NVS-{ shipper }</span> will delivery to 
                            <span style={{ color : "red" }}> { setAddress } </span>
                             in { plain === 10 ? "2 days" : "2 hours" }
                        </p>
                        <p>Please check your phone and email !!!</p>
                    </div>
                </Modal> 

            </div> : <NotFound/> }
            
        </div>
    )
}

export default CheckOut
