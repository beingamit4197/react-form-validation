import {useState, useEffect} from 'react';

const useForm = () => {
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
    return {handleChange, values};
}

export default useForm