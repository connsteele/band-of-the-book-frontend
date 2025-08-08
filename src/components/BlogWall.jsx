import { useEffect, useState } from "react";
import style from "../styles/BlogWall.module.css"
import usePosts from "./usePosts";
import Post from "./Post";
import PostInfo from "./PostInfo.Jsx";

const index = "/posts/index.json";

const BlogWall = () => {
    const { posts, error, loading } = usePosts(index);

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error!</p>

    return (
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