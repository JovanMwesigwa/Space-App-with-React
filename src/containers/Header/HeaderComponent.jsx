import React from 'react';
import NavBarComponent from '../../components/Navbar/NavBarComponent';
import './Header.css';
import FeaturedProjects from '../../components/Navbar/FeaturedProjects/Featuredprojects';

const HeaderComponent = () => {
    return(
        <div className="header-container">
            <NavBarComponent />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div className="header-components" style={{ paddingTop: "10px" }}>
                    <div className="image-container">
                        <img src={require("../../assets/images/satellite.png")} width="100%" height="45%" alt="logo" /> 
                    </div>
                    <div className="headings-container">
                        <h1 style={{ fontSize: "50px" }}>SOYUZ TMA-M</h1>
                        <h2 style={{ fontSize: "40px" }}>SPACE CRAFT</h2>                   
                        <span className="readme-tag" >READ MORE</span>             
                    </div>   
                </div>              
                <FeaturedProjects />
            </div> 
                    
        </div>
       
    )
}

export default HeaderComponent