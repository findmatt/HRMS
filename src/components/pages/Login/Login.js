import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-center hero-content lg:flex-row ">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 text-5xl font-bold">Grace</h1>
                    <p className="mb-5">
                        But to each one of us grace has been given as Christ
                        apportioned it.
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor="inputEmail">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                id="inputEmail"
                                type="text"
                                placeholder="email"
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
                                type="button"
                                value="Login"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
        //     <div className="bg-white w-auto shadow-xl rounded-2xl	 p-5 text-center">
        //         <h1 className="text-3xl font-medium">Welcome</h1>
        //         <p className="text-sm">Login to Grace Church</p>

        //         <form className="space-y-5 mt-5">
        //             <input
        //                 type="text"
        //                 className="w-full h-12 border border-gray-800 rounded px-3"
        //                 placeholder="Email"
        //             />
        //             <div className="w-full flex items-center border border-gray-800 rounded px-3">
        //                 <input
        //                     type="password"
        //                     className="w-4/5 h-12"
        //                     placeholder="Password"
        //                 />
        //                 <span className="text-blue-700 hover:bg-blue-400 rounded-md px-3">
        //                     Show
        //                 </span>
        //             </div>

        //             <div className="text-left">
        //                 <a
        //                     href="#!"
        //                     className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2 "
        //                 >
        //                     Forgot Password ?
        //                 </a>
        //             </div>

        //             {/* <button className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium">
        //                 Login
        //             </button> */}
        //         </form>
        //     </div>
        // </div>
    );
}
