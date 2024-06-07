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
            <div className="p-8 w-full max-w-xs mx-auto">
            <h1 className="text-3xl font-bold underline mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="username" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                </div>
            </form>
        </div> ) : (
            <div className="p-8 w-full max-w-xs mx-auto">
            <h1 className="text-3xl font-bold underline mb-4">Welcome, {username}!</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={logout}>Logout</button>
            </div>
        )
    }
        </>
    );

}

export default LoginForm;