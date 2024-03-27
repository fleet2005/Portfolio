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
            <li> <a href={"#"} style={{ textDecoration: "none", color: "white", transition: "" }}><img src={homeIcon} style={{ marginRight: "auto", marginTop: "-0.5vw", marginLeft: "auto", width: "4vw", height: "4vw" }} /></a></li>
            <li> <a href={"#aboutSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>About</a></li>
            <li>Projects</li>
            <li> <a href={"#skillSection"} style={{ textDecoration: "none", color: "white", transition: "" }}>Skills</a></li>
            <li> <a href={"#contactSection"} style={{ textDecoration: "none", color: "white", transition: "" }}> Contact </a> </li>
            <li> <a href={"#linkSection"} style={{ textDecoration: "none", color: "white", transition: "" }}> Links </a> </li>
            <li style={{ marginRight: "4vw", marginTop: "-0.5vw" }} onClick={refresh}><img src={refreshIcon} style={{ width: "3.5vw", height: "3.5vw" }} /></li>
        </ul>
    );
}

export default NavigationBar;
