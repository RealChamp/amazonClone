import React from 'react'
import classes from './Home.module.css'
import Slider from './Slider'

function index() {
    return (
        <div className={classes.home}>
            <div className={classes.container}>
                <Slider/>
            </div>
        </div>
    )
}

export default index
