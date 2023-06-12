import React from "react";
import classes from "./contact.module.css"



export default function Contact (props:any) {
    return (<button className={classes.container}>
 
        <div className={classes.avatar}><img style={{width: '50%'}} src={props.image} alt="avatar" /></div>
        <div className={classes.text}>{props.text}</div>
        
    </button>)
}