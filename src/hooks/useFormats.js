import { meta } from "@eslint/js";
import { useEffect, useState } from "react";

const useFormats = () => {
    const [formats, setFormats] = useState([]);

    useEffect(() => {
        const fetchFormats = async () => {
            try {
                const resource = "formats";
                const url = `${import.meta.env.VITE_API_URL}/${resource}`;
                const res = await fetch(url, {
                    method: "GET"
                })
                if (!res.ok)
                    throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                console.log(data);
                setFormats(data.result);
            } catch (err) {
                console.error(err);
                throw err;
            }
        };

        fetchFormats();
    }, []);

    return formats;
};

export default useFormats;