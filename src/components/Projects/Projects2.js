import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Projects.css';
import ProjectsLanding from "./ProjectsLanding.js";
import USArmy from ".CaseStudies/USArmy";
import Ipsos from "./CaseStudies/Ipsos";
import FEMA from "./CaseStudies/FEMA";
import USPTO from "./CaseStudies/USPTO";

class Projects extends Component = ({ match }) => {
    
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
    <div>
        <div className="projects-description">
            <h1 className="project-title">{"Some people I've worked with"}</h1>
            <p className="project-copy">Bacon ipsum dolor amet ham hock short loin porchetta turkey chuck pork loin beef ribs tri-tip salami landjaeger venison shankle filet mignon. Jerky pig tri-tip shankle. Cupim filet mignon meatloaf flank. T-bone jerky buffalo, shankle shank prosciutto pork loin bacon ham fatback frankfurter biltong rump swine. Chuck pork belly porchetta leberkas andouille boudin landjaeger cupim meatloaf turkey. Leberkas ribeye shank, landjaeger pork belly strip steak short loin capicola chicken.</p>
        </div>
        <ul className="projects-menu">
            <li>
                <Link to={`${match.url}/us-army`} component="USArmy">Case Study {"1:"} Mission Planning for the US Army</Link>
            </li>
            <li>
                <Link to={`${match.url}/uspto`} component="USPTO">Case Study {"2:"} Reinventing Trademark Examining</Link>
            </li>
            <li>
                <Link to={`${match.url}/fema`} component="FEMA">Case Study {"3:"} Tracking Manufactured Homes for FEMA</Link>
            </li>
            <li>
                <Link to={`${match.url}/ipsos`} component="Ipsos">Case Study {"4:"} Building a Testing Platform for Ipsos</Link>
            </li>
        </ul>
        <div className="project-logos">
            <div className="row">
                <div className="logo"><img src={ ArmyLogo } alt="US Army Logo" /></div>
            </div>
            <div className="row">
                <div className="logo"><img src={ USPTOLogo } alt="US Patent and Trademark Logo" /></div>
                <div className="logo"><img src={ FEMALogo } alt="FEMA Logo" /></div>
            </div>
            <div className="row">
                <div className="logo"><img src={ LOCLogo } alt="Library of Congress Logo" /></div>
                <div className="logo"><img src={ NavyLogo } alt="US Navy Logo" /></div>
                <div className="logo"><img src={ IpsosLogo } alt="Ipsos Logo" /></div>
            </div>
            <div className="row">
                <div className="logo"><img src={ DPLogo } alt="Denver Post Logo" /></div>
                <div className="logo"><img src={ DFMLogo } alt="Digital First Media Logo" /></div>
                <div className="logo"><img src={ PPLogo } alt="Pioneer Press Logo" /></div>
                <div className="logo"><img src={ CarsLogo } alt="Cars.com Logo" /></div>
            </div>
        </div>
    </div>
        );
    }
}

export default Projects;

