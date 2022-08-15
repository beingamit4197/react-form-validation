import {useState, useEffect} from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setErrors] = useState({})

    const handleChange = e => {

        const {name, values} = e.target
        setValues({
            ...values,
            [name]: values
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    }

    return {handleChange, values, handleSubmit, errors};
}

export default useForm