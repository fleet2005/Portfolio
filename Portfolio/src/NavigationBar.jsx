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
                <li style={{ marginRight: "4vw", marginTop: "-1vw", marginLeft : "0vw" }}><img src={homeIcon} /></li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>Extras</li>
                <li onClick={refresh} style={{ marginRight: "4vw", marginTop :"-0.5vw" }}><img src={refreshIcon} style= {{width:"40px", height:"40px"}}/></li>
            </ul>

        </>

    )
}

export default NavigationBar;