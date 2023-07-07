import React, { useContext, useEffect, useState } from 'react';
import classes from "./post.module.css"
import avatar from "../../images/profile.png"
import likeimage2 from "../../images/like2.png"
import likeimage from "../../images/like.png"

import commentimage from "../../images/comment.png"
import dots from "../../images/dots.png"
import Comment from './comment';
import arrow from "../../images/arrow2.png"
import { useForm } from 'react-hook-form';
import MyContext from '../../auth/MyContext';
import { useMutation } from '@tanstack/react-query';
import AddComment from '../home/feedpage/addcomment';






const Post = (props: any) => {



    const Data = useContext(MyContext);
    const [Like, setLike] = useState(false)
    const [numberLikes, setnumberLikes] = useState(0)

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")


    const getTime = (dateString: string) => {

        const date = new Date(dateString);

        const now = new Date();

        const timestamp1: number = date.getTime();
        const timestamp2: number = now.getTime();

        const secondsAgo = Math.floor((timestamp2 - timestamp1) / 1000);
        const minutesAgo = Math.floor(secondsAgo / 60);
        const hoursAgo = Math.floor(minutesAgo / 60);
        const daysAgo = Math.floor(hoursAgo / 24);
        const monthsAgo = Math.floor(daysAgo / 30);


        if (monthsAgo > 0) {
          return (`${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`);
        } else if (daysAgo > 0) {
          return (`${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`);
        } else if (hoursAgo > 0) {
          return(`${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`);
        } else if (minutesAgo > 0) {
            return(`${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`);
        } else if (secondsAgo > 0) {
            return(`${secondsAgo} second${secondsAgo > 1 ? "s" : ""} ago`);
        } 
    }

    useEffect(() => {
        async function fetchData() {

        const id: string = props.data.userId

          const response = await fetch('http://127.0.0.1:4000/users/' + id, {
            method: "GET",
          });
          const user = await response.json();
          
          setFirstName(user.info.firstName)
          setLastName(user.info.lastName)
        }
        
        fetchData();
      }, []);



      useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://127.0.0.1:4000/like/likestatus/' + props.data.id + "/" + Data.sub, {
            method: "GET",
          });
          const user = await response.json();
          if (user === true)
            setLike(true)
          else
            setLike(false)
        
        }
        async function fetchAllData() {

          const response = await fetch('http://127.0.0.1:4000/like/all/' + props.data.id,  {
            method: "GET",
          });
          const user = await response.json();
          if (user)
            setnumberLikes(user.length)

        }
        fetchData()
        fetchAllData()
      }, [])



      const LikeMutation = useMutation<any, Error, any>((variables) =>
      fetch("http://127.0.0.1:4000/like/likepost/" + props.data.id, {
        method: "POST",
        body: JSON.stringify(variables),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw new Error("like failed", error);
        })
      );



      const UnlikeMutation = useMutation<any, Error, any>((variables) =>
      fetch("http://127.0.0.1:4000/like/unlikepost/" + props.data.id, {
        method: "DELETE",
        body: JSON.stringify(variables),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw new Error("like failed", error);
        })
      );




    const handelLike = async () => {
      await LikeMutation.mutateAsync({
        userId: Data.sub
      })

      setnumberLikes(numberLikes + 1)
      setLike(true)
    }

    const handelUnLike = async () => {

      await UnlikeMutation.mutateAsync({
        userId: Data.sub
      })

      setnumberLikes(numberLikes - 1)
      setLike(false)
    }




    return (<div className={classes.container}>
        <div className={classes.sub_container}>

        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 30, alignItems: 'center'}}>
            <div className={classes.info}>
                <img className={classes.avatar} src={avatar} alt='avatar' />
                <div className={classes.info2}><div style={{color: '#426383'}}>{FirstName + " " + LastName}</div><div className={classes.date}>{getTime(props.data.updatedAt)}</div></div>
            </div>
            <div className={classes.dots}><img style={{width: '100%', height: '100%'}} src={dots} alt='vector'/></div>
         </div>
        <p className={classes.description}>
            {props.data.description}
        </p>

        {/* <div className={classes.container_image}><img className={classes.image} src='https://res.cloudinary.com/michalosman/image/upload/v1661525388/z5bd9ufsypckfg2rccyl.jpg' alt='test' /></div> */}

        <div className={classes.interactive}>
            <div className={classes.likecomment}>
                {Like &&  <img className="w-5" onClick={handelUnLike} src={likeimage2} alt='like' />}
                {!Like &&  <img className="w-5" onClick={handelLike} src={likeimage} alt='like' />}

                <div>{numberLikes}</div>
            </div>
            <div className={classes.likecomment}>
                <img src={commentimage} alt='comment' />
                <div>12</div>
            </div>
        </div>
            

        <AddComment data={props.data}/>

        </div>

    </div>)
}

export default Post;
