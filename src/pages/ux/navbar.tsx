import React from "react";
import classes from "./navbar.module.css"
import avatar from "../../images/avatar.png"
import logo from "../../images/1337.jpeg"

function NavBar() {
    return <div className={classes.container}>
        <div>
        <div className={classes.avatar}>
            <img className={classes.avatarimage} src={logo} alt="logo" />
        </div>
        </div>
        <div className={classes.avatar}>
            <img className={classes.avatarimage} src={avatar} alt="avatar" />
        </div>
    </div>
}


export default NavBar;