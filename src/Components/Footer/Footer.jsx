import React from "react";
import './../Nav/Nav.css';
import './Footer.css';
const Footer = () => {
    return(
        <div className="footer-container">
            <h3 className="footer-copyright">&copy; Shubham .</h3>
            <a target="_blank" className="nav-linkedin-link" href="https://www.linkedin.com/in/shubham-ab605a132/" rel="noreferrer">
                <i className="fa fa-linkedin-square fa-2x fa_custom"></i>
                <span className="nav-span"><h4>LinkedIn</h4></span>
            </a>
            <a target="_blank" className="nav-github-link" href="https://github.com/shubham4315"  rel="noreferrer">
                <i class="fa fa-github fa-2x fa_custom"></i>
                <span className="nav-span"><h4>Github</h4></span>
            </a>
        </div>
    );
}

export default Footer;