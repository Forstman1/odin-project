import React, { useContext, useEffect, useState } from "react";
import NavBar from "../ux/navbar";
import SideBar from "../ux/sidebar";
import MyContext from "../../auth/MyContext";
import classes from "./findnewfriend.module.css"
import Card from "../friends/card"
import AcceptCard from "../friends/acceptcard";


export default function Findnewfriends () {

    let Data = useContext(MyContext)
    const [allusers, setAllusers]: any = useState([])
    const [allfriends, setAllfriends]:any = useState([])
    const [allusers1, setAllusers1]: any = useState([])

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
        async function fetchfriends() {
            const api = await fetch("http://127.0.0.1:4000/friend/getfriends/" + id,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
            const response = await api.json()
            setAllfriends(response.info)

            // let newusers:any =   allusers.filter((data: any)=> {
            //     for (let i = 0; i != allfriends.length; i++)
            //     {
            //         if (data.id === allfriends[i].userId || data.id === allfriends[i].friendId)
            //             return false
            //     }
            //     return true
            // })
            
            // setAllusers(newusers) 
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
        
        
        async function removefriendsfromusers() {

            let newusers = await allusers.filter((data: any)=> {
                for (let i = 0; i != allfriends.length; i++)
                {
                    if (data.id === allfriends[i].userId || data.id === allfriends[i].friendId)
                        return false
                }
                return true
            })
            
            setAllusers1(newusers) 
        }

        fetchusers()
        fetchfriends()
        fetchrequests()

    }, [])


    useEffect(() => {
        let newusers: any = allusers.filter((data: any) => {
          for (let i = 0; i < allfriends.length; i++) {
            if (data.id === allfriends[i].userId || data.id === allfriends[i].friendId) {
              return false;
            }
          }
          return true;
        });
    
        setAllusers1(newusers);
      }, [allusers, allfriends]);
    


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

                </div>
                <div className='w-full mt-10 text-2xl font-black ml-9 h-14'>
                    People you might know
                </div>
                <div className={classes.cards}>

                    {allusers1.map((data: any) => {
                        return <Card key={data.id} data={data}/>
                    })}
                
                </div>
            </div>
        </div>
    </div>)
}