import React, { useContext, useEffect, useState } from "react";
import NavBar from "../ux/navbar";
import SideBar from "../ux/sidebar";
import MyContext from "../../auth/MyContext";
import classes from "./findnewfriend.module.css"
import Card from "../friends/card"
import AcceptCard from "../friends/acceptcard";


export default function Findnewfriends () {

    let Data = useContext(MyContext)
    const [allusers, setAllusers] = useState([])
    const [allrequests, setAllrequests] = useState([])

    const id = Data.sub



    useEffect(() => {
        async function fetchusers() {
            const api = await fetch("http://127.0.0.1:4000/users/allusers/",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
            const response = await api.json()
            setAllusers(response.info)
        }

        async function fetchrequests() {
            const api = await fetch("http://127.0.0.1:4000/friendrequest/getdata/" + id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
            const response = await api.json()
            setAllrequests(response.info)
        }
        fetchusers()
        fetchrequests()

    }, [])




    return (<div>
        <NavBar />
        <div className={classes.container}>
            <SideBar />
            <div className={classes.sub_container}>
                <div className='w-full ml-9 text-2xl font-black h-14 '>
                    Invitations
                </div>
                <div className={classes.cards}>
                    {allrequests.map((data) => {
                        return <AcceptCard data={data}/>
                    })}
                    {/* <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard /> */}

                </div>
                <div className='w-full mt-10 text-2xl font-black ml-9 h-14'>
                    People you might know
                </div>
                <div className={classes.cards}>

                    {allusers.map((data: any) => {
                        return <Card key={data.id} data={data}/>
                    })}
                
                </div>
            </div>
        </div>
    </div>)
}