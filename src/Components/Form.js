import React, { useState } from 'react'
import FormSignup from './FormSignup'

const Form = () => {

  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <div>
        <FormSignup />
    </div>
  )
}

export default Form