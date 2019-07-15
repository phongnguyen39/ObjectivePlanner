import React, { Component } from 'react';
import './Infographic.css';
import Collapsible from 'react-collapsible';

// TODO: Making collapsible sections   https://www.npmjs.com/package/react-collapsible
// https://jsfiddle.net/sm7n31p1/1/

let PMinfographic = () => {
    return (
        <div className="infographicStyle">
            <h1>Product Manager Interview Prep</h1>
            <h2>Product Design Questions:</h2>
        
            {/* <Collapsible triggers='Product Design'> */}
                <h4>Use CIRCLES Method:</h4>
                <ul>
                    <li>Comprehend the Situation</li>
                    <li>Ask clarifying Questions</li>
                    <li>Identify many customers' Pain Points</li>
                    <li>Report user Needs - Show Empathy!</li>
                    <li>Cut and Prioritize (ex. using a Matrix)</li>
                    <li>List 3 (Big, Hairy, Creative) Solutions</li>
                    <li>Evaluate Tradeoffs(Pro/Con) pick 1!</li>
                    <li>Summarize and Conclude</li>
                </ul>
            {/* </Collapsible> */}

            <h2>Estimation Questions:</h2>
            <h4>The Top Down Method</h4>
            <ul>
                <li>No. Of US Households</li>
                <li>% that do X or need Y</li>
                <li>% of % that will buy Z</li>
                <li>Adjust and Summarize</li>
            </ul>

            <h4>Bottom Up Approach</h4>
            <ul>
                <li>No of customers per local store</li>
                <li>No of stores per city, then county, then state</li>
                <li>Then Extrapolate to estimate annual per country</li>
                <li>Adjust and Summarize</li>
            </ul>

            <h2>Analytic Metrics</h2>
            <h4>Use Lewis C. Lin's A.A.R.M. Framework: 1. Acquisition - CPC, CPM, UserSignups 2. Activation - Complete Registrations 3. Retention - DAU, MAU, Churn Rate 4. Monetization - Premium Users, LTV</h4>

            <h2>Strategy Questions</h2>
            <ul>
                <li>SWOT Analysis</li>
                <li>5[C’s]</li>
                <li>Porter’s 5 Forces</li>
            </ul>

            <h2>Behavioral Questions</h2>
            <ul>
                <li>STAR (Facebook...)</li>
                <ul>
                    <li>Situation: Set the Scene.</li>
                    <li>Task: What did you have to do?</li>
                    <li>Action: How did you do it?</li>
                    <li>Result: Dish your result and it’s impact!</li>
                </ul>
            </ul>
            <h4>or</h4>

            <ul>
                <li>DIGS (for Google)</li>
                <ul>
                    <li>Dramatize Situation: Paint a Picture of what you had to do.</li>
                    <li>Indicate Alternatives: tell what were the available options?</li>
                    <li>Go Through: what and how you did to accomplish the task?</li>
                    <li>Summarize: by concluding how you result made an impact!</li>
                </ul>
            </ul>
            <h4>(Source: The Product Manager Interview by Lewis C Lin)</h4>
            
        </div>
    )
}
            
export default PMinfographic;