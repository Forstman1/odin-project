import React, { } from 'react'
import classes from "./register.module.css"
import { Link } from "react-router-dom";
import logo from "../../images/lgo.png"
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';


type FormValues = {
    firstname: string
    lastname: string
    email: string
    password: string
}

type Token = {
  access_token: string
};

export default function Register() {


  const { handleSubmit,  register } = useForm<FormValues>();

  const loginMutation = useMutation<Token, Error, FormValues>((variables) =>


    fetch("http://127.0.0.1:4000/auth/signup", {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error("signup failed", error);
      })
  );

    function logintestuser() {

    }

    const enterData = async (data: FormValues) => {
        try {
            const result = await loginMutation.mutateAsync({
              email: data.email,
              password: data.password,
              firstname: data.firstname,
              lastname: data.lastname,
            });

            if (result.access_token)
            {
              console.log(result.access_token, "ana hna", data);
              localStorage.setItem("token", result.access_token);
              window.location.href = "/"
            }
            
            
      
          } catch (error) {
            console.log(error);
          }
    }


    return (<div className={classes.bigcontainer}>


        <div className={classes.title}>


            <div className={classes.logocontainer}>
                <img className={classes.image} src={logo} alt='logo' />
                <h1 className={classes.logo}>SOHUBE</h1>
            </div>
            <h1 className={classes.description}>Connect with friends and the world around you on SOHUBE.</h1>

        </div>



        <div className={classes.container}>
            <form className={classes.sub_container} onSubmit={handleSubmit(enterData)}>
                <input {...register("firstname")} required type='text' className={classes.input} placeholder='First name' />
                <input {...register("lastname")} required type='text' className={classes.input} placeholder='Last name' />
                <input {...register("email")}  required type='email' className={classes.input} placeholder="Email or phone number" />
                <input {...register("password")} required type='password' className={classes.input} placeholder='Password' />
                <button className={classes.button}  >Sign Up</button>
                <p className={classes.text}>Forgot password?</p>
            </form>


            <div className={classes.seperator}></div>


            <button className={classes.sub_button}>Sign up with Google</button>
            <button className={classes.sub_button}><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Log in with your account</Link></button>
            <button onClick={logintestuser} className={classes.sub_button}>Log in with test user</button>

        </div>
    </div>)
}