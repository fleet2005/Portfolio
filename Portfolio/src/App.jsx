import NavigationBar from "./NavigationBar";
import About from "./About"
import About_slider from "./About_slider";
import Skills from "./Skills";
import Contact from "./Contact";
import Link from "./Link";
import Project from "./Projects";
import Work from "./Work";
import Awards from "./Awards";
import CursorGlow from "./CursorGlow";
import ResumeDownload from "./ResumeDownload";


function App()
{
  return(
    <>
    <CursorGlow/>
    <NavigationBar/>
    <About/>
    <About_slider/>
    <Work/>
    <Project/>
    <Skills/>
    <Awards/>
    <Contact/>
    <Link/>
    <ResumeDownload/>
    </>
  );
}


export default App;


