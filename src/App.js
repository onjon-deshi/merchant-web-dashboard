import React from 'react';
import MainLayout from './Screens/MainLayout';
import DashboardLayout from "./Screens/DashboardLayout";

const App = () => {

  if( document.URL.includes("/home/") ) {
      return (
        <DashboardLayout />
      );
  }
  else {
      return (
        <MainLayout />
      );
  }
  
};

export default App;


