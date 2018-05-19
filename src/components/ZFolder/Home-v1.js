import React, { Component, View } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import scrollToComponent from 'react-scroll-to-component';

class Home extends Component {
    
    render(){
        return (
            <section className="home-page">
                <div className="centered-content">
                    <div className="navigation">
                    </div>
                    <div className="title">
                        <h1>Derek Gesin</h1>
                        <h2>User Experience Architect</h2>
                    </div>
                </div>
                <div className="tour-controls">
                    <div className="previous"><p>Or Take the Tour</p></div>
                    <Menu className="next">
                        <MenuItem><button onClick={() => scrollToComponent(this.AboutSection, { offset: 0, align: 'top', duration: 1500})}>Next Page</button></MenuItem>
                    </Menu>
                </div>
            </section>
        );  
    }
}

export default Home;