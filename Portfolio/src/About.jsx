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
            <img className="scroll-slide-right" ref={imageRef} src = {Vishal_pic} alt="Profile_Pic" title="VISHAL SRINIVASAN" style={{width:"23vw", float: "right", marginLeft:"4vw", height:"27vw", marginRight:"-20vw"}}></img>
            <p className="scroll-slide-left" ref={textRef}> Hello! 👋 My name is Vishal Srinivasan, and I'm thrilled to welcome you to my page. As a dedicated full stack web developer, I have a strong affinity for both Frontend and Backend Development. I'm deeply passionate about developing web applications, software and algorithms. I am a person who gets work done at all costs and I am not limited by my tech stack. I can learn new tech stacks rapidly. Do connect with me on linkedin! </p>
        </div>

    );
}


export default About;