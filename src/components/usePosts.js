import { useEffect, useState } from "react";

const requiredAtrib = ["type", "book", "author", "blogger", "date", "content"];

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const base = import.meta.env.VITE_API_URL;
                const params = new URLSearchParams({limit: "10", order: "desc"});
                const url = `${base}?${params.toString()}`;
                const res = await fetch(url, {
                    method: "GET"
                });
                if (!res.ok)
                    throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                console.log(data);

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