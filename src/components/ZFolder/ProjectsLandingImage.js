import React from 'react';
import './Projects.css';
import ArmyLogo from "./assets/logos/army.png";
import USPTOLogo from "./assets/logos/uspto.png";
import NavyLogo from "./assets/logos/navy.png";
import FEMALogo from "./assets/logos/fema.png";
import IpsosLogo from "./assets/logos/ipsos.png";
import CarsLogo from "./assets/logos/cars.png";
import PPLogo from "./assets/logos/pioneer-press.png";
import DPLogo from "./assets/logos/denver-post.png";
import DFMLogo from "./assets/logos/dfm.png";
import LOCLogo from "./assets/logos/loc.svg";


const ProjectsLandingImage = ({ match }) => (
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
);

export default ProjectsLandingImage;