import React, { Component, View } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import scrollToComponent from 'react-scroll-to-component';
import './Home.css';
import BackgroundPhoto from "../../assets/devices.jpg";

class Home extends Component {
    
    render(){
        return (
            <section className="homepage">
                <div className="title">
                    <h1>Derek Gesin</h1>
                    <h2>User Experience Design</h2>
                    <p>I work with users, development teams, and stakeholders to design technological solutions for complex subjects.</p>
                </div>
                <div className="background-overlay fixed"></div>
                <img className="background-image fixed" src={BackgroundPhoto} alt="Image of typewriter"/>
                <div className="attribution"><a href="https://unsplash.com/@grohsfabian?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from Fabian Grohs">Photo by Fabian Grohs on Unsplash</a></div>
            </section>
        );  
    }
}

export default Home;