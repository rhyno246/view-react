import React from 'react'
import banner from "../../img_local/banner5.jpg"
import './index.scss'
function Shoeslace(props) {
    return (
        <div className="shoes-lace"> 
            <div className="container">
                <img src={ banner }  alt="" className="img-res"/>
            </div>
        </div>
    )
}

export default Shoeslace

