import React from 'react'
import ProductsData from '../../assets/products/ProductsData'
import ProductCard from './ProductCard'

const Product = () => {
    return (
        <div className='product_container'>
            <ProductCard 
                key = {ProductsData[0].id}
                type = {ProductsData[0].type}
                company = {ProductsData[0].company}
                title = {ProductsData[0].title}
                images = {ProductsData[0].images}
                thumbnail = {ProductsData[0].thumbnail}
                description = {ProductsData[0].description}
                price = {ProductsData[0].price}
            />
        </div>
    )
}

export default Product