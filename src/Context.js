import React, { createContext, useState } from "react";

export const DetailsContext = createContext({});

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/)
const ageRegex = RegExp(/^[0-9]{0,2}$/)
const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$/)

const initialState = {
    name: "",
    email: "",
    gender: "",
    age: ""}

const DetailsContextProvider = props => {

    const [fields, setFields] = useState(initialState)

    const [added, setAdded] = useState(false)

    const [filedError, setFieldError] = useState({
        ...fields
    })

    const [isError, setIsError] = useState(false)

    const cancel = () => {
        setFields(initialState)
        setAdded(false);
    }



    const handleChange = input => ({ target: { value } }) => {
        // Set values to the fields
        setFields({
            ...fields,
            [input]: value
        })

        setAdded(true)

        // Handle errors
        const formErrors = { ...filedError }

        switch (input) {
            case "name":
                formErrors.name = nameRegex.test(value)
                    ? ""
                    : "Minimum 3 letters required"
                break
            case "age":
                formErrors.age = ageRegex.test(value)
                    ? ""
                    : "Maximum 2 digits required"
                break
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "Invalid email address"
                break
            default:
                break
        }

        // set error hook
        Object.values(formErrors).forEach(error =>
            error.length > 0 ? setIsError(true) : setIsError(false)
        )
        // set errors hook
        setFieldError({
            ...formErrors
        })
    }

    return (
        <DetailsContext.Provider
            value={{
                added,
                handleChange,
                filedError,
                isError,
                fields,
                cancel
            }}
        >
            {props.children}
        </DetailsContext.Provider>
    );
};

export default DetailsContextProvider;
