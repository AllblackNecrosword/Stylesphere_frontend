import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const Userprovider = ({ children }) => {
  const [token, setToken] = useState(null);
//   console.log("Token form auth",token);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
//   console.log("user form auth",user);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const storeToken = JSON.parse(localStorage.getItem('token'))
    setToken(storeToken)
    setLoading(false)
  })

  const Logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null);
    setToken(null);
  }
 
  return (
    <>
      <UserContext.Provider value={{ token, setToken, user, setUser ,Logout}}>
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
