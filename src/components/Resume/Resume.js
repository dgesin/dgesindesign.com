import React, { Component, View } from 'react';
import "./Resume.css";
import { Document, Page } from "react-pdf";
import pdffile from "../../assets/resume.pdf";
import {MdArrowBack, MdArrowForward, MdZoomIn, MdZoomOut} from 'react-icons/lib/md';
import BGPhoto from '../../assets/workspace.jpg';

class Skills extends Component {
    constructor(props){
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1, 
            pageWidth: 800, 
            renderAnnotations: false
        }
    }
 
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    nextItem = () => {
        const isLastPage = this.state.pageNumber == 3;
        if(isLastPage){
        } else {
            this.setState({ pageNumber: this.state.pageNumber + 1 });
        }
    }
    
    previousItem = () => {
        const isFirstPage = this.state.pageNumber == 1;
        if(isFirstPage){
        } else{
            this. setState({ pageNumber: this.state.pageNumber - 1 });
        }
    }
    
    zoomIn = () => {
        const isZoomedInMax = this.state.pageWidth == 1300;
        if(isZoomedInMax){
        } else{
            this.setState({ pageWidth: this.state.pageWidth + 100 });
        }
    }
    
    zoomOut = () => {
        const isZoomedOutMax = this.state.pageWidth == 600;
        if(isZoomedOutMax){
        } else{
            this. setState({ pageWidth: this.state.pageWidth - 100 });
        }
    }
    
    render(){
        const { pageNumber, numPages } = this.state;
        
        return (
            <div className="section">
                <Document className="resume" file={pdffile} onLoadSuccess={this.onDocumentLoad}>
                    <Page className="resume-page" pageNumber={this.state.pageNumber} renderAnnotations={this.state.renderAnnotations} width={this.state.pageWidth}/>
                </Document>
                <div className="document-controls">
                    <div className="page-controls">
                        <button className="previous-page" onClick={this.previousItem}><MdArrowBack /></button>
                        <button className="next-page" onClick={this.nextItem}><MdArrowForward /></button>
                        <div className="page-number">
                            Showing Page {pageNumber} of {numPages}
                        </div>
                    </div>
                    <div className="zoom-controls">
                        <button className="zoom-out" onClick={this.zoomOut}><MdZoomOut /></button>
                        <button className="zoom-in" onClick={this.zoomIn}><MdZoomIn /></button>
                    </div>
                </div>
                <div className="background-overlay fixed"></div>
                <img src={BGPhoto} className="background-image fixed" alt="Photo of mission planning" />
                <div className="attribution">
                    <a href="https://unsplash.com/@rawpixel?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" title="Download free do whatever you want high-resolution photos from rawpixel">Photo by rawpixel on Unsplash</a>
                </div>
            </div>
        );  
    }
}

export default Skills;