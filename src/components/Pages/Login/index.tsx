import React, { FC, useState } from 'react';

import AuthAPI from '../../../utilities/AuthAPI';

const Login: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (evt: React.FormEvent) => {
        (document.activeElement as HTMLElement).blur();
        evt.preventDefault();
        AuthAPI.login(email, password);
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
                <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label" htmlFor="inputEmail">
                                <span className="label-text">Email</span>
                                <input
                                    id="inputEmail"
                                    type="text"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="inputPassword">
                                <span className="label-text">Password</span>
                                <input
                                    id="inputPassword"
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered"
                                />
                            </label>
                            <a id="linkForgotPassword" href="/#" className="label-text-alt">
                                Forgot password?
                            </a>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
