import React, {  } from 'react'
import classes from "./login.module.css"

export default function Login() {
    return (<div className={classes.bigcontainer}>
        <div className={classes.title}>
            <h1>1337</h1>
            <h2>Connect with friends and the world around you on 1337.</h2>
        </div>
        <div className={classes.container}>
            <input className={classes.input}/>
            <input className={classes.input}/>
            <button className={classes.button}>Log In</button>
            <p className={classes.text}>Forgot password?</p>
            <div className={classes.seperator}></div>
            <button style={{backgroundColor: "#dd6b20"}} className={classes.sub_button}>Create new account</button>
            <button className={classes.sub_button}>Log in with test uesr</button>

        </div>
    </div>)
}