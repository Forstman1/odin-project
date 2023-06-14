import React from "react";
import classes from "./profile.module.css"
import avatar from "../../images/profile.png"
import NavBar from "../ux/navbar";
import SideBar from "../ux/sidebar";



const Profile = () => {
    return (
        <div>
            <NavBar />
            <div className={classes.container}>
                <SideBar />
                <div className={classes.sub_container}>
                    <div className={classes.profile}>
                        <div className={classes.header}>
                            <div className="flex justify-around h-full flex-col">
                                <h1 className="text-[#1A67B1] text-4xl ">My Account</h1>
                                <div className="flex flex-col h-1/3 justify-around">
                                    <div className="text-2xl font-[100]	">Sami hafid</div>
                                    <div className="text-xs text-blue-600 cursor-pointer ">change picture</div>
                                </div>
                            </div>
                            <div className={classes.imagebox}><img className={classes.avatar} src={avatar} alt="avatar" /></div>
                        </div>
                        <div className={classes.content}>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col justify-between">
                                    <div className={classes.title}>Username</div>
                                    <div className={classes.text}>Sami hafid</div>
                                </div>
                                <button className={classes.buttonedit}>EDIT</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col justify-between">
                                    <div className={classes.title}>Email</div>
                                    <div className={classes.text}>Sami.hafid.hs@gmail.com</div>
                                </div>
                                <button className={classes.buttonedit}>EDIT</button>
                            </div>
                            <div className="flex justify-between items-center ">
                                <div className="flex flex-col justify-between">
                                    <div className={classes.title}>Password</div>
                                    <div className={classes.text}>********</div>
                                </div>
                                <button className={classes.buttonedit}>EDIT</button>
                            </div>


                        </div>
                        <div className={classes.buttonbox}>
                            <button className={classes.button}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;
