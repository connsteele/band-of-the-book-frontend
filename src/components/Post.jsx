import style from "../styles/Post.module.css"

const Post = ({post}) => {
    return (
        <li className={style.post}>
            <h1 className={style["post-title"]}>{post.title}</h1>
            {post.coverImg ? <img src={post.coverImg} alt={post.book + " book cover"} /> : null}
            <div className={style["post-info"]}>
                <p><b>Book:</b> {post.book}</p>
                {post.series ? <p><b>Series:</b> {post.series}</p> : null}
                <p><b>Author:</b> {post.book}</p>
                <p><b>Blogger:</b> {post.blogger}</p>
                {post.rating ? <p>Rating: {post.rating} / 5.00</p> : null}
            </div>
            <p className={style["post-content"]}>{post.content}</p>
        </li>
    );
};

export default Post;