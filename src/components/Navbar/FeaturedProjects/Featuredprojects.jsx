import React from 'react';
import "./FeaturedProjects.css";


const FeaturedProjects = () => {
    return(
        <div className="main-container">
            <h1 style={{ fontSize: 30,letterSpacing: 5 }}>Featured Projects</h1>
            <div className="row">
                <div className="column">
                    <img className="image1" src={require("../../../assets/images/project-image1.jpg")} alt="Snow" style={{width:"100%"}} />
                </div>
                <div className="column">
                    <img className="image2" src={require("../../../assets/images/project-image2.jpg")} alt="Forest" style={{width:"100%"}} />
                </div>
                <div className="column">
                    <img className="image3" src={require("../../../assets/images/project-image3.jpg")} alt="Mountains" style={{width:"100%"}} />
                </div>
                <div className="column">
                    <img className="image4" src={require("../../../assets/images/project-image4.jpg")} alt="Mountains" style={{width:"100%"}} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects