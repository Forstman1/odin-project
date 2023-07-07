import React, { useContext, useEffect, useState } from "react";
import classes from "./addcomment.module.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import MyContext from "../../../auth/MyContext";
import Comment from "../../ux/comment";
import avatar from "../../../images/profile.png";
import arrow from "../../../images/arrow2.png";



type CommentValues = {
    postId: number;
    comment: string;
    userId: number;
  };


export default function AddComment(props: any) {


    const { handleSubmit, register } = useForm<CommentValues>();
    const [Comments, setComments] = useState<any>([])
    const Data = useContext(MyContext)


    useEffect(() => {
        async function fetchComments() {

            const response = await fetch('http://127.0.0.1:4000/comment/getallcomments/' + props.data.id, {
              method: "GET",
            });
            const comments = await response.json()
            setComments(comments)
        }
        fetchComments()
    }, [])


    const CommentMutate = useMutation<any, Error, CommentValues>((variables) => 
        fetch("http://127.0.0.1:4000/comment/create/", {
            method: "POST",
            body: JSON.stringify(variables),
            headers: {
                "Content-Type": "application/json",
              },
        }).then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            throw new Error("like failed", error);
          })
    );

    const onSubmit = async (data: CommentValues) => {
        data.postId = props.data.id
        data.userId = Data.sub
        if (data.comment === "")
            return 
        const res = await CommentMutate.mutateAsync(data)
        setComments([...Comments, res]);

        console.log(res)
    }


  return (
    <div className={classes.comments} >
      <form className={classes.commentinput} onSubmit={handleSubmit(onSubmit)}>
        <img className={classes.avatar} src={avatar} alt="avatar" />
        <input
            {...register("comment")}
            required
            min="3"
            className={classes.commentinput2}
            placeholder="Write a comment..."
        />
        <button>
          <img className={classes.arrow} src={arrow} alt="arrow" />
        </button>
      </form>
      {Comments.map((data: any) => {
      
        return <Comment key={data.id} data={data} />
      })}

    </div>
  );
}
