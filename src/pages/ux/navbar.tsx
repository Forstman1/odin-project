import React, { useState } from "react";
import classes from "./navbar.module.css"
import avatar from "../../images/profile.png"
import logo from "../../images/lgo.png"
import avatar2 from "../../images/avatar.png"
import exit from "../../images/exit.png"
import { Link } from "react-router-dom";
import arrow from "../../images/arrow2.png"
import search from "../../images/search.png"
import hamburger from "../../images/hamburger.png"



function NavBar() {

  const [showAvatarInfo, setShowAvatarInfo] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false);

  const handleAvatarClick = () => {
    setShowAvatarInfo(!showAvatarInfo);
  };



  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  return <div className={classes.container}>





    <div className={classes.hamburger1} onClick={toggleSidebar}><img style={{ width: '100%' }} src={hamburger} alt="hamburger" /></div>

    <Link to={"/"} className={classes.logo}>
      <img className={classes.avatarimage} src={logo} alt="logo" />
      <div className={classes.title}>SOHUBE</div>
    </Link>


    {showSidebar && (
      <div className={classes.sidebar}>
        <aside className={classes.sidebar2}>
          <div className={classes.sidebar_header}>
            <h3>Menu</h3>
          </div>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/groups">Groups</Link>
            <Link to="/settings">Settings</Link>
          </nav>

        </aside>
        <div className={classes.hamburger2} onClick={toggleSidebar}><img style={{ width: '100%' }} src={hamburger} alt="hamburger" /></div>
      </div>
    )}


    <div className={classes.avatar} >
      <div className={classes.searchbar}>
        <img className={classes.searchicon} src={search} alt="search" />
        <input className={classes.input} type="text" placeholder="Search" />
      </div>

      <div className={classes.info} onClick={handleAvatarClick}>
        <img className={classes.avatarimage} src={avatar} alt="avatar" />
        <div className={classes.text}>sami hafid</div>
        <img className={classes.arrow} src={arrow} alt="arrow" />
      </div>
    </div>











    {showAvatarInfo && (
      <div className={classes.avatar_info_container}>
        <div className={classes.card}>
          <Link className={classes.holder} to={"/settings"}><div className={classes.imagecontainer}><img className={classes.icon} src={avatar2} alt="avatar" /></div><div className={classes.text2}>My profile</div></Link>
          <div className={classes.sep}></div>
          <Link className={classes.holder} to={"/login"}><div className={classes.imagecontainer}><img className={classes.icon} src={exit} alt="avatar" /></div><div className={classes.text2}>Logout</div></Link>
        </div>
      </div>
    )}

  </div>
}


export default NavBar;

