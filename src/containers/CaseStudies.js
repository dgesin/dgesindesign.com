import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter, 
    Link
} from "react-router-dom";
import ScrollToTop from './components/Utility/ScrollToTop';
import DGLogo from './assets/dg-logo.png';
import {MdMenu} from 'react-icons/lib/md';
import './App.css';
import './components/Header/Header.css';
import USArmy from "./components/Projects/CaseStudies/USArmy";
import FEMA from "./components/Projects/CaseStudies/FEMA";

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
                            <Link to={`../fema`} className="cs-link" project="FEMA">
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
                    <Route path="../us-army" component={USArmy}/>
                    <Route path="../fema" component={FEMA}/>
                </div>                    
            </div>
        );
    }
}

export default App;