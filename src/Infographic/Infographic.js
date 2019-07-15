import React, { Component } from 'react';
// import './Infographic.css';

import '../Infographic/infographic.JPG';

// var data = [
//     {
//         slist: ['49, 100%, 54%', '33, 96%, 50%'],
//         icon: '🍊',
//         title: 'Product Design',
//         ptext: 'CIRCLES Method: See Details Below:--   1. Comprehend the Goddamn Situation 2. Identify many customers\' Pain Points 3. Report user Needs - Show Empathy! 4. Cut and Prioritize (ex. using a Matrix) 5. List 3 (Big, Hairy, Creative) Solutions 6. Evalauate Tradeoffs(Pro/Con) pick 1! 7. Summarize and Conclude'
//     }, {
//         slist: ['169, 50%, 44%', '191, 99%, 27%'],
//         icon: '🍇',
//         title: 'Estimation',
//         ptext: 'Use Top Down or Bottom Up Approach'
//     },
//     {
//         slist: ['82, 81%, 52%', '104, 56%, 51%'],
//         icon: '🍐',
//         title: 'Analytic Metrics',
//         ptext: 'Use Lewis C. Lin\'s A.A.R.M. Framework: 1. Acquisition - CPC, CPM, UserSignups 2. Activation - Complete Registrations 3. Retention - DAU, MAU, Churn Rate 4. Monetization - Premium Users, LTV'
//     },
//     {
//         slist: ['169, 50%, 44%', '191, 99%, 27%'],
//         icon: '🍇',
//         title: 'Strategy',
//         ptext: 'Porters 5 Forces [5Cs]- SWOT Analysis'
//     },
//     {
//         slist: ['332, 94%, 67%', '338, 101%, 59%'],
//         icon: '🍓',
//         title: 'Behavioral Stuff',
//         ptext: 'STAR (Facebook...) or DIGS (for Google)'
//     }
// ];
// var n = data.length;

// for (var i = 0; i < n; i++) {
//     console.log(article)
//     article(data - icon=`${data[i].icon}` 
// 					style = `--hsl0: ${data[i].slist[0]}; --hsl1: ${data[i].slist[1]}; 
// 								 --idx: ${i}`)
//     h3
//     h4 #{ data[i].title }
//     p #{ data[i].ptext }

// }

let infographic = (data) => {
    return (
        <div>          
            <img src='../Infographic/infographic.JPG'></img>
        </div>
    )
}

export default infographic;