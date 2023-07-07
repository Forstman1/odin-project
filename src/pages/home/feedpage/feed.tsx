import React, { useContext, useEffect, useState } from "react";
import classes from "./feed.module.css";
import Post from "../../ux/post";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import MyContext from "../../../auth/MyContext";
import avatar from "../../../images/profile.png";
import photos from "../../../images/imageicon.png";




type PostValues = {
  post: string;
  image: string;
  userId: number;
};




export default function Feed() {
  const [Posts, setPosts] = useState<any>([]);
  const { handleSubmit, register } = useForm<PostValues>();

  let Data = useContext(MyContext);

  const PostMutation = useMutation<any, Error, PostValues>((variables) =>
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
      const newpost = await PostMutation.mutateAsync({
        post: data.post,
        image: data.image,
        userId: Data.sub,
      });
      setPosts([...Posts, newpost.info]);
      Posts.sort(
        (a: any, b: any) => b.createdAt.getTime() - a.createdAt.getTime()
      );
    } catch (error) {
      console.error("post failed after", error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const id: string = Data.sub;
      const response = await fetch(
        "http://127.0.0.1:4000/post/getallpost/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let post = await response.json();
      post.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setPosts(post);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <form className={classes.addpost} onSubmit={handleSubmit(onSubmitPost)}>
        <div className={classes.sub_container}>
          <img className={classes.avatar} src={avatar} alt="avatar" />
          <input
            {...register("post")}
            type="text"
            className={classes.input}
            placeholder="What's on your mind, Guest?"
          />
        </div>

        <div className={classes.sep}></div>

        <div className={classes.inputimage}>
          <img className={classes.imageicon} src={photos} alt="photos" />
          <input
            {...register("image")}
            type="file"
            className={classes.button}
            placeholder="Add photo"
            accept="image/png, image/jpeg"
          />
        </div>

        <button className={classes.post}>Post</button>
      </form>


      {Posts.map((data: any) => {
        return <Post key={data.id} data={data} />;
      })}

      
    </div>
  );
}
