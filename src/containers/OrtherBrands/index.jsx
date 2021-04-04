import React from 'react';
import banner from "../../img_local/banner4.jpg"
import './index.scss'

const OtherBrands = () => {
    return (
        <>
            <div className="other-brand">
                <div className="container">
                    <img src={ banner } alt="" className="img-res"/>
                </div> 
            </div>
        </>
    );
}

export default OtherBrands;