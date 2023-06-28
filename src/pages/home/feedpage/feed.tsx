import React from "react";
import classes from "./feed.module.css";
import Post from "../../ux/post";
import avatar from "../../../images/profile.png";
import photos from "../../../images/imageicon.png";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

type PostValues = {
  post: string;
  image: string;
  userId: number;
};



type Id = {
    id: string
  };

export default function Feed() {


  const { handleSubmit, register } = useForm<PostValues>();




  const PostMutation = useMutation<Id, Error, PostValues>((variables) =>
    fetch("http://127.0.0.1:4000/post/addpost", {
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
        throw new Error("post failed", error);
      })
  );




  const onSubmitPost = async (data: PostValues) => {
    try {
        const id = await PostMutation.mutateAsync({
            post: data.post,
            image: data.image,
            userId: 1,
        })
        console.log(id.id)

    } catch (error) {
        console.error("post failed after", error)
    }
  };



  return (
    <div className={classes.container}>
      <form className={classes.addpost} onSubmit={handleSubmit(onSubmitPost)}>
        <div className={classes.sub_container}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <input {...register('post')} 
            type="text"
            className={classes.input}
            placeholder="What's on your mind, Guest?"
          />
        </div>

        <div className={classes.sep}></div>

        <div className={classes.inputimage}>
          <img className={classes.imageicon} src={photos} alt="photos" />
          <input {...register('image')}
            type="file"
            className={classes.button}
            placeholder="Add photo"
            accept="image/png, image/jpeg"
          />
        </div>

        <button className={classes.post}>Post</button>
      </form>

      <Post />
      <Post />
      <Post />
    </div>
  );
}
