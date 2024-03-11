import "./Index.css"
import homeIcon from './assets/home-icon.png'
import refreshIcon from './assets/refresh-icon.gif'

function NavigationBar()
{
   
    function refresh()
    {
        window.location.reload(true);
    }

    return(

        <>   
            <ul id="NavList" style={{backgroundColor:"black", opacity:"0.8"}}>
                <li><img src={homeIcon} style={{ marginRight: "auto", marginTop: "-0.5vw", marginLeft : "auto", width:"4vw", height:"4vw"}} /></li>
                <li>About</li>
                <li>Projects</li>
                <li> <a href={"#skillSection"} style = {{textDecoration:"none", color:"white", transition: ""}}>Skills</a></li>
                <li>Contact</li>
                <li>Links</li>
                <li onClick={refresh} style={{ marginRight: "4vw", marginTop :"-0.5vw" }}><img src={refreshIcon} style= {{width:"3.5vw", height:"3.5vw"}}/></li>
            </ul>

        </>

    )
}

export default NavigationBar;

