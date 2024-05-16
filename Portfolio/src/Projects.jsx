import React from "react";
import pg1 from "./assets/pg1.png";
import pg2 from "./assets/pg2.png";

function Project() {
  return (
    <div id="projects" style={{ fontFamily: "Arial, sans-serif", color: "white", marginTop: "65vw" }}><br/>
        <h1 style={{textAlign:"center", color:"white"}}>🔭PROJECTS🧑‍🎓</h1><br/><br/>


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{fontSize: "2.2vw"}}>
            <a href="https://tinyurl.com/regispagevishal" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw"}}>HealthApp- MERN</a> <br /><a target="_new" href="https://tinyurl.com/regispagevishal" style={{ fontFamily:"monospace", fontSize: "1.6vw", textDecoration: "none", color:"rgb(138,43,226)"}}>https://tinyurl.com/regispagevishal</a><br /><br />
            HealthApp which I made with MERN Stack, has a login page, uses multiple APIs, uses extensive bootstrap, uses ExpressJS for routing and a MongoDB database for authentication details updation and retrieval.
            <br/><br/>
            Made With ReactJS, NodeJS, ExpressJS, MongoDB, BootStrap, JS, CSS, HTML and lots of passion.
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" }}>
            <img src={pg2} style={{ width: "auto", height: "29vw", maxWidth: "48vw" }} alt="Project 1" />
          </div>
        </div>
      </div>
      <br/>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <p style={{fontSize:"2.2vw"}}>
            <a href="https://www.tinyurl.com/vishalportfoliowebsite" target="_new" style={{ textDecoration: "none", color:"white", fontWeight:"bolder", fontSize:"4vw" }}>Portfolio Website</a> <br /> <a href="https://www.tinyurl.com/vishalportfoliowebsite" target="_new" style={{ textDecoration: "none", color:"rgb(138,43,226)", fontFamily:"monospace", fontSize:"1.6vw"}}>https://www.tinyurl.com/vishalportfoliowebsite</a><br/>
            <br />
            Portfolio website where I have linked all my projects. My first-ever website. Implements fundamentals of web application designing and architechture.<br />
            <br />Made with ReactJS, HTML5, CSS3 and JS.<br />
             <br />
            <br />
          </p>
        </div>
        <div style={{ flex: 1, marginLeft: 20 }}>
          <div style={{ border: "3px solid white", borderRadius: "5px", padding: "5px" , marginTop: "3vw"}}>
            <img src={pg1} style={{ width: "100%", height: "120%", maxHeight: "45vw" }} alt="Project 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
