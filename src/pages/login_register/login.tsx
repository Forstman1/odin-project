import React from 'react'
import classes from "./login.module.css"
import { Link } from "react-router-dom";
import logo from "../../images/lgo.png"
import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";




type FormValues = {
  email: string
  password: string
}

type Token = {
  access_token: string
};

export default function Login() {


  const { handleSubmit, formState: { errors }, register } = useForm<FormValues>();



  const loginMutation = useMutation<Token, Error, FormValues>((variables) =>


    fetch("http://127.0.0.1:4000/auth/signin", {
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
        throw new Error("Login failed", error);
      })
  );

  const onSubmit = async (data: FormValues) => {
    try {

      const result = await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });

      console.log(result.access_token, "ana hna", data);
      localStorage.setItem("token", result.access_token);


    } catch (error) {
      console.log(error);
    }
  };






  return (<div className={classes.bigcontainer}>
    <div className={classes.title}>


      <div className={classes.logocontainer}>
        <img className={classes.image} src={logo} alt='logo' />
        <h1 className={classes.logo}>SOHUBE</h1>
      </div>
      <h1 className={classes.description}>Connect with friends and the world around you on SOHUBE.</h1>

    </div>


    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>

      <input {...register("email")} required className={classes.input} type='email' placeholder="Email or phone number" />
      <input {...register("password")} required className={classes.input} type='password' placeholder='Password' />

      <button className={classes.button} >Log In</button>
      <p className={classes.text}>Forgot password?</p>


      <div className={classes.seperator}></div>


      <Link to="/register" style={{ backgroundColor: "#D1DBE8" }} className={classes.sub_button}> Create new account</Link>
      <Link className={classes.sub_button} to={"/"}><div >Log in with test uesr</div></Link>

    </form>
  </div>)
}