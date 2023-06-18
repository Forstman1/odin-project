import React, { } from 'react'
import classes from "./register.module.css"
import { Link } from "react-router-dom";
import logo from "../../images/lgo.png"

export default function Register() {

    function logintestuser() {

    }
    return (<div className={classes.bigcontainer}>


        <div className={classes.title}>


            <div className={classes.logocontainer}>
                <img className={classes.image} src={logo} alt='logo' />
                <h1 className={classes.logo}>SOHUBE</h1>
            </div>
            <h1 className={classes.description}>Connect with friends and the world around you on SOHUBE.</h1>

        </div>



        <div className={classes.container}>
            <form className={classes.sub_container}>
                <input required type='text' className={classes.input} placeholder='First name' />
                <input required type='text' className={classes.input} placeholder='Last name' />
                <input required type='email' className={classes.input} placeholder="Email or phone number" />
                <input required type='password' className={classes.input} placeholder='Password' />
                <button className={classes.button}  >Sign Up</button>
                <p className={classes.text}>Forgot password?</p>
            </form>


            <div className={classes.seperator}></div>


            <button className={classes.sub_button}>Sign up with Google</button>
            <button className={classes.sub_button}><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Log in with your account</Link></button>
            <button onClick={logintestuser} className={classes.sub_button}>Log in with test user</button>

        </div>
    </div>)
}