import React from 'react'
import ResumeFile from './Kylee Resume.docx'
import { ResumeContainer } from './Resumestyles'


const Resume = () => {


    return (
        <ResumeContainer>
            <h1 class = "resume">Resume</h1>
            <a href={ResumeFile} className="resumeButton" download="./Kylee Resume.docx" target="_blank" rel="noopender noreferrer">Download Resume </a>
          <h3 class = "front">Front End Proficiencies:</h3>
        <ul class = "frontend">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>The Dom</li>
          <li>APIs</li>
          <li>JSON</li>
          <li>React</li>
          <li>PWAs</li>
        </ul>
      
    
      <h3 class = "back">Back End Proficiencies:</h3>
        <ul class = "backend">
          <li>Node</li>
          <li>OOP</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MVC Paradigm</li>
          <li>Sequelize</li>
          <li>Testing</li>
          <li>NoSQL</li>
          <li>MERN Stack</li>
        </ul>
        </ResumeContainer>
    )
}

export default Resume