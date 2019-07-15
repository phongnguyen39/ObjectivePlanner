import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ExamForm extends Component {
    render() {
        return (
            <form action="" method="">

                <div className='formInputs'>
                    <select>
                        <option>GRE</option>
                        <option>AWS Certificaton</option>
                        <option>Cisco Certificaton</option>
                        <option>Back-End Developer</option>
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

export default ExamForm;