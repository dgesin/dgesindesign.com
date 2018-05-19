import React, { Component } from 'react';
import Menu, { MenuItem } from 'rc-menu';
import './SectionArrows.css';
import scrollToComponent from 'react-scroll-to-component';

class SectionArrows extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            previous: "HomeSection";
            next: "AboutSection";
        }
    }

    render(){
        return(
            <div className="tour-controls">
                <Menu className="previous">
                    <MenuItem><button onClick={() => scrollToComponent({this.state.previous}, { offset: 0, align: 'top', duration: 1500})}>Previous Page</button></MenuItem>
                </Menu>
                <Menu className="nav-menu">
                    <MenuItem><button onClick={() => scrollToComponent({this.state.next}, { offset: 0, align: 'top', duration: 1500})}>Next Page</button></MenuItem>
                </Menu>
            </div>
        );
    }
    
}

export default SectionArrows;

