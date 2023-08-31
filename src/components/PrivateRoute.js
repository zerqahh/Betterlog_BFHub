import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/" />}
    />
  );
}

export default PrivateRoute;