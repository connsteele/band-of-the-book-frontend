import style from "../styles/PostTextArea.module.css"

const PostTextArea = (prop) => {

    const atrib={
        className : style.text,
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