import React from 'react'
import Women from "../../img_local/women.jpg"
import Men from "../../img_local/men.jpg"
import Sale from "../../img_local/sale.jpg"
import './index.scss'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom'

function ShoesSex() {
    return (
        <div className="support">
            <div className="container">
                <Row gutter={ 24 }>
                    <Col className="gutter-row" xs={ 24 } sm={ 8 } xl={8}>
                        <Link to="/women">
                            <div className="icon-flex"> 
                                <img src={ Women } alt="" className="img-res"/>
                                <span className="overlay"></span>
                                <span className="sex">Women</span>
                            </div>
                        </Link>
                    </Col>
                    <Col className="gutter-row" xs={ 24 } sm={ 8 } xl={8}>
                        <div className="icon-flex" style={{ marginBottom : "20px" }}> 
                            <img src={ Sale } alt="" className="img-res"/>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={ 24 } sm={ 8 } xl={8}>
                        <Link to="/men">
                            <div className="icon-flex"> 
                                <img src={ Men } alt="" className="img-res"/>
                                <span className="overlay"></span>
                                <span className="sex sex1">Men</span>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default ShoesSex

