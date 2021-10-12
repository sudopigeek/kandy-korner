import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../modules/APIManager';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    // get products from api:
    const getProducts = () => {
        return getAllProducts().then(productsFromAPI => {
            setProducts(productsFromAPI)
        })
    }
    // populate products with data from api:
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className="productContainer">
            <h1>Products:</h1>
            <div className="products">
                {products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}