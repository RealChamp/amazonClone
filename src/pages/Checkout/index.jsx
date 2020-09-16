import React from 'react'
import Subtotal from '../../components/Subtotal';
import CheckoutProduct from '../../components/CheckoutProduct'
import classes from './Checkout.module.css'
import { useStateValue } from '../../State/StateProvider';

function Checkout() {
  const [{basket}] = useStateValue()
    return (
      <div className={classes.checkout}>
        <div className={classes.list}>
          <h2 className={classes.title}>Your Shpping Basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className={classes.payment}><Subtotal/></div>
      </div>
    );
}
export default Checkout

