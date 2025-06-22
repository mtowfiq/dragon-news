import React from 'react';
import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <img src={userIcon} alt="" />
                <button className='btn btn-neutral'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;