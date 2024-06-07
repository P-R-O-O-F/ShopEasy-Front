import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

function LoginForm() {
    const [username, setUsername] = useState(Cookies.get('username') || '');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    const isItLogged = () => {
        if (Cookies.get('access_token')) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    };


    const logout = () => {
        Cookies.remove('access_token');
        Cookies.remove('username');
        setUsername('');
        setIsLogged(false);
        console.log('Logout successful');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            Cookies.set('access_token', data.access_token);
            console.log('Login successful');
            setIsLogged(true);
        } else {
            console.error('Failed to login');
        }
    };

    return (
        <>
        { !isLogged ? (
            <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div> ) : (
            <div>
            <h1>Welcome, {username}!</h1>
            <button onClick={logout}>Logout</button>
            </div>
        )
    }
        </>
    );

}

export default LoginForm;