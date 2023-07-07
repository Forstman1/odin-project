import React, { useEffect, useState } from 'react';
import classes from "./comment.module.css"
import avatar from "../../images/profile.png"



export default function Comment(props:any) {

    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState ("")

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


    return (<div className={classes.container}>
        <img className={classes.avatar} src={avatar} alt='avatar'/>
        <div className={classes.comment}>
            <p>{FirstName + " " + LastName}</p>
            <p className={classes.description}>{props.data.comment}</p>

        </div>
    </div>) 
}