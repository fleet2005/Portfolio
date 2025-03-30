import React from "react";
import Portfolio from "./assets/portfolio.png";
import Health from "./assets/Health.png";
import Ship from "./assets/Ship.png";
import Agri from "./assets/Agri.png";
import Encry from "./assets/Encry.png"
import Exte from "./assets/Exte.png";

function Project() {
  return (
    <div id="projects" style={{ fontFamily: "Arial, sans-serif", color: "white", marginTop: "65vw" }}><br/>
        <h1 style={{textAlign:"center", color:"white"}}>🔭PROJECTS🧑‍🎓</h1><br/><br/>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://health-app-version2-ke87.vercel.app/" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>HealthApp</a> <br /><a target="_new" href="https://health-app-version2-ke87.vercel.app/" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>Link</a><br /><br />
            Dynamic Application which tracks calories gained and burned by eating and exercising, calculates BMI and implements Markov model for next food prediction. MongoDB is used for data storage and data is secured with BCrypt and JWT. Chatbot has been integrated to assist users with health queries.
            <br/><br/>
            Made With ReactJS, Django, MongoDB, NodeJS, ExpressJS, CSS, HTML.
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={Health} style={{ width: "auto", height: "32vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/><br/>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://github.com/fleet2005/SIH" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>NavPath Algorithm</a> <br /><a target="_new" href="https://github.com/fleet2005/SIH" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>Link</a><br /><br />
            Combines A* Algorithm with XGBoost ML Algorithm to find Optimal Ship Route for both cargo and passenger ships. Takes geospatial bathymetry data to account for ocean depth. Parameters considered include Wind Direction, Ocean Current, Peak wave period, Precipitation Probability, Temperature, Sea Level Pressure.
            <br/><br/>
            Made With  Python, Pygame, Pandas, NumPY.
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={Ship} style={{ width: "auto", height: "30vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/><br/>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://marketplace.visualstudio.com/items?itemName=VishalSrinivasan.advanced-copypaste-ext" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>CopyPaste Pro</a> <br /><a target="_new" href="https://marketplace.visualstudio.com/items?itemName=VishalSrinivasan.advanced-copypaste-ext" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>Link</a><br /><br />
            New Additions to copy-paste functionality by adding multiple data structures and key mappings to enhance user experience. Published on the VS Code extension marketplace. Supports customizable shortcuts for seamless use and workflow integration.
            <br/><br/>
            Made With Javascript.
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={Exte} style={{ width: "auto", height: "28vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/><br/>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://agrisense-kffgzvvhbsq5lbmmewpzks.streamlit.app/" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>Agrisense</a> <br /><a target="_new" href="https://agrisense-kffgzvvhbsq5lbmmewpzks.streamlit.app/" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>Link</a><br /><br />
            Al Solutions for Smallholder Farmers which includes Disease Detection from images, Resource Optimization, Early
warnings for disease outbreaks, Real-time soil analysis and recommendations, Weather Insights, IoT data
Integration, Hyperspectral imaging and Email Authentication and Response Collection.
            <br/><br/>
            Made With Streamlit, Firebase, TensorFlow, OpenWeatherMap, Node-Red, YagMail
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={Agri} style={{ width: "auto", height: "32vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/><br/>



      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://github.com/fleet2005/CPP-Advanced-File-Encrypter" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>Command Line Tool for Encryption and
            Decryption of Text Files</a> <br /><a target="_new" href="https://github.com/fleet2005/CPP-Advanced-File-Encrypter" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>Link</a><br /><br />
            A free, simple and offline tool which supports multiple encryption algorithms including caesar cipher, vignere cipher and a hybrid encryption algorithm. Also comes with a password strength checker and help manual.  
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={Encry} style={{ width: "auto", height: "29vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/><br/>

      
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <p style={{fontSize:"2.2vw"}}>
            <a href="https://www.tinyurl.com/vishalportfoliowebsite" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw" }}>Portfolio Website</a> <br /> <a href="https://www.tinyurl.com/vishalportfoliowebsite" target="_new" style={{ textDecoration: "none", color:"rgb(138,43,226)", fontFamily:"monospace", fontSize:"1.6vw"}}>Link</a><br/>
            <br />
            Portfolio website where I have linked all my projects. My first-ever website. Implements fundamentals of web application designing and architechture.<br />
            <br />Made with ReactJS, HTML5, CSS3 and JS.<br />
             <br />
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" , marginTop: "3vw"}}>
            <img src={Portfolio} style={{ width: "100%", height: "120%", maxHeight: "45vw" }} alt="Project 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
