import React from "react";
import Contact from "./contact";
import avatar from "../../images/avatar.png"
import friends from "../../images/amis.png"
import groups from "../../images/groups.png"
import marketplace from "../../images/marketplace.png"
import arrow from "../../images/arrow.png"



export default function SideBar () {
    return (<div style={{width: 200}}>
    <Contact image={avatar} text="sami hafid" />
    <Contact image={friends} text="Friends" />
    <Contact image={groups} text="Groups" />
    <Contact image={marketplace} text="Marketplace" />
    <Contact image={arrow} text="See More" />
    
    </div>)
}