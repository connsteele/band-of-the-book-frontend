import { useEffect, useState } from "react";

const requiredAtrib = ["type", "book", "author", "blogger", "date", "content"];

const usePosts = (index) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 10000)); // For testing load
                // throw new Error("Error Test"); // For testing error
                const indexRes = await fetch(index);
                const postFiles = await indexRes.json();

                const postsData = await Promise.all(
                    postFiles.map(async (filename) => {
                        const res = await fetch(`/posts/${filename}`);
                        const post = await res.json();

                        // Validate post attributes
                        for (let item of requiredAtrib) {
                            if (!post[item])
                                throw new Error(`Required post attribute "${item}" is missing!`);
                        }

                        return post;
                    })
                );

                setPosts(postsData);

            } catch (e) {
                console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, error, loading };
};

export default usePosts;