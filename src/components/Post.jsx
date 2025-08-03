import style from "../styles/Post.module.css"

const MAX_WORDCOUNT = 250;

// For blog wall
const Post = ({post}) => {
    const postTitle = `${post.type[0].toLocaleUpperCase()}${post.type.slice(1)}: ${post.book}`

    return (
        <li className={style.post}>
            <h1 className={style["post-title"]}>{postTitle}</h1>
            <div className={style["book-info"]}>
                {post.series ? <p><em>{post.series}</em></p> : null}
                <p>By: {post.author}</p>
            </div>
            {post.coverImg ? <img src={post.coverImg} alt={post.book + " book cover"} /> : null}
            <div className={style["post-info"]}>
                <p><b>Blogger:</b> {post.blogger}</p>
                {post.rating ? <p>Rating: {post.rating} / 5.00</p> : null}
            </div>
            {post.content.length > MAX_WORDCOUNT ?
                <span className={style["post-content"]}>
                    <p >{post.content.slice(0, MAX_WORDCOUNT) + "..."}</p>
                </span> :
                 <p className={style["post-content"]}>{post.content}</p>
            }
        </li>
    );
};

export default Post;