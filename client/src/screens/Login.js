import React, { Component } from 'react';
import axios from 'axios';

function Login() {
    return (
        <div className="login-form">
            <form>
                <label for="email">Email Addy:</label>
                <input type="email" name="email" placeholder="RainMan@email.com" />

                <label for="password">Top Secret Password:</label>
                <input type="password" name="password" placeholder="eh...?" />
            </form>
        </div>
    );
}

export default Login;