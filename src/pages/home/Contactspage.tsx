import React from "react";
import Contact from "./contact";
import classes from "./contactspage.module.css"
import avatar from "../../images/avatar5.jpeg"


export default function Contacts () {
    return (<div className={classes.container}>
        <p>Contacts</p>
        <Contact image={avatar} text="sami hafid" />
        <Contact image={avatar} text="yassine hafid" />


    </div>)
}