import React from 'react'
import { useStateValue } from '../../State/StateProvider'
import classes from './Product.module.css'

function Product({title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className={classes.product}>
            <div className={classes.info}>
                <p>{title}</p>
                <p className={classes.price}>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className={classes.rating}>
                {Array(rating).fill('').map((_,index) => (
                    <span key={index} role='img' aria-label='raiting of a product'>⭐</span>
                ))}
                </div>
            </div>

            <img src={image} alt="lean startup"/>

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
