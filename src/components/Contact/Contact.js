import React, {Component} from 'react';
import createForm from 'react-create-form';
import ContactForm from './ContactForm';
import "./Contact.css";
import BGPhoto from '../../assets/contact.jpg';
 
class Contact extends Component {
 
    render() {
        return (
            <div>
                <div className="centered-content contact-text text-standout">
                    <h1>{"Want more info?"}</h1>
                    <p>If you would like to contact me, I can be reached at <a href="mailto:derekgesin@gmail.com">derekgesin@gmail.com</a>.</p> 
                    <p>Thanks for taking the time to check out my work. I hope to hear from you soon!</p>
                </div>
                <div className="background-overlay fixed-bg"></div>
                <img src={BGPhoto} className="background-image fixed-bg" alt="Photo of mission planning" />
            </div>
        )
    }
}
 
export default Contact;