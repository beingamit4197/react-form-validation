import React from 'react'
import useForm from './UseForm'

const FormSignup = () => {
  
    const { handleChange, values, handleSubmit } = useForm();
    return (
    
    <div>
        <div className="form-content-right">
            <form className="form" onSubmit={ handleSubmit }>
                <h1> Create an account...</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-input" name="username" 
                        placeholder="Enter your name" id='username' value={values.username} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-input" name="email" 
                        placeholder="Enter your mail address" id='email'  value={values.email} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-input" name="password" 
                        placeholder="Enter your password" id='password'  value={values.password} onChange={handleChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">Re-Password</label>
                        <input type="password" className="form-input" name="password2" 
                        placeholder="Re enter your password" id='password2'  value={values.password2} onChange={handleChange}/>
                </div>
                <button className="form-input-btn" type="submit">
                    Create Account
                </button>
                <span className="form-input-login">
                    Already have an account? <a href="#">Log in</a>
                </span>
            </form>
        </div>
    </div>
  )
}

export default FormSignup