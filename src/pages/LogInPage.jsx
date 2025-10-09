import BasePage from "../components/BasePage";
import LogIn from "../components/LogIn";
import { useNavigate, redirect } from "react-router-dom";
import SignUp from "../components/SignUp";
import styleLogin from "../styles/LogInPage.module.css"
import styleCred from "../styles/LayoutCredentials.module.css";

const LogInPage = () => {
    const navigate = useNavigate();

    const signUpHander = ({currentTarget: {id = undefined}}) => id && navigate(`/${id}`);
    // should redirect depending on if logged in or not (react router redirect)



    return (
        <BasePage>
            <div className={styleLogin.page}>
                <h1 className={styleCred["page-title"]}>Log In</h1>
                <LogIn/>
                <p>No Account?</p>
                <div><button type="button" id="sign_up" onClick={signUpHander}>Sign Up</button></div>
            </div>
        </BasePage>
    );
};

export default LogInPage;