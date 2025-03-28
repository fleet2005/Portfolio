import React from "react";
import pg2 from "./assets/Orbol.jpg";
import pg1 from "./assets/repsoft.png"

function Work() {
  return (
    <div id="work" style={{ fontFamily: "Arial, sans-serif", color: "white", marginTop: "65vw", marginBottom: "-65vw" }}>
      <br />
      <h1 style={{ textAlign: "center", color: "white" }}>💼 WORK EXPERIENCE 💼</h1>
      <br /><br />

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{ fontSize: "2.2vw" }}>
            <a href="https://tinyurl.com/regispagevishal" target="_new" style={{ textDecoration: "none", color: "white", fontWeight: "bolder", fontSize: "4vw" }}>
              Backend Development Intern
            </a> 
            <br />
            <a target="_new" href="https://tinyurl.com/regispagevishal" style={{ fontFamily: "monospace", fontSize: "1.6vw", textDecoration: "none", color: "rgb(138,43,226)" }}>
              https://tinyurl.com/regispagevishal
            </a>
            <br /><br />
            • Developed a MERN web application with a fully functional frontend and backend, utilizing CDN for storage to reduce page loading time by up to 70%. Designed and optimized database schemas for efficient data organization and retrieval.
            <br /><br />
            • Built and implemented APIs from scratch in Node.js, enabling seamless frontend-backend communication, and conducted thorough debugging, reducing backend error rates by over 30%.
            <br /><br />
          </p>
        </div>

        <div style={{ flex: 0.5, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ backgroundColor: "black", boxShadow: "0 0 15px 5px limegreen", padding: "1vw 2vw 2vw 2vw", borderRadius: "10px", textAlign: "center" }}>
            <br/>
            <img src={pg2} style={{ width: "85%", height: "auto", marginTop: "-0.5vw" }} alt="Work 1" />
            <br /><br />
            <p style={{ textAlign: "center", fontSize: "1.8vw", marginTop: "1vw", color: "white", marginBottom: "0.4vw" }}>
              Ahmedabad (remote)
              <br />
              May 2024 - Oct 2024
            </p>
          </div>
        </div>
      </div>


      <br /><br />


      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1, marginTop: "-3vw" }}>
          <p style={{ fontSize: "2.2vw" }}>
            <a href="https://tinyurl.com/regispagevishal" target="_new" style={{ textDecoration: "none", color: "white", fontWeight: "bolder", fontSize: "4vw" }}>
              Backend Development Intern
            </a> 
            <br />
            <a target="_new" href="https://tinyurl.com/regispagevishal" style={{ fontFamily: "monospace", fontSize: "1.6vw", textDecoration: "none", color: "rgb(138,43,226)" }}>
              https://tinyurl.com/regispagevishal
            </a>
            <br /><br />
            • Developed optimised backend for Admin Panel to enable dynamic modification of web-page by
retrieving from SQL database and dynamically updating the webpage with upto 30% faster loading time.
            <br /><br />
            • Implemented Password authentication, along with cookies and session management enhancing user
            experience and satisfaction by over 50%            <br /><br />
          </p>
        </div>

        <div style={{ flex: 0.5, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ marginRight : "5vw", marginLeft : "6vw", backgroundColor: "black", boxShadow: "0 0 15px 5px limegreen", padding: "1vw 2vw 2vw 2vw", borderRadius: "10px", textAlign: "center" }}>
            <br/>
            <img src={pg1} style={{ width: "80%", height: "auto", marginTop: "-0.5vw"}} alt="Work 1" />
            <br /><br />
            <p style={{ textAlign: "center", fontSize: "1.8vw", marginTop: "1vw", color: "white", marginBottom: "0.4vw" }}>
              Hyderabad (remote)
              <br />
              May 2024 - July 2024
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Work;