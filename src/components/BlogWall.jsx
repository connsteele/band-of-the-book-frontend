import { useEffect, useState } from "react";
import style from "../styles/BlogWall.module.css"
import getPosts from "../modules/getPosts";
import Post from "./Post";

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
                    <Post post={post} />
                ))}
            </ul>
        </div>
    );
};

export default BlogWall;