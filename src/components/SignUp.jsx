import {useState} from "react";
import Credentials from "./Credentials";

const SignUp = () => {
    const [token, setToken] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const fields = [
        {
            name: "token",
            value: token,
            handler: (e) => setToken(e.target.value),
            type: "text"
        },
        {
            name: "email",
            value: email,
            handler: (e) => setEmail(e.target.value),
            type: "email"
        },
        {
            name: "username",
            value: username,
            handler: (e) => setUsername(e.target.value),
            type: "text"
        },
        {
            name: "password",
            value: password,
            handler: (e) => setPassword(e.target.value),
            type: "password"
        }
    ];


    return (
        <form method="POST" action="">
            <Credentials fields={fields} />
            <div><button type="submit">Create Account</button></div>
        </form>
    );
};

export default SignUp;