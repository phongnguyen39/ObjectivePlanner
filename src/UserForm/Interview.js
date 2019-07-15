import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './UserForm.css';

class interviewForm extends Component {
    render() {
        return (
        
            <form action="" method="">

                <div className='formInputs'>
                    <label>Job Title</label>
                    <select>
                        <option>Product Manager</option>
                        <option>Software Engineer</option>
                        <option>Front-End Developer</option>
                        <option>Back-End Developer</option>
                    </select><br></br><br></br>

                    <label>Company</label>
                    <select>
                        <option>Google</option>
                        <option>Facebook</option>
                        <option>Instagram</option>
                    </select><br></br><br></br>

                    <input type='date'></input>

                    {/* <div id='checkboxes'>
                <i className='material-icons md-48'>description</i>
                <i className='material-icons md-48'>mail</i>
                <i className='material-icons md-48'>save</i>
                <i className='material-icons md-48'>calendar_today</i>
            </div> */}

                    {/* <select>
                <option><i className='material-icons md-48'>description</i></option>
                <option><i className='material-icons md-48'>mail</i></option>
                <option><i className='material-icons md-48'>save</i></option>
                <option><i className='material-icons md-48'>calendar_today</i></option>
            </select> */}
                </div>

                <Button variant="contained" color="primary">Submit</Button>
            </form>
         
        )
    }
}

export default interviewForm;