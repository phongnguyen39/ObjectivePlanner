import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import InterviewForm from './UserForm/Interview';
import ExamForm from './UserForm/Exam';
import PMInfographic from './Infographic/PMInfographic';
import SREinforgraphic from './Infographic/SREInforgraphic';

// TODO:  Date logic


class App extends Component {
  state = {
    oective: true,
    examType: '',
    jobTitle: '',
    company: '',
    formatPreference: '',
    switchForm: false,
  }

  formPath = (switchForm) => {
    if(switchForm == "Interview"){
      const change = this.state.switchForm;
      this.setState({switchForm: !change})
    }
    if(switchForm == "Exam"){
      const change = this.state.switchForm;
      this.setState({switchForm: !change})
    }    
  }

  render() {
    return (

      <div className="App">

        <div id="intro">
          <h1>Have an exam or interview coming up?</h1>
          <h3>We are here to help...</h3>

          <table cellSpacing='25'>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
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

        <div id='userForm'>
          <div id='form-primer'>
            <h1>Getting Started</h1><br></br>
            <h4>Tell us what you are preparing for so we can provide a customized plan</h4>
          </div>

          <div>
            <Button variant="contained" color="primary" onClick={this.formPath.bind(this, "Interview")} >Interview</Button>

            <Button variant="contained" color="primary" onClick={this.formPath.bind(this, "Exam")}>Exam</Button>

            {this.state.switchForm === true ?
              <div>
                <InterviewForm />
              </div> : <div>
                <ExamForm />
              </div>
            }
          </div>
        </div>
        <PMInfographic />
        <SREinforgraphic />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
      </div>
    );
  }
}

export default App;







