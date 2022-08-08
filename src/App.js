import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const values = { password: "", username: "", email: ""};
  const [formValues, setFormValues] = useState(values);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    const{ name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(errors);
    if(Object.keys(errors).length === 0 && isSubmit) {
      console.log(formValues);
    } 
  }, [errors]);

  const validate = (values) => {
    const error = {};
    const emailRegex= /^[a-z0-9](\.?[a-z0-9]){3,}@g(oogle)?mail\.com$/;
    const passwordRegex = /^(?=.*?[A-Z]){5}(?=.*?[-]{2})(?=.*?[#?!@$%^&*-]){6}.{11,}$/;
    const usernameRegex =  /^[A-Za-z]+$/;
    
    if (!values.email) {
      error.email = "Email Address is required"
    } else if (!emailRegex.test(values.email)) {
      error.email = "Email address must be on gmail"
    }
    if (!values.password) {
      error.password = "Password is required"
    } else if (!passwordRegex.test(values.password)) {
      error.password = "Password must have five (5) capital letters, six (6) symbols and two hyphens (-)"
    }
    if (!values.username) {
      error.username = "Username is required"
    } else if (!usernameRegex.test(values.username)) {
      error.username = "Username must only have letters and no spaces"
    }
    return error;
  };

  return (
    
    <div className="App">
      {Object.keys(errors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully! </div>
      ) : (
        ""
      )}
      
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password: {''}
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='password'
            value={formValues.password}
            className='form-control'
            id='password'
            name='password'
            placeholder='password'
  
          />
        </div>
        <p style={{ color: 'red', margin: '10px 0' }}>{errors.password}</p>

        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username: {''}
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='username'
            value={formValues.username}
            className='form-control'
            id='username'
            name='username'
            placeholder='username'

          />
        </div>
        <p style={{ color: 'red', margin: '10px 0' }}>{errors.username}</p>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address: {''}
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={formValues.email}
            placeholder='email'
            
          />
        </div>
        <p style={{ color: 'red', margin: '10px 0' }}>{errors.email}</p>

        
        <button  disabled={!formValues} type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
