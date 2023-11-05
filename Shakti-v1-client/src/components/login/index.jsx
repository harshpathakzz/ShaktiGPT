import React from "react";
import { Link } from "react-router-dom";  

const Login = () => {
  return (
    <section className="py-6 flex items-center bg-gradient-to-r from-slate-900 to-blue-950 opacity-90 min-h-screen dark:from-slate-900 border-none dark:shadow-white shadow-black dark:to-slate-950 justify-center ">
      <div className="bg-gradient-to-r from-slate-900 to-blue-950 dark:bg-slate-50 flex rounded-2xl shadow-lg max-w-4xl p-5">
        <div className=" sm:block hidden w-1/2 p-5">
          <img
            src="https://images.unsplash.com/photo-1625314868143-20e93ce3ff33?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWl8ZW58MHx8MHx8fDA%3D"
            className="rounded-2xl"
            alt="aiimg"
          />
        </div>
        <div className="sm:w-1/2 p-5">
          <h1 className="my-4 text-2xl font-semibold dark:text-gray-300 text-white">
            login
          </h1>
          <form action="" className="flex flex-col">
            <div className="mb-4">
              <label for="username" className="dark:text-gray-300 text-white">
                Username:
              </label>
              <input
                id="username"
                type="text"
                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-200 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                placeholder="Enter your username"
              />
            </div>
            <div class="mb-4">
              <label
                for="LoginPassword"
                className="dark:text-gray-300 text-white"
              >
                Password:
              </label>
              <input
                id="LoginPassword"
                type="password"
                className="w-full mt-3 py-2 px-3 h-10 bg-transparent text-white rounded outline-none border border-gray-300 focus:border-green-600 dark:border-gray-800 dark:focus:border-green-600 focus:ring-0"
                placeholder="Enter your password"
              />
            </div>
            <div class="text-center mb-4">
              <a
                href="#"
                className="text-green-700 dark:text-white font-semibold inline-block"
              >
                Forgot Password ?
              </a>
            </div>
            <div class="mb-4">
              <input
                type="submit"
                value="Login"
                className="py-2 px-5 w-full inline-block tracking-wide border align-middle duration-500 text-white text-base text-center bg-green-600 hover:bg-green-700 border-green-600 "
              />
            </div>
            <div class="text-center">
              <span className="text-slate-400 mr-2">
                Don't have an account?
              </span>
              <Link
                to="/signup"
                className="text-green-700 dark:text-white font-semibold inline-block"
              >
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
