export default function validateInfo(values) {

    let errors = {};

    if (!values.username) {
        errors.username = 'Username Required'
    }

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
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