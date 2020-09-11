import React from 'react'
import classes from './Home.module.css'
import Slider from './Slider'
import Product from './Product'

function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <Slider/>

                <div className={classes.row}>
                    <Product title='The lean impact' price={25.99} image={'https://m.media-amazon.com/images/I/51HH71w6HdL._AC_UY218_.jpg'} rating={5}/>
                    <Product/>
                </div>

                <div className={classes.row}>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className={classes.row}>
                    <Product/>
                </div>
            </div>
        </div>
    )
}

export default Home
