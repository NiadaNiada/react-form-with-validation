import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DetailsContext = createContext({});

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/)
const ageRegex = RegExp(/^[0-9]{0,2}$/)
const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$/)

const initialUsers = {
    name: "",
    email: "",
    gender: "",
    age: ""}

const DetailsContextProvider = props => {

    const [users, setUsers] = useState([]);

    const [fields, setFields] = useState(initialUsers)

    const [filedError, setFieldError] = useState({
        ...fields
    })

    const [isError, setIsError] = useState(false)

    const cancel = () => {
        setFields(initialUsers)
    }

    const addDetails = () => {
        setUsers([...users, { fields }]);
        setFields(initialUsers)
    };

    const uniq = () => Date.now();

    const handleChange = input => ({ target: { value } }) => {
        setFields({
            ...fields,
            [input]: value
        })

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

        Object.values(formErrors).forEach(error =>
            error.length > 0 ? setIsError(true) : setIsError(false)
        )

        setFieldError({
            ...formErrors
        })
    }

    return (
        <DetailsContext.Provider
            value={{
                handleChange,
                filedError,
                isError,
                fields,
                cancel,
                users,
                addDetails,
                uniq
            }}
        >
            {props.children}
        </DetailsContext.Provider>
    );
};

DetailsContext.PropTypes = {
    fields: PropTypes.exact({
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.email,
        gender: PropTypes.string
    })
};

export default DetailsContextProvider;
