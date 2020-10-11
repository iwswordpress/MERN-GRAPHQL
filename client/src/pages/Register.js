import React, { useContext, useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { FormCheckbox, FormDropdown } from 'semantic-ui-react';

function Register(props) {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {};
  function registerUser() {}

  return (
    <div style={{ maxWidth: '500px' }}>
      <div className='form-container'>
        <form>
          <div class='form-group'>
            <label for='username'>Username</label>
            <input
              name='username'
              type='text'
              class='form-control'
              id='username'
              aria-describedby='username'
              placeholder='Enter username'
            />
          </div>
          <div class='form-group'>
            <label for='email'>Email</label>
            <input
              name='email'
              type='text'
              class='form-control'
              id='email'
              aria-describedby='email'
              placeholder='Enter email'
            />
          </div>
          <div class='form-group'>
            <label for='password'>Password</label>
            <input
              name='password'
              type='text'
              class='form-control'
              id='password'
              aria-describedby='password'
              placeholder='Enter password'
            />
          </div>
          <div class='form-group'>
            <label for='confirmPassword'>Confirm password</label>
            <input
              name='confirmPassword'
              type='text'
              class='form-control'
              id='confirmPassword'
              aria-describedby='confirmPassword'
              placeholder='Confirm password'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
