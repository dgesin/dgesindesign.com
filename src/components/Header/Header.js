import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import './components/Header/Header.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectsMenu from "./components/Projects/ProjectsMenu";
import Contact from './components/Contact/Contact';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isHidden: true
        }
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render(){
        return(
            <div>
            <HashRouter>
                <div className="header">
                    <div>
                        <ul className="menu">
                            <li className="menu-item"><NavLink to="/" onClick={this.toggleHidden.bind(this)}>Home</NavLink></li>
                            <li className="menu-item"><NavLink to="/about" onClick={this.toggleHidden.bind(this)}>About</NavLink></li>
                            <li className="menu-item"><NavLink to="/skills" onClick={this.toggleHidden.bind(this)}>Skills</NavLink></li>
                            <li className="menu-item"><NavLink to="/projects" onClick={this.toggleHidden.bind(this)}>Projects</NavLink></li>
                            <li className="menu-item"><NavLink to="/contact" onClick={this.toggleHidden.bind(this)}>Contact</NavLink></li>
                        </ul>
                    </div>                   
                </div>
            </HashRouter>
            </div>
        );
    }
    
}

export default Header;

