// src/components/Login.js
import React from 'react';

const Login = ({ login }) => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <button onClick={login} className="btn btn-primary">Login with Spotify</button>
        </div>
    );
};

export default Login;