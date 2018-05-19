import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MHUPhoto from '../../assets/mhus.jpg';
import ArmyPhoto from '../../assets/mission-planning.jpg';
import ArmyLogo from "../../assets/logos/army.png";
import USPTOLogo from "../../assets/logos/uspto.png";
import NavyLogo from "../../assets/logos/us-navy.png";
import FEMALogo from "../../assets/logos/fema-logo.png";
import IpsosLogo from "../../assets/logos/ipsos.png";
import CarsLogo from "../../assets/logos/cars.png";
import PPLogo from "../../assets/logos/pioneer-press.png";
import DPLogo from "../../assets/logos/denver-post.png";
import DFMLogo from "../../assets/logos/dfm.png";
import LOCLogo from "../../assets/logos/loc-white.svg";
import BGPhoto from '../../assets/design-sprint.jpg';
import './Projects.css';


const ProjectsLanding = ({ match }) => (
    <div className="projects-page">
        <div className="projects-description container text-standout">
            <h1>Some Past Projects</h1>
            <p>{"Whether it's building a user testing lab for Digital First Media or exploring natural language processing for the Navy, every project I've worked on has helped me grow as a designer. The following case studies should give you a better feel for what I do."}</p>
            <ul className="case-studies">
                <li>
                    <Link to={`${match.url}/us-army`} className="cs-link" project="USArmy">
                        <span className="cs-logo"><img src={ ArmyLogo } alt="US Army Logo" /></span>
                        <span className="cs-details">
                            <span className="cs-label">Case Study</span>
                            <span className="cs-description">Building Applications for Army Commanders</span>
                        </span>
                        <span className="cs-photo"><img src={ArmyPhoto} alt="Photo of mission planning" /></span>
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/fema`} className="cs-link" project="FEMA">
                        <span className="cs-logo"><img src={ FEMALogo } alt="FEMA Logo" /></span>
                        <span className="cs-details">
                            <span className="cs-label">Case Study</span>
                            <span className="cs-description">Tracking Manufactured Homes for FEMA</span>
                        </span>
                        <span className="cs-photo"><img src={MHUPhoto} className="cs-photo" alt="Photo of mission planning" /></span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="project-logos">
            <div className="container">
                <h3>{"Other Organizations I've Worked With"}</h3>
                <div className="logo-row">
                    <div className="logo"><img src={ USPTOLogo } alt="US Patent and Trademark Logo" /></div>
                    <div className="logo"><img src={ LOCLogo } alt="Library of Congress Logo" /></div>
                    <div className="logo circle"><img src={ NavyLogo } alt="US Navy Logo" /></div>
                    <div className="logo"><img src={ IpsosLogo } alt="Ipsos Logo" /></div>
                    <div className="logo"><img src={ DPLogo } alt="Denver Post Logo" /></div>
                    <div className="logo"><img src={ DFMLogo } alt="Digital First Media Logo" /></div>
                    <div className="logo"><img src={ PPLogo } alt="Pioneer Press Logo" /></div>
                    <div className="logo"><img src={ CarsLogo } alt="Cars.com Logo" /></div>
                </div>
            </div>
        </div>
        <div className="background-overlay fixed"></div>
        <img src={BGPhoto} alt="" className="background-image fixed test-lab"/>
    </div>
);


export default ProjectsLanding;
