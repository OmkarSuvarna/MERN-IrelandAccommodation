import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import '../App.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make an API request to your backend for authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect or update state)
        console.log('Login successful');
      } else {
        // Handle authentication error
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
          <form>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>

            <div className="field button-field">
              <button>Login</button>
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

    // <form class="form">
    //   <p class="form-title">Sign in to your account</p>
    //   <div class="input-container">
    //     <input placeholder="Enter email" type="email" />
    //     <span>
    //       <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    //       </svg>
    //     </span>
    //   </div>
    //   <div class="input-container">
    //     <input placeholder="Enter password" type="password" />

    //     <span>
    //       <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    //         <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
    //       </svg>
    //     </span>
    //   </div>
    //   <button class="submit" type="submit">
    //     Sign in
    //   </button>

    //   <p class="signup-link">
    //     No account?
    //     {/* <a href="">Sign up</a> */}
    //     <Link to="/signup">Register</Link>
    //   </p>
    // </form>

  );
};

export default Login;
