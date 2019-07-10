import React from 'react';

const userForm = () =>{
    return(
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
            
                {/* FIXME:  checkboxes with react*/}
                {/* <input type = "checkbox">Google Sheet Document</input> */}
                {/* <input type = "checkbox" name="pdf" value="pdf">.PDF</input>
                <input type = "checkbox" name="calendar" value="calendar">Google Calendar</input>
                <input type = "checkbox" name="word" value="word">Google Doc</input>

                 <label>When is the big day? Deadline</label><br></br>
                 <input type = "date"></input><br></br>
                  */} 
                  <br></br>
                 <button type ="submit">Submit</button>                                         
            </form>

        </div>
    )
}

export default userForm;