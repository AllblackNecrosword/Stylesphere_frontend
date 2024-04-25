import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const Userprovider = ({ children }) => {
  const [token, setToken] = useState(null);
  //   console.log("Token form auth",token);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  //   console.log("user form auth",user);
  const [userid, setUserid] = useState(
    JSON.parse(localStorage.getItem("_id")) || null
  );
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("role")) ||null);

  // console.log("The user id is",userid);
  useEffect(() => {
    const storeToken = JSON.parse(localStorage.getItem("token"));
    setToken(storeToken);
  });

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("_id");
    localStorage.removeItem("role")
    setUser(null);
    setToken(null);
    setUserid(null);
    setAuth(null);
  };

  return (
    <>
      <UserContext.Provider
        value={{ token, setToken, user, setUser, Logout, setUserid, userid,auth,setAuth }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export const userAuth = () => {
  // useContext(UserContext);
  return useContext(UserContext);
};

export default Userprovider;
