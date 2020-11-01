import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  useEffect(() => {
    console.log('protected Route');
  })

  return (
    <Route {...rest} render={
      props => <Component {...rest} {...props} />
    } />
  )
}

export default ProtectedRoute;