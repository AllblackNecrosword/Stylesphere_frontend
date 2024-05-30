
import { Navigate } from "react-router-dom";
import { userAuth } from "./userAuth";
import Dashboard from "../Admin/Dashboard";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { token, auth } = userAuth();

  // if (!token || !auth || auth !== "admin") {
  //   return <Navigate to="/" replace />;
  // }
  if(token || auth || auth == "Admin"){
    return <Dashboard/>
  }else{
    return <Navigate to="/" replace />;
  }


};

export default ProtectedRoute;
