import React, { useEffect, useState } from "react";
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from './AuthContext';
import ChatFeed from "./ChatFeed";
import axios from "axios";
import Login from "./Login"
import '../ChatApp.css';
import '../App.css';
import '../inProgress.css';

const projectID = 'b05004b6-e1b0-41c7-a07b-6bf0352bfa2e';
const validEmails = ['jane@gmail.com', 'john@gmail.com', 'om.dev@gmail.com'];
const loaderDuration = 3000;

const Messages = () => {
    const { user } = useAuth();
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const email = user.user.email;
        let timer;

        if (validEmails.includes(email)) {
            const authObject = { 'Project-ID': projectID, 'User-Name': email, 'User-Secret': 123 };

            axios.get('https://api.chatengine.io/chats', { headers: authObject })
                .then(response => {
                    console.log("Chat data fetched", response.data);
                    setIsEmailValid(true);
                })
                .catch(error => {
                    console.error("Error fetching chat data", error);
                })
                .finally(() => {
                    timer = setTimeout(() => {
                        setIsLoading(false);
                    }, loaderDuration);
                });
        } else {
            timer = setTimeout(() => {
                setIsLoading(false);
            }, loaderDuration);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [user.user.email]);


    if (isLoading) {
        return (
            <div style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="hourglassBackground">
                    <div className="hourglassContainer">
                        <div className="hourglassCurves"></div>
                        <div className="hourglassCapTop"></div>
                        <div className="hourglassGlassTop"></div>
                        <div className="hourglassSand"></div>
                        <div className="hourglassSandStream"></div>
                        <div className="hourglassCapBottom"></div>
                        <div className="hourglassGlass"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!isEmailValid) {
        return (
            <section class="page_404">
                <div class="container containerLoaderError">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="col-sm-10 col-sm-offset-1  text-center">
                                <div class="four_zero_four_bg">
                                    <h1 class="text-center ">404</h1>
                                </div>
                                <div class="contant_box_404">
                                    <h3 class="h2">
                                        Look like you're lost
                                    </h3>
                                    <h6>the page you are looking for not avaible!</h6>
                                    <br />
                                    <h3>Please contact the Admins to Join the Chat Community!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loaderRef">Ref: https://codepen.io/Navedkhan012/pen/vrWQMY</div>
                </div>
            </section>
        );
    }

    return (
        <ChatEngine
            height="80vh"
            projectID={projectID}
            userName={user.user.email}
            userSecret="123"
            // userName={localStorage.getItem('username')}
            // userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

        />
    );
};

export default Messages;
