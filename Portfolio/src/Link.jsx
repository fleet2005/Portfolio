import leetcode from './assets/leetcode-icon.png'
import github from './assets/github-icon.png'
import codechef from './assets/codechef-icon.png'
import linkedin from './assets/linkedin-icon.png'



function Link(){
    return (
        <div id="linkSection">
            <br/>
            <div id="links" style={{display: "flex", justifyContent: "center"}}>
                <a href = "https://www.codechef.com/users/code_fleet_05" target="_blank"><img title="codechef" src={codechef} style={{height:"4vw", marginRight:"5vw", borderStyle:"solid", borderColor:"green", borderRadius:"1vw", padding:"0.2vw", outlineStyle:'inset'}}/></a> 
                <a href = "https://www.linkedin.com/in/vishal-srinivasan-661ab5257/" target="_blank"><img title="linkedin" src={linkedin} style={{height:"4vw", marginRight:"5vw",borderStyle:"solid", borderColor:"green", borderRadius:"1vw", padding:"0.2vw",outlineStyle:'inset'}}/></a> 
                <a href = "https://github.com/fleet2005" target="_blank"><img title= "github"  src={github} style={{height:"4vw", marginRight:"5vw",borderStyle:"solid", borderColor:"green", borderRadius:"1vw", padding:"0.2vw",outlineStyle:'inset'}}/></a> 
                <a href = "https://leetcode.com/Code_Fleet_2005/" target="_blank"><img title="leetcode" src={leetcode} style={{height:"4vw",borderStyle:"solid", borderColor:"green", borderRadius:"1vw", padding:"0.2vw", outlineStyle:'inset'}}/></a> 
            </div>

        </div>

    );
}


export default Link;
