import React from 'react';
import "./Navbar.css";

const NavBarComponent = () => {
    return(
        <div>       
        <div className="nav-container" >
            <div className="image-container">
                <img src={require("../../assets/images/logo.png")} width="200" height="50" alt="logo" /> 
            </div>           
            <div >
                <ul className="nav-list">
                    <li className="home">HOME</li>
                    <li className="about">ABOUT</li>
                    <li className="projects">PROJECTS</li>
                    <li className="blog">BLOG</li>
                </ul>
            </div>            
        </div>
        </div>
    )
}

export default NavBarComponent