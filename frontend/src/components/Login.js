import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import '../App.css';
import { useAuth } from './AuthContext';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const auth = useAuth();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!recaptchaValue) {
      setError('Please complete the reCAPTCHA');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, recaptchaValue }),
      });

      if (response.ok) {
        const userData = await response.json();
        auth.login(userData);
        console.log('Login successful');
        history.push('/');
      } else {
        const data = await response.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <section className="containerLogin forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleLogin}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>
            <div className='recaptcha-login'>
              <ReCAPTCHA
                sitekey="6Le6AyEpAAAAAM_4wftidRsLEXv4YVJ6vHpapwVI"
                onChange={(value) => setRecaptchaValue(value)}
              />
            </div>

            <div className="field button-field">
              <button type="submit">Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>Don't have an account?
              <Link to="/signup"> Signup</Link>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'white', marginRight: '10px' }} />
            <span>Login with Facebook</span>
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <FontAwesomeIcon icon={faGoogle} style={{ color: 'green', marginRight: '10px' }} />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
