import { useState } from "react";
import queryString from "query-string";
import useFormats from "../hooks/useFormats";
import useGenres from "../hooks/useGenres";
import PostInput from "../components/PostInput";
import PostTextArea from "./PostTextArea";
import style from "../styles/PostForm.module.css"

const PostForm = ({ children }) => {
    const [post, setPost] = useState({
        genres: [],
        formats: [],
    });

    const apiFormats = useFormats();
    const apiGenres = useGenres();

    const handleChange = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            [e.target.name]: e.target.value,
        }));
    };

    const handleGenres = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            genres: [...e],
        }));
    };

    const handleFormats = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            formats: [...e],
        }));
    };

    const searchBook = async (e) => {
        // Build a search request from the post state
        const resouce = "/books/search"
        const base = import.meta.env.VITE_API_URL + resouce;
        const url = queryString.stringifyUrl({
            url: base,
            query: {
                title: post.book,
                author: post.author,
            },
            skipNull: true, 
            skipEmptyString: true,
        });

        const res = await fetch(url, {
            method: "GET",
        })
        if (!res.ok){
            console.error(`Error, search for "${post.book}" by "${post.author} resulted in ${res.status}"`);
            return;
        }
        const data = await res.json();
        console.log(data);
        // use this to fetch the actual books data for form filling
        return data.result;
    };


    const fields = [
        {
            type: "text",
            name: "book",
            placeholder: "Book Title",
            label: true,
            required: true
        },
        {
            type: "text",
            name: "author",
            placeholder: "First Last",
            label: true,
            required: false
        },
        {
            type: "text",
            name: "cover",
            placeholder: "Book Cover URL",
            label: true,
            required: true
        },
        {
            type: "text",
            name: "genres",
            placeholder: "Comma seperated genres",
            label: true,
            required: true,
            select: "multi",
            options: apiGenres,
            handler: handleGenres
        },
        {
            type: "text",
            name: "formats",
            placeholder: "Comma seperated reading format",
            label: true,
            required: true,
            select: "multi",
            options: apiFormats,
            handler: handleFormats
        },
        {
            type: "text",
            name: "series",
            placeholder: "Series",
            label: true,
            required: false
        },
        {
            type: "number",
            name: "entry",
            placeholder: "1",
            label: true,
        },
        {
            type: "number",
            name: "score",
            placeholder: "0.00",
            min: 0,
            max: 5,
            step: 0.25,
            label: true,
            required: true
        },
    ];

    // Add user id to this as parameter
    const userId = "/cda25eb7-992a-46b2-9427-c9be590da772"
    const url = import.meta.env.VITE_API_URL + "/users" + userId + "/posts";
    const formMethod = "POST";
    return (

        <form action={url} method={formMethod}>
            <ul className={style["fields"]}>
                {fields.map((field) => (
                    <li>
                        <PostInput
                            key={field.name}
                            {...field}
                            value={post[field.name]}
                            handler={field.handler || handleChange}
                        />
                    </li>
                ))}

                <li>
                    {/* Search the backend for existing entry, otherwise use book apis */}
                    <button type="button" onClick={searchBook}>Search Book</button>
                </li>

                <li>
                    <PostTextArea
                        name="content"
                        id="content"
                        value={post["content"]}
                        onChange={handleChange}
                        required
                    />
                </li>
            </ul>
            <button type="submit">Submit</button>
            {/* <button>Preview Post</button> */}
        </form>
    )

};


export default PostForm;