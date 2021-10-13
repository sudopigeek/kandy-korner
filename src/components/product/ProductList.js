import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../modules/APIManager';
import { ProductCard } from './ProductCard';
import { FetchErrorCard } from '../ErrorCards/FetchErrorCard';

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
            <h2>Products:</h2>
            <div className="products">
                {/* check whether products is null and show the subsequent cards */}
                {products == null ? <FetchErrorCard message={"Sorry, we couldn't get our products. Maybe check your internet connection?"} /> : products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}