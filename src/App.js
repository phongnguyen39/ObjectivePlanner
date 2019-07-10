import React from 'react';
import UserForm from './UserForm/UserForm';
import './App.css';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">

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
    </div>
  );
}

export default App;


