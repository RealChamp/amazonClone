import React from 'react'
import classes from './Home.module.css'
import Slider from './Slider'
import Product from './Product'

function Home() {
    return (
      <div className={classes.home}>
        <div className={classes.container}>
          <Slider />

          <div className={classes.row}>
            <Product
              title="The lean impact"
              price={25.99}
              image={'https://m.media-amazon.com/images/I/51HH71w6HdL._AC_UY218_.jpg'}
              rating={5}
            />
            <Product 
              title='Electric Glass and Steel Kettle - 1.7-Liter'
              price={27.71}
              image={'https://m.media-amazon.com/images/I/812C5q3i5+L._AC_UL320_.jpg'}
              rating={4}
            />
          </div>

          <div className={classes.row}>
            <Product 
              title='Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 16" Deep Pockets - Queen, Dark Grey'
              price={19.99}
              image={'https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg'}
              rating={5}
            />
            <Product 
              title='Down Alternative Bed Pillows for Stomach and Back Sleepers - 2-Pack, Soft'
              price={31.99}
              image={'https://m.media-amazon.com/images/I/81w6nmmunpL._AC_UL320_.jpg'}
              rating={5}
            />
            <Product 
              title='Premium 18-Piece Kitchen Knife Block Set'
              price={68.25}
              image={'https://m.media-amazon.com/images/I/71wgBcgorlL._AC_UL320_.jpg'}
              rating={3}
            />
          </div>

          <div className={classes.row}>
            <Product 
              title='Samsung QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
              price={497.99}
              image={'https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg'}
              rating={5}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
