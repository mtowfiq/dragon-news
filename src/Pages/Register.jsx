import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Your Name</label>
                <input type="text" className="input" placeholder="Enter your name" />
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Enter your photo url" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="flex gap-3 items-center">
                    <input type="checkbox" name="" id="" /> 
                    <label>Accept Terms & Conditions</label>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p className="text-center font-semibold">
                Already Have An Account ?{" "}
                <Link className="text-red-500" to="/auth/login">
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
