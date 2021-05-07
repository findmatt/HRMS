import React, { useContext, useState } from 'react';
import firebaseAPIContext from '../../../context/AuthContext';

export default function Login() {
    const { login } = useContext(firebaseAPIContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (evt) => {
        evt.preventDefault();
        login(email, password);
    };
    const scripture = {
        text: `"But to each one of us grace has been given as Christ
        apportioned it."`,
        verse: `Ephesians 4:7`,
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
