// import { Navigate, Route } from "react-router-dom";
// import { userAuth } from "./userAuth";

// const ProtectedRoute = ({ element, ...props }) => {
//   const { auth } = userAuth();

//   if (!auth) {
//     return <Navigate to="/login" />;
//   }

//   if (props.path === "/dashboard/*" && auth.role !== "admin") {
//     return <Navigate to="/" />;
//   }
//   return React.cloneElement(element, { ...props });
// };

// export default ProtectedRoute;
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
