import React from "react";
import classes from "./contact.module.css"



export default function Contact (props:any) {
    return (<button className={classes.container}>
 
        <div className={classes.avatar}><img style={{width: '100%'}} src={props.image} alt="avatar" /></div>
        <div>{props.text}</div>
        
    </button>)
}