import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MdArrowBack, MdNavigateBefore, MdNavigateNext} from 'react-icons/lib/md';
import IntroPhoto from '../../../assets/market-research.jpg';
import STPhoto from '../../../assets/tile-4.jpg';
import WFPhoto from '../../../assets/ipsos-wireframe.jpg';

const USArmy = ({ match }) => (
    <div>
        <section className="intro">
            <Link to="/projects" className="back-button"><MdArrowBack /></Link>
            <div className="centered-content">
                <h1 className="study-title">Creating a Testing Platform for Ipsos</h1>
            </div>
            <div className="background-overlay"></div>
            <img src={IntroPhoto} className="background-image" alt="Photo of marketers" />
        </section>
        <section className="overview">
            <div className="container">
                <h2>Overview</h2>
                <div className="challenge">
                    <p>WIth offices around the globe and over $500 billion in annual revenue, Ipsos is aa trusted name in market research for many Fortune 500 companies. In an effort to find new ways of gathering user data, they wanted to build a testing platform to help them assess the effectiveness of their {"clients'"} advertising. This included integration of multiple analytics platforms and the ability to quickly build custom websites that behave similar to the websites that their customers advertise on.</p>
                    <p>My role was to design the testing platform and initial website, as well as working with stakeholders to develop a path for demonstrating the viability of the platform for the overall organization. We worked with the executive team at Ipsos to understand requirements and build the initial proof of concept. We then helped to transition the product to their internal development team to scale the project for global release.</p>
                </div>
            </div>
        </section>
        <section className="methods">
            <div className="container">
                <h2>Tasks/Methods</h2>
                <ul>
                    <li>Stakeholder Interviews</li>
                    <li>Visual Design</li>
                    <li>Wireframing</li>
                    <li>Front-end Development</li>
                </ul>
            </div>
            <div className="background-overlay"></div>
            <img src={STPhoto} className="background-image top-align" alt="Photo of FEMA homes." />
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
                        <img src={STPhoto} alt="" />
                    </div>
                </div>
                <div className="step-right">
                    <div className="step-text">
                        <h3>Identifying User Needs</h3>
                        <p>With user groups located all over the country, we had to organize and manage a complex schedule of <b>user interviews and contextual inquiries</b>. We conducted interviews to learn about and <b>document user workflows and the information requirements</b>. We then performed contextual inquiries to observe critical workflows in person and <b>identify environmental considerations</b>. Some of the work observed included traveling to Texas to observe site inspectors and installation crews working on recovery from Hurricane Harvey, going to a long-term storage facility to see where they store the homes and commodities (e.g. water, blankets, etc.) that are provided when a distaster occurs, and touring a manufacturing facility to observe homes being built. We then created a series of <b>experience maps to communicate findings</b> by outlining user tasks, data being used or generated, and other key insights.</p>
                    </div>
                    <div className="step-image">
                        <img src={WFPhoto} alt="" />
                    </div>
                </div>
            </div>
        </section>  
        <section className="controls">
            <div className="previous">
                <Link to="/projects/us-army" className="previous-button">
                    <div className="previous">
                        <MdNavigateBefore className="icon"/>
                        <p>Previous Case Study</p>
                    </div>
                </Link>
            </div>
            <div className="next">
                <Link to="/projects/fema" className="next-button">
                    <div className="next">
                        <MdNavigateNext className="icon"/>
                        <p>Next Case Study</p>
                    </div>
                </Link>
            </div>
        </section>
    </div>
);


export default USArmy;
