import style from "../styles/PostInfo.module.css"
import RatingMeter from "./RatingMeter";

const PostInfo = ({ post }) => {
    const postTitle = `${post.type[0].toLocaleUpperCase()}${post.type.slice(1)}: ${post.book}`
    
    return (
        <div className={style["post-info"]}>
            <ul>
                <li>
                    <h1 className={style["post-title"]}>{postTitle}</h1>
                </li>
                <li>
                    <b>Reviewer:</b> {post.blogger}
                </li>
                <li>{post.rating ? <RatingMeter score={post.rating} /> : null}</li>
            </ul>
        </div>
    )
};

export default PostInfo;