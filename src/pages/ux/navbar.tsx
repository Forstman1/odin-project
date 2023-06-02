import React, { useState } from "react";
import classes from "./navbar.module.css"
import avatar from "../../images/avatar5.jpeg"
import logo from "../../images/logo3.png"
import avatar2 from "../../images/avatar2.png"
import exit from "../../images/exit.png"
import { Link } from "react-router-dom";



function NavBar() {

    const [showAvatarInfo, setShowAvatarInfo] = useState(false)

    const handleAvatarClick = () => {
        setShowAvatarInfo(!showAvatarInfo);
      };

    return <div className={classes.container}>
        <div>
        <div className={classes.avatar}>
            <Link to={"/"}><img className={classes.avatarimage} src={logo} alt="logo" /></Link>
            <input className={classes.input} type="text" placeholder="Search" />
        </div>
        </div>
        <div className={classes.avatar} onClick={handleAvatarClick}>
            <img className={classes.avatarimage} src={avatar} alt="avatar" />
        </div>
        {showAvatarInfo && (
        <div className={classes.avatar_info_container}>
          <div className={classes.card}>
            <Link className={classes.holder} to={"profile"}><img className={classes.icon} src={avatar2} alt="avatar" /><div>My profile</div></Link>
            <div className={classes.sep}></div>
            <Link className={classes.holder} to={"login"}><img className={classes.icon} src={exit} alt="avatar" /><div>Logout</div></Link>
          </div>
        </div>
      )}

    </div>
}


export default NavBar;

