import React, { Component, View } from 'react';
import "./About.css";
import MyPhoto from "../../assets/derek-beach.jpg";
import BackgroundPhoto from "../../assets/typewriter2.jpg";

class About extends Component {
    render(){
        return (
            <div className="section">
                <div className="about-content container">
                    <div className="portrait-image">
                        <img src={ MyPhoto } alt=""/>
                    </div>
                    <div className="about-text text-standout">
                        <h1>My Origin Story</h1>
                        <p>As with many UX Designers, I have walked a winding path to get to where I am. I first pursued a degree in the theater, which taught me how to work with people. This lead me to a career as a corporate recruiter where I began to hone my skills with interviewing.</p>

            <p>My focus shifted to technology when presented with the opportunity to help start a company providing online English tutoring services. Through this venture, I discovered a passion for web design and coding, leading me to return to school to obtain my second {"bachelor's"} degree and begin work as a UX Designer.</p>

<p>Since that time, I have worked for a host of well-known clients on both large scale and exploratory projects. This has allowed me to developed an arsenal of research methods, expertise with prototyping tools, and the ability to use both to organize a project and bring it to life.</p>
                    </div>
                </div>
                <div className="background-overlay fixed"></div>
                <img className="background-image fixed" src={BackgroundPhoto} alt="Image of typewriter"/>
                <div className="attribution">
                    <a href="https://unsplash.com/@amseaman?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Andrew Seaman">Photo by Andrew Seaman on Unsplash</a>
                </div>
            </div>
        );  
    }
}

export default About;