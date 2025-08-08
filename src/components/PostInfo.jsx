import style from "../styles/PostInfo.module.css"
import RatingMeter from "./RatingMeter";

const PostInfo = ({ post }) => {
    return (
        <div className={style["post-info"]}>
            <ul>
                <li>
                    <b>Blogger:</b> {post.blogger}
                </li>
                <li>
                    {!post.genre
                        ? null
                        : post.genre.length == 1
                            ? <p><b>Genre:</b> {post.genre}</p>
                            : <p><b>Genres:</b> {post.genre.join(", ")}</p>
                    }
                </li>
                <li>
                    {!post.format
                        ? null
                        : post.format.length == 1
                            ? <p><b>Format:</b> {post.format}</p>
                            : <p><b>Formats:</b> {post.format.join(", ")}</p>
                    }
                </li>
                <li>{post.rating ? <RatingMeter score={post.rating}/> : null}</li>
            </ul>
        </div>
    )
};

export default PostInfo;