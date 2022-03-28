import React, { useState } from 'react'
import cartIcon from '../../assets/icons/icon-cart.svg'

const ProductCard = (props) => {

    const [itemCount, setItemCount] = useState(0)

    function AddItem() {
        setItemCount(itemCount + 1)
    }

    function RemoveItem() {
        setItemCount(itemCount <= 0 ? 0 :  itemCount - 1)
    }

    return (
        <div className='product'>
            <div className='product_images'>
                <img src={props.images[0]} alt='shoe' />
            </div>

            <div className='product_info'>
                <h4>{props.company}</h4>
                <h1>{props.title}</h1>
                <p>{props.description}</p>

                <div className='product_cost'>
                    <div>
                        <span className='newPrice'>${props.price.newPrice}.00</span>
                        <span className='discount'>{props.price.discount}%</span>
                    </div>
                    <span className='original'>${props.price.original}.00</span>
                </div>

                <div className='product_quantity'>
                    <button className='quantity_neg' onClick={RemoveItem}>-</button>
                    <span className='quantity_counter'>{itemCount}</span>
                    <button className='quantity_plus' onClick={AddItem}>+</button>
                </div>

                <div>
                    <button className='update_cart'>
                        <img src={cartIcon} alt='cart icon' />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard