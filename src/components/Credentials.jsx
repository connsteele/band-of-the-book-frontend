import { waitForElementToBeRemoved } from "@testing-library/react";
import { Eye, EyeClosed } from "lucide-react";
import style from "../styles/LayoutCredentials.module.css";
import { useState } from "react";

const Credentials = ({ fields }) => {
    // May need to ensure spaces are cleaned out of input
    const [errors, setErrors] = useState({});
    const [isPasswordHidden, setIsPassworHidden] = useState(true);

    const togglePasswordHidden = () => {
        setIsPassworHidden(prevState => !prevState);
    };

    const runValidator = (validator, value) => {
        return validator(value);
    };

    const handleBlur = (field, e) => {
        const valid = runValidator(field.validator, field.value);
        if (valid !== true) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [field.name]: valid.message
            }))
        }
        else {
            setErrors(prevErrors => {
                const { [field.name]: removed, ...rest } = prevErrors;
                return rest;
            });
        }
    }

    return (
        <ul className={style["credentials"]}>
            {fields.map((field) => (
                <li>
                    <label htmlFor={field.name}>
                        {field.name.at(0).toLocaleUpperCase() + field.name.slice(1)}
                    </label>

                    {
                        errors[field.name] && (
                            <div className={style["invalid-field"]}>
                                {errors[field.name]}
                            </div>
                        )
                    }

                    {field.name === "password" ? (
                        <span>
                            <input
                                className={style["password"]}
                                id={field.name}
                                name={field.name}
                                type={isPasswordHidden ? "password" : "text"}
                                value={field.value}
                                onChange={field.handler}
                                onBlur={(e) => handleBlur(field, e)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordHidden}
                                aria-label={isPasswordHidden ? "Show password" : "Hide password"}
                            >
                                {isPasswordHidden ? (
                                    <Eye />
                                ) : (
                                    <EyeClosed />
                                )}

                            </button>
                        </span>
                    ) : (
                        <input
                            id={field.name}
                            name={field.name}
                            type={field.type || "text"}
                            value={field.value}
                            onChange={field.handler}
                            onBlur={(e) => handleBlur(field, e)}
                            required
                        />
                    )}


                </li>
            ))}
        </ul>
    );
};

export default Credentials;