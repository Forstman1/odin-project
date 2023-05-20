import React, { useState } from "react";
import classes from "./navbar.module.css"
import avatar from "../../images/avatar.png"
import logo from "../../images/1337.jpeg"
import avatar2 from "../../images/avatar2.png"
import exit from "../../images/exit.png"



function NavBar() {

    const [showAvatarInfo, setShowAvatarInfo] = useState(false)

    const handleAvatarClick = () => {
        setShowAvatarInfo(!showAvatarInfo);
      };

    return <div className={classes.container}>
        <div>
        <div className={classes.avatar}>
            <img className={classes.avatarimage} src={logo} alt="logo" />
            <input className={classes.input} type="text" placeholder="Search" />
        </div>
        </div>
        <div className={classes.avatar} onClick={handleAvatarClick}>
            <img className={classes.avatarimage} src={avatar} alt="avatar" />
        </div>
        {showAvatarInfo && (
        <div className={classes.avatar_info_container}>
          <div className={classes.card}>
            <div className={classes.holder}><img className={classes.icon} src={avatar2} alt="avatar" /><div>My profile</div></div>
            <div className={classes.sep}></div>
            <div className={classes.holder}><img className={classes.icon} src={exit} alt="avatar" /><div>Logout</div></div>
          </div>
        </div>
      )}
    </div>
}


export default NavBar;

