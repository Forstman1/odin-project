import React, { useContext, useEffect, useState } from 'react'
import classes from "./acceptcard.module.css"
import humain from "../../images/humain.png"
import { useMutation } from '@tanstack/react-query'
import MyContext from '../../auth/MyContext'


export default function AcceptCard(props: any) {
    let [showcard, setShowcard] = useState(true)
    let [data, setData]:any = useState({})

    const Data = useContext(MyContext)

    useEffect(() => {
        async function fetchData() {

            const id: string = props.data.requesterId
    
              const response = await fetch('http://127.0.0.1:4000/users/' + id, {
                method: "GET",
              });
              const user = await response.json();
              setData(user.info)
            }
            fetchData()
    })

    const approve = useMutation<any, Error, any>((variables) => 
        fetch("http://127.0.0.1:4000/friendrequest/approvefriendrequest", {
            method: "POST",
            body: JSON.stringify(variables),
            headers: {
                "content-type": "application/json",
            }
        }).then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          }).catch((error) => {
            throw new Error("approve process failed", error);
          }))

    const denied = useMutation<any, Error, any>((variables) => 
        fetch("http://127.0.0.1:4000/friendrequest/deletefriendrequest", {
            method: "DELETE",
            body: JSON.stringify(variables),
            headers: {
                "content-type": "application/json",
            }
        }).then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          }).catch((error) => {
            throw new Error("denied process failed", error);
          }))

    const onApprove = async () => {
        const aprove = await approve.mutateAsync({
            id: props.data.id,
            userId: Data.sub,
            friendId: data.id,
        })
        console.log(aprove)
        setShowcard(false)
    }

    const onDenie = async () => {
      const denie = await denied.mutateAsync({
        requester: data.id,
        receiver: Data.sub,
    })
        console.log(props.data)
        console.log(denie)
    }
    if (!showcard) {
        return null; 
      }
      return( <div className={classes.container}>
        <img className={classes.image} src={humain} alt='avatar'/>
        <div className={classes.text}>{data.firstName + " " + data.lastName}</div>
        <div className={classes.buttons}>
            <button className={classes.approve} onClick={onApprove}>Approved</button>
            <button className={classes.denied} onClick={onDenie}>Denied</button>
        </div>
    </div>)
}