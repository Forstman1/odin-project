import React from "react";
import Contact from "./contact";
import classes from "./contactspage.module.css"
import avatar from "../../images/profile.png"


export default function Contacts() {
    return (<div className={classes.container}>
        <div className={classes.sub_container}>

            <p className={classes.text1}>Friends</p>
            <div className={classes.friends}>
                <Contact image={avatar} text="Sami hafid" />
                <Contact image={avatar} text="Faycal hafid" />
                <Contact image={avatar} text="wa7ed khona" />
                <Contact image={avatar} text="wa7ed sayad" />
            </div>
            <p className={classes.text2}>Show more</p>
        </div>

    </div>)
}