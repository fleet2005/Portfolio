import arrowIcon from './assets/arrow-icon.png'
import PSBB from './assets/PSBB.webp'
import IIITM from './assets/IIITM-pic.jpg'

function About_slider()
{

    return(

        <>
        <div class="container_slider" id="aboutSliderSection">
            <hr id="About_slider"/>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            
            <img src ={arrowIcon} className="arrow"></img> <img src ={arrowIcon} className="arrow"></img>  <img src ={arrowIcon} className="arrow"></img>
            <div class="card_container">
                <div>2020 <br/> <br/> CBSE CLASS 10 <br/> <br/> <img src={PSBB} style={{width:"10vw",height:"7vw", marginBottom:"2.6vw"}}/> <br/> <br/>PSBB Millennium School <br/> <br/> Chennai </div> 
                <div>2022 <br/> <br/> CBSE CLASS 12 <br/> <br/> <img src={PSBB} style={{width:"10vw",height:"7vw", marginBottom:"2.6vw"}}/> <br/> <br/> PSBB Millennium School <br/> <br/> Chennai </div> 
                <div>2026 <br/> <br/>B.Tech CSE <br/> <br/> <img src={IIITM} style={{width:"10vw",marginTop:"2.2vw",height:"7.5vw"}}/> <br/> <br/> Indian Institute Of Information Technology Senapati </div>
            </div>
        </div>
        </>
    );
}

export default About_slider;