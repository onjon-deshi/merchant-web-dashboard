import LoginScreen from './Screens/LoginScreen';
import Dashboard from "./Screens/Dashboard";
import UserContext from './UserContext';

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';


const App = () => {

  const [name, setName] = useState('default user')
  var navigate = useNavigate();
  
  useEffect(()=>{
    setName('ShareTrip')
  }, []);

  var isLogin = true;
  if( window.localStorage.getItem("UserToken") === null || window.localStorage.getItem("UserToken") === undefined || window.localStorage.getItem("UserToken") === "" ) {
    isLogin = false;
  }

  if( isLogin === true ) {
    if( !document.URL.includes("/dashboard/") ) {
      navigate("/dashboard/home");
    }
  }


  if( isLogin === true ) {
    return (
      <UserContext.Provider value={name}>
        <Dashboard />
      </UserContext.Provider >
    );
  }
  else {
    return (
        <LoginScreen />
    );
  }

  

};

export default App;