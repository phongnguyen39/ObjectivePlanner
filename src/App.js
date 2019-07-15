import React from 'react';
import UserForm from './UserForm/UserForm';
import Infographic from './Infographic/Infographic';
import './App.css';

function App() {
  return (

    <div className="App">

      <div id="intro">
        <h1>Have an exam or interview coming up?</h1>
        <h3>We are here to help...</h3>

        <table cellSpacing='25'>
          <thead>
            <th></th>
            <th></th>
          </thead>
          <tbody>
          <tr>
            <td><i className='material-icons md-48'>calendar_today</i></td>
            <td>Gather the right prep materials</td>
          </tr>
          <tr>
            <td><i className='material-icons md-48'>description</i></td>
            <td>Create a schedule</td>
          </tr>
          <tr>
            <td><i className='material-icons md-48'>toc</i></td>
            <td>Come up with a game plan</td>
          </tr>
          </tbody>
        </table>
        <i className='material-icons md-48'>expand_more</i>
      </div>
      
      <UserForm />
      <Infographic />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
    </div>
  );
}

export default App;


