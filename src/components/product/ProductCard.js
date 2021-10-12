import React from "react"
import "./Product.css"
//import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    return (
        <section className="product">
            <div className="productImage">
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="productData">
                <h3 className="product__name">{product.productName}</h3>    
                {product.price < 1 ? <h4 className="product__price">{product.price.toString().split('.')[1]}¢</h4> : <h4 className="product__price">${product.price}</h4>}    
                <div className="product__type">Type: {product.productType.productType}</div>
                <div className="product__location">
                    <h5>Location:</h5>
                    <p>{product.location.name}</p>
                    <p>{product.location.address}</p>
                </div>   
            </div>        
        </section>
    );
}