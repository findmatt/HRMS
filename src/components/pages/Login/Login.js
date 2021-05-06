import React, { useState, useContext } from 'react';
import { auth } from '../../../firebase';

import { AuthContext } from '../../../context/AuthContext';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // eslint-disable-next-line no-unused-vars
    const authContext = useContext(AuthContext);
    const scripture = {
        text: `"But to each one of us grace has been given as Christ
        apportioned it."`,
        verse: `Ephesians 4:7`,
    };

    const handleLogin = (evt) => {
        evt.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch(() => {});
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-center hero-content lg:flex-row ">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 text-5xl font-bold">Grace</h1>
                    <p className="mb-5">{scripture.text}</p>
                    <p className="mb-5">{scripture.verse}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label" htmlFor="inputEmail">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="inputEmail"
                                type="text"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="inputPassword">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id="inputPassword"
                                type="text"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered"
                            />
                            <label
                                className="label"
                                htmlFor="linkForgotPassword"
                            >
                                <a
                                    id="linkForgotPassword"
                                    href="/#"
                                    className="label-text-alt"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
