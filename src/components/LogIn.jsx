import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "./Credentials";
import validPatterns from "../utils/validPatterns";


const LogIn = () => {
    // States
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    //
    const payload = {email, password};
    const base = import.meta.env.VITE_API_URL;
    const endpoint = `${base}/auth/login`;
    let navigate = useNavigate();

    const fields = [
        {
            name: "email",
            value: email,
            handler: (e) => setEmail(e.target.value),
            type: "email",
            validator: validPatterns.email,
        },
        {
            name: "password",
            value: password,
            handler: (e) => setPassword(e.target.value),
            type: "password",
            validator: validPatterns.password,
        }
    ];

    const handleLoginSubmit = async (ev) => {
        ev.preventDefault();

        try {
            const result = await fetch(endpoint, {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!result.ok) {
                const resultError = await result.json();
                console.error(resultError);
                return;
            }

            const data = await result.json();
            console.log(data);
            return navigate("/");

        } catch (err) {

        }

    };

    // Add validation to forms and front end here
    // Change this to a fetch using post for manual control over how the response should be handled
    // look at the signup.jsx file for how I handled it there
    return (
        <form onSubmit={handleLoginSubmit}>
            <Credentials fields={fields} />
            <div><button type="submit">Log In</button></div>
        </form>
    );
};

export default LogIn;