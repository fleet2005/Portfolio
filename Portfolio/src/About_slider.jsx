import arrowIcon from './assets/arrow-icon.png'
import PSBB from './assets/PSBB.webp'
import IIITM from './assets/IIITM-pic.jpg'
import useScrollAnimation from './useScrollAnimation'

function About_slider()
{
    const sliderRef = useScrollAnimation();
    const circle1Ref = useScrollAnimation();
    const circle2Ref = useScrollAnimation();
    const circle3Ref = useScrollAnimation();
    const arrow1Ref = useScrollAnimation();
    const arrow2Ref = useScrollAnimation();
    const arrow3Ref = useScrollAnimation();
    const cardsRef = useScrollAnimation();
    const card1Ref = useScrollAnimation();
    const card2Ref = useScrollAnimation();
    const card3Ref = useScrollAnimation();

    return(

        <>
        <div className="container_slider scroll-fade-in" ref={sliderRef} id="aboutSliderSection">
            <hr id="About_slider"/>
            <div className="circle scroll-scale-in" ref={circle1Ref}></div>
            <div className="circle scroll-scale-in" ref={circle2Ref}></div>
            <div className="circle scroll-scale-in" ref={circle3Ref}></div>
            
            <img src ={arrowIcon} className="arrow scroll-slide-left" ref={arrow1Ref}></img> 
            <img src ={arrowIcon} className="arrow scroll-slide-left" ref={arrow2Ref}></img>  
            <img src ={arrowIcon} className="arrow scroll-slide-left" ref={arrow3Ref}></img>
            <div className="card_container scroll-fade-in" ref={cardsRef}>
                <div className="scroll-slide-right" ref={card1Ref}>2020 <br/> <br/> CBSE CLASS 10 <br/> <br/> <img src={PSBB} style={{width:"10vw",height:"7vw", marginBottom:"2.6vw"}}/> <br/> <br/>PSBB Millennium School <br/> <br/> Chennai </div> 
                <div className="scroll-fade-in" ref={card2Ref}>2022 <br/> <br/> CBSE CLASS 12 <br/> <br/> <img src={PSBB} style={{width:"10vw",height:"7vw", marginBottom:"2.6vw"}}/> <br/> <br/> PSBB Millennium School <br/> <br/> Chennai </div> 
                <div className="scroll-slide-left" ref={card3Ref}>2026 <br/> <br/>B.Tech CSE <br/> <br/> <img src={IIITM} style={{width:"10vw",marginTop:"2.2vw",height:"7.5vw"}}/> <br/> <br/> Indian Institute Of Information Technology Senapati </div>
            </div>
        </div>
        </>
    );
}

export default About_slider;