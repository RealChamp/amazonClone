import React from 'react'
import { useStateValue } from '../../State/StateProvider'
import classes from './CheckoutProduct.module.css'

function CheckoutProduct({ id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue()

const removeFromBasket = (e) => {
dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id
})
}

    return (
        <div className={classes.checkoutProduct}>
            <img className={classes.image} src={image} alt="product"/>

            <div className={classes.info}>
                <p className={classes.title}>{title}</p>
                <p className={classes.price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.rating}>
                    {Array(rating)
                    .fill('')
                    .map((item,index) => (
                        <span aria-role='img' aria-label='rating of a product' key={`${item}_${index}`}>⭐</span>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
