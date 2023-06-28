import React, { useContext } from "react";
import profile from "../../images/profile.png"
import classes from "./sidebar.module.css"

import homeblue from "../../images/sidebaricon/homeblue.png"
import friendsblue from "../../images/sidebaricon/friendsblue.png"
import groupsblue from "../../images/sidebaricon/groupsblue.png"
import settingsblue from "../../images/sidebaricon/settingsblue.png"

import home from "../../images/sidebaricon/home.png"
import friends from "../../images/sidebaricon/friends.png"
import groups from "../../images/sidebaricon/groups.png"
import settings from "../../images/sidebaricon/settings.png"
import { Link, useLocation } from "react-router-dom";
import MyContext from "../../auth/MyContext";



export default function SideBar() {

    const location = useLocation().pathname;
    const data = useContext(MyContext)



    
    return (<div className={classes.container} >
        <div className={classes.sub_container}>
            <div className={classes.info}>
                <img className={classes.profile} src={profile} alt="profile" />
                <div className={classes.username}>{data.firstname + " " + data.lastname}</div>
                <div className={classes.location}>Morocco</div>
            </div>

            <div className={classes.sections}>

                <div className={classes.section}>
                    <img className={classes.icon} src={location === "/" ? homeblue : home} alt="Home"/>
                    <Link to="/" className={location === "/" ? classes.text2 : classes.text}>Home</Link>
                </div>


                <div className={classes.section}>
                    <img className={classes.icon} src={location === "/friends" ? friendsblue : friends} alt="Friends"/>
                    <Link to="/friends" className={location === "/friends" ? classes.text2 : classes.text}>Friends</Link>
                </div>


                <div className={classes.section}>
                    <img className={classes.icon} src={location === "/groups" ? groupsblue : groups} alt="Groups"/>
                    <Link to="/groups" className={location === "/groups" ? classes.text2 : classes.text}>Groups</Link>
                </div>


                <div className={classes.section}>
                    <img className={classes.icon} src={location === "/settings" ? settingsblue : settings} alt="Settings"/>
                    <Link to="/settings" className={location === "/settings" ? classes.text2 : classes.text}>Settings</Link>
                </div>

            </div>
        </div>
    </div>)
}