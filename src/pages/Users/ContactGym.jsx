import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import about from "../../assets/libUser/img/about.jpg";
import team1 from "../../assets/libUser/img/team-1.jpg";
import team2 from "../../assets/libUser/img/team-2.jpg";
import team3 from "../../assets/libUser/img/team-3.jpg";
import team4 from "../../assets/libUser/img/team-4.jpg";

import {Helmet} from 'react-helmet';
export default function AboutGym(props) {
   return (
   <div>
   
        <UserHeader/>
        <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" 
        style={{
            minHeight:'400px'
        }}
        >
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Contact Us</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Contact Us</p>
            </div>
        </div>
    </div>
   


  
    <div className="container pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Get In Touch</h4>
            <h4 className="display-4 font-weight-bold">Email Us For Any Query</h4>
        </div>
        <div className="row px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Address</h4>
                <p>123 Street, New York, USA</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
                <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Phone</h4>
                <p>+012 345 6789</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
                <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                <h4 className="font-weight-bold">Email</h4>
                <p>info@example.com</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 pb-5">
                <iframe style ={{
                    width:'100%',
                    height:'392px',
                    border:'0'
                }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.489823240703!2d106.76791451474891!3d10.77374649232336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525d4ac37cac3%3A0xed8b65112aeca5d3!2zTmd1eeG7hW4gVGjhu4sgxJDhu4tuaCwgUXXhuq1uIDIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sbd!4v1680882748088!5m2!1sen!2sbd" frameborder="0" 
               
                allowfullscreen="" aria-hidden="false" tabindex="0">

                </iframe>
            </div>
            <div className="col-md-6 pb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <div className="control-group">
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        <UserFooter/>
    </div>
   )
}