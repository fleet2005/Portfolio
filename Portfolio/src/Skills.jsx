import html from "./assets/html-icon.png"
import css from "./assets/css-icon.png"
import js from "./assets/js-icon.png"
import react from "./assets/react-icon.png"
import node from "./assets/node-icon.png"
import express from "./assets/express-icon.png"
import mongo from "./assets/mongo-icon.png"
import sql from "./assets/mysql-icon.png"
import php from "./assets/php-icon.png"
import git from "./assets/git-icon.png"
import python from "./assets/python-icon.png"
import cplus from "./assets/cplus-icon.png"
import { useState } from "react"



function Skills()
{
    
    const [text,setText] = useState("SKILLS");

    function change(input){
        setText(input);
    }

    function remove(){
        setText("SKILLS");
    }


    return(
        <div id="skillSection">
        <h1 id= "SKILLS" style={{color:"white", marginTop:"68vw", textAlign:"center", outlineStyle:"solid", outlineColor:"cyan", outlineOffset:"0.3vw" , width:"auto"}}> {text} </h1>
            <h6 style={{textAlign:"center"}}>(Kindly Hover over the Icons)</h6>
            <div class="grid-container">
                <div class="grid-item" onMouseOver = {()=>change("HTML")} onMouseLeave ={remove} style={{ backgroundImage: `url(${html})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("CSS")} onMouseLeave ={remove} style={{ backgroundImage: `url(${css})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("JAVASCRIPT")} onMouseLeave ={remove} style={{ backgroundImage: `url(${js})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("REACT")} onMouseLeave ={remove} style={{ backgroundImage: `url(${react})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("NODE")} onMouseLeave ={remove} style={{ backgroundImage: `url(${node})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("EXPRESS")} onMouseLeave ={remove} style={{ backgroundImage: `url(${express})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("PHP")} onMouseLeave ={remove} style={{ backgroundImage: `url(${php})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("MONGO")} onMouseLeave ={remove} style={{ backgroundImage: `url(${mongo})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("SQL")} onMouseLeave ={remove} style={{ backgroundImage: `url(${sql})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("GIT")} onMouseLeave ={remove} style={{ backgroundImage: `url(${git})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("C++")} onMouseLeave ={remove} style={{ backgroundImage: `url(${cplus})`, backgroundSize: 'cover' }}></div>
                <div class="grid-item" onMouseOver = {()=>change("PYTHON")} onMouseLeave ={remove} style={{ backgroundImage: `url(${python})`, backgroundSize: 'cover' }}></div>
            </div>
        </div>
    );
}
export default Skills;