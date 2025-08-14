import { useState } from "react";
import style from "../styles/PostInput.module.css"

const PostInput = ({ type = "text", label = false, name, value = "", ...prop }) => {
    const [inpValue, setInpValue] = useState(value);
    const id = name;

    const handleChange = (e) => {
        setInpValue(e.target.value);
    }

    let inpProps = {
        className: style.input,
        type,
        id,
        name,
        value: inpValue,
        onChange: handleChange,
        ...prop
    };

    if (name === "rating") {
        inpProps.min = prop.min ?? 0;
        inpProps.max = prop.max ?? 5;
        inpProps.step = prop.step ?? 0.25;
    }

    return (
        <>
            {label && (
                <label className={style.label} htmlFor={id}>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}:</label>
            )}
            < input {...inpProps} />
        </>
    );
};

export default PostInput;