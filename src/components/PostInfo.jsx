import style from "../styles/PostInfo.module.css"

const PostInfo = ({ post }) => {
    return (
        <div className={style["post-info"]}>

            <p><b>Blogger:</b> {post.blogger}</p>
            {post.rating ? <p><b>Rating:</b> {post.rating.toFixed(2)} / 5.00</p> : null}
            {!post.genre
                ? null
                : post.genre.length == 1
                    ? <p><b>Genre:</b> {post.genre}</p>
                    : <p><b>Genres:</b> {post.genre.join(", ")}</p>
            }
            {!post.format
                ? null
                : post.format.length == 1
                    ? <p><b>Format:</b> {post.format}</p>
                    : <p><b>Formats:</b> {post.format.join(", ")}</p>
            }


        </div>
    )
};

export default PostInfo;