import React from 'react';
import Button from '@material-ui/core/Button';
import { mdiAccount } from '@mdi/js'
import Icon from '@mdi/react'

    // https://dev.materialdesignicons.com/getting-started/react
    // https://materialdesignicons.com/
    // https://cdn.materialdesignicons.com/3.7.95/
    // https://material-ui.com/api/icon/
    // https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd

const userForm = () => {



    return (
        <div>
            <form action="" method="">
                <label>Objective</label><br></br>
                <select>
                    <option>Prepping for an interview</option>
                    <option>Prepping for an exam</option>
                </select><br></br>

                <p>If Exam</p><hr></hr>
                <label>Exam</label><br></br>
                <select>
                    <option>GRE</option>
                    <option>AWS Certificaton</option>
                    <option>Cisco Certificaton</option>
                    <option>Back-End Developer</option>
                </select><br></br>

                <p>If Interview</p><hr></hr>
                <label>Job Title *IF ONLY FOR INTERVIEW</label><br></br>
                <select>
                    <option>Product Manager</option>
                    <option>Software Engineer</option>
                    <option>Front-End Developer</option>
                    <option>Back-End Developer</option>
                </select><br></br>

                <label>Company</label><br></br>
                <select>
                    <option>Google</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                </select><br></br><hr></hr>

                <label>Format Preference</label><br></br>

                <i class='material-icons'>description</i>
                <i class='material-icons'>mail</i>
                <i class='material-icons'>save</i>
                <i class='material-icons'>calendar_today</i>


                {/* <input type = "checkbox">Google Sheet Document</input> */}
                {/* <input type = "checkbox" name="pdf" value="pdf">.PDF</input>
                <input type = "checkbox" name="calendar" value="calendar">Google Calendar</input>
                <input type = "checkbox" name="word" value="word">Google Doc</input>

                 <label>When is the big day? Deadline</label><br></br>
                 <input type = "date"></input><br></br>
                  */}
                <br></br>
                <Button variant="contained" color="primary">Submit</Button>

            </form>
        </div>
    )
}

export default userForm;