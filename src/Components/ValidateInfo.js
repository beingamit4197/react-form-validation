export default function validateInfo(values) {

    let errors = {};

    if (!values.username.trim()) {
        errors.username = 'Username Required'
    }

    if(!values.email) {
        errors.email = 'Email Required'
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Email Address Invalid'
    }
   
    if(!values.password) {
        errors.password = 'Password Required'
    } else if (values.password.lenght < 6) {
        errors.password = 'Your Password Too Short'
    } 

    if(!values.password2) {
        errors.password2 = 'Password Required'
    } else if (values.password !== values.password2) {
        errors.password2 = 'Password Does not Match'
    }
    
    return errors;

}  