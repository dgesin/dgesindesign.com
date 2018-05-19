import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MdArrowBack, MdNavigateBefore, MdNavigateNext  } from 'react-icons/lib/md';
import HomePhoto from '../../../assets/mhus.jpg';
import ArmyPhoto from '../../../assets/mission-planning.jpg';
import ArmyLogo from "../../../assets/logos/army.png";
import InstallationPhoto from '../../../assets/installation.jpg';
import SIPhoto from '../../../assets/stakeholder-interviews.jpg';
import InspectorPhoto from '../../../assets/site-inspector.jpg';
import USMPhoto from '../../../assets/user-story-map.jpg';

class FEMA extends Component {
    
    componentDidMount(prevProps) {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(  
            <div>
                <section className="intro">
                    <div className="return">
                        <Link to="/projects" className="back-button"><MdArrowBack />
                            <span className="label">Return to Projects Page</span>
                        </Link>
                    </div>
                    <div className="centered-content">
                        <h1 className="study-title text-standout">Tracking Manufactured Homes for FEMA</h1>
                    </div>
                    <div className="background-overlay"></div>
                    <img src={InstallationPhoto} className="background-image" alt="Photo of FEMA home." />
                </section>
                <section className="overview">
                    <div className="container">
                        <h2>Overview</h2>
                        <div className="challenge">
                            <p>When a disaster occurs, one of the functions of FEMA is to provide manufactured homes and travel trailers to survivors whose homes are no longer habitable. These homes move through a large lifecycle that goes from being manufactured to storage to installation to occupancy to deactivation and finally to being sold. Each leg of this process takes a multitude of teams to execute and track.</p>
                            <p>FEMA needed a lifecycle management application to capture the data produced by these teams and use it to drive decisions in the future. I was hired to lead the research team tasked with learning each stage of this process and developing requirements for the tool they would need to acquire.</p>
                        </div>
                    </div>
                </section>
                <section className="methods">
                    <div className="container">
                        <h2>Tasks/Methods</h2>
                        <ul>
                            <li>Stakeholder Interviews</li>
                            <li>User Interviews</li>
                            <li>Contextual Inquiries</li>
                            <li>Affinity Mapping</li>
                            <li>User Personas</li>
                            <li>Experience Mapping</li>
                            <li>User Story Mapping</li>
                        </ul>
                    </div>
                    <div className="background-overlay"></div>
                    <img src={HomePhoto} className="background-image" alt="Photo of FEMA homes." />
                </section>
                <section className="process">
                    <div className="container">
                        <h2>Process</h2>
                        <div className="step-left">
                            <div className="step-text">
                                <h3>Understanding Business Objectives</h3>
                                <p>Through a series of <b>stakeholder interviews</b>, our team was able to identify the primary business objectives for the project in order to create an initial set of requirements. Interviews were conducted both in person and remotely, will all data being entered into RealtimeBoard. We then used <b>affinity mapping to categorize findings</b> and identify key insights. Through this process, we identified crucial information about the project such as <b>expected outcomes, challenges to overcome, primary user roles, and more.</b></p>
                            </div>
                            <div className="step-image">
                                <img src={SIPhoto} alt="" />
                            </div>
                        </div>
                        <div className="step-right">
                            <div className="step-text">
                                <h3>Identifying User Needs</h3>
                                <p>With user groups located all over the country, we had to organize and manage a complex schedule of <b>user interviews and contextual inquiries</b>. We conducted interviews to learn about and document<b> user workflows and the information requirements</b>. We then performed contextual inquiries to observe critical workflows in person and <b>identify environmental considerations</b>. Some of the work observed included traveling to Texas to observe site inspectors and installation crews working on recovery from Hurricane Harvey, going to a long-term storage facility to see where they store the homes and commodities (e.g. water, blankets, etc.) that are provided when a distaster occurs, and touring a manufacturing facility to observe homes being built. We then created a series of <b>experience maps to communicate findings</b> by outlining user tasks, data being used or generated, and other key insights.</p>
                            </div>
                            <div className="step-image">
                                <img src={InspectorPhoto} alt="" />
                            </div>
                        </div>
                        <div className="step-fullwidth">
                            <div className="step-text">
                                <h3>Building a Backlog</h3>
                                <p>The research we have done provides the requirements necessary for a system to meet {"FEMA's"} needs. As we move into the next phase of the project, we are <b>converting the workflows researched into the backbone of a user story map.</b> Organizing the user workflows and required capabilites in this manner provides a foundation that <b>allows the development team to begin identifying specific user stories for development and create a release schedule to manage the project going forward.</b></p>
                            </div>
                            <div className="step-image">
                                <img src={USMPhoto} alt="" />
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="other-projects">
                    <div className="return">
                        <Link to="/projects" className="back-button"><MdArrowBack />
                            <span className="label">Return to Projects Page</span>
                        </Link>
                    </div>
                    <ul className="case-studies">
                        <li>
                            <Link to={`/projects/us-army`} className="cs-link" project="USArmy">
                                <span className="cs-logo"><img src={ ArmyLogo } alt="US Army Logo" /></span>
                                <span className="cs-details">
                                    <span className="cs-label">Case Study</span>
                                    <span className="cs-description">Building Applications for Army Commanders</span>
                                </span>
                                <span className="cs-photo"><img src={ArmyPhoto} alt="Photo of mission planning" /></span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}

export default FEMA;
