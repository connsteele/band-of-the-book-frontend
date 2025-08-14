import BasePage from "../components/BasePage";
import PostForm from "../components/PostForm";
import style from "../styles/FormPage.module.css"

const FormPage = () => {

    return (
        <BasePage>
            <div className={style["form-page"]}>
                <h1>Enter Post Information</h1>
                <PostForm />
            </div>
        </BasePage>
    );
};

export default FormPage;