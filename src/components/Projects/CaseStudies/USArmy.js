import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CaseStudy.css';
import { MdArrowBack, MdNavigateBefore, MdNavigateNext } from 'react-icons/lib/md';
import HomePhoto from '../../../assets/mission-planning.jpg';
import MHUPhoto from '../../../assets/mhus.jpg';
import FEMALogo from "../../../assets/logos/fema-logo.png";
import InstallationPhoto from '../../../assets/installation.jpg';
import SIPhoto from '../../../assets/stakeholder-interviews.jpg';
import MapPhoto from '../../../assets/map-interface.png';
import USMPhoto from '../../../assets/user-story-map.jpg';
import GDTAPhoto from '../../../assets/gdta.jpg';
import DSPhoto from '../../../assets/design-studio.png';
import MPDesignPhoto from '../../../assets/multiplatform-design.png';



class USArmy extends Component {

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
                        <h1 className="study-title text-standout">Building Applications for Army Commanders</h1>
                    </div>
                    <div className="background-overlay"></div>
                    <img src={HomePhoto} className="background-image" alt="Photo of mission planning" />
                </section>
                <section className="overview">
                    <div className="container">
                        <h2>Overview</h2>
                        <p>The goal of this project was to <b>build a development framework that could be used to create multi-device applications</b> that help Army commanders transition between command environments (e.g. At a command post, mounted in a transport, etc.). Rather than focusing on building a framework, though, we <b>aimed to design applications that allowed us to develop framework components using realworld scenarios</b>.</p>
                        <p>We employed a user-centered design approach, conducting <b>user research with Army commanders</b> to understand workflows and determine capabilities needed. This allowed us to <b>design a mission planning application</b> that integrates realtime collaboration with the ability to quickly extract and link information from the various sources used during the planning process.</p>
                    </div>
                </section>
                <section className="methods">
                    <div className="container">
                        <h2>Tasks/Methods</h2>
                        <ul>
                            <li>User Interviews</li>
                            <li>Goal Directed Task Analysis</li>
                            <li>Design Sprints</li>
                            <li>Design Studios</li>
                            <li>Experience Mapping</li>
                            <li>User Story Mapping</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Usability Testing</li>
                        </ul>
                    </div>
                    <div className="background-overlay"></div>
                    <img src={MapPhoto} className="background-image" alt="Photo of FEMA homes." />
                </section>
                <section className="process">
                    <div className="container">
                        <h2>Process</h2>
                        <div className="step-fullwidth">
                            <div className="step-text">
                                <h3>Determining the {"User's"} Need</h3>
                                <p>During the first phase of the project we conducted a <b>series of user interviews with Army commanders</b>, including the head of the {"Army's"} Training and Doctrine Command (TRADOC). Through these sessions, we learned that offline capabilities were a primary objective that the toolkit would have to address. We also <b>conducted interviews with developers</b> and discovered that they were apprehensive about using lesser known frameworks since they are often not supported well. They did, however, integrate smaller development tools into their projects frequently. These findings lead our team to pivot from building a framework to designing a toolkit comprised of multiple development tools that can be integrated all together or separately. We also decided to <b>use React Native</b> as the core library so that developers can <b>deploy native applications</b> and provide offline features.</p>
                            </div>
                        </div>
                        <div className="step-left">
                            <div className="step-text">
                                <h3>Understanding Tasks and Information Requirements</h3>
                                <p>To understand the role of an Army commander, we needed to have a clear understanding of the tasks and information that they require. We contracted a two-star general to act as our primary subject matter expert (SME) and over the span of many interviews, <b>developed a goal-directed task analysis</b> to outline the {"commander's"} workflows and <b>determine how to improve situational awareness and decision making.</b></p>
                            </div>
                            <div className="step-image">
                                <img src={GDTAPhoto} alt="" />
                            </div>
                        </div>
                        <div className="step-fullwidth">
                            <div className="step-text">
                                <h3>Moving from Discovery to Design</h3>
                                <p>We <b>conducted workshops to ideate on solutions</b> for the problems discovered in the task analysis. Through the workshops and continued user research, we created a concept for a realtime collaboration application based around the military decision-making process used by the Army for mission planning. Our work was structured using two weeks sprints, grouped into blocks consisting of five sprints. For each block, our team determined a set of high-level capabilities that we wanted to address and <b>I was tasked with coordinating and facilitating the regular planning workshops</b>. Since our team was located on both east and west coasts, we <b>used RealtimeBoard to run remote workshops</b>. We started the first couple blocks by <b>conducting Design Sprints</b>. As the project progressed and our application concept became well defined, we focused more on <b>User Story Mapping to identify and estimate the backlog of user stories for each block.</b></p>
                            </div>
                            <div className="step-image">
                                <img src={DSPhoto} alt="" />
                            </div>
                        </div>
                        <div className="step-left">
                            <div className="step-text">
                                <h3>Designing for Multi-platform Products</h3>
                                <p>Each planning workshop yielded a set of paper sketches and additional ideas. <b>I was tasked with converting these sketches into visual designs to be validated with users</b>. I worked closely with the developers and project manager to identify design considerations and then <b>create wireframes and high-fidelity comps using Sketch</b>. Since the project required iOS, Android, and web versions of each design, I <b>devised templates that could be used to create multiplatform designs efficiently</b>. Finally, we <b>created clickable prototypes using Atomic</b> that we used to <b>conduct usability testing</b> and gather feedback.</p>
                            </div>
                            <div className="step-image">
                                <img src={MPDesignPhoto} alt="" />
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
                            <Link to={`/projects/fema`} className="cs-link" project="FEMA">
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
            </div>
        );
    }
}

export default USArmy;
