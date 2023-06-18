import React from 'react'
import classes from "./friends.module.css"
import NavBar from '../ux/navbar';
import SideBar from '../ux/sidebar';
import AcceptCard from './acceptcard';
import Card from './card';


export default function friends() {

    return (<div>
        <NavBar />
        <div className={classes.container}>
            <SideBar />
            <div className={classes.sub_container}>
                <div className='w-full ml-9 text-2xl font-black h-14 '>
                    Invitations
                </div>
                <div className={classes.cards}>
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                    <AcceptCard />
                </div>
                <div className='w-full mt-10 text-2xl font-black ml-9 h-14'>
                    People you might know
                </div>
                <div className={classes.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    </div>)
}