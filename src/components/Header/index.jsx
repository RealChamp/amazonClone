import React from 'react'
import classes from './Header.module.css'
import {Search, ShoppingBasket} from '@material-ui/icons'

function Header() {
    return (
      <div className={classes.header}>
        <img
          className={classes.logo}
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />

        <div className={classes.search}>
          <input className={classes.input} type="text" />
          <Search className={classes.icon} />
        </div>

        <div className={classes.nav}>
          <div className={classes.option}>
            <span className={classes.lineOne}>Hello Guest</span>
            <span className={classes.lineTwo}>Sign In</span>
          </div>
          <div className={classes.option}>
            <span className={classes.lineOne}>Returns</span>
            <span className={classes.lineTwo}>& Orders</span>
          </div>
          <div className={classes.option}>
            <span className={classes.lineOne}>Your</span>
            <span className={classes.lineTwo}>Prime</span>
          </div>
          <div className={classes.basket}>
              <ShoppingBasket/>
              <span className={`${classes.lineTwo} ${classes.count}`}>0</span>
          </div>
        </div>
      </div>
    );
}

export default Header
