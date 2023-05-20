import * as React from 'react';
import classes from "./post.module.css"
import avatar from "../../images/avatar.png"
import likeimage from "../../images/like.png"
import likegris from "../../images/likegris.png"
import comment from "../../images/comment.png"





const Post = () => {



    return (<div className={classes.container}>
        <div className={classes.info}>
            <img className={classes.avatar} src={avatar} alt='avatar' />
            <div><div>sami hafid</div><div>9 months ago</div></div>
        </div>
            <p className={classes.description}>
                Some text
            </p>
        <div><img className={classes.image} src='https://res.cloudinary.com/michalosman/image/upload/v1661525388/z5bd9ufsypckfg2rccyl.jpg' alt='test' /></div>

        <div>

        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' , height: 50}}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: 10, gap: 5}}>
                <img style={{width: 25}} src={likeimage} alt='like' />
                <div>16</div>
            </div>
            <div style={{marginRight: 10}}>2 Comments</div>
        </div>
        
        <div className={classes.sub_container}>
            <div className={classes.likecomment} >
                <button className={classes.button}><img style={{width: 20}} src={likegris} alt='likegris' /> Like</button>
                <button className={classes.button}><img style={{width: 20}} src={comment} alt='comment' />Comment</button>
            </div>
        </div>
    </div>)
}

export default Post;
