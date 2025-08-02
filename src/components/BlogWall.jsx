import style from "../styles/BlogWall.module.css"

const BlogWall = () => {
    const arr = [];
    for (let i = 0; i < 1000; i++)
        arr.push("hello");
    return(
        <div className={style["blog-wall"]}>
            <ul>
                {
                   arr.map((item) => (<li>{item}</li>))
                }
            </ul>
        </div>
    );
};

export default BlogWall;