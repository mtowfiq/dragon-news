import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    if(loading){
        return (<h2 className="font-bold">Loading..</h2>)
    }

    if(user && user?.email){
        return children
    }

    return (
        <div>
            <Navigate state={location.pathname} to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;