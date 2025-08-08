import { useState } from "react";
import style from "../styles/Post.module.css"

const charLimit = 285;

// For blog wall
const Post = ({post}) => {
    const [expand, setExpand] = useState(false);
    const [styleNames, setStyleNames] = useState(`${style.post}`);
    const postTitle = `${post.type[0].toLocaleUpperCase()}${post.type.slice(1)}: ${post.book}`

    return (
        <div className={styleNames}>
            <h1 className={style["post-title"]}>{postTitle}</h1>
            <div className={style["book-info"]}>
                <p>by {post.author}</p>
                {post.series ? <p><em>{post.series}</em></p> : null}
            </div>
            {post.coverImg ? <img src={post.coverImg} alt={post.book + " book cover"} /> : null}

            {(post.content.length > charLimit && !expand) 
                ? <span className={style["post-content"]}>
                    <p >{post.content.slice(0, charLimit) + "..."}</p>
                    <p className={style["read-more"]} onClick={() => 
                        {setExpand(true); setStyleNames(`${style.post} ${style.expand}`);}}>Read More</p>
                </span> 
                : (post.content.length > charLimit && expand) 
                ? <span className={style["post-content"]}><p>{post.content}</p></span> 
                : <p className={style["post-content"]}>{post.content}</p>
            }
        </div>
    );
};

export default Post;