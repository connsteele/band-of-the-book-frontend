import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "./Credentials";
import validPatterns from "../utils/validPatterns";

const SignUp = () => {
    // Payload
    const [token, setToken] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    // 
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fields = [
        {
            name: "token",
            value: token,
            handler: (e) => setToken(e.target.value),
            type: "text",
            validator: () => true,
        },
        {
            name: "email",
            value: email,
            handler: (e) => setEmail(e.target.value),
            type: "email",
            validator: validPatterns.email,
        },
        {
            name: "username",
            value: username,
            handler: (e) => setUsername(e.target.value),
            type: "text",
            validator: validPatterns.username,
        },
        {
            name: "password",
            value: password,
            handler: (e) => setPassword(e.target.value),
            type: "password",
            validator: validPatterns.password,
        }
    ];

    const payload = { token, email, username, password };
    const endpoint = `${import.meta.env.VITE_API_URL}/auth/signup`;
    let navigate = useNavigate();

    const validateFields = () => {
        for (const field of fields) {
            const validator = field?.validator;
            if (!validator)
                continue;

            if (validator(field.value) !== true) {
                console.error(`Field ${field.name} is invalid`);
            }
        };
        console.log("All fields valid");
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page from refreshing (SPA)
        setIsLoading(true);
        setError(null);

        try {
            // Validate on client
            validateFields();

            // Validate on server
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            // validate the res is okay
            if (!res.ok) {
                const resError = await res.json();
                console.log(resError);
                return;
            }

            const data = await res.json();
            console.log(data);
            navigate("/");

        } catch (err) {
            // set error
            setError(err?.message || "Network Error");
        } finally {
            // set loading
            setIsLoading(false);
        }
    };


    // Add loading and error
    return (
        <form onSubmit={handleSubmit} >
            <Credentials fields={fields}/>
            <div><button type="submit">Create Account</button></div>
        </form>
    );
};

export default SignUp;