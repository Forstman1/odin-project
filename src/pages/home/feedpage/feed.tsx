import React, { useState } from "react";
import classes from "./feed.module.css"
import Post from "./post";

export default function Feed() {
    // const [data, setData] = useState([])


    return(
    <div className={classes.container}>
        <div className={classes.addpost}>
        </div>
        <Post />
    </div>)
}