import { useState } from "react";
import style from "../styles/PostTextArea.module.css"

const PostTextArea = (prop) => {
    const [textValue, setTextValue] = useState("");

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const atrib={
        className : style.text,
        name: "",
        id: "",
        onChange: handleChange,
        value: textValue,
        placeholder: "Post Content...",
        ...prop
    };

    return(
        <>
        <textarea {...atrib} ></textarea>
        </>
    )
};

export default PostTextArea;