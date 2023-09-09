import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <div>
        <lable>
          First Name:
          <input
          type="text"
          placeholder='First Name'
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}>
          </input>
        </lable>
      </div>

      <div>
        <lable>
          Last Name:
          <input
          type="text"
          placeholder='Last Name'
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}>
          </input>
        </lable>
      </div>

      <div>
        <lable>
          Email:
          <input
          type="text"
          placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}>
          </input>
        </lable>
      </div>

      <div>
        <lable>
          Phone Number:
          <input
          type="text"
          placeholder="Phone Number"
          onChange={(event) => setPhoneNumber(event.target.value)}
          value={phoneNumber}>
          </input>
        </lable>
      </div>


      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
