import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter, 
    Link
} from "react-router-dom";
import { MdArrowBack, MdNavigateBefore, MdNavigateNext } from 'react-icons/lib/md';
import ScrollToTopRoute from '../../Utility/ScrollToTopRoute';
import USArmy from "./USArmy";
import FEMA from "./FEMA";
import FEMALogo from "../../../assets/logos/fema-logo.png";
import MHUPhoto from '../../../assets/mhus.jpg';

class App extends Component {    
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <div>
                <section className="other-projects">
                    <div className="return">
                        <Link to="/projects" className="back-button"><MdArrowBack />
                            <span className="label">Return to Projects Page</span>
                        </Link>
                    </div>
                    <ul className="case-studies">
                        <li>
                            <Link to={`/projects/` + this.props.casestudy} className="cs-link">
                                <span className="cs-logo"><img src={ FEMALogo } alt="FEMA Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Tracking Manufactured Homes for FEMA</span>
                                </span>
                                <span className="cs-photo"><img src={MHUPhoto} className="cs-photo" alt="Photo of mission planning" /></span>
                            </Link>
                        </li>
                    </ul>
                </section>
                <div className="content">
                    <ScrollToTopRoute path="../us-army" component={USArmy}/>
                    <ScrollToTopRoute path="../fema" component={FEMA}/>
                </div>                    
            </div>
        );
    }
}

export default App;