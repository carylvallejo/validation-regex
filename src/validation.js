const Validation = ({
    formValues,
    onChange,
}) => {

    return (
        <form>
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
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username: {''}
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='username'
            value={formValues.password}
            className='form-control'
            id='username'
            name='username'
            placeholder='username'
            required
          />
        </div>

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
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    )

}

export default Validation