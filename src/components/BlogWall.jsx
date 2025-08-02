import { useEffect, useState } from "react";
import style from "../styles/BlogWall.module.css"
import getPosts from "../modules/getPosts";

const BlogWall = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getPosts();
            setPosts([...posts].concat(data));
        })();

    }, []);

    return(
        <div className={style["blog-wall"]}>
            <ul>
                {posts.map((post) => (
                    <li>
                        <h1>{post.title}</h1>
                        {post.coverImg ? <img src={post.coverImg} alt={post.book + " book cover"} /> : null}
                        <p>Book: {post.book}</p> 
                        { post.series ? <p>Series: {post.series}</p> : null}
                        <p>Author: {post.book}</p>
                        { post.rating ? <p>Rating: {post.rating} / 5.00</p> : null}
                        <p>Reviewer: {post.poster}</p>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogWall;