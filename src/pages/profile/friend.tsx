import React, {  } from "react";
import avatar from "../../images/avatar2.png"
import classes from "./friend.module.css"



const Friend = () => {
    return (
        <div className={classes.container}>
            <div>
                <img style={{width: '100%'}} src={avatar} alt="avatar" />
            </div>
            <div>sami hafid</div>
        </div>
    )
}

export default Friend;