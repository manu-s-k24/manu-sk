import React from 'react';
import './product.css';
import mobile from './mobile.jpeg';

function Product(){
    return (
        <div className="Container">
        <h1>CSS Positioning Task</h1>

        <div classname="card">
        <img src={mobile} alt="Product" />
        <h3> Product Name</h3>
        <p className="price">$1000</p>
        </div>
        </div>
    );
}

    export default Product;
