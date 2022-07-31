import React, { Fragment } from 'react';
import SampleContextProvider from './contexts/ApiContext';


import LoginScreen from './Screens/LoginScreen';
import Dashboard from "./Screens/Dashboard";



import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();



const App = () => {

  if (document.URL.includes("/dashboard")) {
    return (
        <Fragment>
          <SampleContextProvider>
            <Dashboard></Dashboard>
          </SampleContextProvider>
        </Fragment>
    );
  }
  else {
    return (
        <LoginScreen />
    );
  }

};

export default App;