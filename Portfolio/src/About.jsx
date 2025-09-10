import Vishal_pic from "./assets/Vishal_pic.jpeg"
import useScrollAnimation from "./useScrollAnimation"

function About()
{
    const aboutRef = useScrollAnimation();
    const titleRef = useScrollAnimation();
    const imageRef = useScrollAnimation();
    const textRef = useScrollAnimation();

    return(
        

        <div className="container scroll-fade-in" ref={aboutRef} id = "aboutSection">
            <h1 className="scroll-fade-in" ref={titleRef}>😺 ABOUT ME 😎 </h1>
            <img className="scroll-slide-right" ref={imageRef} src = {Vishal_pic} alt="Profile_Pic" title="VISHAL SRINIVASAN" style={{width:"24vw", float: "right", marginLeft:"4vw", height:"31vw", marginRight:"-20vw"}}></img>
            <p className="scroll-slide-left" ref={textRef}> Hello! 👋 My name is Vishal Srinivasan, and I'm thrilled to welcome you to my page. As a dedicated full stack web developer, I have a strong affinity for both Frontend and Backend Development. I'm deeply passionate about developing web applications, software and algorithms. Constant learning and growth are at the core of my journey, as I strive to enhance my skills and knowledge. While I predominantly focus on the MERN stack, I also have lots of experience in MySQL databases. Do connect with me on linkedin!</p>
        </div>

    );
}


export default About;