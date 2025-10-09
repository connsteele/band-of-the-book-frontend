import style from "../styles/LayoutCredentials.module.css";

const Credentials = ({ fields }) => {
    // May need to ensure spaces are cleaned out of input

    return (
        <ul className={style.credentials}>
            {fields.map((field) => (
                <li>
                    <label htmlFor={field.name}>
                        {field.name.at(0).toLocaleUpperCase() + field.name.slice(1)}
                    </label>
                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type || "text"}
                        value={field.value}
                        onChange={field.handler}
                    />
                </li>
            ))}
        </ul>
    );
};

export default Credentials;