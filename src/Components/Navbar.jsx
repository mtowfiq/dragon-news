import React, { useContext } from 'react';
import userIcon from "../assets/user.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    // console.log(user)

    const handleLogout = () =>{
        logOut()
        .then(() =>{
            // console.log("Logout successful")
        })
        .catch(err =>{
            // console.log(err.message)
        })
    }

    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user?.displayName}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                {
                    user && user?.email ? (
                        <div>
                            <img className='w-[90px] rounded-xl' src={user?.photoURL} alt="" />
                        </div>

                    ) : (<img src={userIcon} alt="" />)
                }
                {
                    user ? (<button onClick={handleLogout} className='btn btn-neutral'>Logout</button>) : (<Link to="/auth/login" className='btn btn-neutral'>Login</Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;