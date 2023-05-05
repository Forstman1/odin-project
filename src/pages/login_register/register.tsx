import React, {  } from 'react'
import classes from "./register.module.css"
import { Link } from "react-router-dom";


export default function Register() {
    return (<div className={classes.bigcontainer}>
        <div className={classes.title}>
            <h1 style={{color: "#319795"}}>1337</h1>
            <h2>Connect with friends and the world around you on 1337.</h2>
        </div>
        <form className={classes.container}>
            <input required type='text' className={classes.input} placeholder='First name'/>
            <input required type='text' className={classes.input} placeholder='Last name'/>
            <input required type='email' className={classes.input} placeholder="Email or phone number"/>
            <input required type='password' className={classes.input} placeholder='Password'/>
            <button className={classes.button}  >Sign Up</button>
            <p className={classes.text}>Forgot password?</p>
            <div className={classes.seperator}></div>
            <button style={{backgroundColor: "#dd6b20"}} className={classes.sub_button}><Link to="/login" style={{textDecoration: "none", color: "white"}}>Log in with your account</Link></button>
            <button className={classes.sub_button}>Log in with test uesr</button>

        </form>
    </div>)
}