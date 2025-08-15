import { useState } from "react";
import PostInput from "../components/PostInput";
import PostTextArea from "./PostTextArea";
import style from "../styles/PostForm.module.css"

const PostForm = ({ children }) => {
    const [post, setPost] = useState({

    });

    const handleChange = (e) => {
        setPost(prevPost => ({
            ...prevPost,
            [e.target.name]: e.target.value,
        }));
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
            name: "rating",
            placeholder: "0.00",
            min: 0,
            max: 5,
            step: 0.25,
            label: true,
            required: true
        },
    ];

    return (
        <form action="" method="post">
            <ul className={style["fields"]}>
                {fields
                    .map((field) => (
                        <li>
                            <PostInput
                                key={field.name}
                                {...field}
                                value={post[field.name]}
                                handler={handleChange}
                            />
                        </li>
                    ))}

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
            <button>Preview Post</button>
        </form>
    )

};


export default PostForm;