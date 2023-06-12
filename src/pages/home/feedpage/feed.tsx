import React, {  } from "react";
import classes from "./feed.module.css"
import Post from "../../ux/post";
import avatar from "../../../images/profile.png"
import photos from "../../../images/imageicon.png"


export default function Feed() {

    return(
    <div className={classes.container}>


        <div className={classes.addpost}>
            <div className={classes.sub_container}>
                <img className={classes.avatar} src={avatar} alt="avatar" /> 
                <input className={classes.input} placeholder="What's on your mind, Guest?" />
            </div>

            <div className={classes.sep}></div>



            <button className={classes.button}>
                <img className={classes.imageicon} src={photos} alt="photos" />
                Add photo
            </button>
        </div>


        <Post />
        <Post />
        <Post />
        
    </div>)
}