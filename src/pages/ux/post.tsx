import * as React from 'react';
import classes from "./post.module.css"
import avatar from "../../images/profile.png"
import likeimage2 from "../../images/like2.png"

import comment from "../../images/comment.png"
import dots from "../../images/dots.png"
// import likeimage from "../../images/like.png"




const Post = () => {



    return (<div className={classes.container}>
        <div className={classes.sub_container}>

        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 30, alignItems: 'center'}}>
            <div className={classes.info}>
                <img className={classes.avatar} src={avatar} alt='avatar' />
                <div className={classes.info2}><div style={{color: '#426383'}}>sami hafid</div><div className={classes.date}>9 months ago</div></div>
            </div>
            <div className={classes.dots}><img style={{width: '100%'}} src={dots} alt='vector'/></div>
         </div>
        <p className={classes.description}>
            Some text chi7aja hotgame :)
        </p>
        <div className={classes.container_image}><img className={classes.image} src='https://res.cloudinary.com/michalosman/image/upload/v1661525388/z5bd9ufsypckfg2rccyl.jpg' alt='test' /></div>

        <div className={classes.interactive}>
            <div className={classes.likecomment}>
                <img src={likeimage2} alt='like' />
                <div>45</div>
            </div>
            <div className={classes.likecomment}>
                <img src={comment} alt='like' />
                <div>12</div>
            </div>
        </div>

        </div>

    </div>)
}

export default Post;
