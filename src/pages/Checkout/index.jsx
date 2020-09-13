import React from 'react'
import Subtotal from '../../components/Subtotal';
import classes from './Checkout.module.css'

function Checkout() {
    return (
      <div className={classes.checkout}>
        <div className={classes.list}>
          <h2 className={classes.title}>Your Shpping Basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
        <div className={classes.payment}><Subtotal/></div>
      </div>
    );
}
export default Checkout

