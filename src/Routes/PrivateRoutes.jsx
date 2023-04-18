import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext)

if(loading){
    return <div>Loading.....</div>
}
  if(user){
    return children
  }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;