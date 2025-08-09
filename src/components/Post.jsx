import { useState } from "react";
import { LoaderPinwheel } from "lucide-react";
import style from "../styles/Post.module.css"
import RatingMeter from "./RatingMeter";

const charLimit = 295;

// For blog wall
const Post = ({ post }) => {
    return (
        <div className={style.post}>
            <div className={`${style.container} ${style["cover-img"]}`}>
                <img src={post.coverImg} alt={`${post.book} Cover Image`} />
            </div>
            <div className={`${style.container} ${style.title}`}>
                <h1>{post.book}</h1>
                {post.series ? <h3><em>{post.series} #{post.entry}</em></h3> : null}
            </div>
            <div className={`${style.container} ${style.info}`}>
                <p><b>Author:</b> {post.author}</p>
                <p><b>Genre:</b> {post.genre.join(", ")}</p>
                <p><b>Format:</b> {post.format.join(", ")}</p>
            </div>
            <div className={`${style.container} ${style.content}`}>
                {post.rating ? <RatingMeter score={post.rating} /> : null}
                <h2>Reviewer: {post.blogger}</h2>
                <hr />
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default Post;