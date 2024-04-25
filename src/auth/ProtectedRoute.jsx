import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, token, ...props }) => {
  // Check if the user is authenticated and isAdmin
  const isAuthenticated = token && isAdmin;

  // Render the dashboard route if the user is authenticated and isAdmin
  // Otherwise, redirect to the login page
  return isAuthenticated ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
