import React from 'react';
import "./Index.css"; 
import homeIcon from './assets/home-icon.png';
import refreshIcon from './assets/refresh-icon.gif';

function NavigationBar() {
   
    function refresh() {
        window.location.reload(true);
    }

    return (
        
        <ul id="NavList" style={{ backgroundColor: "black", opacity: "0.8", position: "sticky", top:"0"}}>
            <a href={"#"} style={{ textDecoration: "none", color: "white", transition: "" , marginLeft: "2.4vw"}}><img src={homeIcon} style={{ marginRight: "auto", marginTop: "-0.5vw", marginLeft: "-5vw", width: "4vw", height: "4vw" }} /></a>
            <li> <a href={"#aboutSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>About</a></li>
            <li> <a href={"#workSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>Work Experience</a></li>
            <li> <a href={"#projects"} style={{ textDecoration: "none", color: "white", transition: "" }}>Projects</a></li>
            <li> <a href={"#skillSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>Skills</a></li>
            <li> <a href={"#awardsSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>Awards</a></li>
            <li> <a href={"#contactSection"} style={{ textDecoration: "none", color: "white", transition: "" }}> Contact </a> </li>
            <li style={{ marginRight: "1.3vw", marginTop: "-0.5vw" }} onClick={refresh}><img src={refreshIcon} style={{ width: "3.5vw", height: "3.5vw" }} /></li>
        </ul>

    );
}

export default NavigationBar;
