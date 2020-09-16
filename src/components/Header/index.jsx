import React from 'react'
import classes from './Header.module.css'
import {Search, ShoppingBasket} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../State/StateProvider';

function Header() {
  const [{basket}, dispatch] = useStateValue()
    return (
      <div className={classes.header}>
        <Link to="/">
          <img
            className={classes.logo}
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>

        <div className={classes.search}>
          <input className={classes.input} type="text" />
          <Search className={classes.icon} />
        </div>

        <div className={classes.nav}>
          <Link to='/login'>
            <div className={classes.option}>
              <span className={classes.lineOne}>Hello Guest</span>
              <span className={classes.lineTwo}>Sign In</span>
            </div>
          </Link>
          <div className={classes.option}>
            <span className={classes.lineOne}>Returns</span>
            <span className={classes.lineTwo}>& Orders</span>
          </div>
          <div className={classes.option}>
            <span className={classes.lineOne}>Your</span>
            <span className={classes.lineTwo}>Prime</span>
          </div>
          <Link to="/checkout">
            <div className={classes.basket}>
              <ShoppingBasket />
              <span className={`${classes.lineTwo} ${classes.count}`}>{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default Header
