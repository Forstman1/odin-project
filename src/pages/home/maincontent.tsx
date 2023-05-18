import React from "react";
import Feed from "./feedpage/feed";
import Contacts from "./Contactspage";
import SideBar from "./sidebar";
import classes from "./maincontent.module.css"


export default function MainContent() {
    return (<div className={classes.container}>
        <SideBar />
        <Feed />
        <Contacts />
    </div>);
}
