import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {setUser, logIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    // console.log(email, password)
    logIn(email, password)
    .then(result => {
      console.log("Login Successful")
      setUser(result.user)
      e.target.reset()
      navigate("/")
    })
    .catch(err => {
      console.log(err.message)
    })

  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              <p className="text-center font-semibold">Dont’t Have An Account ? <Link className="text-red-500" to="/auth/register"><span>Register</span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
