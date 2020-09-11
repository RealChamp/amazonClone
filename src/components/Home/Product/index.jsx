import React from 'react'
import classes from './Product.module.css'

function Product({title, image, price, rating}) {
    return (
        <div className={classes.product}>
            <div className={classes.info}>
                <p>{title}</p>
                <p className={classes.price}>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className={classes.rating}>
                {Array(rating).fill('').map((_, index) => (
                    <span>⭐</span>
                ))}
                </div>
            </div>

            <img src={image} alt="lean startup"/>

            <button>Add to basket</button>
        </div>
    )
}

export default Product
