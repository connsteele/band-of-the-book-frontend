import { useEffect, useState } from "react";
import { LoaderPinwheel } from "lucide-react";
import style from "../styles/BlogWall.module.css"
import usePosts from "./usePosts";
import Post from "./Post";
import PostInfo from "./PostInfo.Jsx";

const index = "/posts/index.json";

const BlogWall = () => {
    const { posts, error, loading } = usePosts(index);

    if (loading) return (
        <div className={style["loading"]}>
            <div className={style.spinner}>
                <LoaderPinwheel size={"70px"} strokeWidth={1.2} color={"#EF4136"} />
            </div>
        </div>
    );

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