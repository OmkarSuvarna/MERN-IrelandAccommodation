import React from 'react';
import '../FeatureButton.css';


const FeatureModal = ({ isOpen, onCloseModal }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCloseModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {/* Modal content here */}
                <h2>Dublin Accommodation Features</h2>
                <br />
                <div className='alignFeatureContent'>

                    <div className='insideDivContent'>
                        <span><h4>Security Features:</h4></span>
                        <ul>
                            <li>SSL Certificate</li>
                            <li>reCaptcha on Register only</li>
                            <li>Session Management(token)</li>
                            <li>Bcrypt: Password Encryption</li>
                        </ul>
                    </div>
                    <div className='insideDivContent'>
                        <span><h4>Web APIs</h4></span>
                        <ul>
                            <li>Chat Engine</li>
                            <li>Google Places (Place Auto Complete)</li>
                            <li>Google Maps</li>
                        </ul>
                    </div>
                    <div className='insideDivContent'>
                        <span><h4>Other Features:</h4></span>
                        <ul>

                            <li>Domain Hosting: www.omkardev.cloud</li>
                            <li>Azure Virtual Machine</li>
                            <li>Loader on Chat Feature</li>
                            <li>Filters</li>
                            <li>Pagination</li>
                        </ul>
                    </div>
                </div>
                <h3>Notes & Routes: </h3>
                <div>Admin Login: email: om.dev@gmail.com password: 123</div>
                <div>Noraml Login: email: john@gmail.com password: 123</div>
                <div>Admin Dashboard visible only to admin with above credentials</div>
                <div>Chat Route: Login as Admin -- Messgaes</div>
                <div>Images can be sent through chat enginer as well using clip icon</div>
                <div>Shortlist: Post ID saved on local storage</div>
                <di>Register Router: Login -- Sign Up</di>

                <div className='alignFeatureButton'>
                    <button className='modal-close-button' onClick={onCloseModal}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureModal;
