import { useState } from "react";
import style from "../styles/PostInput.module.css"
import Select from 'react-select'

const PostInput = ({ type = "text", label = false, handler, name, value, isLocked, options = [], ...prop }) => {
    const id = name;

    if (name === "rating") {
        inpProps.min = prop.min ?? 0;
        inpProps.max = prop.max ?? 5;
        inpProps.step = prop.step ?? 0.25;
    }

    if (prop.select === "multi") {
        const opts = Array.isArray(options) ? options : [];
        const selectOptions = opts.map((element) => ({
            value: element,
            label: element.charAt(0).toLocaleUpperCase() + element.slice(1),
        }));

        const labelName = name.charAt(0).toLocaleUpperCase() + name.slice(1);
        return (
            <>
                {label &&
                    (<label className={style.label} htmlFor={id}>
                        {labelName}
                    </label>)
                }
                <Select
                    styles={{
                        control: (base, state) => ({
                            ...base,
                            backgroundColor: "var(--color-grey)",
                            color: "var(--color-white)",
                            fontSize: "1.5rem",
                            padding: ".5rem",
                            borderRadius: "var(--border-radius)",
                            borderColor: state.isDisabled
                                ? "var(--color-grey-light)" 
                                : "transparent",
                        }),
                        menu: (base, state) => ({
                            ...base,
                            backgroundColor: "var(--color-grey)",
                            color: "var(--color-white)",
                        }),
                        option: (base, state) => ({
                            ...base,
                            backgroundColor: state.isFocused
                                ? "var(--color-purple)"
                                : "var(--color-grey)"
                        }),
                        multiValue: (base, state) => ({
                            ...base,
                            backgroundColor: state.isDisabled
                                ? "var(--color-grey-light)" : "var(--color-white)",
                            color: "var(--color-black)",
                        }),
                        multiValueRemove: (base, state) => ({
                            ...base,
                            color: "var(--color-grey)",
                        }),
                    }}
                    options={selectOptions}
                    name={name}
                    value={value}
                    isMulti
                    isClearable
                    isDisabled={isLocked}
                    onChange={handler}
                />
            </>
        )
    }

    //---- Default inputs
    let inpProps = {
        className: style.input,
        type,
        id,
        name,
        value: value,
        onChange: handler,
        disabled: isLocked,
        ...prop
    };

    return (
        <>
            {label && (
                <label className={style.label} htmlFor={id}>{name.charAt(0).toLocaleUpperCase() + name.slice(1)}:</label>
            )}
            < input {...inpProps} />
        </>
    );
};

export default PostInput;