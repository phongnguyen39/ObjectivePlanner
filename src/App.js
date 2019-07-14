import React from 'react';
import UserForm from './UserForm/UserForm';
// import Infographic from './Infographic/Infographic';
import './App.css';

// GOOGLE MATERIAL UI ICONS
// https://material.io/tools/icons/?style=outline
function App() {
  return (

    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
     
      
      <h1>Objective Planner</h1>

      <h3>Have an interview or exam coming up?</h3>
      <p>We are here to help you...</p>
      <ul>
        <li>gather the right materials</li>
        <li>create a schedule</li>
        <li>come up with a game plan!</li>
      </ul>
      <p></p>

      <UserForm />
      {/* <Infographic /> */}
    
    </div>
  );
}

export default App;


