import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    logout(() => history.push('/'));
  };

  const isAdmin = user && user.user.email === 'om.dev@gmail.com';
  return (
    <div className="header">
      <div className="container minWidthContainer">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="d-flex align-items-center headerMainPage">
                <i className="fas fa-home"></i>
                <span className="ms-2">Dublin Accommodations</span>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {isAdmin && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Admin Dashboard
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/shortlisted">
                    Short Listed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/postaccommodo">
                    Post Accommodation
                  </Link>
                </li>
                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/messages">
                      Messages
                    </Link>
                  </li>
                )}
                {user && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  {user ? (
                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                      Logout
                    </button>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  )}
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Category <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-ul">
                    <li>
                      <Link to="#">item</Link>
                    </li>
                    <li>
                      <Link to="#">item</Link>
                    </li>
                    <li>
                      <Link to="#">item</Link>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Login
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
