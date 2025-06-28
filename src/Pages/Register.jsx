import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {createUser, setUser} = useContext(AuthContext)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const name = e.target.name.value
    const password = e.target.password.value
    const email = e.target.email.value
    const photo = e.target.photo.value

    console.log(name, photo, password, email)
    
    // Creating user
    createUser(email, password)
    .then(result =>{
      setUser(result.user)
      console.log(result.user)
      e.target.reset()
    })
    .catch(error =>{
      console.log("Error is", error.message)
    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register your account</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} action="">
                <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter your name"
                    name="name"
                  />
                  <label className="label">Photo URL</label>
                  <input
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="Enter your photo url"
                  />
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div className="flex gap-3 items-center ">
                    <input type="checkbox" name="" id="" />
                    <label>Accept Terms & Conditions</label>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
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
