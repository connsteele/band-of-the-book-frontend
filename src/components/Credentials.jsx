import { waitForElementToBeRemoved } from "@testing-library/react";
import style from "../styles/LayoutCredentials.module.css";
import { useState } from "react";

const Credentials = ({ fields }) => {
    // May need to ensure spaces are cleaned out of input
    const [errors, setErrors] = useState({});

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

                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type || "text"}
                        value={field.value}
                        onChange={field.handler}
                        onBlur={(e) => handleBlur(field, e)}
                        required
                    />
                </li>
            ))}
        </ul>
    );
};

export default Credentials;