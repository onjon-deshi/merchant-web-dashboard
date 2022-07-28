import React from 'react';
import LoginScreen from './Screens/LoginScreen';
import Dashboard from "./Screens/Dashboard";

import $ from 'jquery';
// import 'jquery-ui-bundle';
// import 'jquery-ui-bundle/jquery-ui.min.css';


$(function () {
  $("#fromDate").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function (selectedDate) {
      $("#toDate").datepicker("option", "minDate", selectedDate);
      $("#toDate").trigger("focus");
    }
  });
  $("#toDate").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function (selectedDate) {
      $("#fromDate").datepicker("option", "maxDate", selectedDate);
    }
  });
});


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


