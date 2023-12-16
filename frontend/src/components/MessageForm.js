import React from "react";
import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import '../ChatApp.css';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) {
            sendMessage(creds, chatId, { text });
        }

        setValue('');
    };

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };

    return (
        <form className="message-form" onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <div>
                <input
                    className="message-input"
                    placeholder="Send a message..."
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </div>
            <div>
                <label htmlFor="upload-button">
                    <span className="image-button rotateIcon" style={{ boxShadow: 'none', width: '4rem', paddingTop: '2px', }}>
                        <FontAwesomeIcon icon={faPaperclip} />
                        {/* <PictureOutlined className="picture-icon" /> */}
                    </span>
                </label>
                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: 'none' }}
                    onChange={handleUpload.bind(this)}
                />
                <button type="submit" className="send-button" style={{ paddingBottom: '1rem' }}>
                    <SendOutlined className="send-icon rotateIcon" />
                </button>
            </div>

        </form>
    );
};

export default MessageForm;