import React, { useState } from "react";
import classes from "./profile.module.css"
import Post from "../ux/post";
import avatar from "../../images/avatar2.png"
import Friend from "./friend";

const Profile = () => {
    return (
    <div className={classes.container}>
        <div className={classes.containers}></div>


        <div className={classes.sub_container}>


            <div className={classes.couverture}></div>
            <div className={classes.info}>
                <div className={classes.profile}><div className={classes.avatar}><img style={{width: '100%'}} src={avatar} alt="avatar" /></div> <div><div>sami hafid</div><div>0 friends</div></div></div>
                <button className={classes.button}>Edit profile</button>
            </div>
            <div className={classes.feed}>
                <div className={classes.friends}>
                    <div className={classes.friends2}>
                        <div className={classes.text}>
                            <p>Friends</p>
                            <p>0 friends</p>
                        </div>    
                        <div style={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />
                            <Friend />

                        </div>
                    </div>
                </div>
                <div style={{width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div className={classes.post}><Post /></div>
                    <div className={classes.post}><Post /></div>
                    <div className={classes.post}><Post /></div>
                    <div className={classes.post}><Post /></div>
                </div>
            </div>
        </div>
    </div>  )
}

export default Profile;