import React from 'react';
import Button from '@material-ui/core/Button';
import './UserForm.css';

// https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

const userForm = () => {
    return (
        <div>
            <div id='userForm'>
                <div id='form-primer'>
                    <h1>Getting Started</h1>
                    <h4>Tell us what you are preparing for so we can provide a customized plan</h4>
                </div>
                <form action="" method="">
                    <div class='formLabels'>
                        <label>Objective</label><br></br>
                        <p>If Exam</p><hr></hr>
                        <label>Exam</label><br></br>
                        <label>Job Title *IF ONLY FOR INTERVIEW</label><br></br>
                        <label>Company</label><br></br>
                        <label>Format Preference</label><br></br>

                    </div>

                    <div class='formInputs'>
                        <select>
                            <option>Prepping for an interview</option>
                            <option>Prepping for an exam</option>
                        </select><br></br>
                        <select>
                            <option>GRE</option>
                            <option>AWS Certificaton</option>
                            <option>Cisco Certificaton</option>
                            <option>Back-End Developer</option>
                        </select><br></br>

                        <select>
                            <option>Product Manager</option>
                            <option>Software Engineer</option>
                            <option>Front-End Developer</option>
                            <option>Back-End Developer</option>
                        </select><br></br>

                        <select>
                            <option>Google</option>
                            <option>Facebook</option>
                            <option>Instagram</option>
                        </select><br></br><hr></hr>

                        <select>
                            <option>
                                <i class='material-icons md-48'>description</i></option>
                            <option><i class='material-icons md-48'>mail</i></option>
                            <option><i class='material-icons md-48'>save</i></option>
                            <option><i class='material-icons md-48'>calendar_today</i></option>
                        </select>
                    </div>                    
                    <Button variant="contained" color="primary">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default userForm;


// checkboxes in React
{/* <input type = "checkbox">Google Sheet Document</input> */}
                    {/* <input type = "checkbox" name="pdf" value="pdf">.PDF</input>
                <input type = "checkbox" name="calendar" value="calendar">Google Calendar</input>
                <input type = "checkbox" name="word" value="word">Google Doc</input>

                 <label>When is the big day? Deadline</label><br></br>
                 <input type = "date"></input><br></br>
                  */}