import React from "react";
import { NavItem } from "reactstrap";


const AboutTeam = () => (

    <div>
    <div className="teamStyle">
    <ul className="borderUL">
        <li>Phillip Stepanov</li>
        <li>Rostislav Donika</li>
        <li>Pavlo Melnik</li>
        <li>Mahendra Adhikari</li>
        <li>Faculty Advisor: Dr. Pong Chu</li>
        <li>Industry Sponsor: Aaron Lorkowski</li>
    </ul>
    <ul className="borderULL">
    <li>Spring Semester 2020</li>
    <li>Course EEC 494</li>
    <li>Cleveland State University</li>
    </ul>
    
    
    </div>

    <div className="imageTeamSize">
    <img
    className="imageTeam"
    src="https://www.cavobuilderssupplies.com/wp-content/uploads/2013/10/Oatey-logo.jpg"
  />
  <img className="imageTeam" 
  src="https://www.jointheforcenow.com/wp-content/uploads/2016/09/Events-CSU.jpg"/>
    </div>
    </div>

);

export default AboutTeam; 