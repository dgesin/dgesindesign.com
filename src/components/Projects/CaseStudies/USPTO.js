import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MdArrowBack} from 'react-icons/lib/md';
import IntroPhoto from '../../../assets/uspto.jpg';

const USArmy = ({ match }) => (
    <div>
        <section className="intro">
            <div className="container">
                <Link to="/projects" className="back-button"><MdArrowBack /></Link>
                <h1 className="study-title">Reinventing Trademark Examining</h1>
            </div>
            <div className="intro-overlay"></div>
            <img src={IntroPhoto} className="intro-image" alt="Photo of mission planning" />
        </section>
        <section className="overview">
            <div className="container">
                <div className="sidebar">
                    <div className="objectives">
                        <h3>Project Objectives</h3>
                        <ul>
                            <li>This is the first objective of the project.</li>
                            <li>This is the second objective of the project.</li>
                            <li>This is the third objective of the project.</li>
                        </ul>
                    </div>
                    <div className="methods">
                        <h3>Tasks/Methods</h3>
                        <ul>
                            <li>Card sorting</li>
                            <li>Design Sprint</li>
                            <li>User Story Mapping</li>
                            <li>Wireframing</li>
                        </ul>
                    </div>
                </div>
                <div className="description">
                    <h2>Overview and Challenges</h2>
                    <div className="challenge">
                        <p>Bacon ipsum dolor amet ham hock short loin porchetta turkey chuck pork loin beef ribs tri-tip salami landjaeger venison shankle filet mignon. Jerky pig tri-tip shankle. Cupim filet mignon meatloaf flank. T-bone jerky buffalo, shankle shank prosciutto pork loin bacon ham fatback frankfurter biltong rump swine. Chuck pork belly porchetta leberkas andouille boudin landjaeger cupim meatloaf turkey. Leberkas ribeye shank, landjaeger pork belly strip steak short loin capicola chicken.</p>
                        <p>Cupim filet mignon meatloaf flank. T-bone jerky buffalo, shankle shank prosciutto pork loin bacon ham fatback frankfurter biltong rump swine. Chuck pork belly porchetta leberkas andouille boudin landjaeger cupim meatloaf turkey. Leberkas ribeye shank, landjaeger pork belly strip steak short loin capicola chicken.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="divider">
        </section>
        <section className="approach">
        </section>
        <section className="controls">
            <div className="previous">
                <Link to="/projects/ipsos" className="previous-button">Previous</Link>
            </div>
            <div className="next">
                <Link to="/projects/fema" className="next-button">Next</Link>
            </div>
        </section>
    </div>
);

export default USArmy;
