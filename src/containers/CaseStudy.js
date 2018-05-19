import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import USArmy from "../components/Projects/CaseStudies/USArmy";
import Ipsos from "../components/Projects/CaseStudies/Ipsos";
import FEMA from "../components/Projects/CaseStudies/FEMA";
import USPTO from "../components/Projects/CaseStudies/USPTO";

class CaseStudy extends Component (
    constructor(props) = {
        super(props);
    }
    
    render(){
        return(
            <div className="section">
                <Route exact path={`${match.url}/{props.caseStudy}`} component={props.caseStudy}/>
            </div>
        );
    }
);


export default CaseStudy;
