import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter, 
    Link
} from "react-router-dom";

class MainNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            isHidden: false
        }
    }
        
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render(){
        return(
            <div role="mobile">
                <ul className="menu">
                    <li className="menu-item"><NavLink to="/" onClick={this.toggleHidden.bind(this)}>Home</NavLink></li>
                    <li className="menu-item"><NavLink to="/about" onClick={this.toggleHidden.bind(this)}>About</NavLink></li>
                    <li className="menu-item"><NavLink to="/projects" onClick={this.toggleHidden.bind(this)}>Projects</NavLink></li>
                    <li className="menu-item"><NavLink to="/resume" onClick={this.toggleHidden.bind(this)}>Resum&eacute;</NavLink></li>
                    <li className="menu-item"><NavLink to="/contact" onClick={this.toggleHidden.bind(this)}>Contact</NavLink></li>
                </ul>               
            </div>
        );
    }
    
}

export default MainNav;

