import React, { useState } from "react";
import NavBar from "../ux/navbar";
import Profile from "./profile";
import classes from "./profile.module.css"
import Post from "../ux/post";


const ProfilePage = () => {
    return <div>
        <NavBar />
        <Profile />
        {/* <div className={classes.maincontent}>
            <div>d</div>
            <div className={classes.post}><Post /></div>
        </div> */}
    </div>
}

export default ProfilePage;