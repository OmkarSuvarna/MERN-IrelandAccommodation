import React from 'react';
import '../FeatureButton.css';

const FeatureButton = ({ onOpenModal }) => {
    return (
        <button className="floating-button" onClick={onOpenModal}>
            Features
        </button>

    );
};

export default FeatureButton;
