import React from 'react'
import classes from "./acceptcard.module.css"
import humain from "../../images/humain.png"



export default function Card() {
    return (<div className={classes.container}>
        <img className={classes.image} src={humain} alt='avatar'/>
        <div className={classes.text}>Sara Hamdaoui</div>
        <div className={classes.buttons}>
            <button className={classes.add}>Add to friends</button>
            <button className={classes.denied}>Denied</button>
        </div>
    </div>)
}