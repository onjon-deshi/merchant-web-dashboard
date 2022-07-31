import React, {createContext, useEffect, useState} from 'react';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from "./Screens/Dashboard";
import UserContext from './UserContext';




const App = () => {

  const [name, setName] = useState('default user')

  
  useEffect(()=>{
    // setTimeout(() => {
    //   setName('ShareTrip')
    // }, 2000)

    setName('ShareTrip')
  }, []);


  if (document.URL.includes("/dashboard")) {
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


