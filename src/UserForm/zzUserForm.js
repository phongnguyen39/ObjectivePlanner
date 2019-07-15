import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './UserForm.css';
import InterviewForm from './Interview';
import Exam from './Exam';

// https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

// https://codesandbox.io/s/9422zoz33w
// http://jsfiddle.net/mynameisdonald/dXdq6/


class userForm extends Component {

    state = {
        objective: 'Interview',
        examType: '',
        jobTitle: '',
        company: '',
        formatPreference: ''
    }

    formPath = (userSelection) => {
        console.log(userSelection)
        if (userSelection == 'Interview') {
            console.log('first condition met')
            this.userSelection = 'Exam';
            this.setState({
                objective: this.userSelection
            });
        }
        else {
            this.userSelection = 'Interview';
            this.setState({
                objective: this.userSelection
            })
        }
    }

    render() {
    
        
    return(       
        <div id = 'userForm' >
            <div id='form-primer'>
                <h1>Getting Started</h1><br></br>
                <h4>Tell us what you are preparing for so we can provide a customized plan</h4>
            </div>

            <div className='formInputs' >
                <Button variant="contained" color="primary" onClick={this.formPath.bind(this,"Interview")} >Interview</Button>

                <Button variant="contained" color="primary" onClick={this.formPath.bind(this,"Exam")}>Exam</Button>
                
                <InterviewForm />
                <Exam />
            </div>
        </div>
        )
    }
}
        
export default userForm;
