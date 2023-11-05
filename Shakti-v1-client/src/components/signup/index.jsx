import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <section
            className="py-6 flex items-center bg-gradient-to-r from-slate-900 to-blue-950 opacity-90 min-h-screen border-none shadow-white justify-center ">
            <div className="bg-gradient-to-r from-teal-800 to-blue-950 flex rounded-2xl shadow-lg max-w-3xl p-5">
                <div className=' sm:block hidden p-5 w-1/2 h-full'>
                    <img src="https://images.unsplash.com/photo-1612130462031-c31520c27083?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-2xl opacity-90' alt="aiimg" />
                </div>
                <div className="sm:w-1/2 p-5">
                    <h1 className="my-4 text-3xl font-semibold dark:text-gray-300 text-white">
                        Sign Up
                    </h1>
                    <form action="" className='flex flex-col'>
                        <div class="text-center">
                            <span className="text-slate-400 mr-2 mb-3">Already have an account</span>
                            <Link to="/login" className="text-green-700  dark:text-white font-semibold inline-block">Login</Link>
                        </div>
                        <div className="mb-4">
                            <label for="username" className="dark:text-black text-white">
                                Username:
                            </label>
                            <input id="username" type="text"
                                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-300 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                                placeholder="Enter your username" />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="dark:text-black text-white">
                                Email:
                            </label>
                            <input id="email" type="text"
                                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-300 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                                placeholder="Enter your Email" />
                        </div>
                        <div className="mb-4">
                            <label for="Password" className="dark:text-black text-white">
                                Password:
                            </label>
                            <input id="Password" type="password"
                                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-300 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                                placeholder="Password" />
                        </div>
                        <div className="mb-4">
                            <label for="ConfirmPassword" className="dark:text-black text-white">
                                Confirm Password:
                            </label>
                            <input id="ConfirmPassword" type="password"
                                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-300 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                                placeholder="Confirm Password" />
                        </div>
                        <div className="mb-4">
                            <input type="submit"
                                value="Sign Up"
                                className="py-2 px-5 w-full inline-block tracking-wide border align-middle duration-500 text-white text-base text-center bg-green-600 hover:bg-green-700 border-green-600 " />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp
