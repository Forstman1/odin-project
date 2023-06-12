import React from "react";
import profile from "../../images/profile.png"
import classes from "./sidebar.module.css"
import home from "../../images/home.png"
import friends from "../../images/friends.png"
import groups from "../../images/groups.png"
import settings from "../../images/settings.png"



export default function SideBar() {
    return (<div className={classes.container} >
        <div className={classes.sub_container}>
            <div className={classes.info}>
                <img className={classes.profile} src={profile} alt="profile" />
                <div className={classes.username}>Sami hafid</div>
                <div className={classes.location}>Morocco</div>
            </div>
            <div className={classes.sections}>
                <div className={classes.section}>
                    <img className={classes.icon} src={home} alt="Home"/>
                    <div className={classes.text}>Home</div>
                </div>
                <div className={classes.section}>
                    <img className={classes.icon} src={friends} alt="Friends"/>
                    <div className={classes.text}>Friends</div>
                </div>
                <div className={classes.section}>
                    <img className={classes.icon} src={groups} alt="Groups"/>
                    <div className={classes.text}>Groups</div>
                </div>
                <div className={classes.section}>
                    <img className={classes.icon} src={settings} alt="Settings"/>
                    <div className={classes.text}>Settings</div>
                </div>

            </div>
        </div>
    </div>)
}