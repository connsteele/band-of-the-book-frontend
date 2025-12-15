import { useState } from "react";
import Credentials from "./Credentials";

const base = import.meta.env.VITE_API_URL;
const endpoint = `${base}/auth/login`;

const LogIn = () => {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const fields = [
        {
            name: "email",
            value: email,
            handler: (e) => setEmail(e.target.value),
            type: "email"
        },
        {
            name: "password",
            value: password,
            handler: (e) => setPassword(e.target.value),
            type: "password"
        }
    ];

    // Add validation to forms and front end here
    // Change this to a fetch using post for manual control over how the response should be handled
    // look at the signup.jsx file for how I handled it there
    return (
        <form method="post" action={endpoint}>
            <Credentials fields={fields} />
            <div><button type="submit">Log In</button></div>
        </form>
    );
};

export default LogIn;