import React from 'react'
import './index.scss'
function Title(props) {
    const { title } = props
    return (
        <div className="title-product">
            <div className="container">
                <h2><span>{ title }</span></h2>
            </div>
        </div>
    )
}

export default Title
