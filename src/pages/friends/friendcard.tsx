import React, { useContext, useEffect, useState } from 'react'
import classes from "./acceptcard.module.css"
import humain from "../../images/humain.png"
import MyContext from '../../auth/MyContext'
import { useMutation } from '@tanstack/react-query'



export default function Friendcard(props: any) {

    const Data = useContext(MyContext)
    let [data, setData]:any = useState({})

    useEffect(() => {
        async function fetchData() {

            const id: string = props.data.friendId
    
              const response = await fetch('http://127.0.0.1:4000/users/' + id, {
                method: "GET",
              });
              const user = await response.json();
              setData(user.info)
            }
            fetchData()
    })
    


    return (<div className={classes.container}>
        <img className={classes.image} src={humain} alt='avatar'/>
        <div className={classes.text}>{data.firstName + " " + data.lastName}</div>
        <div className={classes.buttons}>
            <button className={classes.add}>see profile</button>

        </div>
    </div>)
}