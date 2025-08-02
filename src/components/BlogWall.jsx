import { useState } from "react";
import style from "../styles/BlogWall.module.css"

const data = {};

const BlogWall = () => {
    const [posts, setPosts] = useState(data);

    return(
        <div className={style["blog-wall"]}>
            <ul>
                {}
            </ul>
        </div>
    );
};

export default BlogWall;