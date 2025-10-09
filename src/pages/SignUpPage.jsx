import BasePage from "../components/BasePage";
import SignUp from "../components/SignUp";
import styleLogin from "../styles/LogInPage.module.css"

const SignUpPage = () => {

    return (
        <BasePage>
            <div className={styleLogin.page}>
                <h1>Sign Up</h1>
                <SignUp />
            </div>
        </BasePage>
    );
};

export default SignUpPage;