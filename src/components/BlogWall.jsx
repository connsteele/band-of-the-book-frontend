import { useEffect, useState } from "react";
import style from "../styles/BlogWall.module.css"
import getPosts from "../modules/getPosts";
import Post from "./Post";
import PostInfo from "./PostInfo.Jsx";

const BlogWall = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const index = "/posts/index.json";
            const data = await getPosts(index);
            setPosts([...posts].concat(data));
        })();

    }, []);

    return(
        <div className={style["blog-wall"]}>
            <ul>
                {posts.map((post) => (
                    <li>
                        <Post post={post} />
                        <PostInfo post={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogWall;