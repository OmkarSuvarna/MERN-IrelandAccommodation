import React, { useState } from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = React.createRef();

  const [formFields, setFormFields] = useState({
    fname: '',
    lname: '',
    contact: '',
    profession: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handlePasswordChange = (e) => {
    setFormFields({
      ...formFields,
      password: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkPasswordsMatch = () => {
    return formFields.password === confirmPassword;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!checkPasswordsMatch()) {
      setError('Passwords do not match.');
      return;
    }

    if (!captchaValue) {
      setError('Please verify that you are not a robot.');
      return;
    }
    const formattedData = {
      ...formFields
    };

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Success:', result);

      history.push('/login');
    } catch (error) {
      console.error('Error during signup:', error.message);
      setError(error.message);
    }
  };

  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <section className="containerLogin forms">
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form onSubmit={handleSignup}>

            <div className="field input-field">
              <input
                type="text"
                placeholder="First Name"
                className="input"
                name="fname"
                value={formFields.fname}
                onChange={handleInputChange}
                required />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Last Name"
                className="input"
                name="lname"
                value={formFields.lname}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="text"
                placeholder="Contact"
                name="contact"
                value={formFields.contact}
                onChange={handleInputChange}
              />
            </div>

            {/* <div className="field input-field" style={{ color: 'black', border: '1px solid #CACACA' }}>
              <select
                className="input signup-selection"
                name="profession"
                value={formFields.profession}
                onChange={handleInputChange} style={{ color: 'black' }}>
                <option value="" disabled selected>Profile</option>
                <option value="Student">Student</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div> */}


            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                name="email"
                value={formFields.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Create password"
                className="password"
                value={formFields.password}
                onChange={handlePasswordChange}
                required />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="field button-field">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={onCaptchaChange}
              />
              <button type="submit">Signup</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="field button-field">
              <button type="submit">Signup</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;