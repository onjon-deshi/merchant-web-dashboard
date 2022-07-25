import React from 'react';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from "./Screens/Dashboard";



const App = () => {

  if (document.URL.includes("/dashboard")) {
    return (
      <Dashboard />
    );
  }
  else {
    return (
      <LoginScreen />
    );
  }

};

export default App;


