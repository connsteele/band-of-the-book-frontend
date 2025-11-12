import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Credentials from "./Credentials";

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

    const payload = {token, email, username, password};
    const endpoint = `${import.meta.env.VITE_API_URL}/auth/signup`;
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Stop page from refreshing (SPA)
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            });

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
            <Credentials fields={fields} />
            <div><button type="submit">Create Account</button></div>
        </form>
    );
};

export default SignUp;