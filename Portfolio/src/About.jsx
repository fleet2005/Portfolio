import Vishal_pic from "./assets/Vishal_pic.jpeg"

function About()
{
    return(
        
        <div class="container">
            <h1>😺 ABOUT ME 😎 </h1>
            <img src = {Vishal_pic} alt="Profile_Pic" title="VISHAL SRINIVASAN" style={{width:"24vw", float: "right", marginLeft:"4vw", height:"31vw", marginRight:"-20vw"}}></img>
            <p> Hello! 👋 My name is Vishal Srinivasan, and I'm thrilled to welcome you to my page. As a dedicated full stack web developer, I have a strong affinity for Frontend Development and Design. I'm deeply passionate about leveraging the power of the web to connect people and make a positive impact. Constant learning and growth are at the core of my journey, as I strive to enhance my skills and knowledge. While I predominantly focus on the MERN stack, I also bring valuable experience in MySQL databases to the table. Let's embark on this exciting journey together!</p>
        </div>

    );
}


export default About;