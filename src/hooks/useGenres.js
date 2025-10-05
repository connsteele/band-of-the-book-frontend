import { meta } from "@eslint/js";
import { useEffect, useState } from "react";

const useGenres = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const resource = "genres";
                const url = `${import.meta.env.VITE_API_URL}/${resource}`;
                const res = await fetch(url, {
                    method: "GET"
                })
                if (!res.ok)
                    throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                console.log(data);
                setGenres(data.result);
            } catch (err) {
                console.error(err);
                throw err;
            }
        };

        fetchGenres();
    }, []);

    return genres;
};

export default useGenres;