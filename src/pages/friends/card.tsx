import React, { useContext, useEffect, useState } from 'react'
import classes from "./acceptcard.module.css"
import humain from "../../images/humain.png"
import MyContext from '../../auth/MyContext'
import { useMutation } from '@tanstack/react-query'

type requestValue = {
    requester: string
    receiver: string
    status: string
  }

export default function Card(props: any) {

    const Data = useContext(MyContext)
    const [sent, setSent] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("http://127.0.0.1:4000/friendrequest/getdata/" + Data.sub + "/" + props.data.id)
            const response = await api.json()    
            if (response.status)
                setSent(false)
        }
        fetchData()
    }, [])

    const sendfriendrequest = useMutation<any, Error, requestValue>((variables) => 
        fetch("http://127.0.0.1:4000/friendrequest/newfriendRequest", {
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
            }).catch((error) => {

              throw new Error("Login failed", error);
            })
        )

        const removefromfriends = useMutation<any, Error, requestValue>((variables) => 
        fetch("http://127.0.0.1:4000/friendrequest/deletefriendrequest", {
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
            }).catch((error) => {

              throw new Error("Login failed", error);
            })
        )

    const addtofriend = async () => {
        
        const addfriend = await sendfriendrequest.mutateAsync({
            requester: Data.sub,
            receiver: props.data.id,
            status: "pending",
        })
        if (addfriend.status !== 403)
          setSent(false)  
    }

    const removefriends = async () => {
        
        await removefromfriends.mutateAsync({
            requester: Data.sub,
            receiver: props.data.id,
            status: "remove",
        })
        setSent(true)
    }

    return (<div className={classes.container}>
        <img className={classes.image} src={humain} alt='avatar'/>
        <div className={classes.text}>{props.data.firstName + " " + props.data.lastName}</div>
        <div className={classes.buttons}>
            {sent && <button className={classes.add} onClick={addtofriend}>Add to friends</button>}
            {!sent && <button className={classes.add} onClick={removefriends}>Remove friend request</button>}

            <button className={classes.denied}>Denied</button>
        </div>
    </div>)
}