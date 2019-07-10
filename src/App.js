import React from 'react';
import UserForm from './UserForm/UserForm';
import './App.css';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

function App() {
  return (
    <div className="App">

      <h1>Value Proposition</h1>



      <Icon>add_circle</Icon>
      <Typography variant="srOnly">Create a user</Typography>

      <p>Instead words have a .GIF that caroseuls through .Word, iCAL, .pDF, .spreadsheet</p>
      <p>What are you prepping for?</p>
      <UserForm />


    </div>
  );
}

export default App;


