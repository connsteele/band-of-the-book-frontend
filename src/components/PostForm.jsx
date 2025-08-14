import { useState } from "react";
import PostInput from "../components/PostInput";
import PostTextArea from "./PostTextArea";

const PostForm = ({ children }) => {
    const [post, setPost] = useState({});

    return (
        <form action="" method="post">
            <PostInput
                type="text"
                name="book"
                placeholder="Book Title"
                label={true}
                required
            />
            <PostInput
                type="text"
                name="series"
                placeholder="Series"
                label={true}
                required
            />
            <PostInput
                type="number"
                name="entry"
                placeholder="1"
                label={true}
            />
            <PostInput
                type="text"
                name="author"
                placeholder="First Last"
                label={true}
                required
            />
            <PostInput
                type="number"
                name="rating"
                min={0}
                max={5}
                step={.25}
                placeholder={0}
                label={true}
                required
            />
            <PostTextArea/>

        </form>
    );
};


export default PostForm;