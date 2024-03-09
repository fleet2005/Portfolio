import "./Index.css"
import homeIcon from './assets/home-icon.png'
import refreshIcon from './assets/refresh-icon.gif'

function NavigationBar()
{
   
    function refresh()
    {
        location.reload();
    }

    return(

        <>   

            <ul id="NavList">
                <li><img src={homeIcon} style={{ marginRight: "0vw", marginTop: "-0.5vw", marginLeft : "-0vw", width:"4vw", height:"4vw"}} /></li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>Extras</li>
                <li onClick={refresh} style={{ marginRight: "4vw", marginTop :"-0.5vw" }}><img src={refreshIcon} style= {{width:"3.5vw", height:"3.5vw"}}/></li>
            </ul>

        </>

    )
}

export default NavigationBar;

