import React from "react";
import logo from './../../assets/logo.png';
import './Nav.css'
 const Nav = ()=>{
     return(
         <div className="nav-container">
             <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo"/>
                <p className="flash-logo-text">FlashType</p>
             </div>
             <div className="nav-right">
                 <a target="_blank" className="nav-linkedin-link" href="https://www.linkedin.com/in/shubham-ab605a132/" rel="noreferrer">
                    <i className="fa fa-linkedin-square fa-2x fa_custom"></i>
                    <span className="nav-span"><h4>LinkedIn</h4></span>
                 </a>
                 <a target="_blank" className="nav-github-link" href="https://github.com/shubham4315"  rel="noreferrer">
                    <i class="fa fa-github fa-2x fa_custom"></i>
                    <span className="nav-span"><h4>Github</h4></span>
                 </a>
             </div>
         </div>
     );

 }

 export default Nav;