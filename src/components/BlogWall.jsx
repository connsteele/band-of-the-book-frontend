import { useEffect, useState } from "react";
import style from "../styles/BlogWall.module.css"


const BlogWall = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetch("/posts/connor-review-1.json");
                const data = await response.json();
                console.log(data);
                setPosts([...posts, data]);
                
            } catch (e) {
                console.error(e);
            }
        };

        getPosts();
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