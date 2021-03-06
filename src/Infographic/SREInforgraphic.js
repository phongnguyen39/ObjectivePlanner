import React, { Component } from 'react';
import './Infographic.css';
import Collapsible from 'react-collapsible';

let SREinforgraphic = () => {
    return (
        <div className="infographicStyle">
            <h1>Software Developer Interview Prep</h1>

            
            <Collapsible className='fontLarge' trigger={'> Analytical & Problem Solving I / II / III:'}>
            <ul>
                <li>Did you need much help solving the problem?</li>

                <li> How optimal was your solution? How long did it take you to arrive at a solution?</li>

                <li>If you had to design/architect a new solution, did you structure the problem well and think through the tradeoffs of different decisions? </li>

                <li>I - Data Structures - Stacks, Queues, Linked Lists, Arrays, Trees, HashMaps</li>
                    
        <li>II - Algorithms - Search Algos: BinarySearch, Sort Algos: Insertion Sort, Recursion</li>
                    
        <li>III - Time & Space Complexity: Big - O Notation: O(1) - O(N) - O(log(N)) - O(N2 )</li>
                            </ul>
                            </Collapsible>


        
            <Collapsible className='fontLarge' trigger={'> White-boarding &/or Coding Skills:'}>
            
                <li>Understand Problem and what data structure / algorithms to apply</li>

                <li>Translate as you talk out loud to ask clarifying questions</li>

                <li> Whiteboard your (base case if necessary ) solution into pseudo code and T-Diagram</li>

                <li>If it’s a live coding challenge, make sure you wrote runnable code</li>

                <li>Code cleanliness & Organization is important so follow proper guidelines and good coding styles</li>

                <li>Think of Edge cases and Potential Errors and adjust solution as necessary</li>
                </Collapsible>

        
        <Collapsible className='fontLarge'  trigger={'> Past Experience OR Portfolio Projects:'}>
                 
            <li>Experience: Have you made good technical decisions in the past?</li>
                    <li>Have you built interesting, challenging projects?</li>
                    <li> Have you shown drive, initiative, and other important factors? </li>
                    </Collapsible>
            
        
        <Collapsible className='fontLarge'  trigger={'> Communication Skills/ Culture Fit:'}>
                     
            <li>Do your personality and values fit with the company and team?</li>
                        <li>Did you communicate well with your interviewer? </li>
                        </Collapsible>

            
                            
                            <Collapsible className='fontLarge'  trigger={'> Technical Knowledge/ CS Fundamentals:'}>                        <li>Do you have a strong foundation in computer science and the relevant technologies?</li>
                        <li>If you don’t come from a CS background, familiarize yourself with at least with job specific info. </li>
    <h4>Company/Role specific Preparation</h4>
            
        < li >Read the company’s mission and vision statements to get an idea of their north star.</li>
                        <li>Reverse Engineer job description and requirements to tailor well thought out answers.</li>
                        </Collapsible>
       <p>(Source: Cracking the Coding Interview by Gayle L. McDowell)</p>
                
                    </div>
        )  
    }
             

export default SREinforgraphic;