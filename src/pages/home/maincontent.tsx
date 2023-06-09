import React from "react";
import Feed from "./feedpage/feed";
import Contacts from "./Contactspage";
import SideBar from "../ux/sidebar";
import classes from "./maincontent.module.css"


export default function MainContent() {
    return (<div className={classes.container}>
        <SideBar />
        <div className={classes.sub_container}>
            <Feed />
            <Contacts />
        </div>
    </div>);
}
