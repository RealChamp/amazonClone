import React from 'react'
import classes from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../State/StateProvider'
import { getBasketTotal } from '../../State/reducer'

function Subtotal() {
    const [{basket}] = useStateValue()
    return (
        <div className={classes.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className={classes.gift}>
                            <input type='checkbox'/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
