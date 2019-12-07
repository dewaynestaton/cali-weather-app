import React, { Component } from 'react';
import axios from 'axios';

function Register() {
    return (
        <div className="register-form">
            <form>
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Thor God of Thunder" />

                <label for="email">Email Addy:</label>
                <input type="email" name="email" placeholder="RainMan@email.com" />

                <label for="password">Top Secret Password:</label>
                <input type="password" name="password" placeholder="eh...?" />
            </form>
        </div>
    );
}

export default Register;