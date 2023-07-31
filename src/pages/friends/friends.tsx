import React, { useContext, useEffect, useState } from 'react'
import classes from "./friends.module.css"
import NavBar from '../ux/navbar';
import SideBar from '../ux/sidebar';
import AcceptCard from './acceptcard';
// import Card from './card';
import Friendcard from "./friendcard"
import MyContext from '../../auth/MyContext';


export default function Friends() {

    let Data = useContext(MyContext)
    const [allfriends, setAllfriends] = useState([])

    const id = Data.sub
    useEffect(() => {
        async function fetchusers() {
            const api = await fetch("http://127.0.0.1:4000/friend/getfriends/" + id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
            const response = await api.json()
            setAllfriends(response.info)

        }
        
        fetchusers()
    }, [])


        
    return (<div>
        <NavBar />
        <div className={classes.container}>
            <SideBar />
            <div className={classes.sub_container}>
                <div className='w-full mt-10 text-2xl font-black ml-9 h-14'>
                    Your Friends
                </div>
                <div className={classes.cards}>
                    {allfriends.map((data) => {
                        return <Friendcard data={data}/>
                    })
                    }
                </div>
            </div>
        </div>
    </div>)
}