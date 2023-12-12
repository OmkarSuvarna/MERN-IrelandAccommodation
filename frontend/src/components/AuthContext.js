import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token);
    };

    const logout = (callback) => {
        setUser(null);
        localStorage.removeItem('token');
        if (callback) callback();
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
