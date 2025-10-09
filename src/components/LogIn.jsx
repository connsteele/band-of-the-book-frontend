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

    return (
        <form method="GET" action={endpoint}>
            <Credentials fields={fields} />
            <div><button type="submit">Log In</button></div>
        </form>
    );
};

export default LogIn;